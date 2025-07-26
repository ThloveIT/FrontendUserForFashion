import React, { useEffect, useContext, useRef, useState } from 'react';
import { Button } from '@mui/material';
import { MdPayment } from 'react-icons/md';
import CartItems from './CartItems';
import { removeItemFromCart } from '../../services/api';
import { MyContext } from '../../App';

// Giả định API để lấy thông tin sản phẩm
const fetchProductDiscount = async (productId) => {
  try {
    const response = await fetch(`https://localhost:7264/api/products/${productId}`);
    const product = await response.json();
    return product.discount || 0; // Giả định product có trường discount
  } catch (error) {
    console.error('Error fetching product discount:', error);
    return 0;
  }
};

const CartPage = () => {
  const { userData, openAlertBox, cartItems, updateCart } = useContext(MyContext);
  const isInitialMount = useRef(true);

  // State để lưu discount cho mỗi item
  const [discounts, setDiscounts] = useState({});

  useEffect(() => {
    if (isInitialMount.current && userData?.id) {
      updateCart(userData.id);
      isInitialMount.current = false;
    }
    // Lấy discount cho từng sản phẩm khi cartItems thay đổi
    const fetchDiscounts = async () => {
      const newDiscounts = {};
      for (const item of cartItems) {
        newDiscounts[item.productId] = await fetchProductDiscount(item.productId);
      }
      setDiscounts(newDiscounts);
    };
    if (cartItems.length > 0) fetchDiscounts();
  }, [userData, updateCart, cartItems]);

  const handleDelete = async (productId) => {
    if (!userData?.id) {
      openAlertBox('error', 'Vui lòng đăng nhập để xóa sản phẩm!');
      return;
    }
    try {
      await removeItemFromCart(userData.id, productId);
      openAlertBox('success', 'Đã xóa sản phẩm khỏi giỏ hàng!');
      await updateCart(userData.id);
    } catch (error) {
      openAlertBox('error', 'Không thể xóa sản phẩm: ' + (error.message || ''));
    }
  };

  if (!userData?.id) return <div>Vui lòng đăng nhập để xem giỏ hàng!</div>;

  // Tính tổng tiền sản phẩm dựa trên (newPrice - discount) * quantity, giống CartItems và CartPanel
  const totalPrice = cartItems.reduce((sum, item) => {
    const itemDiscount = discounts[item.productId] || 0;
    const itemPrice = (item.price - itemDiscount) * item.quantity; // Sử dụng item.price làm newPrice
    console.log(`Item: ${item.productName}, Price: ${item.price}, Discount: ${itemDiscount}, Quantity: ${item.quantity}, ItemPrice: ${itemPrice}`);
    return sum + itemPrice;
  }, 0);

  const shippingFee = 25000; // Phí vận chuyển cố định
  const voucherDiscount = 25000; // Voucher giảm giá bằng phí vận chuyển
  const totalWithShipping = totalPrice + shippingFee; // Tổng trước khi giảm voucher
  const finalTotal = totalWithShipping - voucherDiscount; // Tổng sau khi giảm voucher

  return (
    <section className="section py-5">
      <div className="container flex gap-4">
        <div className="leftPart w-[75%] max-w-[75%]">
          <h2 className="text-lg font-medium uppercase">Giỏ hàng của bạn</h2>
          <p>
            Hiện đang có{' '}
            <span className="text-primary font-semibold">{cartItems.length} sản phẩm</span>{' '}
            trong giỏ hàng của bạn
          </p>
          {cartItems.length === 0 ? (
            <p>Giỏ hàng của bạn trống.</p>
          ) : (
            cartItems.map((item, index) => (
              <CartItems
                key={item.id || `${item.productId}-${index}`}
                productId={item.productId}
                productName={item.productName}
                oldPrice={item.price + (item.discount || 0)}
                newPrice={item.price}
                discountPercentage={item.discount ? ((item.discount / item.price) * 100).toFixed(0) : 0}
                imageUrl={item.imageUrl || 'https://via.placeholder.com/150'}
                onDelete={() => handleDelete(item.productId)}
                selectedQty={item.quantity}
              />
            ))
          )}
        </div>
        <div className="rightPart w-[25%]">
          <div className="shadow-md rounded-md bg-white mt-[72px] p-3">
            <h3 className="text-lg font-semibold text-primary pb-5 border-b border-b-[rgba(0,0,0,0.1)] uppercase">
              Thanh toán
            </h3>
            <p className="flex items-center justify-between mt-2.5">
              <span className="text-sm font-semibold">Tiền hàng</span>
              <span className="text-primary font-semibold">
                {totalPrice.toLocaleString()}đ
              </span>
            </p>
            <p className="flex items-center justify-between mt-2.5">
              <span className="text-sm font-semibold">Mã vận chuyển</span>
              <span className="text-primary font-semibold">
                {shippingFee.toLocaleString()}đ
              </span>
            </p>
            <p className="flex items-center justify-between mt-2.5">
              <span className="text-sm font-semibold">Voucher giảm giá</span>
              <span className="text-primary font-semibold">
                -{voucherDiscount.toLocaleString()}đ
              </span>
            </p>
            <p className="flex items-center justify-between mt-2.5">
              <span className="text-sm font-semibold">Tổng thanh toán</span>
              <span className="text-primary font-semibold">
                {finalTotal.toLocaleString()}đ
              </span>
            </p>
            <Button
              className="btn-org !mt-8 gap-2 !w-full"
              disabled={cartItems.length === 0}
              onClick={() => console.log('Navigate to checkout')}
            >
              <MdPayment className="text-2xl" />
              Thanh toán
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
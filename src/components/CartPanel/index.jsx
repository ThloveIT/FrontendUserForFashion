// CartPanel.jsx
import { Button } from '@mui/material';
import React, { useEffect, useState, useContext } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { removeItemFromCart } from '../../services/api';
import { MyContext } from '../../App';

// Giả định API để lấy thông tin sản phẩm
const fetchProductDiscount = async (productId) => {
  try {
    const response = await fetch(`https://localhost:7264/api/products/${productId}`);
    const product = await response.json();
    return product.discount || 0;
  } catch (error) {
    console.error('Error fetching product discount:', error);
    return 0;
  }
};

const CartPanel = () => {
  const { userData, openAlertBox, cartItems, updateCart } = useContext(MyContext);

  const [discounts, setDiscounts] = useState({});

  useEffect(() => {
    if (userData?.id) {
      updateCart(userData.id);
    }
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

  const totalPrice = cartItems.reduce((sum, item) => {
    const itemDiscount = discounts[item.productId] || 0;
    const itemPrice = (item.price - itemDiscount) * item.quantity;
    return sum + itemPrice;
  }, 0);
  const shippingFee = 25000;
  const discount = 25000;
  const finalTotal = totalPrice + shippingFee - discount;

  return (
    <>
      <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden py-3 px-4">
        {cartItems.map((item) => {
          const itemDiscount = discounts[item.productId] || 0;
          const itemPrice = (item.price - itemDiscount) * item.quantity;

          return (
            <div key={item.id} className="cartItem w-full flex gap-4 my-5">
              <div className="img w-[25%] overflow-hidden h-[80px] border border-[rgba(0,0,0,0.1)] rounded-md">
                <Link to={`/products/${item.productId}`} className="block group">
                  <img
                    src={item.imageUrl ? `https://localhost:7264${item.imageUrl}` : 'https://via.placeholder.com/150'}
                    className="w-full rounded-md group-hover:scale-105 transition-all"
                    alt={item.productName}
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; console.log('Image load failed in CartPanel:', item.imageUrl); }}
                  />
                </Link>
              </div>
              <div className="info w-[75%] pr-5 flex flex-col justify-between relative">
                <h4 className="text-sm font-medium">
                  <Link to={`/products/${item.productId}`} className="link transition">
                    {item.productName}
                  </Link>
                </h4>
                <p className="flex items-center gap-5">
                  <span>
                    Số lượng: <span>{item.quantity}</span>
                  </span>
                  <span>
                    Giá: <span className="text-primary font-medium">{itemPrice.toLocaleString()}đ</span>
                  </span>
                </p>
                <MdDeleteForever
                  className="absolute top-5 right-2 text-2xl text-gray-500 hover:text-[#ff5252] cursor-pointer"
                  onClick={() => handleDelete(item.productId)}
                />
              </div>
              <hr />
            </div>
          );
        })}
      </div>
      <div className="bottomSec absolute bottom-2.5 left-2.5 w-full">
        <div className="bottomInfo py-3 pl-2 pr-6 w-full border-t border-t-[rgba(0,0,0,0.1)] flex flex-col">
          <div className="font-medium flex items-center justify-between">
            <p>Số sản phẩm: {cartItems.length}</p>
            <p className="text-primary">{totalPrice.toLocaleString()}đ</p>
          </div>
          <div className="font-medium flex items-center justify-between">
            <p>Phí vận chuyển:</p>
            <p className="text-primary">{shippingFee.toLocaleString()}đ</p>
          </div>
        </div>
        <div className="bottomInfo py-3 pl-2 pr-6 w-full border-t border-t-[rgba(0,0,0,0.1)] flex flex-col">
          <div className="font-medium flex items-center justify-between">
            <p>Chi phí:</p>
            <p className="text-primary">{(totalPrice + shippingFee).toLocaleString()}đ</p>
          </div>
          <div className="font-medium flex items-center justify-between">
            <p>Voucher giảm giá:</p>
            <p className="text-primary">-{discount.toLocaleString()}đ</p>
          </div>
        </div>
        <div className="bottomSec py-3 pl-2 pr-6 w-full border-t border-t-[rgba(0,0,0,0.1)] flex flex-col">
          <div className="font-medium flex items-center justify-between">
            <p>Tổng tiền hàng:</p>
            <p className="text-primary">{finalTotal.toLocaleString()}đ</p>
          </div>
          <div className="flex items-center justify-between mt-8 gap-8 mx-4">
            <Link to="/cart" className="w-[50%]">
              <Button className="btn-org !w-full">Chi tiết</Button>
            </Link>
            <Link to="/check-out" state={{ totalPrice, shippingFee, discount, finalTotal, cartItems }} className="w-[50%]">
              <Button className="btn-org !w-full">Thanh toán</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPanel;
import React, { useState, useEffect, useContext } from 'react';
import Rating from '@mui/material/Rating';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { IoMdGitCompare } from 'react-icons/io';
import { Button } from '@mui/material';
import QtyBox from '../QtyBox';
import { fetchProduct, addItemToCart } from '../../services/api';
import { MyContext } from '../../App';

const ProductDetailsComponent = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { userData, openAlertBox, updateCart } = useContext(MyContext);

  useEffect(() => {
    console.log('Fetching product with productId:', productId);
    if (!productId) return;

    let ignore = false;

    const loadProduct = async () => {
      try {
        setLoading(true);
        const data = await fetchProduct(productId);
        console.log('Fetched product data:', data);
        if (!ignore) setProduct(data);
      } catch (err) {
        if (!ignore) {
          setError(err.response?.data?.title ?? 'Không thể tải chi tiết sản phẩm');
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    loadProduct();
    return () => { ignore = true; };
  }, [productId]);

  const handleQuantityChange = (newQuantity) => {
    console.log('Quantity changed to:', newQuantity); // Debug
    setQuantity(newQuantity);
  };

  const handleAddToCart = async () => {
    console.log('Selected quantity before adding:', quantity); // Debug
    if (!product || quantity <= 0 || quantity > product.stock) {
      openAlertBox('error', 'Số lượng không hợp lệ hoặc vượt quá tồn kho!');
      return;
    }
    if (!userData?.id) {
      openAlertBox('error', 'Vui lòng đăng nhập để thêm vào giỏ hàng!');
      return;
    }
    try {
      const cartItem = {
        productId: product.id,
        quantity: quantity, // Sử dụng quantity từ state
        price: product.price - (product.discount || 0),
      };
      console.log('Cart Item being sent:', cartItem); // Debug payload

      await addItemToCart(userData.id, cartItem);
      openAlertBox('success', 'Đã thêm sản phẩm vào giỏ hàng!');
      await updateCart(userData.id); // Cập nhật giỏ hàng
    } catch (err) {
      console.error('Error adding to cart:', err.response?.data || err.message);
      openAlertBox('error', 'Không thể thêm vào giỏ hàng: ' + (err.response?.data?.message || err.message));
    }
  };

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Không có dữ liệu sản phẩm</div>;

  return (
    <>
      <h1 className="text-[22px] font-semibold mb-3">{product.productName}</h1>
      <div className="flex items-center gap-3">
        <span className="text-gray-500 text-[13px]">
          Phong cách:{' '}
          <span className="font-semibold text-black uppercase">
            {product.categoryName || 'Không xác định'}
          </span>
        </span>
        <Rating name="size-small" defaultValue={3} size="small" readOnly />
        <span className="link text-[13px] text-gray-600 cursor-pointer">
          Bình luận: (7)
        </span>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <span className="oldPrice line-through text-sm text-gray-500">
          {product.discount > 0 ? product.price.toLocaleString() : ''}đ
        </span>
        <span className="newPrice text-primary text-sm font-semibold">
          {(product.price - (product.discount || 0)).toLocaleString()}đ
        </span>
        <span className="text-sm">
          Sản phẩm có sẵn:{' '}
          <span className="text-green-600 font-semibold">{product.stock} sản phẩm</span>
        </span>
      </div>
      <p className="mt-4 mb-5">{product.description}</p>
      <p className="text-sm mt-4">
        Miễn phí vận chuyển (Giao hàng chậm nhất vào 12-05-2025)
      </p>
      <div className="flex items-center gap-3 mt-4 group">
        <div className="qtyBoxWrapper w-20">
          <QtyBox onQuantityChange={handleQuantityChange} max={product.stock} />
        </div>
        <Button
          className="flex items-center !p-2 !text-sm gap-2 !border !border-[rgba(0,0,0,0.1)] btn-org"
          onClick={handleAddToCart}
        >
          <AiOutlineShoppingCart className="text-lg" /> Thêm vào giỏ
        </Button>
      </div>
      <div className="flex items-center gap-16 mt-4">
        <span className="flex items-center gap-2 text-[16px] cursor-pointer link font-medium">
          <FaRegHeart className="text-lg" />
          Yêu thích
        </span>
      </div>
    </>
  );
};

export default ProductDetailsComponent;
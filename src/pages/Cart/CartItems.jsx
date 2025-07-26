import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { Rating } from '@mui/material';
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

const CartItems = ({ productId, productName, oldPrice, newPrice, discountPercentage, imageUrl, onDelete, selectedSize, selectedQty }) => {
  const { openAlertBox, userData } = useContext(MyContext);

  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const fetchDiscount = async () => {
      const productDiscount = await fetchProductDiscount(productId);
      setDiscount(productDiscount);
    };
    fetchDiscount();
  }, [productId]);

  const handleDelete = async () => {
    if (onDelete) onDelete(productId);
  };

  // Tính totalPrice dựa trên (newPrice - discount) * selectedQty
  const totalPrice = (newPrice - discount) * (selectedQty || 1);

  // Ghép URL đầy đủ nếu imageUrl là đường dẫn tương đối
  const fullImageUrl = imageUrl
    ? imageUrl.startsWith('http')
      ? imageUrl
      : `https://localhost:7264${imageUrl}`
    : 'https://via.placeholder.com/150';

  return (
    <div className="shadow-md rounded-md bg-white mt-5">
      <div className="cartItem w-full p-3 flex items-start gap-4 pb-5 border-b border-b-[rgba(0,0,0,0.1)]">
        <div className="img w-[80px] h-[80px] flex items-center justify-center overflow-hidden border border-[rgba(0,0,0,0.1)] rounded-md">
          <Link to={`/products/${productId}`} className="block group">
            <img
              src={fullImageUrl}
              className="w-full h-full object-contain"
              alt={productName || 'Product Image'}
              onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; console.log('Image load failed in CartItems:', imageUrl); }}
            />
          </Link>
        </div>
        <div className="info w-[75%] pr-5 flex flex-col justify-between relative">
          <h4 className="text-sm font-medium">
            <Link to={`/products/${productId}`} className="link transition">
              {productName}
            </Link>
          </h4>
          <p className="flex items-center gap-5">
            <span>
              Kích thước: <span>{selectedSize || 'Không xác định'}</span>
            </span>
            <span>
              Số lượng: <span>{selectedQty || 1}</span>
            </span>
            <span>
              Giá: <span className="text-primary font-medium">{totalPrice.toLocaleString()}đ</span>
            </span>
          </p>
          <IoClose
            className="absolute top-5 right-2 text-2xl text-gray-500 hover:text-[#ff5252] cursor-pointer"
            onClick={handleDelete}
          />
          <Rating name="size-small" defaultValue={3} size="small" readOnly />
        </div>
      </div>
    </div>
  );
};

export default CartItems;
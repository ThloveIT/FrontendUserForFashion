import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { MdZoomOutMap } from 'react-icons/md';
import { IoMdGitCompare } from 'react-icons/io';
import { FaRegHeart } from 'react-icons/fa';
import Tooltip from '@mui/material/Tooltip';
import { MyContext } from '../../App';

const ProductItem = ({ product = {} }) => {
  const context = useContext(MyContext);
  const productImages = product.productImages || [];
  const apiUrl = (import.meta.env.VITE_API_URL || 'https://localhost:7264').replace(/\/api$/, '');
  // console.log('Product data:', product); // Debug
  const cleanImageUrl = (url) => url.startsWith('/api') ? url.replace('/api', '') : url;
  const primaryImage = productImages.find(img => img?.isPrimary)?.imageUrl
    ? `${apiUrl}${cleanImageUrl(productImages.find(img => img.isPrimary)?.imageUrl)}`
    : (productImages[0]?.imageUrl ? `${apiUrl}${cleanImageUrl(productImages[0].imageUrl)}` : 'https://via.placeholder.com/150');
  const discountPrice = product.price ? product.price - (product.discount || 0) : 0;

  if (!product.id) {
    console.log('Product ID is undefined or missing:', product);
    return null;
  }

  return (
    <div className="productItem rounded-md overflow-hidden shadow-md border border-[rgba(0,0,0,0.1)]">
      <div className="group imgWrapper w-[100%] overflow-hidden rounded-md relative">
        <Link to={`/products/${product.id}`} onClick={() => console.log('Navigating to:', `/products/${product.id}`)}>
          <div className="img h-56 overflow-hidden flex items-center justify-center bg-gray-200">
            <img src={primaryImage} alt={product.productName || 'Product'} className="w-full h-full object-cover" onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }} />
            {productImages.length === 0 && <span className="text-sm text-gray-500">No image available</span>}
          </div>
        </Link>
        {product.discount > 0 && (
          <span className="discount flex items-center absolute top-2.5 left-2.5 z-50 bg-org text-white rounded-sm p-1 text-[12px] font-medium">
            - {((product.discount / product.price) * 100).toFixed(0)}%
          </span>
        )}
        <div className="actions absolute top-[-200px] right-0 z-50 flex items-center gap-2 flex-col w-12 transition-all duration-400 ease-in-out opacity-50 group-hover:opacity-100 group-hover:top-[15px]">
          <Button className=" !size-8 !min-w-8 !rounded-full !bg-white text-black hover:!bg-[#ff5252] hover:text-white group" onClick={() => context.setOpenProductDetailsModel(true)}>
            <Tooltip title="Phóng to" placement="right" arrow><MdZoomOutMap className="text-lg p-2 min-h-8 min-w-8 !text-black group-hover:text-white hover:!text-white" /></Tooltip>
          </Button>
          <Button className=" !size-8 !min-w-8 !rounded-full !bg-white !text-black hover:!bg-[#ff5252] hover:!text-white group">
            <Tooltip title="So sánh" placement="right" arrow><IoMdGitCompare className="text-lg p-2 min-h-8 min-w-8 !text-black group-hover:text-white hover:!text-white" /></Tooltip>
          </Button>
          <Button className=" !size-8 !min-w-8 !rounded-full !bg-white !text-black hover:!bg-[#ff5252] hover:!text-white group">
            <Tooltip title="Thêm vào danh sách yêu thích" placement="right" arrow><FaRegHeart className="text-lg p-2 min-h-8 min-w-8 !text-black group-hover:text-white hover:!text-white" /></Tooltip>
          </Button>
        </div>
      </div>
      <div className="info p-3">
        <Link to="/" className="link transition-all"><h6 className="text-[13px] uppercase">{product.categoryName || 'Unknown'}</h6></Link>
        <h3 className="text-sm title my-1 font-[500] text-black">
          {product.productName || 'No Name'} {/* Loại bỏ <Link> dư thừa */}
        </h3>
        <Rating name="size-small" defaultValue={3} size="small" readOnly />
        <div className="flex items-center gap-4">
          {product.discount > 0 && <span className="oldPrice line-through text-sm text-gray-500">{product.price?.toLocaleString()}đ</span>}
          <span className="newPrice text-primary text-sm font-semibold">{discountPrice.toLocaleString()}đ</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

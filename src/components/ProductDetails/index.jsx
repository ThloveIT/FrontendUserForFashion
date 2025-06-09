import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { IoMdGitCompare } from 'react-icons/io';
import { Button } from '@mui/material';
import QtyBox from '../QtyBox';

const ProductDetailsComponent = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);
  return (
    <>
      <h1 className=" text-[22px] font-semibold mb-3">
        Áo sơ mi Jean cổ bẻ Layer Regular Fit dành cho nam
      </h1>
      <div className=" flex items-center gap-3">
        <span className=" text-gray-500 text-[13px]">
          Thương hiệu:{' '}
          <span className=" font-semibold text-black uppercase">
            RARE RABBIT
          </span>
        </span>
        <Rating name="size-small" defaultValue={3} size="small" readOnly />
        <span className="link text-[13px] text-gray-600 cursor-pointer">
          Bình luận: (7)
        </span>
      </div>
      <div className=" flex items-center gap-4 mt-4">
        <span className="oldPrice line-through text-sm text-gray-500">
          280.000đ
        </span>
        <span className="newPrice text-primary text-sm font-semibold">
          240.000đ
        </span>

        <span className=" text-sm">
          Sản phẩm có sẵn:{' '}
          <span className=" text-green-600 font-semibold">144 sản phẩm</span>
        </span>
      </div>
      <p className=" mt-4 mb-5">
        Có nhiều biến thể của các đoạn văn bản Lorem Ipsum, nhưng phần lớn đã bị
        thay đổi ở một số dạng, bằng cách thêm yếu tố hài hước, hoặc các từ ngẫu
        nhiên trông không đáng tin chút nào. Nếu bạn định sử dụng một đoạn văn
        bản Lorem Ipsum, bạn cần đảm bảo rằng không có bất kỳ điều gì đáng xấu
        hổ ẩn ở giữa văn bản. Tất cả các trình tạo Lorem Ipsum trên Internet có
        xu hướng lặp lại các đoạn được xác định trước khi cần thiết, khiến đây
        trở thành trình tạo thực sự đầu tiên trên Internet.
      </p>
      <div className=" flex items-center gap-3">
        <span>Kích thước: </span>
        <div className=" flex items-center gap-1 actions">
          <Button
            className={`${
              productActionIndex === 0 ? '!bg-[#ff5252] !text-white' : ''
            }`}
            onClick={() => setProductActionIndex(0)}
          >
            S
          </Button>
          <Button
            className={`${
              productActionIndex === 1 ? '!bg-[#ff5252] !text-white' : ''
            }`}
            onClick={() => setProductActionIndex(1)}
          >
            M
          </Button>
          <Button
            className={`${
              productActionIndex === 2 ? '!bg-[#ff5252] !text-white' : ''
            }`}
            onClick={() => setProductActionIndex(2)}
          >
            L
          </Button>
          <Button
            className={`${
              productActionIndex === 3 ? '!bg-[#ff5252] !text-white' : ''
            }`}
            onClick={() => setProductActionIndex(3)}
          >
            XL
          </Button>
          <Button
            className={`${
              productActionIndex === 4 ? '!bg-[#ff5252] !text-white' : ''
            }`}
            onClick={() => setProductActionIndex(4)}
          >
            2XL
          </Button>
          <Button
            className={`${
              productActionIndex === 5 ? '!bg-[#ff5252] !text-white' : ''
            }`}
            onClick={() => setProductActionIndex(5)}
          >
            Không giới hạn
          </Button>
        </div>
      </div>
      <p className=" text-sm mt-4">
        Miễn phí vận chuyển (Giao hàng chậm nhất vào 12-05-2025)
      </p>
      <div className=" flex items-center gap-3 mt-4 group">
        <div className="qtyBoxWrapper w-20">
          <QtyBox />
        </div>
        <Button className=" flex items-center !p-2 !text-sm gap-2 !border !border-[rgba(0,0,0,0.1)] btn-org ">
          <AiOutlineShoppingCart className=" text-lg" /> Thêm vào giỏ
        </Button>
      </div>
      <div className=" flex items-center gap-16 mt-4">
        <span className=" flex items-center gap-2 text-[16px] cursor-pointer link font-medium">
          <FaRegHeart className=" text-lg" />
          Yêu thích
        </span>

        <span className=" flex items-center gap-2 text-[16px] cursor-pointer link font-medium">
          <IoMdGitCompare className=" text-lg" />
          So sánh
        </span>
      </div>
    </>
  );
};

export default ProductDetailsComponent;

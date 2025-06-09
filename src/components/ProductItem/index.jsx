import React, { useContext } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { MdZoomOutMap } from 'react-icons/md';
import { IoMdGitCompare } from 'react-icons/io';
import { FaRegHeart } from 'react-icons/fa';
import Tooltip from '@mui/material/Tooltip';
import { MyContext } from '../../App';

const ProductItem = () => {
  const context = useContext(MyContext);
  return (
    <div className="productItem rounded-md overflow-hidden shadow-md border border-[rgba(0,0,0,0.1)]">
      <div className="group imgWrapper w-[100%] overflow-hidden rounded-md  relative">
        <Link to="/product/444">
          <div className="img h-56 overflow-hidden">
            <img
              src="https://media-cdn-v2.laodong.vn/storage/newsportal/2025/1/10/1448238/Rose-2.jpg"
              alt=""
              className=" w-full"
            />
            <img
              src="https://cdnphoto.dantri.com.vn/8-MpGec-uD4_gxVCv8rLBNhxAbk=/thumb_w/960/2020/12/16/ngam-dan-hot-girl-xinh-dep-noi-bat-nhat-nam-2020-docx-1608126694049.jpeg"
              alt=""
              className=" w-full absolute top-0 left-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-105"
            />
          </div>
        </Link>
        <span className="discount flex items-center absolute top-2.5 left-2.5 z-50 bg-org text-white rounded-sm p-1 text-[12px] font-medium ">
          - 10%
        </span>

        <div className="actions absolute top-[-200px] right-0 z-50 flex items-center gap-2 flex-col w-12 transition-all duration-400 ease-in-out opacity-50 group-hover:opacity-100 group-hover:top-[15px] ">
          <Button
            className=" !size-8 !min-w-8 !rounded-full !bg-white text-black hover:!bg-[#ff5252] hover:text-white group "
            onClick={() => context.setOpenProductDetailsModel(true)}
          >
            <Tooltip title="Phóng to" placement="right" arrow>
              <MdZoomOutMap className=" text-lg p-2 min-h-8 min-w-8 !text-black group-hover:text-white hover:!text-white" />
            </Tooltip>
          </Button>

          <Button className=" !size-8 !min-w-8 !rounded-full !bg-white !text-black hover:!bg-[#ff5252] hover:!text-white group">
            <Tooltip title="So sánh" placement="right" arrow>
              <IoMdGitCompare className=" text-lg p-2 min-h-8 min-w-8 !text-black group-hover:text-white hover:!text-white" />
            </Tooltip>
          </Button>

          <Button className=" !size-8 !min-w-8 !rounded-full !bg-white !text-black hover:!bg-[#ff5252] hover:!text-white group">
            <Tooltip
              title="Thêm vào danh sách yêu thích"
              placement="right"
              arrow
            >
              <FaRegHeart className=" text-lg p-2 min-h-8 min-w-8 !text-black group-hover:text-white hover:!text-white" />
            </Tooltip>
          </Button>
        </div>
      </div>
      <div className="info p-3">
        <Link to="/" className=" link transition-all">
          <h6 className=" text-[13px] uppercase">Rare Rabbit</h6>
        </Link>
        <h3 className=" text-sm title my-1 font-[500] text-black">
          <Link to="/product/444" className=" link transition-all">
            Áo sơ mi Jean cổ bẻ Layer Regular Fit dành cho nam
          </Link>
        </h3>
        <Rating name="size-small" defaultValue={3} size="small" readOnly />
        <div className=" flex items-center gap-4">
          <span className="oldPrice line-through text-sm text-gray-500">
            280.000đ
          </span>
          <span className="newPrice text-primary text-sm font-semibold">
            240.000đ
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

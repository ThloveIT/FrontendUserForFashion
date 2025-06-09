import React, { useContext } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { MdZoomOutMap } from 'react-icons/md';
import { IoMdGitCompare } from 'react-icons/io';
import { FaRegHeart } from 'react-icons/fa';
import Tooltip from '@mui/material/Tooltip';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MyContext } from '../../App';

const ProductItemListView = () => {
  const context = useContext(MyContext);
  return (
    <div className="productItem rounded-md overflow-hidden shadow-md border border-[rgba(0,0,0,0.1)] flex items-center pl-2">
      <div className="group imgWrapper w-[25%] overflow-hidden rounded-md  relative">
        <Link to="/">
          <div className="img h-56 overflow-hidden">
            <img
              src="https://khoinguonsangtao.vn/wp-content/uploads/2022/10/anh-gai-xinh-co-trang-1.jpg"
              alt=""
              className=" w-full"
            />
            <img
              src="https://khoinguonsangtao.vn/wp-content/uploads/2022/10/anh-gai-xinh-co-trang-trung-quoc-1.jpg"
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
      <div className="info p-3 w-[75%] px-8">
        <Link to="/" className=" link transition-all">
          <h6 className=" text-sm uppercase">Rare Rabbit</h6>
        </Link>
        <h3 className=" text-lg title my-2 font-[500] text-black">
          <Link to="/" className=" link transition-all">
            Áo sơ mi Jean cổ bẻ Layer Regular Fit dành cho nam
          </Link>
        </h3>
        <p className=" text-sm mb-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Rating name="size-small" defaultValue={3} size="small" readOnly />
        <div className=" flex items-center gap-4">
          <span className="oldPrice line-through text-sm text-gray-500">
            280.000đ
          </span>
          <span className="newPrice text-primary text-sm font-semibold">
            240.000đ
          </span>
        </div>
        <div className=" mt-3">
          <Button className=" btn-org flex items-center gap-2">
            <AiOutlineShoppingCart className=" text-lg" /> Thêm vào giỏ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItemListView;

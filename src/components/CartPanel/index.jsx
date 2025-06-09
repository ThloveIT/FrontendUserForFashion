import { Button } from '@mui/material';
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CartPanel = () => {
  return (
    <>
      <div className=" scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden py-3 px-4">
        <div className="cartItem w-full flex gap-4 my-5">
          <div className="img w-[25%] overflow-hidden h-[80px] border border-[rgba(0,0,0,0.1)] rounded-md">
            <Link to="/product/444" className=" block group">
              <img
                src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736935391/1736935388943_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp"
                className=" w-full rounded-md group-hover:scale-105 transition-all"
              />
            </Link>
          </div>
          <div className=" info w-[75%] pr-5 flex flex-col justify-between relative">
            <h4 className=" text-sm font-medium">
              <Link to="/product/444" className=" link transition">
                Áo sơ mi Jean cổ bẻ Layer Regular Fit dành cho nam
              </Link>
            </h4>
            <p className=" flex items-center gap-5 mx-y">
              <span>
                Số lượng: <span>3</span>
              </span>
              <span>
                Giá: <span className=" text-primary font-medium">250.000đ</span>
              </span>
            </p>
            <MdDeleteForever className=" absolute top-5 right-2 text-2xl text-gray-500 hover:text-[#ff5252]" />
          </div>
        </div>
        <hr />
        <div className="cartItem w-full flex gap-4 my-5">
          <div className="img w-[25%] overflow-hidden h-[80px] border border-[rgba(0,0,0,0.1)] rounded-md">
            <Link to="/product/444" className=" block group">
              <img
                src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736935391/1736935388943_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp"
                className=" w-full rounded-md group-hover:scale-105 transition-all"
              />
            </Link>
          </div>
          <div className=" info w-[75%] pr-5 flex flex-col justify-between relative">
            <h4 className=" text-sm font-medium">
              <Link to="/product/444" className=" link transition">
                Áo sơ mi Jean cổ bẻ Layer Regular Fit dành cho nam
              </Link>
            </h4>
            <p className=" flex items-center gap-5 mx-y">
              <span>
                Số lượng: <span>3</span>
              </span>
              <span>
                Giá: <span className=" text-primary font-medium">250.000đ</span>
              </span>
            </p>
            <MdDeleteForever className=" absolute top-5 right-2 text-2xl text-gray-500 hover:text-[#ff5252]" />
          </div>
        </div>
        <hr />
        <div className="cartItem w-full flex gap-4 my-5">
          <div className="img w-[25%] overflow-hidden h-[80px] border border-[rgba(0,0,0,0.1)] rounded-md">
            <Link to="/product/444" className=" block group">
              <img
                src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736935391/1736935388943_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp"
                className=" w-full rounded-md group-hover:scale-105 transition-all"
              />
            </Link>
          </div>
          <div className=" info w-[75%] pr-5 flex flex-col justify-between relative">
            <h4 className=" text-sm font-medium">
              <Link to="/product/444" className=" link transition">
                Áo sơ mi Jean cổ bẻ Layer Regular Fit dành cho nam
              </Link>
            </h4>
            <p className=" flex items-center gap-5 mx-y">
              <span>
                Số lượng: <span>3</span>
              </span>
              <span>
                Giá: <span className=" text-primary font-medium">250.000đ</span>
              </span>
            </p>
            <MdDeleteForever className=" absolute top-5 right-2 text-2xl text-gray-500 hover:text-[#ff5252]" />
          </div>
        </div>
      </div>
      <div className="bottomSec absolute bottom-2.5 left-2.5 w-full">
        <div className="bottomInfo py-3 pl-2 pr-6 w-full border-t border-t-[rgba(0,0,0,0.1)] flex flex-col">
          <div className=" font-medium flex items-center justify-between">
            <p>2 sản phẩm:</p>
            <p className=" text-primary">500.000đ</p>
          </div>
          <div className=" font-medium flex items-center justify-between">
            <p>Phí vận chuyển:</p>
            <p className=" text-primary">25.000đ</p>
          </div>
        </div>
        <div className="bottomInfo py-3 pl-2 pr-6 w-full border-t border-t-[rgba(0,0,0,0.1)] flex flex-col">
          <div className=" font-medium flex items-center justify-between">
            <p>Chi phí:</p>
            <p className=" text-primary">525.000đ</p>
          </div>
          <div className=" font-medium flex items-center justify-between">
            <p>Voucher giảm giá:</p>
            <p className=" text-primary">-25.000đ</p>
          </div>
        </div>
        <div className="bottomInfo py-3 pl-2 pr-6 w-full border-t border-t-[rgba(0,0,0,0.1)] flex flex-col">
          <div className=" font-medium flex items-center justify-between">
            <p>Tổng tiền hàng:</p>
            <p className=" text-primary">500.000đ</p>
          </div>

          <div className=" flex items-center justify-between mt-8 gap-8 mx-4">
            <Link to="/cart" className="w-[50%]">
              <Button className="btn-org !w-full">Chi tiết</Button>
            </Link>
            <Link to="/check-out" className="w-[50%]">
              <Button className="btn-org !w-full">Thanh toán</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPanel;

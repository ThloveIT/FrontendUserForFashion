import React from 'react';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { Button, Rating } from '@mui/material';

const MyListItems = () => {
  return (
    <div className="shadow-md rounded-md bg-[#f1f1f1] mt-5">
      <div className="cartItem w-full p-3 flex items-stretch gap-4 pb-5 border-b border-b-[rgba(0,0,0,0.1)]">
        <div className="img w-[10%] rounded-md overflow-hidden border border-[rgba(0,0,0,0.1)]">
          <Link to="/product/444" className="group">
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/103-cart_default/pack-mug-framed-poster.jpg"
              alt="Ảnh sản phẩm"
              className=" w-full group-hover:scale-105 transition-all"
            />
          </Link>
        </div>
        <div className="info w-[70%]">
          <h3>
            <Link to="/product/444" className=" link transition">
              Áo sơ mi Jean cổ bẻ Layer Regular Fit dành cho nam
            </Link>
          </h3>
          <Rating name="size-small" defaultValue={3} size="small" readOnly />
          <div className=" flex items-center gap-4 my-2">
            <span className="oldPrice line-through text-sm text-gray-500">
              280.000đ
            </span>
            <span className="newPrice text-primary text-sm font-semibold">
              240.000đ
            </span>
            <span className="newPrice text-primary text-sm font-semibold uppercase">
              Giảm 15%
            </span>
          </div>
        </div>
        <div className=" w-[20%] pt-5 flex flex-col items-start justify-center relative">
          <IoClose className=" cursor-pointer absolute top-0 right-0 text-2xl" />
          <Button size="small" className=" btn-org !normal-case mx-auto mt-2">
            Thêm vào giỏ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyListItems;

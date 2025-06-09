import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaSortDown } from 'react-icons/fa';
import { Rating } from '@mui/material';

const CartItems = (props) => {
  const [sizeAnchorEl, setSizeAnchorEl] = useState(null);
  const [selectedSize, setSelectedSize] = useState(props.size);
  const openSize = Boolean(sizeAnchorEl);

  const [qtyAnchorEl, setQtyAnchorEl] = useState(null);
  const [selectedQty, setSelectedQty] = useState(props.qty);
  const openQty = Boolean(qtyAnchorEl);

  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };
  const handleCloseSize = (value) => {
    setSizeAnchorEl(null);
    if (value !== null) {
      setSelectedSize(value);
    }
  };

  const handleClickQty = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };
  const handleCloseQty = (value) => {
    setQtyAnchorEl(null);
    if (value !== null) {
      setSelectedQty(value);
    }
  };
  return (
    <div className="shadow-md rounded-md bg-white mt-5">
      <div className="cartItem w-full p-3 flex items-start gap-4 pb-5 border-b border-b-[rgba(0,0,0,0.1)]">
        <div className="img my-auto w-[10%] rounded-md overflow-hidden border border-[rgba(0,0,0,0.1)]">
          <Link to="/product/444" className="group">
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/103-cart_default/pack-mug-framed-poster.jpg"
              alt="Ảnh sản phẩm"
              className=" w-full group-hover:scale-105 transition-all"
            />
          </Link>
        </div>
        <div className="info w-[90%] relative">
          <IoClose className=" cursor-pointer absolute top-[40%] right-2.5 text-2xl" />
          <h3>
            <Link to="/product/444" className=" link transition">
              Áo sơ mi Jean cổ bẻ Layer Regular Fit dành cho nam
            </Link>
          </h3>
          <Rating name="size-small" defaultValue={3} size="small" readOnly />
          <div className=" flex items-center gap-4 mt-2">
            <div className=" relative">
              <span
                className=" flex items-center justify-center bg-[#f1f1f1] text-xs font-medium px-2 py-1 rounded-md cursor-pointer gap-1"
                onClick={handleClickSize}
              >
                Kích thước:{' '}
                <span className=" text-primary">{selectedSize}</span>{' '}
                <FaSortDown className=" -mt-1" />
              </span>
              <Menu
                id="size-menu"
                anchorEl={sizeAnchorEl}
                open={openSize}
                onClose={() => handleCloseSize(null)}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={() => handleCloseSize('S')}>S</MenuItem>
                <MenuItem onClick={() => handleCloseSize('M')}>M</MenuItem>
                <MenuItem onClick={() => handleCloseSize('L')}>L</MenuItem>
                <MenuItem onClick={() => handleCloseSize('XL')}>XL</MenuItem>
                <MenuItem onClick={() => handleCloseSize('2XL')}>2XL</MenuItem>
                <MenuItem onClick={() => handleCloseSize('Không giới hạn')}>
                  Không giới hạn
                </MenuItem>
              </Menu>
            </div>

            <div className=" relative">
              <span
                className=" flex items-center justify-center bg-[#f1f1f1] text-xs font-medium px-2 py-1 rounded-md cursor-pointer gap-1"
                onClick={handleClickQty}
              >
                Số lượng: <span className=" text-primary">{selectedQty}</span>{' '}
                <FaSortDown className=" -mt-1" />
              </span>
              <Menu
                id="size-menu"
                anchorEl={qtyAnchorEl}
                open={openQty}
                onClose={() => handleCloseQty(null)}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={() => handleCloseQty(1)}>1</MenuItem>
                <MenuItem onClick={() => handleCloseQty(2)}>2</MenuItem>
                <MenuItem onClick={() => handleCloseQty(3)}>3</MenuItem>
                <MenuItem onClick={() => handleCloseQty(4)}>4</MenuItem>
                <MenuItem onClick={() => handleCloseQty(5)}>5</MenuItem>
                <MenuItem onClick={() => handleCloseQty(9)}>9</MenuItem>
              </Menu>
            </div>
          </div>
          <div className=" flex items-center gap-4 mt-2">
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
      </div>
    </div>
  );
};

export default CartItems;

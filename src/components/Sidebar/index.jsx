import React, { useState } from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Collapse } from 'react-collapse';
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

import Rating from '@mui/material/Rating';

import './style.css';

const Sidebar = () => {
  const [isOpenCategory, setIsOpenCategory] = useState(true);
  const [isOpenAvail, setIsOpenAvail] = useState(true);
  const [isOpenSize, setIsOpenSize] = useState(true);

  return (
    <aside className=" sidebar py-5">
      <div className="box">
        <h3
          className=" mb-3 text-[16px] font-semibold flex items-center justify-between cursor-pointer pr-5"
          onClick={() => setIsOpenCategory(!isOpenCategory)}
        >
          Danh mục sản phẩm{' '}
          {isOpenCategory ? <FaChevronUp /> : <FaChevronDown />}{' '}
        </h3>
        <Collapse isOpened={isOpenCategory}>
          <div className="scroll px-3 relative -left-2.5">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Cổ điển"
              className=" w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Tối giản"
              className=" w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Tự do"
              className=" w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Thể thao"
              className=" w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Học sinh"
              className=" w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Đường phố"
              className=" w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Công sở"
              className=" w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Trang sức"
              className=" w-full"
            />
          </div>
        </Collapse>
      </div>
      <div className="box mt-3">
        <h3
          className=" mb-3 text-[16px] font-semibold flex items-center justify-between cursor-pointer pr-5"
          onClick={() => setIsOpenAvail(!isOpenAvail)}
        >
          Tình trạng {isOpenAvail ? <FaChevronUp /> : <FaChevronDown />}{' '}
        </h3>
        <Collapse isOpened={isOpenAvail}>
          <div className="scroll px-3 relative -left-2.5">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Sản phẩm có sẵn (17)"
              className=" w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Đang chờ nhập về (3)"
              className=" w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Không khả dụng (5)"
              className=" w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-3">
        <h3
          className=" mb-3 text-[16px] font-semibold flex items-center justify-between cursor-pointer pr-5"
          onClick={() => setIsOpenSize(!isOpenSize)}
        >
          Kích thước {isOpenSize ? <FaChevronUp /> : <FaChevronDown />}{' '}
        </h3>
        <Collapse isOpened={isOpenSize}>
          <div className="scroll px-3 relative -left-2.5">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="S"
              className=" w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="M"
              className=" w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="L"
              className=" w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XL"
              className=" w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XXL"
              className=" w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Không giới hạn"
              className=" w-full"
            />
          </div>
        </Collapse>
      </div>
      <div className="box mt-4">
        <h3 className=" mb-3 text-[16px] font-semibold flex items-center pr-5">
          Lọc theo giá tiền
        </h3>
        <RangeSlider />
        <div className="flex py-4 priceRange">
          <span>
            Từ <strong className=" text-dark text-[13px]"> 0đ </strong>{' '}
          </span>
          <span className=" ml-auto">
            Từ <strong className=" text-dark text-[13px]"> 1050.000đ </strong>{' '}
          </span>
        </div>
      </div>

      <div className="box mt-4">
        <h3 className=" mb-3 text-[16px] font-semibold flex items-center pr-5">
          Đánh giá
        </h3>
        <div className=" w-full">
          <Rating
            name="size-small"
            defaultValue={5}
            size="small"
            className=" w-full !cursor-pointer"
            readOnly
          />
        </div>
        <div className=" w-full">
          <Rating
            name="size-small"
            defaultValue={4}
            size="small"
            className=" w-full !cursor-pointer"
            readOnly
          />
        </div>
        <div className=" w-full">
          <Rating
            name="size-small"
            defaultValue={3}
            size="small"
            className=" w-full !cursor-pointer"
            readOnly
          />
        </div>
        <div className=" w-full">
          <Rating
            name="size-small"
            defaultValue={2}
            size="small"
            className=" w-full !cursor-pointer"
            readOnly
          />
        </div>
        <div className=" w-full">
          <Rating
            name="size-small"
            defaultValue={1}
            size="small"
            className=" w-full !cursor-pointer"
            readOnly
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

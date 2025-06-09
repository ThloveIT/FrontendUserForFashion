import React from 'react';
import '../Search/style.css';
import Button from '@mui/material/Button';
import { IoSearch } from 'react-icons/io5';

const Search = () => {
  return (
    <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2">
      <input
        type="text"
        placeholder="Bạn muốn tìm gì?"
        className=" w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]"
      />
      <Button className=" !absolute top-0 right-0 z-50 w-[85px] h-[50px] min-w-[35px] rounded">
        <IoSearch className=" text-[#615353] size-6" />
      </Button>
    </div>
  );
};

export default Search;

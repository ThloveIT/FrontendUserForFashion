import React from 'react';
import { WiTime9 } from 'react-icons/wi';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa6';

const BlogItem = () => {
  return (
    <div className="blogItem my-10 ">
      <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative group">
        <img
          src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737097090/1737097087465_blog-001-1536x872.webp"
          alt="blog image"
          className=" w-full transition-all group-hover:scale-105 group-hover:rotate-1"
        />
        <span className=" absolute bottom-4 right-4 flex items-center justify-center text-white bg-org gap-1 rounded-md p-1 text-xs font-medium">
          <WiTime9 className=" text-lg" /> 2025-02-15
        </span>
      </div>
      <div className="info py-4">
        <h2 className=" text-[16px] font-semibold text-black">
          <Link to="/" className="link">
            Achieve excellence through customized
          </Link>
        </h2>
        <p className="text-sm font-normal text-[rbga(0,0,0,0.8)] mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...
        </p>
        <Link
          to="/"
          className="link flex items-center gap-1 underline font-semibold uppercase text-lg  w-fit"
        >
          Read More <FaChevronRight className=" text-sm" />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;

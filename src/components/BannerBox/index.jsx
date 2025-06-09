import React from 'react';
import { Link } from 'react-router-dom';

const BannerBox = (props) => {
  return (
    <div className="box bannerBox rounded-sm overflow-hidden group">
      <Link to={props.link}>
        <img
          src={props.img}
          alt="banner"
          className=" w-full group-hover:scale-105 transition-all group-hover:rotate-1"
        />
      </Link>
    </div>
  );
};

export default BannerBox;

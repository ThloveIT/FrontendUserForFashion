import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider py-8">
      <div className="container">
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col h-[150px]">
                <img
                  src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107557/1737107555729_fash.png"
                  alt=""
                  className=" w-[60px] transition-all"
                />
                <h3 className=" text-[15px] font-[500] mt-5">Cổ điển</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col h-[150px]">
                <img
                  src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107649/1737107647134_ele.png"
                  alt=""
                  className=" w-[60px] transition-all"
                />
                <h3 className=" text-[15px] font-[500] mt-5">
                  Tối giản 
                </h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col h-[150px]">
                <img
                  src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107665/1737107663085_bag.png"
                  alt=""
                  className=" w-[60px] transition-all"
                />
                <h3 className=" text-[15px] font-[500] mt-5">Tự do</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col h-[150px]">
                <img
                  src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107678/1737107676260_foot.png"
                  alt=""
                  className=" w-[60px] transition-all"
                />
                <h3 className=" text-[15px] font-[500] mt-5">Thể thao</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col h-[150px]">
                <img
                  src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107691/1737107689261_gro.png"
                  alt=""
                  className=" w-[60px] transition-all"
                />
                <h3 className=" text-[15px] font-[500] mt-5">Học sinh</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col h-[150px]">
                <img
                  src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107705/1737107702876_beauty.png"
                  alt=""
                  className=" w-[60px] transition-all"
                />
                <h3 className=" text-[15px] font-[500] mt-5">Đường phố</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col h-[150px]">
                <img
                  src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737107718/1737107715395_well.png"
                  alt=""
                  className=" w-[60px] transition-all"
                />
                <h3 className=" text-[15px] font-[500] mt-5">Công sở</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col h-[150px]">
                <img
                  src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1739065363/1739065363328_jw.png"
                  alt=""
                  className=" w-[60px] transition-all"
                />
                <h3 className=" text-[15px] font-[500] mt-5">Trang sức</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;

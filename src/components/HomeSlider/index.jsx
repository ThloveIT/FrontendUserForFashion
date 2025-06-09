import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HomeSlider = () => {
  return (
    <div className="homeSlider py-4">
      <div className="container">
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="sliderHome"
        >
          <SwiperSlide>
            <div className="item rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <img
                src="/public/bannerxanh.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <img
                src="/public/bannerphongcach.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;

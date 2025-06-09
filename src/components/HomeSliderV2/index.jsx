import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const HomeBannerV2 = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="HomeSliderV2"
      >
        <SwiperSlide>
          <div className="item w-full rounded-md">
            <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737036776/1737036773579_sample-1.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item w-full rounded-md">
            <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737037698/1737037696161_New_Project_45.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item w-full rounded-md">
            <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737085794/1737085794016_New_Project_49.jpg" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeBannerV2;

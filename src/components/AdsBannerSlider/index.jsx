import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';

const AdsBannerSlider = (props) => {
  return (
    <div className=" pt-10 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="smlBtn"
      >
        <SwiperSlide>
          <BannerBox
            img={
              '/public/banner6.jpg'
            }
            link={'/'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              '/public/banner2.jpg'
            }
            link={'/'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              '/public/banner3.jpg'
            }
            link={'/'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              '/public/banner1.jpg'
            }
            link={'/'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              '/public/banner4.jpg'
            }
            link={'/'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              '/public/banner5.jpg'
            }
            link={'/'}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;

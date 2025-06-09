import React from 'react';
import HomeSlider from '../../components/HomeSlider';
import HomeCatSlider from '../../components/HomeCatSlider';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';
import { TbTruckDelivery } from 'react-icons/tb';
import AdsBannerSlider from '../../components/AdsBannerSlider';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductsSlider from '../../components/ProductsSlider';
import BlogItem from '../../components/BlogItem';
import HomeBannerV2 from '../../components/HomeSliderV2';

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />

      {/* <section className=" py-6">
        <div className="container flex items-center w-[75%]">
          <div className="part1">
            <HomeBannerV2 />
          </div>
        </div>
      </section> */}

      <HomeCatSlider />
      <section className=" pt-10 bg-white">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h3 className=" text-xl font-bold uppercase">
                Sản phẩm phổ biến
              </h3>
              <p className=" text-sm font-medium">
                Đừng bỏ lỡ các ưu đãi trong thời điểm hiện tại
              </p>
            </div>
            <div className="rightSec w-[65%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Cổ điển" />
                <Tab label="Tối giản" />
                <Tab label="Tự do" />
                <Tab label="Thể thao" />
                <Tab label="Học sinh" />
                <Tab label="Đường phố" />
                <Tab label="Công sở" />
              </Tabs>
            </div>
          </div>

          <ProductsSlider items={6} />
        </div>
      </section>
      <section className=" py-10 bg-white">
        <div className="container">
          <div
            className="freeShipping w-[90%] m-auto p-4 mb-4
           border border-[#ff5252] flex items-center justify-between rounded-md"
          >
            <div className=" col1 flex items-center">
              <TbTruckDelivery className=" text-[40px] mr-2" />
              <div className=" font-bold uppercase">Miễn phí vận chuyển</div>
            </div>
            <div className=" col2 flex items-center">
              <div className="font-[500]">
                Miễn phí vận chuyển cho đơn hàng trên 500.000đ
              </div>
            </div>
            <p className=" text-[25px] font-bold text-[#ff5252]">MUA NGAY*</p>
          </div>

          <AdsBannerSlider items={3} />
        </div>
      </section>
      <section className=" py-10 bg-white">
        <div className="container">
          <h3 className=" text-2xl font-bold uppercase">Sản phẩm mới nhất</h3>
          <ProductsSlider items={6} />
          <AdsBannerSlider items={5} />
        </div>
      </section>
      <section className=" py-10 bg-white">
        <div className="container">
          <h3 className=" text-2xl font-bold uppercase">Sản phẩm nổi bật</h3>
          <ProductsSlider items={6} />
        </div>
      </section>
      <section className=" py-10 bg-white blogSection">
        <div className=" container">
          <h3 className=" text-2xl font-bold uppercase">Bài viết nổi bật</h3>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            modules={[Navigation]}
            className="blogSlider"
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Home;

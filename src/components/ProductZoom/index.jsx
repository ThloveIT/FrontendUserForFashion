import React, { useRef, useState } from 'react';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSlideBig = useRef();
  const zoomSlideSml = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSlideSml.current.swiper.slideTo(index);
    zoomSlideBig.current.swiper.slideTo(index);
  };
  return (
    <>
      <div className="flex gap-3">
        <div className="slider w-[20%]">
          <Swiper
            ref={zoomSlideSml}
            direction={'vertical'}
            spaceBetween={10}
            slidesPerView={3}
            modules={[Navigation]}
            className="zoomProductSliderThumb h-[500px]"
          >
            <SwiperSlide>
              <div
                className={`item rounded-md cursor-pointer overflow-hidden group ${
                  slideIndex === 0 ? 'opacity-100' : 'opacity-30'
                }`}
                onClick={() => goto(0)}
              >
                <img
                  src="https://i.pinimg.com/736x/22/28/18/2228180667d6570945720139a15c68ba.jpg"
                  alt="Img"
                  className=" w-full transition group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md cursor-pointer overflow-hidden group ${
                  slideIndex === 1 ? 'opacity-100' : 'opacity-30'
                }`}
                onClick={() => goto(1)}
              >
                <img
                  src="https://i.pinimg.com/originals/b3/38/41/b338415ea17cb655ee090bb48eb50b61.jpg"
                  alt="Img"
                  className=" w-full transition group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md cursor-pointer overflow-hidden group ${
                  slideIndex === 2 ? 'opacity-100' : 'opacity-30'
                }`}
                onClick={() => goto(2)}
              >
                <img
                  src="https://i.pinimg.com/736x/eb/da/5a/ebda5a492dbc965c8bafe7350d41f4b7.jpg"
                  alt="Img"
                  className=" w-full transition group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md cursor-pointer overflow-hidden group ${
                  slideIndex === 3 ? 'opacity-100' : 'opacity-30'
                }`}
                onClick={() => goto(3)}
              >
                <img
                  src="https://i.pinimg.com/1200x/4f/ea/99/4fea9951b34ce1f0d913494437e0a163.jpg"
                  alt="Img"
                  className=" w-full transition group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="zoomContainer w-[80%] h-[500px] overflow-hidden rounded-md">
          <Swiper
            ref={zoomSlideBig}
            spaceBetween={0}
            slidesPerView={1}
            modules={[Navigation]}
            className="zoomProductSliderThumb h-[500px]"
          >
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src="https://i.pinimg.com/736x/22/28/18/2228180667d6570945720139a15c68ba.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src="https://i.pinimg.com/originals/b3/38/41/b338415ea17cb655ee090bb48eb50b61.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src="https://i.pinimg.com/736x/eb/da/5a/ebda5a492dbc965c8bafe7350d41f4b7.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src="https://i.pinimg.com/1200x/4f/ea/99/4fea9951b34ce1f0d913494437e0a163.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;

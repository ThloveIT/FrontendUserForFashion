import React, { useState, useEffect, useRef } from 'react';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { fetchProduct } from '../../services/api';

const ProductZoom = ({ productId }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [productImages, setProductImages] = useState([]);
  const zoomSlideBig = useRef();
  const zoomSlideSml = useRef();

  // Lấy apiUrl từ environment variable
  const apiUrl = (import.meta.env.VITE_API_URL || 'https://localhost:7264').replace(/\/api$/, '');
  const cleanImageUrl = (url) => url.startsWith('/api') ? url.replace('/api', '') : url;

  useEffect(() => {
    const loadProduct = async () => {
      if (!productId) {
        console.error('No productId provided to ProductZoom');
        setProductImages([]);
        return;
      }
      try {
        console.log('Fetching product with productId:', productId);
        const product = await fetchProduct(productId);
        console.log('Fetched product:', product);
        if (product && product.productImages && Array.isArray(product.productImages)) {
          const imagesWithBaseUrl = product.productImages.map(img => ({
            ...img,
            imageUrl: `${apiUrl}${cleanImageUrl(img.imageUrl)}`
          }));
          setProductImages(imagesWithBaseUrl);
          setSlideIndex(0);
        } else {
          console.warn('No valid productImages found:', product);
          setProductImages([]);
        }
      } catch (error) {
        console.error('Error fetching product images:', error.message);
        setProductImages([]);
      }
    };
    if (productId) {
      loadProduct();
    }
  }, [productId]);

  const goto = (index) => {
    setSlideIndex(index);
    if (zoomSlideSml.current && zoomSlideBig.current) {
      zoomSlideSml.current.swiper.slideTo(index);
      zoomSlideBig.current.swiper.slideTo(index);
    }
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
            {productImages.length > 0 ? (
              productImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`item rounded-md cursor-pointer overflow-hidden group ${
                      slideIndex === index ? 'opacity-100' : 'opacity-30'
                    }`}
                    onClick={() => goto(index)}
                  >
                    <img
                      src={img.imageUrl}
                      alt={`Product Image ${index + 1}`}
                      className="w-full transition group-hover:scale-105"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; console.error(`Image load failed for ${img.imageUrl}`, e); }}
                    />
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <div className="item rounded-md overflow-hidden h-full flex items-center justify-center">
                  <p>Không có ảnh để hiển thị</p>
                </div>
              </SwiperSlide>
            )}
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
            {productImages.length > 0 ? (
              productImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={img.imageUrl}
                    alt={`Product Image ${index + 1}`}
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; console.error(`Zoom image load failed for ${img.imageUrl}`, e); }}
                  />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <div className="h-full flex items-center justify-center">
                  <p>Không có ảnh để hiển thị</p>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
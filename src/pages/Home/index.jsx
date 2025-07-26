import React, { useState, useEffect } from 'react';
import HomeSlider from '../../components/HomeSlider';
import HomeCatSlider from '../../components/HomeCatSlider';
import ProductsSlider from '../../components/ProductsSlider';
import { TbTruckDelivery } from 'react-icons/tb';
import AdsBannerSlider from '../../components/AdsBannerSlider';
import { fetchFeaturedProducts, fetchPopularProducts, fetchNewProducts } from '../../services/api';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [featuredRes, popularRes, newRes] = await Promise.all([
          fetchFeaturedProducts(),
          fetchPopularProducts(),
          fetchNewProducts(),
        ]);
        console.log('Featured response:', featuredRes);
        console.log('Popular response:', popularRes);
        console.log('New response:', newRes);
        setFeaturedProducts(Array.isArray(featuredRes) ? featuredRes : []);
        setPopularProducts(Array.isArray(popularRes) ? popularRes : []);
        setNewProducts(Array.isArray(newRes) ? newRes : []);
      } catch (err) {
        setError('Failed to fetch products: ' + err.message);
        console.error('API error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <HomeSlider />
      <HomeCatSlider />
      <section className="pt-10 bg-white">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h3 className="text-xl font-bold uppercase">Sản phẩm phổ biến</h3>
              <p className="text-sm font-medium">Đừng bỏ lỡ các ưu đãi trong thời điểm hiện tại</p>
            </div>
          </div>
          <ProductsSlider products={popularProducts} />
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container">
          <div className="freeShipping w-[90%] m-auto p-4 mb-4 border border-[#ff5252] flex items-center justify-between rounded-md">
            <div className="col1 flex items-center">
              <TbTruckDelivery className="text-[40px] mr-2" />
              <div className="font-bold uppercase">Miễn phí vận chuyển</div>
            </div>
            <div className="col2 flex items-center">
              <div className="font-[500]">Miễn phí vận chuyển cho đơn hàng trên 500.000đ</div>
            </div>
            <p className="text-[25px] font-bold text-[#ff5252]">MUA NGAY*</p>
          </div>
          <AdsBannerSlider items={3} />
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container">
          <h3 className="text-2xl font-bold uppercase">Sản phẩm mới nhất</h3>
          <ProductsSlider products={newProducts} />
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container">
          <h3 className="text-2xl font-bold uppercase">Sản phẩm nổi bật</h3>
          <ProductsSlider products={featuredProducts} />
        </div>
      </section>
    </>
  );
};

export default Home;
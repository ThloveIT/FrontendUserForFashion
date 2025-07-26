import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ProductZoom from '../../components/ProductZoom';
import ProductDetailsComponent from '../../components/ProductDetails';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  console.log('Product ID from URL:', productId);

  useEffect(() => {
    if (!productId) {
      console.error('No productId provided in URL');
      navigate('/');
    }
  }, [productId, navigate]);

  if (!productId) return null;

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/" className="link transition">Trang chủ</Link>
            <Link underline="hover" color="inherit" href="/products" className="link transition">Sản phẩm</Link>
            <Link
              underline="hover"
              color="inherit"
              href={`/products/${productId}`}
              className="link transition"
            >
              Chi tiết sản phẩm
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <section className="bg-white py-5">
        <div className="container flex gap-4">
          <div className="productZoomContainer w-[40%] h-[70vh] overflow-hidden">
            <ProductZoom productId={productId} />
          </div>
          <div className="productContent w-[60%] pl-5">
            <ProductDetailsComponent productId={productId} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;

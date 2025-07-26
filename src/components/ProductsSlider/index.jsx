import React, { useState } from 'react';
import { IoGridSharp } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Button, Pagination } from '@mui/material';
import ProductItem from '../ProductItem';
import ProductItemListView from '../ProductItemListView';

const ProductsSlider = (props) => {
  const { products } = props;
  // console.log('Products data in ProductsSlider:', products); // Thêm log để kiểm tra
  const [itemView, setItemView] = useState('grid');
  const [page, setPage] = useState(1);
  const productsPerPage = 6;
  const totalPages = Math.ceil((products?.length || 0) / productsPerPage);

  const startIndex = (page - 1) * productsPerPage;
  const displayedProducts = products?.slice(startIndex, startIndex + productsPerPage) || [];

  return (
    <div className="productsSlider py-5">
      <div className="bg-[#f1f1f1] p-2 w-full mb-3 rounded-md flex items-center justify-between">
        <div className="col1 flex items-center gap-1 itemViewActions">
          <Button
            className={`!size-10 !min-w-10 !rounded-full !text-black ${itemView === 'list' && 'active'}`}
            onClick={() => setItemView('list')}
          >
            <GiHamburgerMenu className="text-[rgba(0,0,0,0.8)] text-lg" />
          </Button>
          <Button
            className={`!size-10 !min-w-10 !rounded-full !text-black ${itemView === 'grid' && 'active'}`}
            onClick={() => setItemView('grid')}
          >
            <IoGridSharp className="text-[rgba(0,0,0,0.8)] text-lg" />
          </Button>
          <span className="text-sm font-medium pl-3">
            Số lượng sản phẩm hiện tại: {products?.length || 0}
          </span>
        </div>
      </div>
      <div className={`grid ${itemView === 'grid' ? 'grid-cols-6' : 'grid-cols-1'} gap-4`}>
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) =>
            itemView === 'grid' ? (
              <ProductItem key={product.id} product={product} />
            ) : (
              <ProductItemListView key={product.id} product={product} />
            )
          )
        ) : (
          <p className="text-center text-gray-500 col-span-6">Không có sản phẩm nào để hiển thị.</p>
        )}
      </div>
      <div className="flex items-center justify-center mt-10">
        <Pagination
          count={totalPages}
          page={page}
          onChange={(event, value) => {
            setPage(value);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      </div>
    </div>
  );
};

export default ProductsSlider;
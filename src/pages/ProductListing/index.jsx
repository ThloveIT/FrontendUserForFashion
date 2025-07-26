import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductItem from '../../components/ProductItem';
import { Button } from '@mui/material';
import { IoGridSharp } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductItemListView from '../../components/ProductItemListView';
import Pagination from '@mui/material/Pagination';
import { searchProducts, fetchDataFromApi } from '../../services/api';
import { MyContext } from '../../App';

const ProductListing = () => {
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [itemView, setItemView] = useState('grid');
  const [anchorEl, setAnchorEl] = useState(null);
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('name-asc');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');
  const itemsPerPage = 10;

  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  useEffect(() => {
    const fetchData = async () => {
      setErrorMessage('');
      try {
        console.log('Fetching products...', { categoryId, query });
        let response;
        if (query) {
          response = await searchProducts(query);
        } else if (categoryId) {
          response = await fetchDataFromApi(`/products/category/${categoryId}`);
        } else {
          response = await fetchDataFromApi('/products');
        }
        console.log('API response:', response);
        if (Array.isArray(response)) {
          const sortedProducts = [...response].sort((a, b) => {
            switch (sortOption) {
              case 'name-asc': return a.productName.localeCompare(b.productName);
              case 'name-desc': return b.productName.localeCompare(a.productName);
              case 'price-asc': return (a.price - (a.discount || 0)) - (b.price - (b.discount || 0));
              case 'price-desc': return (b.price - (b.discount || 0)) - (a.price - (a.discount || 0));
              default: return 0;
            }
          });
          setProducts(sortedProducts);
          setTotalPages(Math.ceil(sortedProducts.length / itemsPerPage));
        } else {
          setProducts([]);
          setTotalPages(1);
          console.warn('API response is not an array:', response);
        }
      } catch (error) {
        console.error('Fetch error:', error);
        setErrorMessage('Không thể kết nối đến server.');
        setProducts([]);
        setTotalPages(1);
      }
    };
    fetchData();
  }, [categoryId, query, sortOption]);

  const paginatedProducts = products.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <section className="py-5">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/" className="link transition">Trang chủ</Link>
          <Link
            underline="hover"
            color="inherit"
            href="/products"
            className="link transition"
          >
            {query || categoryId || 'Thời trang'}
          </Link>
        </Breadcrumbs>
      </div>
      <div className="bg-white p-2 mt-4">
        <div className="container flex gap-3">
          <div className="sidebarWrapper w-[20%] h-full bg-white">
            <Sidebar />
          </div>
          <div className="rightContent w-[80%] py-3">
            <div className="bg-[#f1f1f1] p-2 w-full mb-3 rounded-md flex items-center justify-between">
              <div className="col1 flex items-center gap-1 itemViewActions">
                <Button className={`!size-10 !min-w-10 !rounded-full !text-black ${itemView === 'list' && 'active'}`} onClick={() => setItemView('list')}>
                  <GiHamburgerMenu className="text-[rgba(0,0,0,0.8)] text-lg" />
                </Button>
                <Button className={`!size-10 !min-w-10 !rounded-full !text-black ${itemView === 'grid' && 'active'}`} onClick={() => setItemView('grid')}>
                  <IoGridSharp className="text-[rgba(0,0,0,0.8)] text-lg" />
                </Button>
                <span className="text-sm font-medium pl-3">Số lượng sản phẩm hiện tại: {products.length}</span>
              </div>
              <div className="col2 ml-auto flex items-center justify-end">
                <span className="text-sm font-medium pr-3">Sắp xếp</span>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  className="!bg-white !text-xs !text-[#000] !capitalize"
                >
                  {sortOption === 'name-asc' && 'Tên, A-Z'}
                  {sortOption === 'name-desc' && 'Tên, Z-A'}
                  {sortOption === 'price-asc' && 'Giá tăng dần'}
                  {sortOption === 'price-desc' && 'Giá giảm dần'}
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{ 'aria-labelledby': 'basic-button' }}
                >
                  <MenuItem onClick={() => { setSortOption('name-asc'); handleClose(); }} className="!text-xs !text-[#000] !capitalize">Tên, A-Z</MenuItem>
                  <MenuItem onClick={() => { setSortOption('name-desc'); handleClose(); }} className="!text-xs !text-[#000] !capitalize">Tên, Z-A</MenuItem>
                  <MenuItem onClick={() => { setSortOption('price-asc'); handleClose(); }} className="!text-xs !text-[#000] !capitalize">Giá tăng dần</MenuItem>
                  <MenuItem onClick={() => { setSortOption('price-desc'); handleClose(); }} className="!text-xs !text-[#000] !capitalize">Giá giảm dần</MenuItem>
                </Menu>
              </div>
            </div>
            <div className={`grid ${itemView === 'grid' ? 'grid-cols-4' : 'grid grid-cols-1'} gap-4`}>
              {paginatedProducts.length > 0 ? (
                paginatedProducts.map((product) =>
                  itemView === 'grid' ? (
                    <ProductItem key={product.id} product={product} />
                      ) : (
                    <ProductItemListView key={product.id} product={product} />
                  )
                )
              ) : (
                <p>{errorMessage || 'Không có sản phẩm nào để hiển thị.'}</p>
              )}
            </div>
            <div className="flex items-center justify-center mt-10">
              <Pagination count={totalPages} page={page} onChange={(event, value) => setPage(value)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
import React, { useState } from 'react';
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

const ProductListing = () => {
  const [itemView, setItemView] = useState('grid');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <section className=" py-5">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition"
          >
            Trang chủ
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition"
          >
            Thời trang
          </Link>
        </Breadcrumbs>
      </div>
      <div className=" bg-white p-2 mt-4">
        <div className="container flex gap-3">
          <div className="sidebarWrapper w-[20%] h-full bg-white">
            <Sidebar />
          </div>
          <div className="rightContent w-[80%] py-3">
            <div className=" bg-[#f1f1f1] p-2 w-full mb-3 rounded-md flex items-center justify-between">
              <div className="col1 flex items-center gap-1 itemViewActions">
                <Button
                  className={`!size-10 !min-w-10 !rounded-full !text-black ${
                    itemView === 'list' && 'active'
                  }`}
                  onClick={() => setItemView('list')}
                >
                  <GiHamburgerMenu className=" text-[rgba(0,0,0,0.8)] text-lg" />
                </Button>
                <Button
                  className={`!size-10 !min-w-10 !rounded-full !text-black ${
                    itemView === 'grid' && 'active'
                  }`}
                  onClick={() => setItemView('grid')}
                >
                  <IoGridSharp className=" text-[rgba(0,0,0,0.8)] text-lg" />
                </Button>

                <span className=" text-sm font-medium pl-3">
                  Số lượng sản phẩm hiện tại: 14
                </span>
              </div>
              <div className="col2 ml-auto flex items-center justify-end">
                <span className=" text-sm font-medium pr-3">Sắp xếp</span>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  className=" !bg-white !text-xs !text-[#000] !capitalize"
                >
                  Tên, A-Z
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem
                    onClick={handleClose}
                    className=" !text-xs !text-[#000] !capitalize"
                  >
                    Tên, A-Z
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className=" !text-xs !text-[#000] !capitalize"
                  >
                    Tên, Z-A
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className=" !text-xs !text-[#000] !capitalize"
                  >
                    Giá giảm dần
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className=" !text-xs !text-[#000] !capitalize"
                  >
                    Giá tăng dần
                  </MenuItem>
                </Menu>
              </div>
            </div>
            <div
              className={`grid ${
                itemView === 'grid' ? 'grid-cols-4' : 'grid grid-cols-1'
              } gap-4`}
            >
              {itemView === 'grid' ? (
                <>
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                </>
              ) : (
                <>
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                </>
              )}
            </div>
            <div className=" flex items-center justify-center mt-10">
              <Pagination count={10} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;

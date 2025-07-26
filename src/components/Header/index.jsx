import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from '../Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { FaShoppingCart } from 'react-icons/fa';
import { IoMdGitCompare } from 'react-icons/io';
import { FaHeart } from 'react-icons/fa6';
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';
import { MyContext } from '../../App';
import { Button } from '@mui/material';
import { FaUser } from 'react-icons/fa';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { IoLogOut } from 'react-icons/io5';
import { logoutUser } from '../../utils/api';
import { IoLocation } from 'react-icons/io5';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    background: 'red',
  },
}));
const Header = () => {
  const context = useContext(MyContext);
  const userData = context?.userData;

  const cartItemCount = context?.cartItems?.length || 0;

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setTimeout(() => {
      setAnchorEl(null);
    }, 0);
  };

  const handleLogoutClick = () => {
    context.handleLogout();
  };

  const logout = () => {
    setAnchorEl(null);
    logoutUser('/api/auth/logout', { withCredentials: true }).then((res) => {
      handleClose();
      if (res.statusCode === 200) {
        context.setIsLogin(false);
        localStorage.removeItem('accessToken', res.accesstoken);
        localStorage.removeItem('refreshToken', res.refreshtoken);
        context.openAlertBox('success', res.message);
        navigate('/');
      } else {
        context.openAlertBox('error', res.message);
      }
    });
  };
  return (
    <header className=" bg-white">
      <div className="top-strip py-2 border-b border-gray-300">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className=" text-xs font-medium">
                Giảm đến 50% giá trị sản phẩm
              </p>
            </div>

            <div className=" col2 flex items-center justify-end">
              <ul className="flex items-center space-x-2">
                <li className=" list-none">
                  <Link
                    to="help-center"
                    className=" text-xs link font-medium transition"
                  >
                    Hỗ trợ
                  </Link>
                </li>
                <li className=" opacity-40 cursor-none">|</li>
                <li className=" list-none">
                  <Link
                    to="order-tracking"
                    className=" text-xs link font-medium transition"
                  >
                    Theo dõi đơn hàng
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-4 border-b border-gray-300">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link to="/">
              <img src="/logo.jpg" alt="" />
            </Link>
          </div>
          <div className="col2 w-[45%]">
            <Search />
          </div>
          <div className="col3 w-[30%] flex items-center justify-around">
            <ul className="flex items-center space-x-4">
              {context.isLogin === false ? (
                <li className=" list-none">
                  <Link
                    to="/login"
                    className=" text-xs link font-medium transition"
                  >
                    Đăng nhập
                  </Link>{' '}
                  |
                  <Link
                    to="/register"
                    className=" text-xs link font-medium transition"
                  >
                    {' '}
                    Đăng ký
                  </Link>
                </li>
              ) : (
                <>
                  <li className=" list-none">
                    <div
                      className=" myAccountWrap link flex items-center gap-3 group transition-all cursor-pointer"
                      onClick={handleClick}
                    >
                      <Button className=" !size-8 !min-w-8 !rounded-full !bg-[#f1f1f1] ">
                        {userData?.avatar ? (
                          <img
                            src={userData?.avatar}
                            className=" w-full size-8 min-w-8 rounded-full"
                          />
                        ) : (
                          <FaUser className=" text-lg text-[rgba(0,0,0,0.54)] group-hover:!text-[#ff5252] transition-all" />
                        )}
                      </Button>
                      <div className="info flex flex-col">
                        <h4 className=" font-medium text-xs">
                          {userData?.username}
                        </h4>
                        <span className=" text-[10px]">{userData?.email}</span>
                      </div>
                      <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        slotProps={{
                          paper: {
                            elevation: 0,
                            sx: {
                              overflow: 'visible',
                              filter:
                                'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                              mt: 1.5,
                              '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                              },
                              '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                              },
                            },
                          },
                        }}
                        transformOrigin={{
                          horizontal: 'right',
                          vertical: 'top',
                        }}
                        anchorOrigin={{
                          horizontal: 'right',
                          vertical: 'bottom',
                        }}
                      >
                        <Link to="/my-account" onClick={handleClose}>
                          <MenuItem className="link !text-[13px] flex items-center gap-2">
                            <FaUser className=" text-sm" />
                            Tài khoản
                          </MenuItem>
                        </Link>
                        <Link to="/address" onClick={handleClose}>
                          <MenuItem className="link !text-[13px] flex items-center gap-2">
                            <IoLocation className=" text-sm" />
                            Địa chỉ
                          </MenuItem>
                        </Link>
                        <Link to="/order" onClick={handleClose}>
                          <MenuItem className="link !text-[13px] flex items-center gap-2">
                            <FaShoppingCart className=" text-sm" />
                            Đơn hàng
                          </MenuItem>
                        </Link>
                        <Link to="/love" onClick={handleClose}>
                          <MenuItem className="link !text-[13px] flex items-center gap-2">
                            <FaHeart className=" text-sm" />
                            Danh sách yêu thích
                          </MenuItem>
                        </Link>
                        <Divider />
                        <Link to="/" onClick={handleLogoutClick}>
                          <MenuItem className="link !text-[13px] flex items-center gap-1">
                            <IoLogOut className=" text-lg" />
                            Đăng xuất
                          </MenuItem>
                        </Link>
                      </Menu>
                    </div>
                  </li>
                </>
              )}

              <li className=" list-none">
                <Tooltip title="So sánh">
                  <IconButton aria-label="cart" className="link transition">
                    {/* <StyledBadge badgeContent={4} color="secondary"> */}
                    <StyledBadge color="secondary">
                      <IoMdGitCompare />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li className=" list-none">
                <Tooltip title="Yêu thích">
                  <IconButton aria-label="cart" className="link transition">
                    <StyledBadge color="secondary">
                      <FaHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li className=" list-none">
                <Tooltip title="Giỏ hàng">
                  <IconButton
                    aria-label="cart"
                    className="link transition"
                    onClick={() => context.setOpenCartPanel(true)}
                  >
                    <StyledBadge badgeContent={cartItemCount} color="secondary">
                      <FaShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;

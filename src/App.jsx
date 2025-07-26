import React, { useEffect, useState, createContext, useCallback } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ProductZoom from './components/ProductZoom';
import { IoClose } from 'react-icons/io5';
import ProductDetailsComponent from './components/ProductDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import CartPage from './pages/Cart';
import Verify from './pages/Verify';
import toast, { Toaster } from 'react-hot-toast';
import ForgetPasswordPage from './pages/ForgerPassword';
import Checkout from './pages/Checkout';
import MyAccount from './pages/MyAccount';
import MyList from './pages/MyList';
import Orders from './pages/Orders';
import { fetchDataFromApi, getCart , placeOrder} from './services/api';
import Address from './pages/MyAccount/address';
import TryOnPage from './pages/Tryon';

const MyContext = createContext();

function App() {
  const [openProductDetailsModel, setOpenProductDetailsModel] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('lg');
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [cartItems, setCartItems] = useState([]); // Quản lý giỏ hàng toàn cục

  // Memoize updateCart với useCallback
  const updateCart = useCallback(async (userId) => {
    if (userId) {
      try {
        const cart = await getCart(userId);
        setCartItems(cart.items || []);
      } catch (error) {
        console.error('Error updating cart:', error.response?.data || error.message);
      }
    } else {
      setCartItems([]);
    }
  }, []); // Dependency rỗng, chỉ tạo lại khi component unmount

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    console.log('Token: ', token);
    if (token) {
      setIsLogin(true);
      fetchDataFromApi('/users/profile')
        .then((res) => {
          console.log('Profile response:', res);
          setUserData(res.user || res);
          setIsLogin(true);
          updateCart(res.user?.id || res.id);
        })
        .catch((error) => {
          console.error('Profile fetch error:', error.response?.data || error.message);
          setIsLogin(false);
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
        });
    } else {
      console.log('Không có token trong localStorage');
      setIsLogin(false);
      setUserData(null);
    }
  }, []);

  const [openCartPanel, setOpenCartPanel] = useState(false);

  const toggleDrawerCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const handleCloseProductDetailsModel = () => {
    setOpenProductDetailsModel(false);
  };

  const openAlertBox = (status, msg) => {
    if (status === 'success') {
      toast.success(msg);
    }
    if (status === 'error') {
      toast.error(msg);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsLogin(false);
    setUserData(null);
    setCartItems([]);
    openAlertBox('success', 'Đăng xuất thành công');
    window.location.href = '/login';
  };


  // Hàm đặt hàng
  const placeOrderHandler = async (orderData) => {
    console.log('UserData before order:', userData);
    console.log('OrderData being sent:', orderData);
    if (userData?.id) {
      try {
        await placeOrder(orderData);
        openAlertBox('success', 'Đặt hàng thành công!');
        setCartItems([]); // Xóa giỏ hàng sau khi đặt hàng
        window.location.href = '/order'; // Chuyển đến trang đơn hàng
      } catch (error) {
        console.error('Order error:', error.response?.data || error.message);
        openAlertBox('error', 'Đặt hàng thất bại: ' + (error.response?.data?.message || error.message));
      }
    } else {
      openAlertBox('error', 'Vui lòng đăng nhập để đặt hàng!');
    }
  };

  const values = {
    setOpenProductDetailsModel,
    setOpenCartPanel,
    openCartPanel,
    toggleDrawerCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin,
    userData,
    setUserData,
    handleLogout,
    cartItems,
    updateCart,
    placeOrderHandler,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/productListing" element={<ProductListing />} />
          <Route path="/productListing/search" element={<ProductListing />} /> {/* Thêm route này */}
          <Route path="/category/:categoryId" element={<ProductListing />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/cart" exact element={<CartPage />} />
          <Route path="/check-out" exact element={<Checkout />} />
          <Route path="/my-account" exact element={<MyAccount />} />
          <Route path="/love" exact element={<MyList />} />
          <Route path="/order" exact element={<Orders />} />
          <Route path="/address" exact element={<Address />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/verify" exact element={<Verify />} />
          <Route path="/forget-password" exact element={<ForgetPasswordPage />} />
          <Route path="/try-on" element={<TryOnPage />} />
        </Routes>
        <Footer />
      </MyContext.Provider>
      <Toaster />
      <Dialog
        open={openProductDetailsModel}
        onClose={handleCloseProductDetailsModel}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailsModel"
      >
        <DialogContent>
          <div className="flex w-full productDetailsModelContainer relative">
            <Button
              className="!size-10 !min-w-10 !rounded-full !text-black !absolute !-top-5 !-right-5"
              onClick={handleCloseProductDetailsModel}
            >
              <IoClose className="text-2xl" />
            </Button>
            <div className="col1 w-[40%]">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%] px-5 pt-0 productContent">
              <ProductDetailsComponent />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
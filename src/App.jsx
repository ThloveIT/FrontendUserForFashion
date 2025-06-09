// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import { createContext } from 'react';
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
import { fetchDataFromApi } from './utils/api';
import Address from './pages/MyAccount/address';

const MyContext = createContext();

function App() {
  const [openProductDetailsModel, setOpenProductDetailsModel] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('lg');
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsLogin(true);
      fetchDataFromApi('/users/profile')
        .then((res) => {
          if (res.status === 200) {
            setUserData(res.data);
          } else {
            setIsLogin(false);
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
          }
        })
        .catch(() => {
          setIsLogin(false);
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
        });
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
 //them ham logout
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsLogin(false);
    setUserData(null);
    openAlertBox('success', 'Đăng xuất thành công');
    Navigate('/login');//Dieu huong ve trang dang nhap
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
    handleLogout,  //add them handleLogout va context
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/productListing" exact element={<ProductListing />} />
            <Route path="/product/:id" exact element={<ProductDetails />} />
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
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>
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
    </>
  );
}

export default App;
export { MyContext };
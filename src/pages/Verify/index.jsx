import React, { useContext, useEffect, useState } from 'react';
import OtpBox from '../../components/OtpBox';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { postData } from '../../utils/api';
import { MyContext } from '../../App';

const Verify = () => {
  const context = useContext(MyContext);
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const handleOptChange = (value) => {
    setOtp(value);
  };
  const verifyOtp = (e) => {
    e.preventDefault();

    const actionType = localStorage.getItem('actionType');
    if (actionType !== 'forget-password') {
      postData('/api/auth/verify-email', {
        email: localStorage.getItem('emailUser'),
        otp: otp,
      }).then((res) => {
        if (res.statusCode === 200) {
          context.openAlertBox('success', res.message);
          localStorage.removeItem('emailUser');
          navigate('/login');
        } else {
          context.openAlertBox('error', res.message);
        }
      });
    } else {
      postData('/api/auth/forget-password/verify', {
        email: localStorage.getItem('emailUser'),
        otp: otp,
      }).then((res) => {
        if (res.statusCode === 200) {
          context.openAlertBox('success', res.message);
          localStorage.setItem('okEmail', localStorage.getItem('emailUser'));
          localStorage.removeItem('emailUser');
          localStorage.removeItem('actionType');
          navigate('/forget-password');
        } else {
          context.openAlertBox('error', res.message);
        }
      });
    }
  };
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-10">
          <div className=" text-center flex items-center justify-center">
            <img src="/verify2.png" width={80} />
          </div>
          <h3 className=" text-center font-semibold text-[16px] text-black uppercase my-2">
            Xác thực tài khoản
          </h3>
          <p className=" !text-center mb-5">
            Mã OTP đã được gửi về{' '}
            <span className=" text-primary font-medium">
              {localStorage.getItem('emailUser')}
            </span>
            .<br />
            Vui lòng kiểm tra hòm thư
          </p>

          <form onSubmit={verifyOtp}>
            <OtpBox length={6} onChange={handleOptChange} />

            <div className=" flex items-center justify-center mt-6">
              <Button type="submit" className=" btn-org !px-8 !normal-case">
                Xác nhận
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Verify;

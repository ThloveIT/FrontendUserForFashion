// src/pages/Register.jsx
import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import { AiOutlineMail } from 'react-icons/ai';
import { BsKey } from 'react-icons/bs';
import { CiPhone } from 'react-icons/ci';
import { CiLocationOn } from 'react-icons/ci';
import { CiText } from 'react-icons/ci';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { IoEyeOff } from 'react-icons/io5';
import { IoEye } from 'react-icons/io5';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';
import { CiUser } from 'react-icons/ci';
import { MyContext } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';
import { register } from '../../services/api';
import { useForm } from 'react-hook-form'; // [ADD] Thêm react-hook-form để quản lý form
import { yupResolver } from '@hookform/resolvers/yup'; // [ADD] Thêm yup để validate
import * as yup from 'yup';

// [ADD] Định nghĩa schema validation với yup
const schema = yup.object({
  username: yup.string().required('Tên người dùng không được để trống'),
  email: yup.string().email('Email không hợp lệ').required('Email không được để trống'),
  password: yup
    .string()
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
    .required('Mật khẩu không được để trống'),
  fullName: yup.string().nullable(), // Không bắt buộc
  phoneNumber: yup.string().nullable(), // Không bắt buộc
  address: yup.string().nullable(), // Không bắt buộc
}).required();

const Register = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true); // [ADD] Thêm trạng thái cho checkbox

  // [FIX] Sử dụng react-hook-form thay vì useState
  const { register: formRegister, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      fullName: '',
      phoneNumber: '',
      address: '',
    },
  });

  const onSubmit = (data) => {
    if (!agreeTerms) { // [ADD] Kiểm tra trạng thái checkbox
      context.openAlertBox('error', 'Bạn phải đồng ý với các điều khoản và chính sách bảo mật');
      return;
    }

    setIsLoading(true);

    // [FIX] Chuẩn hóa dữ liệu gửi lên API để khớp với RegisterVM
    const registerData = {
      userName: data.username,
      email: data.email,
      password: data.password,
      fullName: data.fullName || null, // [FIX] Đổi từ fullname thành fullName để khớp với RegisterVM
      phoneNumber: data.phoneNumber || null, // [FIX] Đổi từ phonenumber thành phoneNumber
      address: data.address || null,
    };

    // Call API
    register(registerData)
      .then((res) => {
        if (res.status === 200) {
          setIsLoading(false);
          localStorage.setItem('emailUser', data.email);
          reset(); // [FIX] Sử dụng reset của react-hook-form thay vì setFormField
          context.openAlertBox('success', 'Đăng ký thành công! Vui lòng xác minh email.');
          navigate('/verify');
        } else {
          context.openAlertBox('error', res.data.message || 'Đăng ký thất bại');
          setIsLoading(false);
        }
      })
      .catch((error) => {
        // [FIX] Cải thiện xử lý lỗi
        const errorMessage = error.response?.data?.message || error.response?.data || 'Lỗi kết nối đến máy chủ';
        context.openAlertBox('error', errorMessage);
        setIsLoading(false);
      });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="font-semibold text-[16px] text-black uppercase mb-8">
            Đăng ký tài khoản
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-5">
            <div className="form-group w-full mb-5 flex items-center gap-3">
              <AiOutlineMail className="mt-4 text-2xl" />
              <TextField
                id="email"
                name="email"
                label="Nhập email của bạn"
                variant="standard"
                className="w-full"
                disabled={isLoading}
                {...formRegister('email')} // [FIX] Sử dụng react-hook-form
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </div>
            <div className="form-group w-full mb-5 flex items-center gap-3">
              <CiUser className="mt-4 text-2xl" />
              <TextField
                id="username"
                name="username"
                label="Nhập tên người dùng của bạn" // [FIX] Cập nhật label để rõ ràng hơn
                variant="standard"
                className="w-full"
                disabled={isLoading}
                {...formRegister('username')}
                error={!!errors.username}
                helperText={errors.username?.message}
              />
            </div>
            <div className="form-group w-full mb-5 flex items-center gap-3">
              <CiText className="mt-4 text-2xl" />
              <TextField
                id="fullName"
                name="fullName"
                label="Nhập họ tên của bạn"
                variant="standard"
                className="w-full"
                disabled={isLoading}
                {...formRegister('fullName')} // [FIX] Đổi từ fullname thành fullName
                error={!!errors.fullName}
                helperText={errors.fullName?.message}
              />
            </div>
            <div className="form-group w-full mb-5 flex items-center gap-3">
              <CiPhone className="mt-4 text-2xl" />
              <TextField
                id="phoneNumber"
                name="phoneNumber"
                label="Nhập SDT của bạn"
                variant="standard"
                className="w-full"
                disabled={isLoading}
                {...formRegister('phoneNumber')} // [FIX] Đổi từ phonenumber thành phoneNumber
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber?.message}
              />
            </div>
            <div className="form-group w-full mb-5 flex items-center gap-3">
              <CiLocationOn className="mt-4 text-2xl" />
              <TextField
                id="address"
                name="address"
                label="Nhập địa chỉ của bạn"
                variant="standard"
                className="w-full"
                disabled={isLoading}
                {...formRegister('address')}
                error={!!errors.address}
                helperText={errors.address?.message}
              />
            </div>
            <div className="form-group w-full mb-5 flex items-center gap-3">
              <BsKey className="mt-4 text-2xl" />
              <FormControl sx={{ width: '25ch' }} variant="standard" className="!w-full">
                <InputLabel htmlFor="password">Mật khẩu</InputLabel>
                <Input
                  className="!w-full"
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  disabled={isLoading}
                  {...formRegister('password')}
                  error={!!errors.password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiển thị mật khẩu'}
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                      >
                        {showPassword ? <IoEye /> : <IoEyeOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                )}
              </FormControl>
            </div>

            <FormControlLabel
              control={
                <Checkbox
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)} // [ADD] Xử lý trạng thái checkbox
                  size="medium"
                  className="!ml-0.5"
                />
              }
              label="Tôi đồng ý với các điều khoản và chính sách bảo mật"
              required
            />
            <div className="flex items-center mt-1 mb-5 w-full">
              <Button
                disabled={isLoading}
                type="submit"
                className={`${isLoading ? 'opacity-70' : ''} btn-org !w-full`}
              >
                {isLoading ? <CircularProgress color="inherit" /> : 'Đăng ký'}
              </Button>
            </div>
            <p className="mb-5">
              Đã có tài khoản?{' '}
              <Link to="/login" className="link font-medium">
                Đăng nhập
              </Link>
            </p>
            <div className="flex items-center justify-center w-full mb-5">
              <div className="flex-1 h-px bg-[rgba(0,0,0,0.4)]"></div>
              <span className="mx-4 text-sm font-medium uppercase">hoặc</span>
              <div className="flex-1 h-px bg-[rgba(0,0,0,0.4)]"></div>
            </div>
            <div className="flex items-center gap-5 justify-between mx-12 mb-5">
              <Button className="!w-[50%] gap-5 !text-sm !border !border-[rgba(0,0,0,0.4)] !text-black">
                <FcGoogle className="text-lg" /> Google
              </Button>
              <Button className="!w-[50%] gap-5 !text-sm !border !border-[rgba(0,0,0,0.4)] !text-black">
                <FaFacebookSquare className="text-blue-700 text-lg" /> Facebook
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
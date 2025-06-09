import React, { useContext, useState } from 'react';
import { BsKey } from 'react-icons/bs';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { IoEyeOff } from 'react-icons/io5';
import { IoEye } from 'react-icons/io5';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';
import { postData } from '../../utils/api';

const ForgetPasswordPage = () => {
  const context = useContext(MyContext);

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [formField, setFormField] = useState({
    password: '',
    comfirmPass: '',
  });

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword2 = (event) => {
    event.preventDefault();
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormField({
      ...formField,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (formField.password.trim() === '') {
      context.openAlertBox('error', 'Mật khẩu dùng không được để trống');
      setIsLoading(false);
      return;
    }
    if (formField.comfirmPass.trim() === '') {
      context.openAlertBox(
        'error',
        'Xác nhận mật khẩu dùng không được để trống',
      );
      setIsLoading(false);
      return;
    }
    if (formField.password.trim() !== formField.comfirmPass.trim()) {
      context.openAlertBox(
        'error',
        'Mật khẩu không khớp nhau vui lòng nhập lại',
      );
      setIsLoading(false);
      return;
    }
    postData(`/api/auth/reset-password`, {
      ...formField,
      email: localStorage.getItem('okEmail'),
    }).then((res) => {
      if (res.statusCode === 200) {
        setIsLoading(false);
        localStorage.removeItem('okEmail');
        context.openAlertBox('success', res.message);
        setFormField({
          username: '',
          password: '',
        });
        navigate('/login');
      } else {
        context.openAlertBox('error', res.message);
        setIsLoading(false);
      }
    });
  };

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className=" font-semibold text-[16px] text-black uppercase mb-8">
            Quên mật khẩu
          </h3>
          <form onSubmit={handleSubmit} className=" w-full mt-5">
            <div className=" form-group w-full mb-5 flex items-center gap-3">
              <BsKey className=" mt-4 text-2xl" />
              <FormControl
                sx={{ width: '25ch' }}
                variant="standard"
                className=" !w-full"
              >
                <InputLabel htmlFor="password">Mật khẩu</InputLabel>
                <Input
                  className=" !w-full"
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  onChange={onChangeInput}
                  value={formField.password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword ? 'Ẩn mật khẩu' : 'Hiển thị mật khẩu'
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                      >
                        {showPassword ? <IoEye /> : <IoEyeOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div className=" form-group w-full mb-5 flex items-center gap-3">
              <BsKey className=" mt-4 text-2xl" />
              <FormControl
                sx={{ width: '25ch' }}
                variant="standard"
                className=" !w-full"
              >
                <InputLabel htmlFor="password">Xác nhận mật khẩu</InputLabel>
                <Input
                  className=" !w-full"
                  id="comfirmPass"
                  type={showPassword2 ? 'text' : 'password'}
                  name="comfirmPass"
                  onChange={onChangeInput}
                  value={formField.comfirmPass}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword2 ? 'Ẩn mật khẩu' : 'Hiển thị mật khẩu'
                        }
                        onClick={handleClickShowPassword2}
                        onMouseDown={handleMouseDownPassword2}
                        onMouseUp={handleMouseUpPassword2}
                      >
                        {showPassword2 ? <IoEye /> : <IoEyeOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>

            <div className=" flex items-center justify-center w-full my-3">
              <Button
                disabled={isLoading}
                type="submit"
                className={`${
                  isLoading ? 'opacity-70' : ''
                } btn-org !px-12 !py-2 !normal-case`}
              >
                {isLoading ? (
                  <CircularProgress color="inherit" />
                ) : (
                  'Đặt lại mật khẩu'
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgetPasswordPage;

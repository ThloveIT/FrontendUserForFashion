import React, { useContext, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';
import { IoLocation, IoLogOut } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { MyContext } from '../../App';
import { uploadImage } from '../../utils/api';

const AccountSidebar = () => {
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);

  const context = useContext(MyContext);

  useEffect(() => {
    const userAvatar = [];
    if (
      context.userData?.avatar !== null &&
      context.userData?.avatar !== undefined &&
      context.userData?.avatar !== ''
    ) {
      userAvatar.push(context.userData?.avatar);
      setPreviews(userAvatar);
    }
  }, [context.userData]);

  let img_arr = [];
  let uniqueArray = [];
  let selectedImages = [];

  const formdata = new FormData();

  const onChangeFile = async (e, apiEndPoint) => {
    try {
      setPreviews([]);

      const files = e.target.files;
      setUploading(true);
      for (let i = 0; i < files.length; i++) {
        if (
          files[i] &&
          (files[i].type === 'image/jpeg' ||
            files[i].type === 'image/jpg' ||
            files[i].type === 'image/png' ||
            files[i].type === 'image/webp')
        ) {
          const file = files[i];
          selectedImages.push(file);
          formdata.append('avatar', file);
          console.log(formdata);
          uploadImage('/api/users/user-avatar', formdata).then((res) => {
            setUploading(false);
            let avatar = [];
            avatar.push(res.avatar);
            setPreviews(avatar);
          });
        } else {
          context.openAlertBox('error', 'Chỉ cho phép tệp ảnh');
          setUploading(false);
          return false;
        }
      }
    } catch (error) {
      setUploading(false);
      console.log(error);
    }
  };

  return (
    <div className="card shadow-md bg-white rounded-md sticky top-2.5">
      <div className=" w-full p-3 flex items-center justify-center flex-col">
        <div className=" size-[110px] rounded-full overflow-hidden mb-4 relative group flex items-center justify-center bg-gray-200">
          {uploading ? (
            <CircularProgress color="inherit" />
          ) : (
            <>
              {previews.length !== 0 ? (
                previews?.map((img, index) => {
                  return (
                    <img
                      src={img}
                      key={index}
                      alt="avatar"
                      className=" size-full"
                    />
                  );
                })
              ) : (
                <img src="user1.jpg" alt="" className=" size-full" />
              )}
              <div className=" overlay size-full absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center opacity-0 transition-all group-hover:opacity-100 duration-500">
                <FaCloudUploadAlt className=" text-white text-xl" />
                <input
                  type="file"
                  className=" absolute top-0 left-0 size-full opacity-0"
                  onChange={(e) => onChangeFile(e, '/api/users/user-avatar')}
                  name="avatar"
                  accept="image/*"
                />
              </div>
            </>
          )}
        </div>
        <h3>{context.userData?.username}</h3>
      </div>
      <ul className=" list-none pb-2 myAccountTabs">
        <li className=" w-full group">
          <NavLink to="/my-account" end className={''}>
            <Button
              className=" !w-full !pl-16 !rounded-none flex items-center !justify-start gap-2 !capitalize !font-medium !text-[15px] group-hover:!text-[#ff5252]"
              color="inherit"
            >
              <FaUser />
              Thông tin
            </Button>
          </NavLink>
        </li>
        <li className=" w-full group">
          <NavLink to="/address" end className={''}>
            <Button
              className=" !w-full !pl-16 !rounded-none flex items-center !justify-start gap-2 !capitalize !font-medium !text-[15px] group-hover:!text-[#ff5252]"
              color="inherit"
            >
              <IoLocation />
              Địa chỉ
            </Button>
          </NavLink>
        </li>
        <li className=" w-full group">
          <NavLink to="/order" end className={''}>
            <Button
              className=" !w-full !pl-16 !rounded-none flex items-center !justify-start gap-2 !capitalize !font-medium !text-[15px] group-hover:!text-[#ff5252]"
              color="inherit"
            >
              <FaShoppingCart />
              Đơn hàng
            </Button>
          </NavLink>
        </li>
        <li className=" w-full group">
          <NavLink to="/love" end className={''}>
            <Button
              className=" !w-full !pl-16 !rounded-none flex items-center !justify-start gap-2 !capitalize !font-medium !text-[15px] group-hover:!text-[#ff5252]"
              color="inherit"
            >
              <FaHeart />
              Yêu thích
            </Button>
          </NavLink>
        </li>
        {/* <li className=" w-full group">
          <NavLink to="/logout" end className={''}>
            <Button
              className=" !w-full !pl-16 !rounded-none flex items-center !justify-start gap-1 !capitalize !font-medium !text-[15px] group-hover:!text-[#ff5252]"
              color="inherit"
            >
              <IoLogOut className=" text-xl" />
              Đăng xuất
            </Button>
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default AccountSidebar;

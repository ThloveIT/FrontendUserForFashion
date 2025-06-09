import React, { useContext } from 'react';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { PiKeyReturnLight } from 'react-icons/pi';
import { IoWalletOutline } from 'react-icons/io5';
import { LiaGiftSolid } from 'react-icons/lia';
import { BiSupport } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { IoChatboxOutline } from 'react-icons/io5';
import { Button } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { TiSocialFacebook } from 'react-icons/ti';
import { FaInstagram } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import Drawer from '@mui/material/Drawer';
import CartPanel from '../CartPanel';
import { MyContext } from '../../App';
import { IoClose } from 'react-icons/io5';

const Footer = () => {
  const context = useContext(MyContext);

  return (
    <>
      <footer className=" py-6 bg-[#f8f8f8] pt-12 border-t border-cyan-950">
        <div className="container">
          <div className="flex items-center justify-center gap-5 mb-12">
            <div className=" w-[20%] col flex items-center justify-center text-center flex-col group">
              <LiaShippingFastSolid className=" text-6xl group-hover:text-[#ff5252] transition-all duration-300 group-hover:-translate-y-1" />
              <h3 className=" text-lg font-semibold mt-3">
                Miễn phí vận chuyển
              </h3>
              <p className=" !text-center text-[13px] font-medium group-hover:text-[#ff5252]">
                Cho tất cả đơn hàng có giá trị từ 500.000đ
              </p>
            </div>

            <div className=" w-[20%] col flex items-center justify-center text-center flex-col group">
              <PiKeyReturnLight className=" text-6xl group-hover:text-[#ff5252] transition-all duration-300 group-hover:-translate-y-1" />
              <h3 className=" text-lg font-semibold mt-3">Hoàn trả</h3>
              <p className=" !text-center text-[13px] font-medium group-hover:text-[#ff5252]">
                Cho đơn hàng mua trong vòng 30 ngày
              </p>
            </div>
            <div className=" w-[20%] col flex items-center justify-center text-center flex-col group">
              <IoWalletOutline className=" text-6xl group-hover:text-[#ff5252] transition-all duration-300 group-hover:-translate-y-1" />
              <h3 className=" text-lg font-semibold mt-3">Thanh toán</h3>
              <p className=" !text-center text-[13px] font-medium group-hover:text-[#ff5252]">
                Thanh toán bằng thẻ nhanh chóng
              </p>
            </div>
            <div className=" w-[20%] col flex items-center justify-center text-center flex-col group">
              <LiaGiftSolid className=" text-6xl group-hover:text-[#ff5252] transition-all duration-300 group-hover:-translate-y-1" />
              <h3 className=" text-lg font-semibold mt-3">Quà tặng</h3>
              <p className=" !text-center text-[13px] font-medium group-hover:text-[#ff5252]">
                Phần quả hấp dẫn cho đơn hàng đầu tiên
              </p>
            </div>
            <div className=" w-[20%] col flex items-center justify-center text-center flex-col group">
              <BiSupport className=" text-6xl group-hover:text-[#ff5252] transition-all duration-300 group-hover:-translate-y-1" />
              <h3 className=" text-lg font-semibold mt-3">Hỗ trợ 24/7</h3>
              <p className=" !text-center text-[13px] font-medium group-hover:text-[#ff5252]">
                Liên hệ mọi lúc
              </p>
            </div>
          </div>
          <hr />
          <div className="footer flex py-8">
            <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.1)]">
              <h2 className="text-xl font-semibold mb-4">
                Liên hệ với chúng tôi
              </h2>
              <p className=" text-sm font-normal pb-4">
                BoBoBo - Siêu Thị Tiện Lợi <br /> Kim Sơn - Ninh Bình
              </p>
              <Link to="mailto:vu65617@gmail.com" className="link text-sm">
                vu65617@gmail.com
              </Link>
              <span className=" text-sm font-semibold block w-full mt-3 mb-5 text-[#ff5252]">
                (+ 84) 123 588 899
              </span>
              <div className="flex items-center gap-2">
                <IoChatboxOutline className=" text-3xl text-[#ff5252]" />
                <span className=" text-lg font-semibold">
                  Trò chuyện trực tuyến
                  <br />
                  Nhân viên hỗ trợ
                </span>
              </div>
            </div>

            <div className="part2 w-[40%] flex ">
              <div className="part2_col1 w-[50%] pl-8">
                <h2 className=" text-lg font-semibold mb-4">Sản phẩm</h2>
                <ul className="list">
                  <li className=" list-none text-sm w-full mb-2">
                    <Link to="/" className="link">
                      Giảm giá
                    </Link>
                  </li>
                  <li className=" list-none text-sm w-full mb-2">
                    <Link to="/" className="link">
                      Sản phẩm mới
                    </Link>
                  </li>
                  <li className=" list-none text-sm w-full mb-2">
                    <Link to="/" className="link">
                      Giảm cao nhất
                    </Link>
                  </li>
                  <li className=" list-none text-sm w-full mb-2">
                    <Link to="/" className="link">
                      Ưu đãi hấp dẫn
                    </Link>
                  </li>
                  <li className=" list-none text-sm w-full mb-2">
                    <Link to="/" className="link">
                      Địa chỉ
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="part2_col2 w-[50%]">
                <h2 className=" text-lg font-semibold mb-4">Công ty</h2>
                <ul className="list">
                  <li className=" list-none text-sm w-full mb-2">
                    <Link to="/" className="link">
                      Đơn vị vận chuyển
                    </Link>
                  </li>
                  <li className=" list-none text-sm w-full mb-2">
                    <Link to="/" className="link">
                      Thông tin pháp lý
                    </Link>
                  </li>
                  <li className=" list-none text-sm w-full mb-2">
                    <Link to="/" className="link">
                      Điều khoản và điều kiện
                    </Link>
                  </li>
                  <li className=" list-none text-sm w-full mb-2">
                    <Link to="/" className="link">
                      Về chúng tôi
                    </Link>
                  </li>
                  <li className=" list-none text-sm w-full mb-2">
                    <Link to="/" className="link">
                      Thanh toán an toàn
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="part2 w-[35%] flex pl-8 flex-col pr-8">
              <h2 className="text-xl font-semibold mb-4">Đăng ký nhận tin</h2>
              <p className=" text-[13px]">
                Đăng ký để nhận được những đợt giảm giá sốc từ chúng tôi
              </p>
              <form className=" mt-5">
                <input
                  type="text"
                  className=" w-full h-[45px] border border-[rgba(0,0,0,0.4)] outline-none px-4 rounded-sm mb-4 focus:border-[#000]"
                  placeholder="Nhập email của bạn"
                />
                <Button className=" btn-org !mb-3">Đăng ký</Button>

                <FormControlLabel
                  control={<Checkbox defaultChecked size="small" />}
                  label="Tôi đồng ý với các điều khoản và chính sách bảo mật"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip border-t border-[rgba(0,0,0,0.8)] py-3">
        <div className="container flex items-center justify-between">
          <ul className=" flex items-center gap-4">
            <li className=" list-none">
              <Link
                to="/"
                target="_blank"
                className=" size-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all"
              >
                <TiSocialFacebook className=" text-[15px] group-hover:text-white" />
              </Link>
            </li>

            <li className=" list-none">
              <Link
                to="/"
                target="_blank"
                className=" size-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all"
              >
                <FaInstagram className=" text-[15px] group-hover:text-white" />
              </Link>
            </li>

            <li className=" list-none">
              <Link
                to="/"
                target="_blank"
                className=" size-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all"
              >
                <SiZalo className=" text-[15px] group-hover:text-white" />
              </Link>
            </li>
          </ul>

          <p className=" text-xs uppercase">
            © 2024 - Bản quyền thuộc về BOBOBO
          </p>
          <div className="flex items-center gap-4">
            <img
              src="https://simg.zalopay.com.vn/zlp-website/assets/new_logo_6c5db2d21b.svg"
              alt=""
              className=" w-16 h-8 rounded-xs"
            />
            <img
              src="https://static.ybox.vn/2021/9/3/1631085786958-Thi%E1%BA%BFt%20k%E1%BA%BF%20kh%C3%B4ng%20t%C3%AAn%20-%202021-09-08T002253.248.png"
              alt=""
              className=" w-16 h-8 rounded-xs"
            />
            <img
              src="https://stcd02206177151.cloud.edgevnpay.vn/assets/images/logo-icon/logo-primary.svg"
              alt=""
              className=" w-16 h-8 rounded-xs"
            />
          </div>
        </div>
      </div>

      <Drawer
        open={context.openCartPanel}
        onClose={context.toggleDrawerCartPanel(false)}
        anchor="right"
        className="cartPanel"
      >
        <div className=" flex items-center justify-between gap-8 p-4 border-b border-b-[rgba(0,0,0,0.4)] overflow-hidden">
          <h1 className=" text-lg font-medium">Giỏ hàng của tôi (5)</h1>
          <IoClose
            className=" text-2xl cursor-pointer"
            onClick={context.toggleDrawerCartPanel(false)}
          />
        </div>

        <CartPanel />
      </Drawer>
    </>
  );
};

export default Footer;

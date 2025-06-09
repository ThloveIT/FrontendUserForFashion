import React, { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ProductZoom from '../../components/ProductZoom';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import ProductsSlider from '../../components/ProductsSlider';
import ProductDetailsComponent from '../../components/ProductDetails';

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className=" py-5">
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
              Sản phẩm
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition"
            >
              Chi tiết sản phẩm
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <section className=" bg-white py-5">
        <div className="container flex gap-4">
          <div className="productZoomContainer w-[40%] h-[70vh] overflow-hidden">
            <ProductZoom />
          </div>
          <div className="productContent w-[60%] pl-5">
            <ProductDetailsComponent />
          </div>
        </div>

        <div className="container pt-10">
          <div className=" flex items-center gap-8 mb-5">
            <span
              className={`link text-xl cursor-pointer font-medium ${
                activeTab === 0 ? 'text-primary' : ''
              }`}
              onClick={() => setActiveTab(0)}
            >
              Mô tả
            </span>

            <span
              className={`link text-xl cursor-pointer font-medium ${
                activeTab === 1 ? 'text-primary' : ''
              }`}
              onClick={() => setActiveTab(1)}
            >
              Thông tin chi tiết
            </span>

            <span
              className={`link text-xl cursor-pointer font-medium ${
                activeTab === 2 ? 'text-primary' : ''
              }`}
              onClick={() => setActiveTab(2)}
            >
              Bình luận (5)
            </span>
          </div>

          {activeTab === 0 && (
            <div className=" shadow-md w-full p-5 rounded-md">
              <p>
                Biểu tượng của sự nhẹ nhàng và tinh tế, chim ruồi gợi lên sự tò
                mò và niềm vui. Bộ sưu tập PolyFaune của Studio Design có các
                sản phẩm cổ điển với họa tiết nhiều màu sắc, lấy cảm hứng từ
                nghệ thuật gấp giấy origami truyền thống của Nhật Bản. Để mặc
                với quần chino hoặc quần jean. Quy trình in vải thăng hoa mang
                lại khả năng hiển thị màu sắc đặc biệt và màu sắc được đảm bảo
                theo thời gian.
              </p>
              <h4 className=" my-2.5 font-semibold">
                Đoạn văn Lorem Ipsum tiêu chuẩn, được sử dụng từ năm 1500
              </h4>

              <p>
                Biểu tượng của sự nhẹ nhàng và tinh tế, chim ruồi gợi lên sự tò
                mò và niềm vui. Bộ sưu tập PolyFaune của Studio Design có các
                sản phẩm cổ điển với họa tiết nhiều màu sắc, lấy cảm hứng từ
                nghệ thuật gấp giấy origami truyền thống của Nhật Bản. Để mặc
                với quần chino hoặc quần jean. Quy trình in vải thăng hoa mang
                lại khả năng hiển thị màu sắc đặc biệt và màu sắc được đảm bảo
                theo thời gian.
              </p>
              <h4 className=" my-2.5 font-semibold">
                Đoạn văn Lorem Ipsum tiêu chuẩn, được sử dụng từ năm 1500
              </h4>

              <p>
                Biểu tượng của sự nhẹ nhàng và tinh tế, chim ruồi gợi lên sự tò
                mò và niềm vui. Bộ sưu tập PolyFaune của Studio Design có các
                sản phẩm cổ điển với họa tiết nhiều màu sắc, lấy cảm hứng từ
                nghệ thuật gấp giấy origami truyền thống của Nhật Bản. Để mặc
                với quần chino hoặc quần jean. Quy trình in vải thăng hoa mang
                lại khả năng hiển thị màu sắc đặc biệt và màu sắc được đảm bảo
                theo thời gian.
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div className="relative overflow-x-auto shadow-md">
              <table className="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-300 border-collapse border border-gray-300 dark:border-gray-600">
                <tbody>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <th
                      scope="col"
                      className="px-6 py-4 font-semibold !text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600"
                    >
                      Tên sản phẩm
                    </th>
                    <td className="px-6 py-4 !text-gray-900 dark:text-white">
                      Áo sơ mi Jean cổ bẻ Layer Regular Fit dành cho nam
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <th
                      scope="col"
                      className="px-6 py-4 font-semibold !text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600"
                    >
                      Thương hiệu
                    </th>
                    <td className="px-6 py-4 text-gray-900">RARE RABBIT</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <th
                      scope="col"
                      className="px-6 py-4 font-semibold !text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600"
                    >
                      Màu sắc
                    </th>
                    <td className="px-6 py-4 text-gray-900">Xanh</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <th
                      scope="col"
                      className="px-6 py-4 font-semibold !text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600"
                    >
                      Giá bán
                    </th>
                    <td className="px-6 py-4 !text-red-500 font-bold">
                      240.000đ
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <th
                      scope="col"
                      className="px-6 py-4 font-semibold !text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600"
                    >
                      Chất liệu
                    </th>
                    <td className="px-6 py-4 text-gray-900">Jean</td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <th
                      scope="col"
                      className="px-6 py-4 font-semibold !text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600"
                    >
                      Loại
                    </th>
                    <td className="px-6 py-4 text-gray-900">Thời trang</td>
                  </tr>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 font-semibold !text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600"
                    >
                      Style
                    </th>
                    <td className="px-6 py-4 text-gray-900">
                      Phong cách trẻ trung, phù hợp cho các buổi tiệc, gặp gỡ
                      bạn bè
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 2 && (
            <div className=" shadow-md w-[80%] p-5 rounded-md">
              <div className=" w-full productReviewsContainer">
                <h2 className=" text-xl font-semibold">
                  Đặt câu hỏi cho sản phẩm
                </h2>
                <div className=" reviewScroll w-full max-h-80 overflow-y-scroll overflow-x-hidden ml-4 pr-5">
                  <div className=" review pb-5 border-b border-b-[rgba(0,0,0,0.1)] w-full flex items-center justify-between mt-5">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img size-20 overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFzFagc0G6d1opo0x0DIPZtWE087ymFeUehA&s"
                          alt="avatar"
                          className=" w-full"
                        />
                      </div>
                      <div className=" w-[80%]">
                        <div className=" flex items-center gap-12">
                          <h4 className=" text-[16px] font-semibold">Rosé</h4>
                          <h5 className=" text-xs font-semibold text-primary">
                            14/2/2025
                          </h5>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={3} readOnly />
                  </div>
                  <div className=" review pb-5 border-b border-b-[rgba(0,0,0,0.1)] w-full flex items-center justify-between mt-5">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img size-20 overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFzFagc0G6d1opo0x0DIPZtWE087ymFeUehA&s"
                          alt="avatar"
                          className=" w-full"
                        />
                      </div>
                      <div className=" w-[80%]">
                        <div className=" flex items-center gap-12">
                          <h4 className=" text-[16px] font-semibold">Rosé</h4>
                          <h5 className=" text-xs font-semibold text-primary">
                            14/2/2025
                          </h5>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={3} readOnly />
                  </div>
                  <div className=" review pb-5 border-b border-b-[rgba(0,0,0,0.1)] w-full flex items-center justify-between mt-5">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img size-20 overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFzFagc0G6d1opo0x0DIPZtWE087ymFeUehA&s"
                          alt="avatar"
                          className=" w-full"
                        />
                      </div>
                      <div className=" w-[80%]">
                        <div className=" flex items-center gap-12">
                          <h4 className=" text-[16px] font-semibold">Rosé</h4>
                          <h5 className=" text-xs font-semibold text-primary">
                            14/2/2025
                          </h5>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={3} readOnly />
                  </div>
                  <div className=" review pb-5 border-b border-b-[rgba(0,0,0,0.1)] w-full flex items-center justify-between mt-5">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img size-20 overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFzFagc0G6d1opo0x0DIPZtWE087ymFeUehA&s"
                          alt="avatar"
                          className=" w-full"
                        />
                      </div>
                      <div className=" w-[80%]">
                        <div className=" flex items-center gap-12">
                          <h4 className=" text-[16px] font-semibold">Rosé</h4>
                          <h5 className=" text-xs font-semibold text-primary">
                            14/2/2025
                          </h5>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={3} readOnly />
                  </div>
                  <div className=" review pb-5 border-b border-b-[rgba(0,0,0,0.1)] w-full flex items-center justify-between mt-5">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img size-20 overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFzFagc0G6d1opo0x0DIPZtWE087ymFeUehA&s"
                          alt="avatar"
                          className=" w-full"
                        />
                      </div>
                      <div className=" w-[80%]">
                        <div className=" flex items-center gap-12">
                          <h4 className=" text-[16px] font-semibold">Rosé</h4>
                          <h5 className=" text-xs font-semibold text-primary">
                            14/2/2025
                          </h5>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={3} readOnly />
                  </div>
                </div>

                <br />
                <div className="reviewForm bg-[#fafafa] p-4 rounded-md">
                  <h2 className=" text-lg font-semibold mb-4">
                    Thêm bình luận
                  </h2>
                  <form className=" w-full">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Viết cảm nhận của bạn về sản phẩm"
                      multiline
                      rows={4}
                      className=" !w-full"
                    />
                    <br />
                    <br />
                    <Rating name="size-small" defaultValue={1} />
                    <div className=" flex items-center mt-5">
                      <Button className=" btn-org">Gửi đánh giá</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="container pt-12 ">
          <h3 className=" text-2xl font-bold uppercase">Sản phẩm tương tự</h3>
          <ProductsSlider items={6} />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;

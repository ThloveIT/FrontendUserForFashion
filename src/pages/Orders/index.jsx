import React, { useState } from 'react';
import AccountSidebar from '../../components/AccountSidebar';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Button } from '@mui/material';
import Badge from '../../components/Badge';

const Orders = () => {
  const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);
  const isShowOrderProduct = (index) => {
    if (isOpenOrderProduct === index) {
      setIsOpenOrderProduct(null);
    } else {
      setIsOpenOrderProduct(index);
    }
  };
  return (
    <section className=" py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSidebar />
        </div>
        <div className="col2 w-[80%]">
          <div className="container flex ">
            <div className="leftPart w-full max-w-full mx-auto bg-white p-5 rounded-md">
              <h2 className=" text-lg font-medium uppercase">
                Đơn hàng của bạn
              </h2>
              <p>
                Hiện đang có{' '}
                <span className=" text-primary font-semibold">4 đơn hàng</span>{' '}
                trong danh sách của bạn
              </p>

              <div className="relative overflow-x-auto shadow-md mt-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-300 border-collapse border border-gray-300 dark:border-gray-600">
                  <thead className=" bg-[#f1f1f1]">
                    <tr className="border-b text-center border-gray-300 dark:border-gray-600">
                      <th
                        scope="col"
                        className="px-6 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-300 whitespace-nowrap dark:border-gray-600"
                      >
                        &nbsp;
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-300 whitespace-nowrap dark:border-gray-600"
                      >
                        Mã đơn hàng
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-300 whitespace-nowrap dark:border-gray-600"
                      >
                        Mã thanh toán
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-300 whitespace-nowrap dark:border-gray-600"
                      >
                        Họ và tên
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-300 whitespace-nowrap dark:border-gray-600"
                      >
                        Số điện thoại
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-300 whitespace-nowrap dark:border-gray-600"
                      >
                        Địa chỉ
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-300 whitespace-nowrap dark:border-gray-600"
                      >
                        Mã pin
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-300 whitespace-nowrap dark:border-gray-600"
                      >
                        Địa chỉ
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-300 whitespace-nowrap dark:border-gray-600"
                      >
                        Tổng tiền
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-300 whitespace-nowrap dark:border-gray-600"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-300 whitespace-nowrap dark:border-gray-600"
                      >
                        Mã người dùng
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-300 whitespace-nowrap dark:border-gray-600"
                      >
                        Trạng thái đơn hàng
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-semibold text-gray-900 dark:text-white border-r border-gray-300 whitespace-nowrap dark:border-gray-600"
                      >
                        Ngày đặt hàng
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-y border-gray-300 dark:border-gray-600 text-center">
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r  border-gray-300 dark:border-gray-600">
                        <Button
                          className=" !size-8 !min-w-8 !rounded-full !bg-[#f1f1f1]"
                          onClick={() => isShowOrderProduct(0)}
                        >
                          {isOpenOrderProduct === 0 ? (
                            <FaChevronUp className=" text-sm text-[rgba(0,0,0,0.7)] " />
                          ) : (
                            <FaChevronDown className=" text-sm text-[rgba(0,0,0,0.7)] " />
                          )}
                        </Button>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                        <span className=" link cursor-pointer">ok</span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                        <span className=" link cursor-pointer">ok</span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                        <span className="">ok</span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                        <span className="">ok</span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                        <span className=" block w-56">lll</span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                        <span className="">ok</span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                        <span className="">ok</span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                        <span className="">ok</span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                        <span className="">ok</span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                        <span className="">ok</span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                        <span className="">
                          <Badge status="confirm" />
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                        <span className="">ok</span>
                      </td>
                    </tr>
                    {isOpenOrderProduct === 0 && (
                      <tr>
                        <td className=" bg-white" colSpan={6}>
                          <div className="relative ml-20">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-300 border-collapse border-b border-b-gray-300 dark:border-gray-600">
                              <thead className=" bg-[#f1f1f1]">
                                <tr className="border-b text-center border-gray-300 dark:border-gray-600">
                                  <th
                                    scope="col"
                                    className="px-6 py-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap dark:border-gray-600"
                                  >
                                    Mã sản phẩm
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap dark:border-gray-600"
                                  >
                                    Tên sản phẩm
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap dark:border-gray-600"
                                  >
                                    Hình ảnh
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap dark:border-gray-600"
                                  >
                                    Số lượng
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap dark:border-gray-600"
                                  >
                                    Giá
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b border-gray-300 dark:border-gray-600 text-center">
                                  <td className="px-6 py-4 text-gray-900 dark:text-white dark:border-gray-600 ">
                                    <span className=" link cursor-pointer">
                                      SP1
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 text-gray-900 dark:text-white dark:border-gray-600">
                                    Sản phẩm 1
                                  </td>
                                  <td className="px-6 py-4 text-gray-900 dark:text-white dark:border-gray-600 flex items-center justify-center">
                                    <img
                                      src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg"
                                      className=" size-10 object-cover rounded-md"
                                    />
                                  </td>
                                  <td className="px-6 py-4 text-gray-900 dark:text-white dark:border-gray-600">
                                    5
                                  </td>
                                  <td className="px-6 py-4 text-gray-900 dark:text-white dark:border-gray-600">
                                    500.000đ
                                  </td>
                                </tr>
                                <tr className="border-b border-gray-300 dark:border-gray-600 text-center">
                                  <td className="px-6 py-4 text-gray-900 dark:text-white dark:border-gray-600 ">
                                    <span className=" link cursor-pointer">
                                      SP1
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 text-gray-900 dark:text-white dark:border-gray-600">
                                    Sản phẩm 1
                                  </td>
                                  <td className="px-6 py-4 text-gray-900 dark:text-white dark:border-gray-600 flex items-center justify-center">
                                    <img
                                      src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg"
                                      className=" size-10 object-cover rounded-md"
                                    />
                                  </td>
                                  <td className="px-6 py-4 text-gray-900 dark:text-white dark:border-gray-600">
                                    5
                                  </td>
                                  <td className="px-6 py-4 text-gray-900 dark:text-white dark:border-gray-600">
                                    500.000đ
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                    <tr className="border-y border-gray-300 dark:border-gray-600 text-center">
                      <td className="px-6 py-4 text-gray-900 dark:text-white  border-r border-gray-300 dark:border-gray-600">
                        <Button
                          className=" !size-8 !min-w-8 !rounded-full !bg-[#f1f1f1]"
                          onClick={() => isShowOrderProduct(1)}
                        >
                          {isOpenOrderProduct === 1 ? (
                            <FaChevronUp className=" text-sm text-[rgba(0,0,0,0.7)] " />
                          ) : (
                            <FaChevronDown className=" text-sm text-[rgba(0,0,0,0.7)] " />
                          )}
                        </Button>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                        <span className=" link cursor-pointer">ok</span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                        <span className=" link cursor-pointer">ok</span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                        <span className="">ok</span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                        <span className="">ok</span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                        <span className=" block w-56">lll</span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                        <span className="">ok</span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                        <span className="">ok</span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                        <span className="">ok</span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                        <span className="">ok</span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                        <span className="">ok</span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                        <span className="">
                          <Badge status="pending" />
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                        <span className="">ok</span>
                      </td>
                    </tr>
                    {isOpenOrderProduct === 1 && (
                      <tr>
                        <td className=" bg-white" colSpan={6}>
                          <div className="relative ml-20">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-300 border-collapse border-b border-b-gray-300 dark:border-gray-600">
                              <thead className=" bg-[#f1f1f1]">
                                <tr className="border-b text-center border-gray-300 dark:border-gray-600">
                                  <th
                                    scope="col"
                                    className="px-6 py-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap dark:border-gray-600"
                                  >
                                    Mã sản phẩm
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap dark:border-gray-600"
                                  >
                                    Tên sản phẩm
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap dark:border-gray-600"
                                  >
                                    Hình ảnh
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap dark:border-gray-600"
                                  >
                                    Số lượng
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap dark:border-gray-600"
                                  >
                                    Giá
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b border-gray-300 dark:border-gray-600 text-center">
                                  <td className="px-6 py-4 text-gray-900 dark:text-white dark:border-gray-600 ">
                                    <span className=" link cursor-pointer">
                                      SP1
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 text-gray-900 dark:text-white dark:border-gray-600">
                                    Sản phẩm 1
                                  </td>
                                  <td className="px-6 py-4 text-gray-900 dark:text-white dark:border-gray-600 flex items-center justify-center">
                                    <img
                                      src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg"
                                      className=" size-10 object-cover rounded-md"
                                    />
                                  </td>
                                  <td className="px-6 py-4 text-gray-900 dark:text-white dark:border-gray-600">
                                    5
                                  </td>
                                  <td className="px-6 py-4 text-gray-900 dark:text-white dark:border-gray-600">
                                    500.000đ
                                  </td>
                                </tr>
                                <tr className="border-b border-gray-300 dark:border-gray-600 text-center">
                                  <td className="px-6 py-4 text-gray-900 dark:text-white dark:border-gray-600 ">
                                    <span className=" link cursor-pointer">
                                      SP1
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 text-gray-900 dark:text-white dark:border-gray-600">
                                    Sản phẩm 1
                                  </td>
                                  <td className="px-6 py-4 text-gray-900 dark:text-white dark:border-gray-600 flex items-center justify-center">
                                    <img
                                      src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg"
                                      className=" size-10 object-cover rounded-md"
                                    />
                                  </td>
                                  <td className="px-6 py-4 text-gray-900 dark:text-white dark:border-gray-600">
                                    5
                                  </td>
                                  <td className="px-6 py-4 text-gray-900 dark:text-white dark:border-gray-600">
                                    500.000đ
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;

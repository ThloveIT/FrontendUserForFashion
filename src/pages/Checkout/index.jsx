import React from 'react';

import TextField from '@mui/material/TextField';
import { MdPayment } from 'react-icons/md';
import { Button } from '@mui/material';

const Checkout = () => {
  return (
    <section className=" py-10">
      <div className=" container flex gap-5">
        <div className="leftCol w-[70%]">
          <div className="card bg-white shadow-md p-5 rounded-md w-full">
            <h1 className=" font-semibold text-xl uppercase">
              Thông tin đơn đặt hàng
            </h1>

            <form className=" w-full mt-5">
              <div className=" flex items-center gap-3 pb-5">
                <div className="col w-[50%]">
                  <TextField
                    label="Họ tên"
                    variant="outlined"
                    size="small"
                    className=" w-full"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    type="email"
                    label="Email của bạn"
                    variant="outlined"
                    size="small"
                    className=" w-full"
                  />
                </div>
              </div>

              <h6 className=" font-medium text-sm">Quốc gia*</h6>
              <div className=" flex items-center gap-3 mt-3 pb-5">
                <div className="col w-full">
                  <TextField
                    label="Quốc gia"
                    variant="outlined"
                    size="small"
                    className=" w-full"
                  />
                </div>
              </div>

              <h6 className=" font-medium text-sm">Tỉnh / Thành phố*</h6>
              <div className=" flex items-center gap-3 mt-3 pb-5">
                <div className="col w-full">
                  <TextField
                    label="Tỉnh / Thành phố"
                    variant="outlined"
                    size="small"
                    className=" w-full"
                  />
                </div>
              </div>
              <h6 className=" font-medium text-sm">Quận / Huyện*</h6>
              <div className=" flex items-center gap-3 mt-3 pb-5">
                <div className="col w-full">
                  <TextField
                    label="Quận / Huyện"
                    variant="outlined"
                    size="small"
                    className=" w-full"
                  />
                </div>
              </div>
              <h6 className=" font-medium text-sm">Địa chỉ giao hàng*</h6>
              <div className=" flex items-center gap-3 mt-3 pb-5">
                <div className="col w-full">
                  <TextField
                    label="Tên đường, tòa nhà, số nhà"
                    variant="outlined"
                    size="small"
                    className=" w-full"
                  />
                </div>
              </div>
              <h6 className=" font-medium text-sm">Mã bưu chính*</h6>
              <div className=" flex items-center gap-3 pb-5 mt-3">
                <div className="col w-[50%]">
                  <TextField
                    label="Mã Zip"
                    variant="outlined"
                    size="small"
                    className=" w-full"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    type="text"
                    label="Số điện thoại của bạn"
                    variant="outlined"
                    size="small"
                    className=" w-full"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="rightCol w-[30%]">
          <div className="card shadow-md bg-white p-5 rounded-md">
            <h1 className=" font-semibold text-xl mb-5">Đơn hàng của bạn</h1>
            <div className=" flex items-center justify-between py-3 border-y border-y-[rgba(0,0,0,0.1)]">
              <span className=" text-sm font-medium">Sản phẩm</span>
              <span className=" text-sm font-medium">Giá tiền</span>
            </div>
            <div className=" checkoutScroll max-h-[200px] pr-2 overflow-y-scroll overflow-x-hidden mt-5">
              <div className=" flex items-center justify-between">
                <div className="part1 flex items-start gap-3 flex-col">
                  <p className=" text-sm font-medium text-primary">
                    <span className="cursor-pointer">
                      Áo sơ mi Jean cổ bẻ Layer...
                    </span>
                    <span className=" text-black font-semibold"> x 1</span>
                  </p>
                  <p className=" text-sm font-medium text-primary">
                    <span className="cursor-pointer">
                      Quần Jean Dor chuẩn soái...
                    </span>
                    <span className=" text-black font-semibold"> x 2</span>
                  </p>
                  <p className=" text-sm font-medium text-primary">
                    <span className="cursor-pointer">
                      Áo sơ mi Jean cổ bẻ Layer...
                    </span>
                    <span className=" text-black font-semibold"> x 1</span>
                  </p>
                  <p className=" text-sm font-medium text-primary">
                    <span className="cursor-pointer">
                      Quần Jean Dor chuẩn soái...
                    </span>
                    <span className=" text-black font-semibold"> x 2</span>
                  </p>
                </div>
                <div className="part2 flex items-end gap-3 flex-col">
                  <p className=" text-sm font-medium">250.000đ</p>
                  <p className=" text-sm font-medium">400.000đ</p>
                  <p className=" text-sm font-medium">250.000đ</p>
                  <p className=" text-sm font-medium">400.000đ</p>
                </div>
              </div>
            </div>

            <Button className=" btn-org !mt-8 gap-2 !w-full">
              <MdPayment className=" text-2xl" />
              Xác nhận thanh toán
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;

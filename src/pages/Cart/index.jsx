import React from 'react';

import { Button } from '@mui/material';
import { MdPayment } from 'react-icons/md';
import CartItems from './CartItems';

const CartPage = () => {
  return (
    <section className=" section py-5">
      <div className="container flex  gap-4">
        <div className="leftPart w-[75%] max-w-[75%]">
          <h2 className=" text-lg font-medium uppercase">Giỏ hàng của bạn</h2>
          <p>
            Hiện đang có{' '}
            <span className=" text-primary font-semibold">4 sản phẩm</span>{' '}
            trong giỏ hàng của bạn
          </p>
          <CartItems size={'S'} qty={4} />
          <CartItems size={'L'} qty={2} />
          <CartItems size={'2XL'} qty={1} />
        </div>
        <div className="rightPart w-[25%]">
          <div className=" shadow-md rounded-md bg-white mt-[72px] p-3">
            <h3 className=" text-lg font-semibold text-primary pb-5 border-b border-b-[rgba(0,0,0,0.1)] uppercase">
              Thanh toán
            </h3>
            <p className=" flex items-center justify-between mt-2.5">
              <span className=" text-sm font-semibold">Tổng tiền hàng</span>
              <span className=" text-primary font-semibold">500.000đ</span>
            </p>
            <p className=" flex items-center justify-between mt-2.5">
              <span className=" text-sm font-semibold">Phí vận chuyển</span>
              <span className=" text-primary font-semibold">25.000đ</span>
            </p>
            <p className=" flex items-center justify-between mt-2.5">
              <span className=" text-sm font-semibold">Voucher giảm giá</span>
              <span className=" text-primary font-semibold">-25.000đ</span>
            </p>
            <p className=" flex items-center justify-between mt-2.5">
              <span className=" text-sm font-semibold">Tổng thanh toán</span>
              <span className=" text-primary font-semibold">500.000đ</span>
            </p>
            <Button className=" btn-org !mt-8 gap-2 !w-full">
              <MdPayment className=" text-2xl" />
              Thanh toán
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;

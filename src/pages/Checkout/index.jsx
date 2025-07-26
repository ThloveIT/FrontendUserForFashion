import React, { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import { MdPayment } from 'react-icons/md';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { MyContext } from '../../App';
import MenuItem from '@mui/material/MenuItem';

const Checkout = () => {
  const { userData, placeOrderHandler } = useContext(MyContext);
  const location = useLocation();
  const { totalPrice, shippingFee, discount: voucherDiscount, finalTotal, cartItems } = location.state || {};

  const [formData, setFormData] = useState({
    contactName: '',
    contactEmail: '',
    country: '',
    city: '',
    district: '',
    address: '',
    contactPhoneNumber: '',
    paymentMethod: 'COD',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cartItems || cartItems.length === 0) {
      alert('Giỏ hàng trống!');
      return;
    }
    if (!userData?.id) {
      alert('Vui lòng đăng nhập để đặt hàng!');
      return;
    }
    if (!formData.contactName || !formData.contactEmail || !formData.country || !formData.city || !formData.district || !formData.address || !formData.contactPhoneNumber) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }
    const shippingAddress = `${formData.country}, ${formData.city}, ${formData.district}, ${formData.address}`;
    const orderData = {
      userId: userData?.id,
      totalAmount: finalTotal,
      shippingFee,
      discount: voucherDiscount,
      shippingAddress,
      contactEmail: formData.contactEmail,
      contactName: formData.contactName,
      contactPhoneNumber: formData.contactPhoneNumber,
      paymentMethod: formData.paymentMethod,
      // status: 'pending',
      orderDetails: cartItems.map(item => ({
        productId: item.productId,
        productName: item.productName, // Thêm từ cartItems
        quantity: item.quantity,
        unitPrice: item.price, // Đảm bảo khớp với backend
      })),
    };
    console.log('Submitting order data:', orderData);
    placeOrderHandler(orderData);
  };

  return (
    <section className="py-10">
      <div className="container flex gap-5">
        <div className="leftCol w-[70%]">
          <div className="card bg-white shadow-md p-5 rounded-md w-full">
            <h1 className="font-semibold text-xl uppercase">Thông tin đơn đặt hàng</h1>
            <form className="w-full mt-5" onSubmit={handleSubmit}>
              <div className="flex items-center gap-3 pb-5">
                <div className="col w-[50%]">
                  <TextField
                    label="Tên liên hệ"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    type="email"
                    label="Email liên hệ"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <h6 className="font-medium text-sm">Quốc gia*</h6>
              <div className="flex items-center gap-3 mt-3 pb-5">
                <div className="col w-full">
                  <TextField
                    label="Quốc gia"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <h6 className="font-medium text-sm">Tỉnh / Thành phố*</h6>
              <div className="flex items-center gap-3 mt-3 pb-5">
                <div className="col w-full">
                  <TextField
                    label="Tỉnh / Thành phố"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <h6 className="font-medium text-sm">Quận / Huyện*</h6>
              <div className="flex items-center gap-3 mt-3 pb-5">
                <div className="col w-full">
                  <TextField
                    label="Quận / Huyện"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <h6 className="font-medium text-sm">Địa chỉ giao hàng*</h6>
              <div className="flex items-center gap-3 mt-3 pb-5">
                <div className="col w-full">
                  <TextField
                    label="Tên đường, tòa nhà, số nhà"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <h6 className="font-medium text-sm">Số điện thoại liên hệ*</h6>
              <div className="flex items-center gap-3 pb-5 mt-3">
                <div className="col w-full">
                  <TextField
                    label="Số điện thoại"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name="contactPhoneNumber"
                    value={formData.contactPhoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <h6 className="font-medium text-sm">Phương thức thanh toán*</h6>
              <div className="flex items-center gap-3 mt-3 pb-5">
                <div className="col w-full">
                  <TextField
                    select
                    label="Phương thức thanh toán"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="COD">Thanh toán khi nhận hàng (COD)</MenuItem>
                    <MenuItem value="Online">Thanh toán online</MenuItem>
                  </TextField>
                </div>
              </div>

              <Button
                type="submit"
                className="btn-org !mt-8 gap-2 !w-full"
              >
                <MdPayment className="text-2xl" />
                Xác nhận thanh toán
              </Button>
            </form>
          </div>
        </div>
        <div className="rightCol w-[30%]">
          <div className="card shadow-md bg-white p-5 rounded-md">
            <h1 className="font-semibold text-xl mb-5">Đơn hàng của bạn</h1>
            <div className="flex items-center justify-between py-3 border-y border-y-[rgba(0,0,0,0.1)]">
              <span className="text-sm font-medium">Sản phẩm</span>
              <span className="text-sm font-medium">Giá tiền</span>
            </div>
            <div className="checkoutScroll max-h-[200px] pr-2 overflow-y-scroll overflow-x-hidden mt-5">
              <div className="flex items-center justify-between">
                <div className="part1 flex items-start gap-3 flex-col">
                  {cartItems?.map((item) => (
                    <p key={item.id} className="text-sm font-medium text-primary">
                      <span className="cursor-pointer">{item.productName}</span>
                      <span className="text-black font-semibold"> x {item.quantity}</span>
                    </p>
                  ))}
                </div>
                <div className="part2 flex items-end gap-3 flex-col">
                  {cartItems?.map((item) => {
                    const itemDiscount = item.discount || 0;
                    const itemPrice = (item.price - itemDiscount) * item.quantity;
                    return (
                      <p key={item.id} className="text-sm font-medium">
                        {itemPrice.toLocaleString()}đ
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between py-3 border-y border-y-[rgba(0,0,0,0.1)] mt-5">
              <span className="text-sm font-medium">Tổng tiền hàng</span>
              <span className="text-sm font-medium">{totalPrice?.toLocaleString()}đ</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-b-[rgba(0,0,0,0.1)]">
              <span className="text-sm font-medium">Phí vận chuyển</span>
              <span className="text-sm font-medium">{shippingFee?.toLocaleString()}đ</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-b-[rgba(0,0,0,0.1)]">
              <span className="text-sm font-medium">Voucher giảm giá</span>
              <span className="text-sm font-medium">-{voucherDiscount?.toLocaleString()}đ</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-sm font-medium">Tổng thanh toán</span>
              <span className="text-sm font-medium">{finalTotal?.toLocaleString()}đ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
import React, { useContext, useEffect, useState } from 'react';
import AccountSidebar from '../../components/AccountSidebar';
import Radio from '@mui/material/Radio';
import { MyContext } from '../../App';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { deleteData, fetchDataFromApi, postData } from '../../utils/api';
import { IoMdRemoveCircle } from 'react-icons/io';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Address = () => {
  const context = useContext(MyContext);
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState(false);
  const [address, setAddress] = useState([]);
  const [formFields, setFormFields] = useState({
    country: '',
    city: '',
    district: '',
    address_line: '',
    zip_code: '',
    phone: '',
    status: '',
  });

  const [selectedValue, setSelectedValue] = useState('Nhà Thời Đá Phát Diệm');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    setFormFields((prev) => ({
      ...prev,
      userId: context.userData?._id,
    }));
  }, [context.userData]);

  useEffect(() => {
    if (
      context?.userData?._id !== '' &&
      context.userData?._id !== undefined &&
      context.userData?._id !== null
    ) {
      fetchDataFromApi(`/api/addresses/${context.userData?._id}`).then(
        (res) => {
          setAddress(res.data);
        },
      );
    }
  }, [context.userData]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
    setFormFields((prev) => ({
      ...prev,
      status: event.target.value,
    }));
  };
  const onChangeInp = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (formFields.address_line === '') {
      context.openAlertBox('error', 'Tên đường không hợp lệ');
      setIsLoading(false);
      return false;
    }
    if (formFields.city === '') {
      context.openAlertBox('error', 'Thành phố không hợp lệ');
      setIsLoading(false);
      return false;
    }
    if (formFields.district === '') {
      context.openAlertBox('error', 'Quận / Huyện không hợp lệ');
      setIsLoading(false);
      return false;
    }
    if (formFields.zip_code === '') {
      context.openAlertBox('error', 'Mã bưu chính không hợp lệ');
      setIsLoading(false);
      return false;
    }
    if (formFields.phone === '') {
      context.openAlertBox('error', 'Số điện thoại không hợp lệ');
      setIsLoading(false);
      return false;
    }
    if (formFields.country === '') {
      context.openAlertBox('error', 'Quốc gia không hợp lệ');
      setIsLoading(false);
      return false;
    }
    postData('/api/addresses', formFields, { withCredentials: true }).then(
      (res) => {
        if (res.statusCode === 201) {
          setIsLoading(false);
          context.openAlertBox('success', res?.message);
          handleClose();
          fetchDataFromApi(`/api/addresses/${context.userData?._id}`).then(
            (res) => {
              setAddress(res.data);
            },
          );
        } else {
          context.openAlertBox('error', res?.message);
          setIsLoading(false);
        }
      },
    );
  };

  const removeAddress = (id) => {
    console.log(id);
    deleteData(`/api/addresses/${id}`, { withCredentials: true }).then(
      (res) => {
        if (res.statusCode === 200) {
          context.openAlertBox('success', res?.message);
          fetchDataFromApi(`/api/addresses/${context.userData?._id}`).then(
            (res) => {
              setAddress(res.data);
            },
          );
        } else {
          context.openAlertBox('error', res?.message);
        }
      },
    );
  };

  return (
    <>
      <section className=" py-10 w-full">
        <div className="container flex gap-5">
          <div className="col1 w-[20%]">
            <AccountSidebar />
          </div>
          <div className="col2 w-[50%]">
            <div className="card bg-white p-5 shadow-md rounded-md">
              <div className=" flex items-center justify-between pb-0 mb-4">
                <h2 className=" pb-0 font-semibold">Địa chỉ</h2>
              </div>

              <hr />

              <div
                className=" flex items-center justify-center p-5 rounded-md border border-dashed border-[rgba(0,0,0,0.2)] bg-[#f1faff] hover:bg-[#e7f3f9] cursor-pointer"
                onClick={handleClickOpen}
              >
                <span className=" text-sm font-medium">Thêm địa chỉ</span>
              </div>
              <div className=" flex gap-2 flex-col mt-4">
                {address?.length > 0 &&
                  address?.map((item, index) => {
                    return (
                      <>
                        <label
                          key={index}
                          className=" border border-dashed border-[rgba(0,0,0,0.2)] addressBox w-full flex items-center justify-start bg-[#f1f1f1] p-3 rounded-md cursor-pointer relative"
                        >
                          <Radio
                            {...label}
                            name="address"
                            checked={selectedValue === item?._id}
                            value={item?._id}
                            onChange={handleChange}
                          />
                          <span className=" text-xs">
                            {item?.address_line +
                              ', ' +
                              item?.district +
                              ', ' +
                              item?.city +
                              ', ' +
                              item?.country +
                              ' - ' +
                              item?.phone +
                              ' - ' +
                              item?.zip_code}
                          </span>
                          <span
                            onClick={() => removeAddress(item?._id)}
                            className=" absolute right-2 top-5 size-8 hover:text-[#ff5252] z-50"
                          >
                            <IoMdRemoveCircle className=" w-full text-2xl " />
                          </span>
                        </label>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Thông tin địa chỉ</DialogTitle>
        <form className=" w-full p-8" onSubmit={handleSubmit}>
          <h6 className=" font-medium text-smh">Quốc gia*</h6>
          <div className=" flex items-center gap-3 mt-3 pb-5">
            <div className="col w-full">
              <TextField
                label="Quốc gia"
                variant="outlined"
                size="small"
                className=" w-full"
                onChange={onChangeInp}
                value={formFields.country}
                name="country"
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
                onChange={onChangeInp}
                value={formFields.city}
                name="city"
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
                onChange={onChangeInp}
                value={formFields.district}
                name="district"
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
                onChange={onChangeInp}
                value={formFields.address_line}
                name="address_line"
              />
            </div>
          </div>
          <h6 className=" font-medium text-sm">Mã bưu chính*</h6>
          <div className=" flex items-center gap-3 pb-5 mt-3">
            <div className="col w-1/3">
              <TextField
                label="Mã Zip"
                variant="outlined"
                size="small"
                className=" w-full"
                onChange={onChangeInp}
                value={formFields.zip_code}
                name="zip_code"
              />
            </div>
            <div className="col w-1/3">
              <PhoneInput
                defaultCountry="vn"
                value={phone}
                onChange={(phone) => {
                  setPhone(phone),
                    setFormFields({ ...formFields, phone: phone });
                }}
                name="phone"
              />
            </div>
            <div className=" col w-1/3">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Đặt làm địa chỉ mặc định
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Đặt làm địa chỉ mặc định"
                  value={status}
                  onChange={handleChangeStatus}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  size="small"
                  className=" w-full"
                >
                  <MenuItem value={true}>Chọn</MenuItem>
                  <MenuItem value={false}>Không chọn</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className=" w-full text-center my-4 gap-4 flex">
            <Button type="submit" className="  btn-org !capitalize w-[50%]">
              Lưu địa chỉ
            </Button>
            <Button
              onClick={handleClose}
              className=" btn-org-cancel !capitalize w-[50%]"
            >
              Hủy bỏ
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default Address;

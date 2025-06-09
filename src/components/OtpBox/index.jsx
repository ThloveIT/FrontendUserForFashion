import React, { useState } from 'react';

const OtpBox = ({ length, onChange }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const handleChange = (element, index) => {
    const value = element.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange(newOtp.join(''));

    if (value && index < length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };
  return (
    <div className=" otpBox flex gap-2 justify-center">
      {otp.map((data, index) => (
        <input
          key={index}
          type="text"
          id={`otp-input-${index}`}
          maxLength="1"
          value={otp[index]}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className=" size-[35px] text-center text-[16px]"
        />
      ))}
    </div>
  );
};

export default OtpBox;

import React from 'react';

const Badge = ({ status }) => {
  const statusStyles = {
    pending: {
      text: 'Chờ xác nhận',
      className: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    },
    paid: {
      text: 'Chờ lấy hàng',
      className: 'bg-blue-100 text-blue-800 border-blue-300',
    },
    confirm: {
      text: 'Đã nhận được hàng',
      className: 'bg-green-100 text-green-800 border-green-300',
    },
  };
  const currentStatus = statusStyles[status] || statusStyles.pending;

  return (
    <span
      className={`inline-flex items-center justify-center py-1.5 px-3 rounded-full border font-medium text-sm transition-all duration-300 hover:shadow-md ${currentStatus.className}`}
    >
      {currentStatus.text}
    </span>
  );
};

export default Badge;

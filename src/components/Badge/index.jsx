import React from 'react';

const Badge = ({ status }) => {
  const statusStyles = {
    'Chờ xác nhận': {
      text: 'Chờ xác nhận',
      className: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    },
    'Đã xác nhận': {
      text: 'Đã xác nhận',
      className: 'bg-blue-100 text-blue-800 border-blue-300',
    },
    'Đang vận chuyển': {
      text: 'Đang vận chuyển',
      className: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    },
    'Đã giao hàng': {
      text: 'Đã giao hàng',
      className: 'bg-green-100 text-green-800 border-green-300',
    },
    'Đã hủy': {
      text: 'Đã hủy',
      className: 'bg-red-100 text-red-800 border-red-300',
    },
  };
  const currentStatus = statusStyles[status] || statusStyles['Chờ xác nhận'];

  return (
    <span
      className={`inline-flex items-center justify-center py-1.5 px-3 rounded-full border font-medium text-sm transition-all duration-300 hover:shadow-md ${currentStatus.className}`}
    >
      {currentStatus.text}
    </span>
  );
};

export default Badge;
import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const TryOnPage = () => {
  return (
    // Div chính chứa toàn bộ nội dung trang, sử dụng Tailwind CSS để tạo giao diện full màn hình
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        // Hình nền liên quan đến thử đồ, lấy từ Unsplash
        backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
      }}
    >
      {/* Lớp phủ mờ màu đen để tăng độ đọc của văn bản trên hình nền */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Nội dung chính của trang, đặt trong div relative để nằm trên lớp phủ */}
      <div className="relative z-10 text-center text-white">
        {/* Tiêu đề chính, sử dụng font-size lớn và responsive */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Trải Nghiệm Thử Đồ Với Công Nghệ AI
        </h1>
        {/* Mô tả ngắn gọn, giới hạn chiều rộng để dễ đọc */}
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Khám phá cách thử đồ ảo thông minh, giúp bạn tìm phong cách hoàn hảo chỉ trong vài giây!
        </p>
        {/* Nút bấm dẫn đến trang trải nghiệm, sử dụng Material-UI Button và Tailwind CSS */}
        <Link to="https://5258-35-204-82-251.ngrok-free.app">
          <Button
            variant="contained"
            size="large"
            className="!bg-blue-600 !text-white !font-bold !py-3 !px-6 hover:!bg-blue-700"
          >
            Trải Nghiệm Ngay
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TryOnPage;
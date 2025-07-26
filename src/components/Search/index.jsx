import React, { useState } from 'react';
import '../Search/style.css';
import Button from '@mui/material/Button';
import { IoSearch } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { searchProducts } from '../../services/api';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setError('Vui lòng nhập từ khóa tìm kiếm.');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      console.log('Searching with query:', searchQuery);
      await searchProducts(searchQuery); // Chỉ gọi API để kiểm tra, không cần lưu kết quả tại đây
      navigate(`/productListing/search?query=${encodeURIComponent(searchQuery)}`);
    } catch (err) {
      console.error('Search error details:', err.response?.data || err.message);
      setError('Không thể tìm kiếm sản phẩm: ' + (err.response?.data?.title || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2">
      <input
        type="text"
        placeholder="Bạn muốn tìm gì?"
        className="w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />
      <Button
        className="!absolute top-0 right-0 z-50 w-[85px] h-[50px] min-w-[35px] rounded"
        onClick={handleSearch}
        disabled={loading}
      >
        <IoSearch className="text-[#615353] size-6" />
      </Button>
      {loading && <div className="absolute top-[50px] left-0 w-full bg-white p-2">Đang tải...</div>}
      {error && <div className="absolute top-[50px] left-0 w-full bg-white p-2 text-red-500">{error}</div>}
    </div>
  );
};

export default Search;
// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://localhost:7264/api',
  withCredentials: true, // Bật để hỗ trợ cookie nếu backend sử dụng
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Xử lý token hết hạn
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const login = (credentials) => api.post('/users/login', credentials);
export const register = (userData) => api.post('/users/register', userData);
export const getProfile = () => api.get('/users/profile');
export const forgetPassword = (email) => api.post('/users/forget-password', { email }); // Endpoint giả định

export const fetchDataFromApi = (url, config = {}) => api.get(url, config).then(res => res.data);
export const editData = (url, data, config = {}) => api.put(url, data, config).then(res => res.data);
export const postData = (url, data, config = {}) => api.post(url, data, config).then(res => res.data);

export default api;
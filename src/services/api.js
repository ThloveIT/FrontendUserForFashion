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
      console.log('Authorization Header:', config.headers.Authorization); // Debug header
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

// export const fetchDataFromApi = (url, config = {}) => api.get(url, config).then(res => res.data);
export const fetchDataFromApi = (url, config = {}) => {
  console.log('Calling API:', `${api.defaults.baseURL}${url}`, 'with config:', config);
  return api.get(url, config)
    .then(res => {
      console.log('API response:', res.data);
      return res.data;
    })
    .catch(error => {
      console.error('API fetch error:', error.response?.data || error.message);
      throw error; // Ném lỗi để xử lý ở nơi gọi
    });
};
export const editData = (url, data, config = {}) => api.put(url, data, config).then(res => res.data);
export const postData = (url, data, config = {}) => api.post(url, data, config).then(res => res.data);

// Lấy danh sách sản phẩm, hỗ trợ phân trang, sắp xếp và lọc theo categoryId
export const fetchProducts = (page = 1, limit = 10, sortBy = 'productName', order = 'asc', categoryId = null) =>
  api.get(
    `/products?page=${page}&limit=${limit}&sortBy=${sortBy}&order=${order}${categoryId ? `&categoryId=${categoryId}` : ''}`
  ).then(res => res.data);

// Lấy danh sách danh mục cha (root)
export const fetchRootCategories = () => api.get('/categories/root').then(res => res.data);

// Lấy tất cả sản phẩm (không cần categoryId)
export const fetchAllProducts = () => api.get('/products').then(res => res.data); // Thêm endpoint này

export const fetchProduct = (id) =>
  api.get(`/products/${id}`).then((res) => res.data);

// Tìm kiếm sản phẩm
export const searchProducts = (query) =>
  api.get(`/products/search?query=${encodeURIComponent(query)}`).then(res => res.data);


// Bổ sung các hàm mới
export const fetchFeaturedProducts = () => api.get('/products/featured').then(res => res.data);
export const fetchPopularProducts = () => api.get('/products/popular').then(res => res.data);
export const fetchNewProducts = () => api.get('/products/new').then(res => res.data);


export const getCart = async (userId) => {
  const response = await api.get(`/carts?userId=${userId}`);
  return response.data;
};

export const addItemToCart = async (userId, cartItem) => {
  const response = await api.post(`/carts/item?userId=${userId}`, cartItem);
  return response.data;
};

export const removeItemFromCart = async (userId, productId) => {
  const response = await api.delete(`/carts/item/${productId}?userId=${userId}`);
  return response.data;
};

// Đảm bảo PaymentMethod khớp với enum backend
export const placeOrder = async (orderData) => {
  console.log('Sending order data:', orderData);
  const paymentMethodMap = {
    COD: 0,    // Giả sử 0 là COD trong enum backend
    Online: 1  // Giả sử 1 là Online trong enum backend
  };
  const mappedOrderData = {
    ...orderData,
    paymentMethod: paymentMethodMap[orderData.paymentMethod], // Ánh xạ sang số
    // Loại bỏ status vì backend tự đặt
  };
  delete mappedOrderData.status; // Xóa status khỏi dữ liệu gửi đi
  const response = await api.post('/order', mappedOrderData);
  console.log('Order response:', response.data);
  return response.data;
};

export const cancelOrder = (orderId) =>
  api.put(`/order/${orderId}/cancel`, {}).then(res => res.data);
export default api;
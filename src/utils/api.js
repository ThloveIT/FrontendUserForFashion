
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

export const postData = async (url, formData) => {
  try {
    const response = await fetch(apiUrl + url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const error = await response.json();
      return { error: true, message: error.message || 'Request failed' };
    }
  } catch (error) {
    console.error(`Lỗi POST: ${error.message}`, error);
    return { error: true, message: error.message || 'Network error' };
  }
};

export const logoutUser = async (url) => {
  try {
    const { data } = await axios.post(
      apiUrl + url,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json',
        },
      },
    );
    return data;
  } catch (error) {
    console.error(`Lỗi logout: ${error.message}`, error);
    return { error: true, message: error.message || 'Logout failed' };
  }
};

export const fetchDataFromApi = async (url) => {
  try {
    const params = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.get(apiUrl + url, params);
    console.log(`API response for ${url}:`, response.data); // Log dữ liệu trả về
    return response.data;
  } catch (error) {
    console.error(`Lỗi GET ${url}: ${error.message}`, error.response?.data || error);
    return { error: true, message: error.message || 'Failed to fetch data', status: error.response?.status };
  }
};

export const uploadImage = async (url, updatedData) => {
  const params = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  };
  try {
    const { data } = await axios.put(apiUrl + url, updatedData, params);
    return data;
  } catch (error) {
    console.error(`Lỗi upload: ${error.message}`, error);
    return { error: true, message: error.message || 'Upload failed' };
  }
};

export const editData = async (url, updatedData) => {
  const params = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Content-Type': 'application/json',
    },
  };
  try {
    const { data } = await axios.put(apiUrl + url, updatedData, params);
    return data;
  } catch (error) {
    console.error(`Lỗi edit: ${error.message}`, error);
    return { error: true, message: error.message || 'Edit failed' };
  }
};

export const deleteData = async (url) => {
  const params = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Content-Type': 'application/json',
    },
  };
  try {
    const { data } = await axios.delete(apiUrl + url, params);
    return data;
  } catch (error) {
    console.error(`Lỗi delete: ${error.message}`, error);
    return { error: true, message: error.message || 'Delete failed' };
  }
};
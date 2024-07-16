import axios from 'axios';
import { logout } from '../services/auth/authService';

const axiosInstance = axios.create({
  baseURL: 'https://hep-coding.onrender.com/v1/student',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")?.trim()?.toString();
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      logout();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
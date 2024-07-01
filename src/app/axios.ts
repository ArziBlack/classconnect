import axios from 'axios';

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

export default axiosInstance;
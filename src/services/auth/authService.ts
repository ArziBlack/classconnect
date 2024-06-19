import axios from "axios";

const API_BASE_URL = "https://hep-coding.onrender.com/v1";

// Register User or Student

const register = async (userData: object) => {
  const headers = {
    "Content-Type": "multipart/form-data",
  };
  const response = await axios.post(
    `${API_BASE_URL}/student/signup`,
    userData,
    { headers: headers }
  );
  return response.data;
};

// User or Student Login

const login = async (formData: object) => {
  const response = await axios.post(`${API_BASE_URL}/student/login`, formData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  if (response.headers["set-cookie"]) {
    console.log('hi baby ', response.headers["set-cookie"]);
  }
  return response.data;
};

// Verify User or Guardian

const verify = async () => {
  const response = await axios.post(`${API_BASE_URL}/student/verify`);
  return response.data;
};

// Reset Password

const resetPassword = async (email) => {
  const response = await axios.post(
    `${API_BASE_URL}/student/resetPassword`,
    email
  );
  return response.data;
};

const authService = {
  register,
  login,
  verify,
  resetPassword,
};

export default authService;

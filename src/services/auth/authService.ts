import axios from "axios";

const API_BASE_URL = "https://hep-coding.onrender.com/v1";
const token = '';

// Register Guardian or Student
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

// Login Guardian or Student Login
const login = async (formData: object) => {
  const response = await axios.post(`${API_BASE_URL}/student/login`, formData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  let jwtToken = null;
  if (response.headers["set-cookie"]) {
    console.log('hi baby ', response.headers["set-cookie"]);
    const setCookieHeader = response.headers["set-cookie"];
    jwtToken = setCookieHeader.find(cookie => cookie.trim().startsWith('jwt=')).split('=')[1];
    localStorage.setItem("token", JSON.stringify(jwtToken));
    console.log(jwtToken);
  }
  return response.data;
};

// Verify Student or Guardian
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
  token
};

export default authService;
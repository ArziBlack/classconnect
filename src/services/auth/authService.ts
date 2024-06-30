import axios from "axios";
import { IRegister } from "../../typings/signup";

const API_BASE_URL = "https://hep-coding.onrender.com/v1";
const token = "";
export interface ILoginParams {
  email: string;
  password: string;
}

// Register Guardian or Student
const register = async ({ URI, data }: IRegister) => {
  const headers = {
    "Content-Type": "multipart/form-data",
  };
  const response = await axios.post(`${URI}`, data, { headers: headers });
  return response.data;
};

// Login Guardian or Student Login
const login = async (formData: ILoginParams) => {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const response = await axios.post(`${API_BASE_URL}/student/login`, formData, {
    headers,
    withCredentials: true,
  });

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("token", JSON.stringify(response.data.token));
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
  token,
};

export default authService;

import axios from "axios";
import { IRegister, IReset, IVerify } from "../../typings/signup";
import { resetLogger } from "../../utils/logger";

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
    Accept: "*/*",
  };
  const response = await axios.post(`${URI}`, data, { headers: headers });
  return response.data;
};

// register Tutor (signup)
const registerTutor = async ({ data }: IRegister) => {
  const headers = {
    "Content-Type": "multipart/form-data",
    Accept: "*/*",
  };
  const response = await axios.post(`${API_BASE_URL}/tutor/signup`, data, {
    headers,
  });
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

  if (response?.data) {
    // authLogger("Logged in", "User Signin", formData.email);
    sessionStorage.setItem("user", JSON.stringify(response?.data));
    sessionStorage.setItem("token", response?.data?.token);
  }

  return response.data;
};

// login tutor service
const loginTutor = async (tutorData: ILoginParams) => {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const response = await axios.post(`${API_BASE_URL}/tutor/login`, tutorData, {
    headers,
  });

  if (response?.data) {
    // authLogger("Logged in", "User Signin", tutorData.email);
    sessionStorage.setItem("tutor", JSON.stringify(response?.data));
    sessionStorage.setItem("token", response?.data?.token);
  }

  return response.data;
};

// Login Tutor Verification
const verifyTutor = async ({ tutorId, uniqueString }: IVerify) => {
  const response = await axios.get(
    `${API_BASE_URL}/tutor/verify/${tutorId}/${uniqueString}`
  );
  return response.data;
};

// Verify Student or Guardian
const verify = async ({ studentId, uniqueString }: IVerify) => {
  const response = await axios.get(
    `${API_BASE_URL}/student/verify/${studentId}/${uniqueString}`
  );
  if (response.data) {
    resetLogger("An Email verification", "Verification");
  }
  return response.data;
};

// Verify Student or Guardian
const awaitingStudentVerify = async ({ studentId, uniqueString }: IVerify) => {
  const response = await axios.get(
    `${API_BASE_URL}/awaitingStudent/verify/${studentId}/${uniqueString}`
  );
  if (response.data) {
    resetLogger("An Email verification", "Verification");
  }
  return response.data;
};

// Reset Tutor Password
const resetTutorPassword = async (email: IReset) => {
  const response = await axios.post(
    `${API_BASE_URL}/tutor/resetPassword`,
    email
  );
  if (response.data) {
    resetLogger("Password Reset", "Password Reset");
  }
  return response.data;
};

// Reset Password
const resetPassword = async (email: IReset) => {
  const response = await axios.post(
    `${API_BASE_URL}/student/resetPassword`,
    email
  );
  if (response.data) {
    resetLogger("Password Reset", "Password Reset");
  }
  return response.data;
};

// New Password for Tutor
const newPassword = async ({ id, newPassword }) => {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const response = await axios.post(
    `https://hep-coding.onrender.com/v1/tutor/newPassword/${id}`,
    newPassword,
    { headers }
  );
  return response.data;
};

// New Password for Student
const newStudentPassword = async ({ url, newPassword }) => {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const response = await axios.post(`${url}`, newPassword, { headers });
  return response.data;
};

// New Password for Tutor
const newTutorPassword = async ({ url, newPassword }) => {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const response = await axios.post(`${url}`, newPassword, { headers });
  return response.data;
};

const verifyStudentResetPassword = async ({ resetToken, email }) => {
  const response = await axios.get(
    `${API_BASE_URL}/student/resetPassword/newPassword/${resetToken}/${email}`
  );
  return response.data;
};

const verifyTutorResetPassword = async ({ resetToken, email }) => {
  const response = await axios.get(
    `${API_BASE_URL}/tutor/resetPassword/newPassword/${resetToken}/${email}`
  );
  if (response.data) {
    sessionStorage.setItem("resetURL", JSON.stringify(response.data.resetUrl));
  }
  return response.data;
};

// logout
export const logout = async () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("tutor");
  sessionStorage.removeItem("user");
  setTimeout(() => {
    window.location.href = "/";
  }, 2000);
};

const authService = {
  register,
  login,
  verify,
  verifyTutor,
  resetPassword,
  token,
  loginTutor,
  registerTutor,
  resetTutorPassword,
  newPassword,
  verifyStudentResetPassword,
  verifyTutorResetPassword,
  newStudentPassword,
  newTutorPassword,
  awaitingStudentVerify,
};

export default authService;

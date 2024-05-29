import axios from "axios";

const API_BASE_URL = "https://hep-coding.onrender.com";

// Register User or Student

const register = async (userData: object) => {
  const response = await axios.post(
    `${API_BASE_URL}/student/signup`,
    userData
  );
  return response.data;
};

// User or Student Login

const login = async (formData: object) => {
  const response = await axios.post(
    `${API_BASE_URL}/student/login`,
    formData
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};


const authService = {
  register,
  login,
};

export default authService;

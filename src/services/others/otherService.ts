import axios from "axios";

const API_BASE_URL = `https://hep-coding.onrender.com/v1`;

// get welcome data for homepage or server health
const getHomeResponse = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

// Get Tuition Fees Packages
const getTuitionFees = async () => {
  const response = await axios.get(`${API_BASE_URL}/getAllTuitionFees`);
  return response.data;
};

// Get Terms, Condition and Privacy Policy
const getTnC_Policy = async () => {
  const response = await axios.get(`${API_BASE_URL}/agreement`);
  return response.data;
};

// Endpoint to Get Signup URL based on if the admission is open or not.
const getSignupPage = async ()=> {
  const response = await axios.get(`${API_BASE_URL}/student/openSignupPage`);
  return response.data;
}

// Endpoint to Get Tutor Signup URL based on if the admission is open or not.
const getTutorSignupURL = async ()=> {
  const response = await axios.get(`${API_BASE_URL}/tutor/signup`);
  return response.data;
}

// Endpoint to Get Tutor Login URL based on if the admission is open or not.
const getTutorLoginURL = async ()=> {
  const response = await axios.get(`${API_BASE_URL}/tutor/login`);
  return response.data;
}

// Endpoint to Get Tutor Forgot Password URL based on if the admission is open or not.
const getTutorForgotPasswordURL = async ()=> {
  const response = await axios.get(`${API_BASE_URL}/tutor/forgotPassword`);
  return response.data;
}

const otherService = {
  getHomeResponse,
  getTuitionFees,
  getTnC_Policy,
  getSignupPage,
  getTutorSignupURL,
  getTutorLoginURL,
  getTutorForgotPasswordURL
};

export default otherService;
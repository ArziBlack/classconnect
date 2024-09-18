import axios from "axios";

const API_BASE_URL = `https://hep-coding.onrender.com/v1`;

// get welcome data for homepage or server health
const getHomeResponse = async () => {
  const response = await axios.get(API_BASE_URL);
  if (response.data) {
    sessionStorage.setItem("courses", JSON.stringify(response?.data?.courses));
    sessionStorage.setItem("home", JSON.stringify(response?.data));
  }
  return response.data;
};

// Get Tuition Fees Packages
const getTuitionFees = async () => {
  const response = await axios.get(`${API_BASE_URL}/getAllTuitionFees`);
  if (response.data) {
    sessionStorage.setItem("tution-fees", JSON.stringify(response?.data));
  }
  return response.data;
};

// Get Curriculum
const getCurriculum = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/curriculum/${id}`);
  return response.data;
};

// Get Terms, Condition and Privacy Policy
const getTnC_Policy = async () => {
  const response = await axios.get(`${API_BASE_URL}/agreement`);
  return response.data;
};

// Endpoint to Get Signup URL based on if the admission is open or not.
const getSignupPage = async () => {
  const response = await axios.get(`${API_BASE_URL}/student/openSignupPage`);
  if (response.data) {
    sessionStorage.setItem(
      "courseTitles",
      JSON.stringify(response?.data?.courseTitles)
    );
    sessionStorage.setItem(
      "signupFormURL-student",
      JSON.stringify(response?.data?.signupFormURL)
    );
  }
  return response.data;
};

// Endpoint to Get Tutor Signup URL based on if the admission is open or not.
const getTutorSignupURL = async () => {
  const response = await axios.get(`${API_BASE_URL}/tutor/signup`);
  return response.data;
};

// Endpoint to Get Tutor Login URL based on if the admission is open or not.
const getTutorLoginURL = async () => {
  const response = await axios.get(`${API_BASE_URL}/tutor/login`);
  return response.data;
};

// Endpoint to Get Tutor Forgot Password URL based on if the admission is open or not.
const getTutorForgotPasswordURL = async () => {
  const response = await axios.get(`${API_BASE_URL}/tutor/forgotPassword`);
  return response.data;
};

// Endpoint to signup for a Newsletter
const newsLetterRequest = async ({ userName, email }) => {
  const response = await axios.post(`${API_BASE_URL}/subscribeToNewsLetter`, {
    userName,
    email,
  });
  return response.data;
};

// Endpoint to send a Memo
const sendMemo = async (email: string) => {
  const response = await axios.post(
    `${API_BASE_URL}/unsubscribeToNewsLetter/${email}`
  );
  return response.data;
};

// Logout Tutor
const LogoutTutor = async () => {
  const response = await axios.get(`${API_BASE_URL}/tutor/logout`);
  return response.data;
};

const otherService = {
  getHomeResponse,
  getTuitionFees,
  getTnC_Policy,
  getSignupPage,
  getTutorSignupURL,
  getTutorLoginURL,
  getTutorForgotPasswordURL,
  newsLetterRequest,
  sendMemo,
  getCurriculum,
  LogoutTutor,
};

export default otherService;

import axios from "axios";

const API_BASE_URL = "https://hep-coding.onrender.com/v1/student";

// Get All Approved Tutors
const getApprovedTutors = async () => {
  const response = await axios.get(`${API_BASE_URL}/approvedTutors?page=0`);
  return response.data;
};

// Get Student Tuition Fee
const getMyTuitionFee = async () => {
  const response = await axios.get(`${API_BASE_URL}/getMyTuitionFee`);
  return response.data;
};

// Initiate a Transaction (GET) request
const initiateTrx = async () => {
  const response = await axios.get(`${API_BASE_URL}/initiateTransaction`);
  return response.data;
};

// Get Transaction State (Successful | null | errror)
const getTrxState = async () => {
  const response = await axios.get(`${API_BASE_URL}/paystack/success`);
  return response.data;
};

// Choose a Tutor
const chooseTutor = async (tutorId: string, studentId: string) => {
  const response = await axios.post(
    `${API_BASE_URL}/chooseTutor/${tutorId}/${studentId}`
  );
  return response.data;
};

// get General Assessment
const getGeneralAssessment = async ()=> {
    const response = await axios.get(`${API_BASE_URL}/getGeneralAssessment`);
    return response.data;
}

// Get personnal Assessment
const getPersonalAssessment = async ()=> {
    const response = await axios.get(`${API_BASE_URL}/getPersonalAssessment`);
    return response.data;
}

// Accept Tutor Recommendation
const acceptRecommendation = async (tutorId: string, studentId: string)=> {
    const response = await axios.post(`${API_BASE_URL}/accept_recommendation/${tutorId}/${studentId}`);
    return response.data;
}

// Reject Tutor Recommendation
const rejectRecommendation = async (tutorId:string, studentId: string)=> {
    const response = await axios.post(`${API_BASE_URL}/reject_recommendation/${tutorId}/${studentId}`);
    return response.data;
}

// Get my own Tutors
const getMyTutors = async ()=> {
    const response = await axios.get(`${API_BASE_URL}/getMyTutors`);
    return response.data;
}

// Logout Student...
const LogoutStudent = async()=> {
    await axios.get(`${API_BASE_URL}/logout`);
}
const studentService = {
  getApprovedTutors,
  getMyTuitionFee,
  initiateTrx,
  getTrxState,
  chooseTutor,
  getGeneralAssessment,
  getPersonalAssessment,
  acceptRecommendation,
  rejectRecommendation,
  getMyTutors,
  LogoutStudent
};

export default studentService;
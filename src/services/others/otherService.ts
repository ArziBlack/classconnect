import axios from 'axios';

const API_BASE_URL = `https://hep-coding.onrender.com/v1`;

// get welcome data for homepage or server health
const getHomePage = async () => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
}

// Get Tuition Fees Packages
const getTutionFees = async () => {
    const response = await axios.get(`${API_BASE_URL}/getAllTuitionFees`);
    console.log(response.data);
    return response.data;
}

// Get Terms, Condition and Privacy Policy
const getTnC_Policy = async () => {
    const response = await axios.get(`${API_BASE_URL}/agreement`);
    return response.data;
}



const otherService = {
    getHomePage,
    getTutionFees,
    getTnC_Policy
}

export default otherService;
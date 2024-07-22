export interface IApprovedTutor {
  name: string;
  specialization: string;
  introduction: string;
  Age: number;
  sex: string;
  country: string;
  profileImage: string;
  chooseButtonUrl: string;
}

export interface IAssessment {
  type: string;
  Question: string;
  Date: string;
}

export interface IMyTutor {
  name: string;
  specialization: string;
  introduction: string;
  Age: number;
  sex: string;
  country: string;
  classType: string;
  profileImage: string;
  chooseButtonUrl: string;
  status: string;
}

export interface IMyTutorsResponse {
  statusCode: number;
  message: string;
  data: IMyTutor[];
}

export interface IAssessmentResponse {
  statusCode: number;
  message: string;
  data?: IAssessment[];
}

export interface ITutorApiResponse {
  statusCode: number;
  message: string;
  data?: IApprovedTutor[];
}

export interface IStudentTrxAPIResponse {
  statusCode: number;
  transactionURL: string;
}

export interface ITuitionFee {
  status: number;
  message: string;
}

export interface IRecommendationResponse {
  statusCode: number;
  status: string;
  message: string;
}

export interface IAcceptnRejectResponse {
  statusCode: number;
  message: string;
}

export interface ICourseData {
  title: string;
  description: string;
  curriculum: string;
}

export interface ICoursesResponse {
  statusCode: number;
  message: ICourseData[];
}

export interface IUpdateStudentData {
  first_name: string;
  last_name: string;
  student_phoneNum: number;
  student_email: string;
}
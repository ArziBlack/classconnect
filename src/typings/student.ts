export interface IApprovedTutor {
  id: string;
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
  id: string;
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

export interface IChooseResponse {
  statusCode: number;
  status?: string;
  message?: string;
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

export interface ICourseResponse  {
  statusCode: number;
  message: string;
  data: CurriculumData;
}

export interface ICourseError {
  statusCode: number;
  error: string;
}

interface CurriculumData {
  title: string;
  description: string;
  duration: string;
  curriculumFile: string;
  curriculum: Level[];
}

interface Level {
  level: string;
  topic: string;
  content: string[];
}

export interface IUpdateStudentData {
  first_name: string;
  last_name: string;
  student_phoneNum: number;
  student_email?: string;
  sex?: string;
  state?: string;
  country?: string;
}

export interface IScheduleResponse {
  statusCode: number;
  message: string;
  upcomingClass: Date;
}

export interface ICurriculumItem {
  topic: string;
  content: string;
}

export interface ICurriculumResponse {
  statusCode: number;
  message: string;
  data: {
    course: string;
    description: string;
    curriculum: ICurriculumItem[];
  };
}

export interface IAPIResponse {
  statusCode: number;
  message: string;
}

export interface INotification {
  statusCode: number;
  data: string[];
}

export interface IProfileImage {
  profileImage: File;
}

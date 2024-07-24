interface Student {
    name: string;
    status: string;
    course: string;
    age: number;
    sex: string;
    country: string;
    profileImage: string;
    classTime_options: string[];
    assessmentFormActionUrl: string;
    sessionReportFormActionUrl: string;
}

interface AssessmentData {
    type: string;
    content: string;
    tutor: string;
    student?: string;
    createdAt: string;
    _id: string;
    __v: number;
}

export interface IMyStudentsResponse {
    statusCode: number;
    message: string;
    data: Student[];
}

export interface IAssessmentResponse {
    statusCode: number;
    message: string;
    summary?: string;
    data: AssessmentData;
}

export interface IAssessmentData {
    type?: string;
    title?: string;
    content?: string;
    document?: File;
}

export interface IPersonnalAssessmentData {
    assessmentFormActionUrl: string;
}

export interface IClassData {
    course: string;
    todays_topic: string;
    homework_status: string;
    class_performance: string;
    next_session_topic: string;
}

export interface IReportResponse {
    statusCode: number;
    message: string;
}

export interface IClassSchedule {
    time1: string;
    time2: string;
    class_link: string;
}

export interface INoticeResponse {
    statusCode: number;
    message: string;
    summary: string;
    upcomingClass?: string;
}

interface ICurriculumMessage {
    title: string;
    description: string;
    curriculum: string;
}

export interface ICurriculumResponse {
    statusCode: number;
    message: ICurriculumMessage;
}

export interface ITutor {
    myStudents: IMyStudentsResponse | null;
    generalAssessment: IAssessmentResponse | null;
    personnalAssessment: IAssessmentResponse | null;
    reportResponse: IReportResponse | null;
    classSchedule: IClassSchedule | null;
    noticeResponse: INoticeResponse | null;
    curriculumResponse: ICurriculumResponse | null;
    isLoading: boolean;
    isError: boolean;
    error: string;
    isSuccess: boolean;
    message: string;
}

export interface IUpdateTutorData {
    first_name: string;
    last_name?: string;
    student_phoneNum?: number;
    student_email?: string;
  }
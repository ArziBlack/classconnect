export interface ITutor {
    name: string;
    specialization: string;
    introduction: string;
    Age: number;
    sex: string;
    country: string;
    profileImage: string;
    chooseButtonUrl: string;
}

export interface IApiResponse {
    statusCode: number;
    message: string;
    data: ITutor[];
}
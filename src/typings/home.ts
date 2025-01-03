import { ICourseResponse } from "./student";
import { IGuardian, IStudent, ITutor } from "./signup";
import { ChangeEvent, Dispatch, SetStateAction, SyntheticEvent } from "react";

export interface IStudentProps {
  onClick?: (e: SyntheticEvent<HTMLFormElement, SubmitEvent> | string) => void;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  data: IStudent;
  handleClassTimeOptionsChange?: (selectedOptions: string[]) => void;
  submit?: () => void;
  setFormData?: Dispatch<SetStateAction<IStudent>>;
  isGuardian?: boolean;
  typeModal?: () => void;
}

export interface IGuardianProps {
  onClick?: (e: SyntheticEvent<HTMLFormElement, SubmitEvent> | string) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  data?: IGuardian;
  handleClassTimeOptionsChange?: (selectedOptions: string[]) => void;
  submit?: () => void;
  setGuardianData?: Dispatch<SetStateAction<IGuardian>>;
  isGuardian?: boolean;
  typeModal?: () => void;
}

export interface ITutorProps {
  onClick?: (e: SyntheticEvent<HTMLFormElement, SubmitEvent> | string) => void;
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  data: ITutor;
  handleClassTimeOptionsChange?: (selectedOptions: string[]) => void;
  submit?: () => void;
  setFormData?: Dispatch<SetStateAction<ITutor>>;
}

export interface IFees {
  statusCode: number;
  tuition_fees: {
    class_of_1: {
      monthly_payment: string;
      quarterly_payment: string;
      half_yearly_payment: string;
      yearly_payment: string;
    };
    class_of_5: {
      monthly_payment: string;
      quarterly_payment: string;
      half_yearly_payment: string;
      yearly_payment: string;
    };
    class_of_10: {
      monthly_payment: string;
      quarterly_payment: string;
      half_yearly_payment: string;
      yearly_payment: string;
    };
  };
}

interface ISignupAdmission {
  isOpen: string;
  from: string;
  to: string;
}

export interface ISignupPage {
  statusCode: number;
  message: string;
  courseTitles: Array<string>;
  signupFormURL: string;
  admission: ISignupAdmission;
}

export interface IVideo {
  id: string;
  link: string;
  title: string;
}

export interface OtherState {
  home: IHomeResponse | null;
  fees: IFees | null;
  videos: IVideo[] | null;
  tnc: string;
  URL: string | null;
  error: string | null;
  message: string;
  isLoading: boolean;
  isSuccess: boolean;
  isCurriculumLoading: boolean;
  userType: string | null;
  curriculum: ICourseResponse | null;
}

export interface Admission {
  from: string;
  to: string;
}

export interface Course {
  title: string;
  id?: string;
  description: string;
  curriculum: string;
}

export interface IHomeResponse {
  statusCode: number;
  message: string;
  admissionMessage: string;
  admission: Admission;
  courses: Course[];
}

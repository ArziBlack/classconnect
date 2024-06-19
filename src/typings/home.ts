import { ChangeEvent, Dispatch, SetStateAction, SyntheticEvent } from "react";
import { IGuardian, IStudent } from "./signup";

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

export interface OtherState {
  home: IHomeResponse | null;
  fees: IFees | null;
  tnc: string;
  error: string | null;
  message: string;
  isLoading: boolean;
  isSuccess: boolean;
}

export interface Admission {
  from: string;
  to: string;
}

export interface Course {
  title: string;
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

export interface IMultistepProgressBarProps {
  page: string;
  onPageIndexClick: (pageIndex: string) => void;
}

export interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ISalutation {
  value: string;
  label: string;
}

export interface IGender {
  value: string;
  label: string;
}

export interface ICountry {
  // name?: string;
  // alpha2Code?: string;
  userCountryCode: string;
  countries: ICountryData[] | null;
}

interface ICountryData {
  value: string;
  label: string;
}

export interface IState {
  name: string;
  countryCode: string;
}

export interface IGuardian {
  first_name: string | null;
  last_name: string | null;
  student_email: string | null;
  sex: string | null;
  country: string | null;
  state: string | null;
  course: string | null;
  dateOfBirth: Date | number | null;
  classTime_options: Array<string> | string[] | null;
  payment_plan: string | null;
  class_type: string | null;
  salutation: string | null;
  parent_name?: string | null;
  parent_phoneNum: number | null;
  parent_email: string | null;
  password: string;
  confirm_password?: string;
  profileImage: File;
  agreement_status: boolean | string;
  student_phoneNum: number | string | null;
}

export interface IStudent {
  first_name: string | null;
  last_name: string | null;
  student_email: string | null;
  sex: string | null;
  country: string | null;
  state: string | null;
  course: string | null;
  dateOfBirth: Date | number | null;
  classTime_options: Array<string> | string[] | null;
  payment_plan: string | null;
  class_type: string | null;
  password: string;
  confirm_password?: string;
  profileImage: File;
  agreement_status: boolean | string;
  student_phoneNum: number | string;
}

export const studentInit = {
  first_name: null,
  last_name: null,
  student_email: null,
  sex: null,
  country: null,
  state: null,
  course: null,
  dateOfBirth: null,
  classTime_options: null,
  payment_plan: null,
  class_type: null,
  password: "",
  profileImage: null,
  agreement_status: "agreed",
  student_phoneNum: null,
};

export const guardianInit = {
  first_name: null,
  last_name: null,
  student_email: null,
  sex: null,
  country: null,
  state: null,
  course: null,
  dateOfBirth: null,
  classTime_options: null,
  payment_plan: null,
  class_type: null,
  salutation: null,
  parent_name: null,
  parent_phoneNum: null,
  parent_email: null,
  password: "",
  profileImage: null,
  agreement_status: true,
  student_phoneNum: null,
};

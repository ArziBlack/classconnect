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
  name: string;
  alpha2Code: string;
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
  profileImage: string | null;
  agreement_status: boolean;
  student_phoneNum: number | null;
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
  salutation: string | null;
  password: string;
  confirm_password?: string;
  profileImage: string | null;
  agreement_status: boolean;
  student_phoneNum: number;
}

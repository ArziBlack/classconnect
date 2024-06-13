import { ChangeEvent, SyntheticEvent } from "react";
import { IGuardian, IStudent } from "./signup";

export interface IStudentProps {
  onClick?: (e: SyntheticEvent<HTMLFormElement, SubmitEvent> | string) => void;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  data: IStudent;
  handleClassTimeOptionsChange?: (selectedOptions: string[]) => void;
  submit?: () => void;
}

export interface IGuardianProps {
  onClick?: (e: SyntheticEvent<HTMLFormElement, SubmitEvent> | string) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  data?: IGuardian;
  handleClassTimeOptionsChange?: (selectedOptions: string[]) => void;
  submit?: () => void;
}
import { ChangeEvent, SyntheticEvent } from "react";
import { IGuardian, IStudent } from "./signup";

export interface SignupProps {
  onClick?: (e: SyntheticEvent<HTMLFormElement, SubmitEvent> | string) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  data: IStudent | IGuardian;
}

import { ChangeEvent } from "react";

export interface SignupProps {
  onClick?: () => string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  data: object;
}

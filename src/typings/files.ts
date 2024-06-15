import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IStudent } from "./signup";

export interface IImageUpload {
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    setFormData?: Dispatch<SetStateAction<IStudent>>;
    setGuardianData?: Dispatch<SetStateAction<IStudent>>;
    isGuardian: boolean;
}
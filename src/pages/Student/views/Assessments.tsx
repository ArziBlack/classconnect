import ViewHeader from "../components/ViewHeader";
import { BreadCrumb } from "../components/Courses/BreadCrumb";
import { useAppDispatch } from "../../../hooks/reactReduxHooks";
import { useEffect } from "react";
import {
  getGeneralAssessment,
  getPersonalAssessment,
} from "../../../services/student/studentThunks";

const links = [
  { to: "", label: "Personal Assessments" },
  { to: "general-assessments", label: "General Assessments" },
];

export const Assessment = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPersonalAssessment());
    dispatch(getGeneralAssessment());
  }, [dispatch]);
  return (
    <>
      <ViewHeader
        title="Assessments"
        subtext="Access your assessments, view grades, and track your academic progress. Get detailed feedback on your performance to identify areas for improvement."
      />
      <BreadCrumb links={links} />
    </>
  );
};

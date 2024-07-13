import ViewHeader from "../components/ViewHeader";
import { BreadCrumb } from "../components/Courses/BreadCrumb";
import { useEffect } from "react";

const links = [
  { to: "", label: "Personal Assessments" },
  { to: "general-assessments", label: "General Assessments" },
];

export const Assessment = () => {
  useEffect(() => {
    document.title = "HEP My Assessment - Student";
  }, []);
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

import ViewHeader from "../components/ViewHeader";
import { BreadCrumb } from "../components/Courses/BreadCrumb";
import { useEffect } from "react";

const links = [
  { to: "", label: "All Tutors" },
  { to: "my-tutors", label: "My Tutors" },
];

export const Tutors = () => {
  useEffect(() => {
    document.title = "HEP Tutors - Student";
  }, []);

  return (
    <>
      <ViewHeader
        title="Tutors"
        subtext="Find and interact with your course tutors. Access their contact information, office hours, and schedule one-on-one sessions to enhance your learning experience."
      />
      <BreadCrumb links={links} />
    </>
  );
};

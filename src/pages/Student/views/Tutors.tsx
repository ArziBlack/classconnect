import ViewHeader from "../components/ViewHeader";
import { BreadCrumb } from "../components/Courses/BreadCrumb";
import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/reactReduxHooks";
import { getApprovedTutors } from "../../../services/student/studentThunks";

const links = [
  { to: "", label: "My Tutors" },
  { to: "approved", label: "Approved Tutors" },
  { to: "recommended", label: "Recommended Tutors" },
];

export const Tutors = () => {
  const dispatch = useAppDispatch();
  useEffect(()=> {
    dispatch(getApprovedTutors());
  },[]);

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

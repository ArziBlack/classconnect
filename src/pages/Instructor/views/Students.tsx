import ViewHeader from "../components/ViewHeader";
import { BreadCrumb } from "../components/Courses/BreadCrumb";
import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/reactReduxHooks";
import { getApprovedTutors } from "../../../services/student/studentThunks";

const links = [{ to: "", label: "My Students" }];

export const Students = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    document.title = "HEP Tutors - Student";
    dispatch(getApprovedTutors());
  }, [dispatch]);

  return (
    <>
      <ViewHeader
        title="Students"
        subtext="Access your student list and interact with your students. View their contact information, office hours, and schedule one-on-one sessions to support their learning experience."
      />
      <BreadCrumb links={links} />
    </>
  );
};

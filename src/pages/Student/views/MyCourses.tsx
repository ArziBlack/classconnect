import ViewHeader from "../components/ViewHeader";
import { BreadCrumb } from "../components/Courses/BreadCrumb";
import { useEffect } from "react";

const links = [
  { to: "", label: "All Courses" },
  { to: "started", label: "Ongoing" }
];

export const MyCourses = () => {
  useEffect(() => {
    document.title = "HEP My Courses - Student";
  }, []);
  return (
    <>
      <ViewHeader
        title="Courses"
        subtext=" View and manage your enrolled courses. Track your progress, access
        course materials, and stay updated with upcoming lessons and
        assignments."
      />
      <BreadCrumb links={links} />
    </>
  );
};

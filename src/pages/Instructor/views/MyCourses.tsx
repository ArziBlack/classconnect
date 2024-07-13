import ViewHeader from "../components/ViewHeader";
import { BreadCrumb } from "../components/Courses/BreadCrumb";
import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/reactReduxHooks";
import {
  getAllCourses,
  getMyCourses,
} from "../../../services/student/studentThunks";

const links = [
  { to: "", label: "All Courses" },
  { to: "started", label: "Ongoing" },
  // { to: "ongoing", label: "Ongoing" },
  // { to: "completed", label: "Completed" },
];

export const MyCourses = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    document.title = "HEP My Courses - Student";
    dispatch(getAllCourses());
    dispatch(getMyCourses());
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

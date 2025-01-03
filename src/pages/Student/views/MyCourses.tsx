import ViewHeader from "../components/ViewHeader";
import { BreadCrumb } from "../components/Courses/BreadCrumb";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reactReduxHooks";
import {
  getAllCourses,
  getMyCourses,
} from "../../../services/student/studentThunks";

const links = [
  { to: "", label: "Available Courses" },
  { to: "my-courses", label: "My Courses" },
];

export const MyCourses = () => {
  const dispatch = useAppDispatch();
  const { allCoursesResponse, myCoursesRes } = useAppSelector(
    (state) => state.student
  );
  useEffect(() => {
    document.title = "CLASSCONNECTS My Courses - Student";
    if (!allCoursesResponse || !myCoursesRes) {
      dispatch(getAllCourses());
      dispatch(getMyCourses());
    }
  }, []);
  return (
    <>
      <ViewHeader
        title="Courses"
        preNav="/student"
        subtext=" View and manage your enrolled courses. Track your progress, access
        course materials, and stay updated with upcoming lessons and
        assignments."
      />
      <BreadCrumb links={links} />
    </>
  );
};

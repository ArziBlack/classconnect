import ViewHeader from "../components/ViewHeader";
import { BreadCrumb } from "../components/Courses/BreadCrumb";

const links = [
  { to: "", label: "Browse" },
  { to: "started", label: "Started" },
  { to: "ongoing", label: "Ongoing" },
  { to: "completed", label: "Completed" },
];

export const MyCourses = () => {
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

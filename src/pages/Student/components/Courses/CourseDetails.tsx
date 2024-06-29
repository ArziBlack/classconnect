import ViewHeader from "../../components/ViewHeader";
import { BreadCrumb } from "../../components/Courses/BreadCrumb";

const links = [
  { to: "", label: "Contents" },
  { to: "details", label: "Details" },
];

export const CourseDetails = () => {
  return (
    <div>
      <ViewHeader
        title="Front End Engineering"
        subtext=" View and manage your enrolled courses. Track your progress, access
        course materials, and stay updated with upcoming lessons and
        assignments."
      />
      <BreadCrumb links={links} />
    </div>
  );
};

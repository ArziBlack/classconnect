import ViewHeader from "../../components/ViewHeader";
import { BreadCrumb } from "../../components/Courses/BreadCrumb";
import { useAppSelector } from "../../../../hooks/reactReduxHooks";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ICourseData } from "../../../../typings/student";

const links = [
  { to: "", label: "Contents" },
  { to: "description", label: "Description" },
];

export const CourseDetails = () => {
  const { courseId } = useParams();
  const { allCoursesResponse, isLoading } = useAppSelector(app => app.student);
  const [course, setCourse] = useState<ICourseData>(null);
  useEffect(()=> {
    if (allCoursesResponse) {
      setCourse(allCoursesResponse?.message?.find((item:ICourseData) => courseId === item.title.split(" ")[0]));
    }
  },[allCoursesResponse, courseId]);
  return (
    <div>
      <ViewHeader
        title={course?.title}
        subtext={course?.description}
        loading={isLoading}
      />
      <BreadCrumb links={links} />
    </div>
  );
};

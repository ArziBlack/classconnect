import { useParams } from "react-router-dom";
import { BreadCrumb } from "../Courses/BreadCrumb";
import TutorHeader from "../TutorHeader";
import { useAppSelector } from "../../../../hooks/reactReduxHooks";
import { useEffect, useState } from "react";
import { IMyTutor } from "../../../../typings/student";

const links = [{ to: "", label: "About Me" }];

export const TutorDetails = () => {
  const { tutorId } = useParams();
  const { myTutors, isLoading } = useAppSelector((state) => state.student);
  const [tutor, setTutor] = useState<IMyTutor>(null);
  useEffect(()=> {
    if (myTutors) {
      setTutor(myTutors?.data?.find((_, idx:number) => idx === parseInt(tutorId)));
    }
  },[myTutors, tutorId]);
  return (
    <div>
      <TutorHeader
        title={tutor?.name}
        subtext={tutor?.introduction}
        loading={isLoading}
        spec={tutor?.specialization}
      />
      <BreadCrumb links={links} />
    </div>
  );
};

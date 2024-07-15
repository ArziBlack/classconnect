import { useParams } from "react-router-dom";
import { BreadCrumb } from "../Courses/BreadCrumb";
import TutorHeader from "../TutorHeader";
import { useAppSelector } from "../../../../hooks/reactReduxHooks";
import { useEffect, useState } from "react";
import { IMyTutor } from "../../../../typings/student";

const links = [{ to: "", label: "About Me" }];

export const TutorDetails = () => {
  const { tutorId } = useParams();
  const { approvedTutors, isLoading } = useAppSelector(
    (state) => state.student
  );
  const [tutor, setTutor] = useState<IMyTutor>(null);
  useEffect(() => {
    if (approvedTutors) {
      setTutor(
        approvedTutors?.data?.find(
          (item: IMyTutor) => tutorId === item.name.split(" ")[0]
        )
      );
    }
  }, [approvedTutors, tutorId]);
  return (
    <div>
      <TutorHeader
        title={tutor?.name}
        subtext={tutor?.introduction}
        loading={isLoading}
        spec={tutor?.specialization}
        pic={tutor?.profileImage}
        status={tutor?.status}
        url={tutor?.chooseButtonUrl}
      />
      <BreadCrumb links={links} />
    </div>
  );
};

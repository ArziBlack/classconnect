import ViewHeader from "../components/ViewHeader";
import { BreadCrumb } from "../components/Courses/BreadCrumb";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reactReduxHooks";
import { getMyTuitionFee } from "../../../services/student/studentThunks";

const links = [
  { to: "", label: "Details" },
  { to: "notification", label: "Notification" },
  { to: "tuition-fee", label: "Tuition Fee" },
  { to: "invite", label: "Invite" },
  { to: "become-a-tutor", label: "Become a Tutor" },
];

const Profile = () => {
  const dispatch = useAppDispatch();
  const { tuitionFeeResponse } = useAppSelector(state => state.student);
  useEffect(() => {
    document.title = "HEP Profile - Student";
    if (!tuitionFeeResponse) {
      dispatch(getMyTuitionFee())
    }
  }, [dispatch]);
  return (
    <>
      <ViewHeader
        title="Profile"
        subtext="Update and manage your personal details, academic information, and preferences. Ensure your profile is always up-to-date to receive relevant notifications and updates."
      />
      <BreadCrumb links={links} />
    </>
  );
};

export default Profile;
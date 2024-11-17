import ViewHeader from "../components/ViewHeader";
import { BreadCrumb } from "../components/Courses/BreadCrumb";
import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/reactReduxHooks";
import { getMyStudents } from "../../../services/tutor/tutorThunk";
import Refresh from "../../../components/Refresh";
import useCustomToast from "../../../hooks/useCustomToast";

const links = [{ to: "", label: "My Students" }];

export const Students = () => {
  const toast = useCustomToast();
  const dispatch = useAppDispatch();
  useEffect(() => {
    document.title = "CLASSCONNECTS Tutors - My Students";
    dispatch(getMyStudents());
  }, [dispatch]);

  const handleRefresh = async () => {
    const response = await dispatch(getMyStudents());
    if (getMyStudents.fulfilled.match(response)) {
      toast("Refreshed", "info");
    } else if (getMyStudents.rejected.match(response)) {
      toast(response?.payload, "warning");
    }
  };

  return (
    <>
      <ViewHeader
        title="Students"
        subtext="Access your student list and interact with your students. View their contact information, office hours, and schedule one-on-one sessions to support their learning experience."
      />
      <Refresh handleRefresh={handleRefresh} />
      <BreadCrumb links={links} />
    </>
  );
};

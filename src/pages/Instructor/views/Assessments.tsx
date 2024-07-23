import ViewHeader from "../components/ViewHeader";
import { BreadCrumb } from "../components/Courses/BreadCrumb";

export const Assessments = () => {
  return (
    <>
      <ViewHeader
        title="Assessments"
        subtext="Access your student list and interact with your students. View their contact information, office hours, and schedule one-on-one sessions to support their learning experience."
      />
      <BreadCrumb links={[{ to: "", label: "General Assessment" }, { to: "report", label: "General Report"}]} />
    </>
  );
};

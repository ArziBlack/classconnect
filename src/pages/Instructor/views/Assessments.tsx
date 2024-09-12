import ViewHeader from "../components/ViewHeader";
import { BreadCrumb } from "../components/Courses/BreadCrumb";

export const Assessments = () => {
  return (
    <>
      <ViewHeader
        title="Evaluation"
        subtext="Access your student list and interact with your students. View their contact information, office hours, and schedule one-on-one sessions to support their learning experience."
      />
      <BreadCrumb
        links={[
          { to: "", label: "Class Assessment" },
          { to: "class-notice", label: "Class Notice" },
          { to: "class-report", label: "Class Report" },
          { to: "feedback", label: "Send Feedback" },
        ]}
      />
    </>
  );
};

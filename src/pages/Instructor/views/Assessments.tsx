import ViewHeader from "../components/ViewHeader";
import { BreadCrumb } from "../components/Courses/BreadCrumb";

export const Assessments = () => {
  return (
    <>
      <ViewHeader
        title="Communications"
        subtext="Access your student list and interact with your students. View their contact information, office hours, and schedule one-on-one sessions to support their learning experience."
      />
      <BreadCrumb
        links={[
          { to: "", label: "Class Notice" },
          { to: "create-assessment", label: "Class Assessment" },
          { to: "class-report", label: "Class Report" },
        ]}
      />
    </>
  );
};

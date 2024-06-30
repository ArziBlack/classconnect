import { BreadCrumb } from "../Courses/BreadCrumb";
import TutorHeader from "../TutorHeader";

const links = [{ to: "", label: "About Me" }];

export const TutorDetails = () => {
  return (
    <div>
      <TutorHeader
        title="Bilton Maxiam"
        subtext="Seasoned developer with a strong background in full-stack development. James specializes in building robust web applications and has over 10 years of industry experience. He is passionate about sharing his knowledge and helping others excel in their coding careers."
      />
      <BreadCrumb links={links} />
    </div>
  );
};

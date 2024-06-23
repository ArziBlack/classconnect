import { BreadCrumb } from "../components/Courses/BreadCrumb";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Text } from "@chakra-ui/react";

const links = [
  { to: "", label: "Browse" },
  { to: "started", label: "Started" },
];

export const MyCourses = () => {
  return (
    <div>
      <Text
        fontSize={"22px"}
        fontWeight={500}
        color={"white"}
        lineHeight={"60.48px"}
        alignItems={"center"}
        display={"inline-flex"}
      >
        <MdOutlineKeyboardArrowLeft fontSize={"25px"} color="white" />
        Courses
      </Text>
      <Text
        mt={"0.2rem"}
        fontWeight={300}
        color={"white"}
        maxW={"600px"}
        fontSize={"14px"}
      >
        View and manage your enrolled courses. Track your progress, access
        course materials, and stay updated with upcoming lessons and
        assignments.
      </Text>
      <BreadCrumb links={links} />
    </div>
  );
};

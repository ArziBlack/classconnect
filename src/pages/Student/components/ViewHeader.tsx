import React from "react";
import { Text, Box } from "@chakra-ui/react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface ViewHeaderProps {
  title: string;
  subtext: string;
}

const ViewHeader: React.FC<ViewHeaderProps> = ({ title, subtext }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back one step
  };

  return (
    <Box>
      <Text
        fontSize={"22px"}
        fontWeight={500}
        color={"white"}
        lineHeight={"60.48px"}
        display={"inline-flex"}
        alignItems={"center"}
        cursor="pointer"
        onClick={goBack}
      >
        <MdOutlineKeyboardArrowLeft fontSize={"25px"} color="white" />
        {title}
      </Text>
      <Text
        mt={"0.2rem"}
        fontWeight={300}
        color={"white"}
        maxW={"600px"}
        fontSize={"14px"}
      >
        {subtext}
      </Text>
    </Box>
  );
};

export default ViewHeader;

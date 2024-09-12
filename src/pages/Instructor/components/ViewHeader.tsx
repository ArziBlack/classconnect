import React from "react";
import { Text, Box, SkeletonText } from "@chakra-ui/react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface ViewHeaderProps {
  title: string;
  subtext: string;
  loading?: boolean;
}

const ViewHeader: React.FC<ViewHeaderProps> = ({ title, subtext, loading }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/instructor");
  };

  return (
    <Box>
      <SkeletonText isLoaded={!loading}>
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
      </SkeletonText>
      <SkeletonText isLoaded={!loading}>
        <Text
          mt={"0.2rem"}
          fontWeight={300}
          color={"white"}
          maxW={"600px"}
          fontSize={"14px"}
        >
          {subtext}
        </Text>
      </SkeletonText>
    </Box>
  );
};

export default ViewHeader;

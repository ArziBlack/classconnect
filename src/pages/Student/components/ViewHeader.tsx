import React from "react";
import { Text, Box, SkeletonText } from "@chakra-ui/react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

interface ViewHeaderProps {
  title: string;
  subtext: string;
  loading?: boolean;
  preNav?: string;
}

const ViewHeader: React.FC<ViewHeaderProps> = ({
  title,
  subtext,
  loading,
  preNav,
}) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(preNav);
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
          <Link to={preNav}>
            <MdOutlineKeyboardArrowLeft fontSize={"25px"} color="white" />
          </Link>
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

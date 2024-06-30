import React from "react";
import { Text, Box, Flex, Image } from "@chakra-ui/react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { TEMPLATE } from "../../../constants/image";

interface TutorHeaderProps {
  title: string;
  subtext: string;
}

const TutorHeader: React.FC<TutorHeaderProps> = ({ title, subtext }) => {
  return (
    <Flex maxW={"700px"} justify={"space-between"}>
      <Box>
        <Flex gap={6} align={"center"} h={"fit-content"}>
          <Text
            fontSize={"22px"}
            fontWeight={500}
            color={"white"}
            lineHeight={"60.48px"}
            display={"inline-flex"}
            alignItems={"center"}
          >
            <MdOutlineKeyboardArrowLeft fontSize={"25px"} color="white" />
            {title}
          </Text>
          <Text
            fontSize={"14px"}
            fontWeight={500}
            color={"grey"}
            borderRadius={"4px"}
            p={"0 4px"}
            pt={"3px"}
            bg={"white"}
          >
            TUTOR
          </Text>
        </Flex>
        <Text
          fontSize={"14px"}
          fontWeight={500}
          color={"grey"}
          borderRadius={"4px"}
          p={"0 4px"}
          pt={"3px"}
          mb={2}
          width={"fit-content"}
        >
          FRONTEND DEVELOPMENT
        </Text>
        <Text
          mt={"0.2rem"}
          fontWeight={300}
          color={"white"}
          maxW={"500px"}
          fontSize={"14px"}
        >
          {subtext}
        </Text>
      </Box>
      <Image borderRadius="full" boxSize="160px" src={TEMPLATE} alt="Avatar" />
    </Flex>
  );
};

export default TutorHeader;

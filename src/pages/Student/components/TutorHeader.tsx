import React, { useState } from "react";
import { Text, Box, Flex, Image, Button } from "@chakra-ui/react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { TEMPLATE } from "../../../constants/image";
import ChakraModal from "../../../components/ChakraModal";

interface TutorHeaderProps {
  title: string;
  subtext: string;
}

const TutorHeader: React.FC<TutorHeaderProps> = ({ title, subtext }) => {
  const [confirmation, setConfirmation] = useState(false);

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
        <Text
          fontSize={"12px"}
          fontWeight={500}
          color={"black"}
          borderRadius={"4px"}
          p={"4px 8px"}
          pt={"3px"}
          mt={"15px"}
          bg={"yellow"}
          opacity={0.6}
          cursor={"pointer"}
          _hover={{ opacity: 1 }}
          w={"fit-content"}
          onClick={() => setConfirmation(true)}
        >
          CHOOSE TUTOR
        </Text>
      </Box>
      <Image borderRadius="full" boxSize="160px" src={TEMPLATE} alt="Avatar" />
      <ChakraModal isOpen={confirmation} onClose={() => setConfirmation(false)}>
        <Flex
          bg={"#023248"}
          flexDirection={"column"}
          borderRadius={"12px"}
          padding={10}
        >
          <Text color={"white"}>Are you sure about choosing this tutor</Text>
          <Flex gap={8} justify={"center"} mt={4}>
            <Button>Yes </Button>
            <Button>No </Button>
          </Flex>
        </Flex>
      </ChakraModal>
    </Flex>
  );
};

export default TutorHeader;

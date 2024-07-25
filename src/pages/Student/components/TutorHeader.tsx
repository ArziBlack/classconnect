import React, { useState } from "react";
import {
  Text,
  Box,
  Flex,
  Image,
  Button,
  SkeletonText,
  CircularProgress,
} from "@chakra-ui/react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import ChakraModal from "../../../components/ChakraModal";
import { useAppDispatch, useAppSelector } from "../../../hooks/reactReduxHooks";
import { chooseTutor } from "../../../services/student/studentThunks";
import CButton from "../../../components/Button";
import { PiWarningCircle } from "react-icons/pi";

interface TutorHeaderProps {
  title: string;
  subtext: string;
  loading: boolean;
  spec: string;
  pic: string;
  url: string;
  status: string;
}

const TutorHeader: React.FC<TutorHeaderProps> = ({
  title,
  subtext,
  loading,
  spec,
  pic,
  url,
  status,
}) => {
  const dispatch = useAppDispatch();
  const [confirmation, setConfirmation] = useState(false);
  const { recommendResponse, isLoading, error } = useAppSelector(
    (sammy) => sammy.student
  );
  const handleChooseTutor = () => {
    dispatch(chooseTutor({ url }));
  };

  const getButtonColor = () => {
    return status === "Not engaged yet" ? "#00ff84" : "yellow";
  };

  const getTutorStatus = () => {
    return status === "Not engaged yet"
      ? "This Tutor is open to accept a student"
      : "This tutor is no longer open to accept students"; 
  };

  return (
    <Flex maxW={"700px"} justify={"space-between"}>
      <Box>
        <Flex gap={6} align={"center"} h={"fit-content"}>
          <SkeletonText isLoaded={!loading}>
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
          </SkeletonText>
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
        <SkeletonText isLoaded={!loading}>
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
            {spec}
          </Text>
        </SkeletonText>
        <Text
          mt={"0.2rem"}
          fontWeight={300}
          color={"white"}
          maxW={"500px"}
          fontSize={"14px"}
        >
          {subtext}
        </Text>
        <Flex gap={4} mt={"15px"} flexDir={"column"}>
          <CButton
            fontSize={"12px"}
            fontWeight={500}
            color={"black"}
            // borderRadius={"4px"}
            // p={"4px 8px"}
            // pt={"3px"}
            bg={getButtonColor()}
            opacity={0.8}
            cursor={"pointer"}
            _hover={{ opacity: 1 }}
            w={"fit-content"}
            isDisabled={status !== "Not engaged yet"}
            onClick={() => setConfirmation(true)}
            text="CHOOSE TUTOR"
          />

          <Flex gap={2} align={"center"} fontSize={"12px"} color={"white"}>
            <PiWarningCircle />
            {getTutorStatus()}
          </Flex>
        </Flex>
      </Box>
      <Image borderRadius="full" boxSize="160px" src={pic} alt="Avatar" />
      <ChakraModal isOpen={confirmation} onClose={() => setConfirmation(false)}>
        <Flex
          bg={"#023248"}
          flexDirection={"column"}
          borderRadius={"12px"}
          padding={10}
        >
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              <Text color={"white"}>
                {error ? error.message : !recommendResponse?.message
                  ? "Are you sure about choosing this tutor"
                  : error}
              </Text>
              <Flex gap={8} justify={"center"} mt={4}>
                {!error ? (
                  <Button onClick={handleChooseTutor}>Yes </Button>
                ) : <Button onClick={() => setConfirmation(false)}>Ok</Button>}
                {!error && <Button onClick={() => setConfirmation(false)}>
                  {recommendResponse ? "Ok" : "No"}
                </Button>}
              </Flex>
            </>
          )}
        </Flex>
      </ChakraModal>
    </Flex>
  );
};

export default TutorHeader;

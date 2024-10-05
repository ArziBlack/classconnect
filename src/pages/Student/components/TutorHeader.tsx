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
import {
  chooseTutor,
  getApprovedTutors,
} from "../../../services/student/studentThunks";
import CButton from "../../../components/Button";
import { PiWarningCircle } from "react-icons/pi";
import useCustomToast from "../../../hooks/useCustomToast";
import { useNavigate } from "react-router-dom";

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
  const showToast = useCustomToast();
  const [confirmation, setConfirmation] = useState(false);
  const [showError, setShowError] = useState<string | null>(null);
  const { isLoading, chooseResponse, approvedTutors } = useAppSelector(
    (state) => state.student
  );

  React.useEffect(() => {
    !approvedTutors && dispatch(getApprovedTutors());
  }, []);

  const handleChooseTutor = async () => {
    const result = await dispatch(chooseTutor({ url }));
    if (result.meta.requestStatus === "fulfilled") {
      if (chooseResponse?.statusCode === 403) {
        showToast(chooseResponse?.message, "error");
        return;
      } else if (chooseResponse?.statusCode === 200) {
        showToast(chooseResponse?.message, "success");
      } else if (chooseResponse?.statusCode === 400) {
        showToast(chooseResponse?.error, "error");
      }
    } else if (result.meta.requestStatus === "rejected") {
      setShowError(result.payload as string);
      showToast(result.payload, "error");
    }
  };

  const navigate = useNavigate();

  const getButtonColor = () => {
    return status === "Not engaged yet" ? "#00ff84" : "yellow";
  };

  const getTutorStatus = () => {
    return status === "Not engaged yet"
      ? "This Tutor is open to accept a student"
      : "This tutor is no longer open to accept students";
  };

  return (
    <Flex maxW={"700px"} justify={"space-between"} ml={{ base: 5, md: 0 }} flexDir={{base:"column-reverse", md: "row"}}>
      <Box display="flex" flexDir={"column"}>
        <Flex gap={6} align={"center"} h={"fit-content"}>
          <SkeletonText isLoaded={!loading}>
            <Text
              fontSize={{base:"18px",lg:"22px"}}
              fontWeight={500}
              color={"white"}
              lineHeight={"60.48px"}
              display={"inline-flex"}
              alignItems={"center"}
            >
              <MdOutlineKeyboardArrowLeft
                fontSize={"25px"}
                color="white"
                onClick={() => navigate("/student/tutors")}
                cursor={"pointer"}
                className="mr-2 md:flex hidden"
              />
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
      <Image borderRadius="full" boxSize={{base: "150px", md:"160px"}} src={pic} alt="Avatar" />
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
                {showError
                  ? showError
                  : "Are you sure about choosing this tutor?"}
              </Text>
              <Flex gap={8} justify={"center"} mt={4}>
                {showError ? (
                  <Button onClick={() => setConfirmation(false)}>Ok</Button>
                ) : (
                  <>
                    <Button onClick={handleChooseTutor}>Yes</Button>
                    <Button onClick={() => setConfirmation(false)}>No</Button>
                  </>
                )}
              </Flex>
            </>
          )}
        </Flex>
      </ChakraModal>
    </Flex>
  );
};

export default TutorHeader;

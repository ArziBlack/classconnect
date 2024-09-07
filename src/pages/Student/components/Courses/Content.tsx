import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Box,
  Text,
  Button as CButton,
  CircularProgress,
} from "@chakra-ui/react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/reactReduxHooks";
import { useEffect, useState } from "react";
import jsPDF from "jspdf";
import {
  getCurriculum,
  getMyCourses,
  RegisterForACourse,
} from "../../../../services/student/studentThunks";
import Button from "../../../../components/Button";
import { useParams } from "react-router-dom";
import { convertStringsToArray } from "../../../../utils/utility";
import Loading from "../../../../utils/Loading";
import ViewHeader from "../ViewHeader";
import { BreadCrumb } from "./BreadCrumb";
import ChakraModal from "../../../../components/ChakraModal";
import useCustomToast from "../../../../hooks/useCustomToast";

const links = [{ to: "", label: "Contents" }];

export const Content = () => {
  const showToast = useCustomToast();
  const [confirmation, setConfirmation] = useState(false);
  const [showError, setShowError] = useState<string | null>(null);
  const { courseId } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCurriculum({ courseId }));
    dispatch(getMyCourses());
  }, []);

  const { curriculum, isLoading, myCoursesRes } = useAppSelector(
    (state) => state.student
  );
  const isEnrolled = myCoursesRes?.message?.some(
    (course) => course?.courseId === courseId
  );

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("HEP curriculum", 10, 10);

    doc.setFontSize(12);
    doc.text(
      "View your enrolled curriculum. Track your progress, access curriculum materials, and stay updated with upcoming lessons and assignments.",
      10,
      20,
      { maxWidth: 180 }
    );

    curriculum?.data?.curriculum?.forEach((item, index) => {
      doc.setFontSize(14);
      doc.text(item?.topic, 10, 30 + index * 30);
      doc.setFontSize(12);
      doc.text(item?.content, 10, 40 + index * 30, { maxWidth: 180 });
    });
    doc.save("curriculum.pdf");
  };

  if (isLoading) {
    return <Loading />;
  }

  const handleCourseRegistration = async () => {
    const result = await dispatch(RegisterForACourse(curriculum?.data?.title));
    if (result.meta.requestStatus === "fulfilled") {
      if (result.payload?.statusCode === 403) {
        showToast(result.payload?.message, "error");
        return;
      } else if (result.payload?.statusCode === 200) {
        showToast(result.payload?.message, "success");
      } else if (result.payload?.statusCode === 400) {
        showToast(result.payload?.error, "error");
      }
    } else if (result.meta.requestStatus === "rejected") {
      setShowError(result.payload as string);
      showToast(result.payload, "error");
    }
  };
  return (
    <div>
      <Flex flexDir={"column"} gap={3}>
        <ViewHeader
          preNav="/student/courses"
          title={curriculum?.data?.title}
          subtext={curriculum?.data?.description}
        />
        {!isEnrolled && (
          <Button text="Enroll" onClick={() => setConfirmation(true)} />
        )}
      </Flex>
      <BreadCrumb links={links} />
      <Flex color="white" justify={"space-between"}>
        <Accordion
          allowMultiple
          width="700px"
          display="flex"
          flexDir="column"
          gap={4}
        >
          {curriculum?.data?.curriculum.map((levelItems, levelIndex) => (
            <Box key={levelIndex}>
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                {levelItems[0]?.level || `Level ${levelIndex + 1}`}
              </Text>

              {levelItems.slice(1).map((topicItem, topicIndex) => (
                <AccordionItem key={topicIndex} border="none" mb="2px">
                  <h2>
                    <AccordionButton
                      h="50px"
                      borderRadius="8px"
                      _hover={{ bg: "#37474f" }}
                      bg="#37474F"
                    >
                      <Box as="span" flex="1" textAlign="left">
                        {topicItem?.topic?.replace(":", "")}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={2} textTransform={"capitalize"}>
                    {Array.isArray(topicItem?.content) &&
                    topicItem?.content.length > 0 ? (
                      topicItem.content[0]
                        ?.split(",")
                        .map((contentItem, contentIndex) => (
                          <Text key={contentIndex} mb={2}>
                            • {contentItem.trim()}
                          </Text>
                        ))
                    ) : (
                      <Text>No content available</Text>
                    )}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Box>
          ))}
        </Accordion>
        <Button text="Download Curriculum" onClick={generatePDF} />
      </Flex>
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
                  : "Are you sure about enrolling for this course?"}
              </Text>
              <Flex gap={8} justify={"center"} mt={4}>
                {showError ? (
                  <CButton onClick={() => setConfirmation(false)}>Ok</CButton>
                ) : (
                  <>
                    <CButton onClick={handleCourseRegistration}>Yes</CButton>
                    <CButton onClick={() => setConfirmation(false)}>No</CButton>
                  </>
                )}
              </Flex>
            </>
          )}
        </Flex>
      </ChakraModal>
    </div>
  );
};

import {
  Box,
  Flex,
  Text,
  Link,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  Button as CButton,
  CircularProgress,
} from "@chakra-ui/react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/reactReduxHooks";
import { useEffect, useState } from "react";
import {
  getMyCourses,
  getCurriculum,
  RegisterForACourse,
} from "../../../../services/student/studentThunks";
import ViewHeader from "../ViewHeader";
import { BreadCrumb } from "./BreadCrumb";
import { useParams } from "react-router-dom";
import Loading from "../../../../utils/Loading";
import Button from "../../../../components/Button";
import ChakraModal from "../../../../components/ChakraModal";
import useCustomToast from "../../../../hooks/useCustomToast";
import { ICurriculumResponse } from "../../../../typings/student";

const links = [{ to: "", label: "Contents" }];

export const Content = () => {
  const showToast = useCustomToast();
  const [confirmation, setConfirmation] = useState(false);
  const [showError, setShowError] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { courseId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const result = await dispatch(getCurriculum({ courseId }));
      if ((result.payload as ICurriculumResponse)?.statusCode === 404) {
        setErrorMessage("Curriculum not posted yet. Check later.");
      }
      dispatch(getMyCourses());
      console.log(result.payload);
    };
    fetchData();
  }, [courseId, dispatch]);

  const { curriculum, isLoading, myCoursesRes, enrollCourseLoading } =
    useAppSelector((state) => state.student);
  const isEnrolled = myCoursesRes?.message?.some(
    (course) => course?.courseId === courseId
  );

  const projects = curriculum?.data?.curriculum?.map((level) =>
    level.find((item) => item.project)
  );

  console.log(projects);

  const isNoCurriculumFile = !curriculum?.data?.curriculumFile;

  if (isLoading) {
    return <Loading />;
  }

  if (errorMessage) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Text fontSize="2xl" color="red.500">
          {errorMessage || "Curriculum not available for this course."}
        </Text>
      </Flex>
    );
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
      setShowError(result.payload?.message as string);
      showToast(result.payload?.message, "error");
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
          {curriculum?.data?.curriculum
            .filter((levelItems) =>
              levelItems.some(
                (topicItem) =>
                  topicItem?.content && topicItem.content.length > 0
              )
            )
            .map((levelItems, levelIndex) => (
              <Box key={levelIndex}>
                <Flex justify={"space-between"}>
                  <Text fontSize="xl" fontWeight="bold" mb={4}>
                    {levelItems[0]?.level || `Level ${levelIndex + 1}`}
                  </Text>
                  {projects?.[levelIndex]?.project && (
                    <Link href={projects?.[levelIndex]?.project}>
                      <Text fontSize={"14px"} textDecor={"underline"}>
                        View Project
                      </Text>
                    </Link>
                  )}
                </Flex>

                {levelItems
                  .filter(
                    (topicItem) =>
                      topicItem?.content && topicItem.content.length > 0
                  )
                  .map((topicItem, topicIndex) => (
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

        <Link
          href={
            isNoCurriculumFile ? undefined : curriculum?.data?.curriculumFile
          }
          onClick={(e) => isNoCurriculumFile && e.preventDefault()}
          style={{ pointerEvents: isNoCurriculumFile ? "none" : "auto" }}
          opacity={isNoCurriculumFile ? 0.6 : 1}
        >
          <Button text=" Download Curriculum" />
        </Link>
      </Flex>
      <ChakraModal isOpen={confirmation} onClose={() => setConfirmation(false)}>
        <Flex
          bg={"#023248"}
          flexDirection={"column"}
          borderRadius={"12px"}
          padding={10}
        >
          {enrollCourseLoading ? (
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

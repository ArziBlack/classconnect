import React from "react";
import ViewHeader from "../components/ViewHeader";
import { BreadCrumb } from "../components/Courses/BreadCrumb";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Box,
  Text,
  Spinner,
  Link,
} from "@chakra-ui/react";
import Button from "../../../components/Button";
import { getCurriculum } from "../../../services/tutor/tutorThunk";
import { useAppDispatch, useAppSelector } from "../../../hooks/reactReduxHooks";

const links = [{ to: "", label: "My curriculum" }];

export const Curriculum = () => {
  const dispatch = useAppDispatch();
  const { curriculumResponse, isLoading, isError } = useAppSelector(
    (state) => state.tutor
  );

  const projects = curriculumResponse?.data?.curriculum?.map((level) =>
    level.find((item) => item.project)
  );

  const isNoCurriculumFile = !curriculumResponse?.data?.curriculumFile;

  React.useEffect(() => {
    !curriculumResponse && dispatch(getCurriculum());
  }, []);

  if (isLoading) {
    return (
      <div className="w-full flex h-full items-center justify-center mt-10 bg-primary-dark">
        <Spinner color={"white"} w={`30px`} h={`30px`} />
      </div>
    );
  }

  if (isError) {
    return (
      <Flex justifyContent="center" alignItems="center">
        <Text fontSize="xl" color="white">
          {
            "Curriculum is not yet available for this course, check again later."
          }
        </Text>
      </Flex>
    );
  }
  return (
    <>
      <ViewHeader
        title="Curriculum"
        subtext="View and manage your enrolled curriculum. Track your progress, access curriculum materials, and stay updated with upcoming lessons and assignments."
      />
      <BreadCrumb links={links} />

      <Flex color="white" justify={"space-between"}>
        {curriculumResponse?.data?.curriculum?.length > 0 ? (
          <Accordion
            allowMultiple
            width="700px"
            display="flex"
            flexDir="column"
            gap={4}
          >
            {curriculumResponse?.data?.curriculum
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
        ) : (
          <Box width="700px" color="gray.200">
            {curriculumResponse?.message ||
              "No curriculum data available, please check back later..."}
          </Box>
        )}
        <Link
          href={
            isNoCurriculumFile
              ? undefined
              : curriculumResponse?.data?.curriculumFile
          }
          onClick={(e) => isNoCurriculumFile && e.preventDefault()}
          style={{ pointerEvents: isNoCurriculumFile ? "none" : "auto" }}
          opacity={isNoCurriculumFile ? 0.6 : 1}
        >
          <Button text=" Download Curriculum" />
        </Link>
      </Flex>
    </>
  );
};

export default Curriculum;

import { Flex, Box, Text, List, ListItem, ListIcon, SkeletonText } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useAppSelector } from "../../../../hooks/reactReduxHooks";
import { useEffect, useState } from "react";
import { ICourseData } from "../../../../typings/student";
import { useParams } from "react-router-dom";

export const Details = () => {
  const { allCoursesResponse, isLoading } = useAppSelector(app => app.student);
  const { courseId } = useParams();
  const [course, setCourse] = useState<ICourseData>(null);
  useEffect(() => {
    if (allCoursesResponse) {
      setCourse(allCoursesResponse?.message?.find((item: ICourseData) => courseId === item.title.split(" ")[0]));
    }
  }, [allCoursesResponse, courseId]);

  return (
    <Flex color="white" width={"700px"}>
      <Box color="white">
        <Text fontSize="xl" mb={4} fontWeight={700}>
          Description
        </Text>
        <SkeletonText isLoaded={!isLoading}>
          <Text mb={4} fontSize={"14px"} opacity={0.8}>
            {course?.description}
          </Text>
        </SkeletonText>
        <Text fontSize="xl" mb={2} fontWeight={700}>
          Here's a detailed look of what you will get
        </Text>
        <List spacing={2} mb={4} fontSize={"14px"} opacity={0.8}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            In-depth Knowledge of HTML, CSS, and JavaScript
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Modern JavaScript Frameworks
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Responsive Web Design
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Version Control with Git
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Web Performance Optimization
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Testing and Debugging
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Project-Based Learning
          </ListItem>
        </List>
        <Text fontSize="xl" mb={2} fontWeight={700}>
          Who this course is for
        </Text>
        <List spacing={2} fontSize={"14px"} opacity={0.8}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Aspiring Web Developers
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Developers Looking to Upskill
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Designers Moving to Code
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Professionals Seeking Career Change
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
};

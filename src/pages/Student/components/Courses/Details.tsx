import { Flex, Box, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export const Details = () => {
  return (
    <Flex color="white" width={"700px"}>
      <Box color="white">
        <Text fontSize="xl" mb={4} fontWeight={700}>
          Description
        </Text>
        <Text mb={4} fontSize={"14px"} opacity={0.8}>
          The Front-End Engineering course is designed to provide you with the
          essential skills and knowledge needed to build dynamic, responsive,
          and visually appealing web applications. Whether you are a beginner or
          looking to enhance your existing skills, this course covers everything
          you need to become proficient in front-end development.
        </Text>
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

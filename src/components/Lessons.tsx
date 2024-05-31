import { VStack, Box, SimpleGrid } from "@chakra-ui/layout";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import Heading from "./Heading";
import Description from "./Description";
import Button from "./Button";
import LessonCard from "./LessonCard";
import { data } from "../utils/data";
const Lessons = () => {
  return (
    <VStack paddingY="40px">
      <Heading>Qualified Lessons for Students</Heading>
      <Description>
        A lesson or class is a structured period of time where learning is
        intended to occur. It involves one or more students being taught by a
        teacher or instructor.
      </Description>
      <Tabs variant="solid-rounded" colorScheme="red" align="center" marginY="20px">
        <TabList>
          <Tab>Kindergarten</Tab>
          <Tab>High School</Tab>
          <Tab>College</Tab>
        </TabList>
      </Tabs>
      <Box>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="12">
          {data.map((item, index) => (
            <LessonCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              bgColor={item.bgColor}
            />
          ))}
        </SimpleGrid>
      </Box>
      <Box marginY="35px"></Box>
      <Button text={`Visit More Classes`}/>
    </VStack>
  );
};

export default Lessons;

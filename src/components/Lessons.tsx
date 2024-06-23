import { data } from "../utils/data";
import LessonCard from "./LessonCard";
import Description from "./Description";
import { Heading } from "@chakra-ui/react";
import { VStack, Box, SimpleGrid } from "@chakra-ui/layout";
import { useNavigate } from "react-router-dom";

const Lessons = () => {
  const navigate = useNavigate();
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    navigate("/pricing");
  };
  return (
    <VStack paddingY="40px">
      <Heading
        as={`h2`}
        color="brand.dark"
        textAlign={`center`}
        size={{ base: "xl", md: "2xl" }}
        w={{ base: "90%", md: "450px" }}
        marginBottom={{ base: "4", md: "" }}
      >
        Qualified Classes for Students
      </Heading>
      <Description>
        A class is a structured period of time where learning is intended to
        occur. It involves one or more students being taught by a teacher or
        instructor.
      </Description>

      <Box position={`relative`} mt={5}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing="12">
          {data.map((item, index) => (
            <LessonCard
              key={index}
              CTA="Learn more"
              image={item.image}
              title={item.title}
              bgColor={item.bgColor}
              description={item.description}
              onClick={() => handleLinkClick()}
            />
          ))}
        </SimpleGrid>
      </Box>
      <Box marginY="35px"></Box>
    </VStack>
  );
};

export default Lessons;

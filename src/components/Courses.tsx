import {
  Box,
  VStack,
  Heading,
  SimpleGrid,
  Link as ChakraLink,
} from "@chakra-ui/layout";
import SecondaryHero from "./SecondaryHero";
import { courseLinks } from "../utils/course";
import { Link as ReactRouterLink } from "react-router-dom";
import LessonCard from "./LessonCard";
import { data } from "../utils/data";

const Courses = () => {
  return (
    <section>
      <SecondaryHero
        title="HEP Courses Are For All Standards"
        description="Focus your creative journey with Skillshare Learning Paths. Deepen your skillset with a set of curated classes that build on one another, reinforcing lessons. Available in a range of experience levels from beginner to advanced."
      />
      <VStack>
        <Box
          py="40px"
          alignItems={`center`}
          justifyContent={`center`}
          display={`flex`}
          flexDir={`column`}
        >
          <SimpleGrid columns={{ base: 1, md: 1 }} spacing={`10`}>
            {courseLinks.map((item, index) => (
              <Box
                px="8px"
                key={index}
                py={`10px`}
                bg="#fff"
                display={`flex`}
                borderRadius={`5px`}
              >
                <ChakraLink
                  to={item.link}
                  fontWeight={`600`}
                  as={ReactRouterLink}
                >
                  {item.route}
                </ChakraLink>
              </Box>
            ))}
          </SimpleGrid>
          <Heading as={`h3`} fontSize={`26px`} pt="35px">
            Standard Classes
          </Heading>
        </Box>
        <Box>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="12">
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
      </VStack>
    </section>
  );
};

export default Courses;

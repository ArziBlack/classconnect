import {
  VStack,
  Box,
  Link as ChakraLink,
  SimpleGrid,
  Heading,
} from "@chakra-ui/layout";
import SecondaryHero from "./SecondaryHero";
import { Outlet, Link as ReactRouterLink } from "react-router-dom";
import { courseLinks } from "../utils/course";
import { COURSES } from "../constants/illustrations";

const Courses = () => {
  return (
    <VStack paddingTop={`50px`}>
      <SecondaryHero
        title="Eduvi Courses For All Standards"
        imageUrl={COURSES}
        links={[
          { label: "Home", href: "/" },
          { label: "courses", href: "/courses" },
        ]}
      />
      <VStack w="100%" display={`flex`}>
        <Box py="40px">
          <SimpleGrid columns={{ base: 4, sm: 5, md: 6, lg: 7 }} spacing={`10`}>
            {courseLinks.map((item, index) => (
              <Box
                key={index}
                py={`10px`}
                bg="#fff"
                px="8px"
                borderRadius={`5px`}
                display={`flex`}
                alignItems={`center`}
                justifyContent={`center`}
              >
                <ChakraLink
                  as={ReactRouterLink}
                  to={item.link}
                  fontWeight={`600`}
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
          <Outlet />
        </Box>
      </VStack>
    </VStack>
  );
};

export default Courses;

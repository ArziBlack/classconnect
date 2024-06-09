import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Button from "./Button";
import { COLLEGE_HERO } from "../constants/illustrations";

const CollegeLevel = () => {
  return (
    <Flex
      w={`full`}
      justifyContent={`space-between`}
      paddingTop={{ base: "20", md: "0" }}
      flexDir={{ base: "column-reverse", md: "row" }}
      alignItems="center"
      bg={`brand.pagedark`}
      borderRadius={`20px`}
      marginY="40px"
    >
      <Box
        flex={{ base: "none", md: 1 }}
        display="flex"
        flexDir={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent={`space-between`}
        paddingY={{ base: "10", md: "20" }}
        textAlign={{ base: "center", md: "left" }}
        p={{ base: 4, md: 20 }}
      >
        <Box flex="1">
          <Box display={`flex`}>
            <Text
              color={`brand.action`}
              padding={`2`}
              bg={`brand.pagedarker`}
              borderRadius={10}
              fontSize={`16px`}
              display="inline-block"
              fontWeight={`500`}
            >
              College Level
            </Text>
          </Box>
          <Heading
            as="h2"
            fontWeight={500}
            color={`brand.dark`}
            fontFamily={"Metropolis"}
            size={{ base: "xl", md: "2xl" }}
            paddingRight={{ base: "0", md: "20px" }}
            paddingY={{ base: "5", md: "0" }}
          >
            Make the most of every moment. Invest in your future with our
            courses
          </Heading>
          <Text fontSize={`medium`} color={`brand.offwhite`} paddingY={`10px`}>
            Unlock your potential with our expert-led courses. Explore new
            skills, advance your career, and seize opportunities for growth.
            Start your journey today
          </Text>
          <Button text="Register Now" />
        </Box>
      </Box>
      <Box
        flex={{ base: "none", md: 1 }} // Adjusted flex basis
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
        h={{ base: "full" }}
        w={{ base: "full" }}
      >
        <Image
          src={COLLEGE_HERO}
          h="full"
          w="full"
          objectFit={{ base: "cover", md: "contain" }}
        />
      </Box>
    </Flex>
  );
};

export default CollegeLevel;

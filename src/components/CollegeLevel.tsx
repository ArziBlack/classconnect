import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Button from "./Button";
import { COLLEGE_HERO } from "../constants/illustrations";

const CollegeLevel = () => {
  return (
    <Flex
      w={`full`}
      justifyContent={`space-between`}
      paddingTop={{ base: "20", md: "58" }}
      flexDir={{ base: "column-reverse", md: "row" }}
      alignItems="center"
      bg={`brand.pagedark`}
      h="600px"
      borderRadius={`20px`}
      marginY="40px"
    >
      <Box
        flex="1"
        display="flex"
        flexDir={`column`}
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent={`space-between`}
        paddingY={{ base: "10", md: "20" }}
        textAlign={{ base: "center", md: "left" }}
        p={20}
      >
        <Box>
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
          // fontSize={{ base: "2xl", md: "xxx-large" }}
          size={{ base: "xl", md: "3xl" }}
          as="h2"
          fontWeight={600}
          color={`brand.dark`}
          paddingRight={{ base: "0", md: "20px" }}
          paddingY={{ base: "5", md: "0" }}
        >
          Don’t waste time in COVID-19 pandemic. Develop your skills.
        </Heading>
        <Text fontSize={`medium`} color={`brand.offwhite`} paddingY={`10px`}>
          High-definition video is video of higher resolution and quality than
          standard-definition. While there is no standardized meaning for
          high-definition, generally any video.
        </Text>
        <Button text="Register Now" />
      </Box>
      <Box
        flex="1"
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        marginY={`10px`}
      >
        <Image
          src={COLLEGE_HERO}
          h={{ base: "300px", md: "550px" }}
          w={{ base: "300px", md: "550px" }}
          objectFit={`cover`}
        />
      </Box>
    </Flex>
  );
};

export default CollegeLevel;

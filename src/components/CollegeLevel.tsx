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
      borderRadius={`20px`}
      marginY="40px"
    >
      <Box
        flex={{ base: "none", md: 1 }} // Adjusted flex basis
        display="flex"
        flexDir={{ base: "column", md: "row" }} // Adjusted flex direction
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent={`space-between`}
        paddingY={{ base: "10", md: "20" }}
        textAlign={{ base: "center", md: "left" }}
        p={{ base: 4, md: 20 }} // Adjusted padding
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
      </Box>
      <Box
        flex={{ base: "none", md: 1 }} // Adjusted flex basis
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
        h={{ base: "full", md: "550px" }}
        w={{ base: "full", md: "550px" }}
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

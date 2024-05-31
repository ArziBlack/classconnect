import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import Button from "./Button";
import { CAREER } from "../constants/illlustrations";

const Career = () => {
  return (
    <Flex
      w={`full`}
      justifyContent={`space-between`}
      paddingTop={{ base: "20", md: "58" }}
      flexDir={{ base: "column-reverse", md: "row-reverse" }}
      alignItems="center"
      // bg={`brand.pagedark`}
      h="550px"
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
        <Heading
          // fontSize={{ base: "2xl", md: "xxx-large" }}
          size={{ base: "xl", md: "3xl" }}
          as="h2"
          fontWeight={600}
          color={`brand.dark`}
          paddingRight={{ base: "0", md: "20px" }}
          paddingY={{ base: "5", md: "0" }}
        >
          Want to share your knowledge? Join us a Mentor
        </Heading>
        <Text fontSize={`medium`} color={`brand.offwhite`} paddingY={`10px`}>
          High-definition video is video of higher resolution and quality than
          standard-definition. While there is no standardized meaning for
          high-definition, generally any video.
        </Text>
        <Button text="Career Information" />
      </Box>
      <Box
        flex="1"
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
        marginY={`10px`}
        h="full"
        w="full"
        p="15px"
      >
        <Image
          src={CAREER}
          h={{ base: "300px", md: "500px" }}
          w={{ base: "300px", md: "500px" }}
          objectFit={`contain`}
        />
      </Box>
    </Flex>
  );
};

export default Career;

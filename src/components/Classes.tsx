import Button from "./Button";
import { Text } from "@chakra-ui/react";
import { VStack, Heading } from "@chakra-ui/layout";

const Classes = () => {
  return (
    <VStack paddingY="40px" h="full" mt={20}>
      <Heading
        as={`h2`}
        color="brand.dark"
        textAlign={`center`}
        size={{ base: "xl", md: "2xl" }}
        w={{ base: "90%", md: "450px" }}
        marginBottom={{ base: "4", md: "0" }}
      >
        High quality video, audio & live classes
      </Heading>

      <Text
        mt={10}
        fontWeight={500}
        fontSize={"20px"}
        color={"brand.text"}
        textAlign={`center`}
        paddingBottom={`10px`}
        w={{ base: "90%", md: "650px" }}
      >
        High-definition video is video of higher resolution and quality than
        standard-definition. While there is no standardized meaning for
        high-definition, generally any video image with considerably more than
        480 vertical scan lines or 576 vertical lines is considered
        high-definition.
      </Text>
      <Button text="Visit Courses" />
    </VStack>
  );
};

export default Classes;

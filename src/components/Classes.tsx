import { VStack, Heading, HStack } from "@chakra-ui/layout";
import { Text, Box, Image } from "@chakra-ui/react";
import { PATTERN, VIDEO } from "../constants/illustrations";
import { AUDIO, LIVE, PLAY } from "../constants/icon";
import Button from "./Button";

const Classes = () => {
  return (
    <VStack paddingY="40px" h="full">
      <Heading
        as={`h2`}
        size={`xl`}
        w={{ base: "90%", md: "450px" }}
        textAlign={`center`}
        color="brand.dark"
        marginBottom={{ base: "4", md: "0" }}
      >
        High quality video, audio & live classes
      </Heading>
      <Text
        w={{ base: "90%", md: "650px" }}
        textAlign={`center`}
        color="brand.offwhite"
        paddingBottom={`10px`}
      >
        High-definition video is video of higher resolution and quality than
        standard-definition. While there is no standardized meaning for
        high-definition, generally any video image with considerably more than
        480 vertical scan lines or 576 vertical lines is considered
        high-definition.
      </Text>
      <Button text="Visit Courses" color="white" fontWeight="600" />
      <Box
        pos="relative"
        display="flex"
        flexDir="column"
        alignItems={`center`}
        justifyContent={`center`}
        height={{ base: "full", md: "800px" }}
        width="full"
      >
        <Image
          src={VIDEO}
          pos="relative"
          zIndex="2"
          height="100%"
          width={"100%"}
        />
        <Image
          src={PATTERN}
          pos="absolute"
          h="230px"
          w="230px"
          top={`1px`}
          right="10%"
          zIndex={`1`}
          display={{ base: "none", md: "block" }}
        />
        <HStack
          justifyContent={`space-between`}
          w={{ base: "90%", md: "60%" }}
          pos={{ base: "relative", md: "absolute" }}
          bottom={{ base: "20px", md: "75px" }}
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: "10px", md: "10%" }}
          //   gridColumn={`3 repeat`}
        >
          <HStack
            padding="2"
            bg="white"
            borderRadius="5px"
            paddingX="3"
            width={{ base: "full", md: "" }}
            justifyContent={`space-between`}
          >
            <Image
              src={AUDIO}
              padding="5px"
              borderRadius={`5px`}
              bg="brand.lightred"
            />
            <Text fontWeight="600">Audio Classes</Text>
          </HStack>
          <HStack
            padding="2"
            bg="white"
            borderRadius="5px"
            paddingX="3"
            width={{ base: "full", md: "" }}
            justifyContent={`space-between`}
          >
            <Image
              src={LIVE}
              padding="5px"
              borderRadius={`5px`}
              bg="brand.lightred"
            />
            <Text fontWeight="600">Live Classes</Text>
          </HStack>
          <HStack
            padding="2"
            bg="white"
            borderRadius="5px"
            paddingX="3"
            width={{ base: "full", md: "" }}
            justifyContent={`space-between`}
          >
            <Image
              src={PLAY}
              padding="5px"
              borderRadius={`5px`}
              bg="brand.lightred"
            />
            <Text fontWeight="600">Recorded Classes</Text>
          </HStack>
        </HStack>
      </Box>
    </VStack>
  );
};

export default Classes;

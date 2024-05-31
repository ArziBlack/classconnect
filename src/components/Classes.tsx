import { VStack, Heading, HStack } from "@chakra-ui/layout";
import { Text, Box, Image } from "@chakra-ui/react";
import { PATTERN, VIDEO } from "../constants/illlustrations";
import { AUDIO, LIVE, PLAY } from "../constants/icon";
import Button from "./Button";

const Classes = () => {
  return (
    <VStack paddingY="40px" h="full">
      <Heading
        as={`h2`}
        size={`xl`}
        w="450px"
        textAlign={`center`}
        color="brand.dark"
      >
        High quality video, audio & live classes
      </Heading>
      <Text w="650px" textAlign={`center`} color="brand.offwhite" paddingBottom={`10px`}>
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
        height="800px"
      >
        <Image src={VIDEO} pos="relative" zIndex="2" height="full"/>
        <Image
          src={PATTERN}
          pos="absolute"
          h="230px"
          w="230px"
          top={`1px`}
          right="1px"
          zIndex={`1`}
        />
      <HStack justifyContent={`space-between`} w="60%" pos="absolute" bottom="75px">
        <HStack padding="2" bg="white" borderRadius="5px" paddingX="3">
          <Image src={AUDIO} padding="5px" borderRadius={`5px`} bg="brand.lightred"/>
          <Text fontWeight="600">Audio Classes</Text>
        </HStack>
        <HStack padding="2" bg="white" borderRadius="5px" paddingX="3">
          <Image src={LIVE} padding="5px" borderRadius={`5px`} bg="brand.lightred" />
          <Text fontWeight="600">Live Classes</Text>
        </HStack>
        <HStack padding="2" bg="white" borderRadius="5px" paddingX="3">
          <Image src={PLAY} padding="5px" borderRadius={`5px`} bg="brand.lightred" />
          <Text fontWeight="600">Recorded Classes</Text>
        </HStack>
      </HStack>
      </Box>
    </VStack>
  );
};

export default Classes;

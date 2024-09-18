import { Box, Flex, Heading, VStack, Text } from "@chakra-ui/react";

export const Internship = () => {
  return (
    <Flex color={"white"}>
      <Box
        p={8}
        maxW="lg"
        boxShadow="lg"
        borderWidth="1px"
        textAlign="center"
        overflow="hidden"
        borderRadius="lg"
        bgGradient="linear(to-r, teal.500, blue.500)"
      >
        <VStack spacing={4}>
          <Heading as="h2" size="lg" color="brand.action">
            Coming Soon!
          </Heading>
          <Text fontSize="md">
            Exciting new features are on the way. <br /> Stay tuned for more
            updates!
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

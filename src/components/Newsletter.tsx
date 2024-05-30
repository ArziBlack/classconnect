import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const bgColor = useColorModeValue("blue.900", "gray.800");
  const textColor = useColorModeValue("white", "gray.200");
  const inputBgColor = useColorModeValue("white", "gray.700");

  const handleSubmit = () => {
    // Add your email submission logic here
    console.log("Submitting email:", email);
  };

  return (
    <Box bg={bgColor} color={textColor} py={12} px={{ base: 4, md: 8 }}>
      <Flex
        align="center"
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        maxW="container.xl"
        mx="auto"
      >
        <Box textAlign={{ base: "center", md: "left" }}>
          <Heading as="h2" size="xl" mb={2}>
            Subscribe For Get Update
          </Heading>
          <Heading as="h2" size="xl" mb={4}>
            Every New Courses
          </Heading>
          <Text mb={6} fontSize="lg">
            20k+ students daily learn with Eduvi. Subscribe for new courses.
          </Text>
          <form onSubmit={handleSubmit}>
            <InputGroup size="lg" mb={6}>
              <Input
                placeholder="enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                bg={inputBgColor}
                color={textColor}
                pr="4.5rem" // Adjust padding for button
              />
              <InputRightElement width="4.5rem">
                <Button
                  type="submit"
                  h="1.75rem"
                  size="sm"
                  colorScheme="purple"
                >
                  Subscribe
                </Button>
              </InputRightElement>
            </InputGroup>
          </form>
        </Box>

        {/* Image Placeholders (replace with actual images) */}
        <Flex
          flexWrap="wrap"
          justifyContent={{ base: "center", md: "flex-end" }}
          mt={{ base: 8, md: 0 }}
        >
          {[...Array(6)].map((_, index) => (
            <Box
              key={index}
              boxSize="50px" // Adjust size as needed
              borderRadius="full"
              bg="gray.300" // Placeholder background
              m={2}
              overflow="hidden"
            >
              {/* <Image src="your_image_url" alt={`Student ${index + 1}`} /> */}
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default NewsletterSection;

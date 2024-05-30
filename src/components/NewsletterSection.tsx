import React from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import photo1 from "../assets/icons/photo1.png";
import photo2 from "../assets/icons/photo2.png";
import photo3 from "../assets/icons/photo3.png";
import photo4 from "../assets/icons/photo4.png";
import photo5 from "../assets/icons/photo5.png";
import photo6 from "../assets/icons/photo6.png";

const NewsletterSection: React.FC = () => {
  const bgColor = useColorModeValue("blue.900", "gray.800");
  const textColor = useColorModeValue("white", "gray.100");
  const inputBgColor = useColorModeValue("gray.700", "gray.600");
  const buttonBgColor = useColorModeValue("purple.500", "purple.400");

  return (
    <Box
      maxW="1240px"
      mx="auto"
      h={{ base: "auto", md: "320px" }}
      py={{ base: 6, md: 10 }}
      px={{ base: 4, md: 5 }}
      bg={bgColor}
      color={textColor}
      textAlign="center"
      borderRadius="lg"
      position="relative"
      overflow="hidden"
    >
      {/* Circular Images */}
      <Image
        src={photo1}
        alt="Profile 1"
        position="absolute"
        top={{ base: "10%", md: "20%" }}
        left={{ base: "2%", md: "5%" }}
        boxSize={{ base: "30px", md: "50px" }}
        borderRadius="full"
      />
      <Image
        src={photo2}
        alt="Profile 2"
        position="absolute"
        top={{ base: "30%", md: "50%" }}
        left={{ base: "5%", md: "10%" }}
        boxSize={{ base: "30px", md: "50px" }}
        borderRadius="full"
      />
      <Image
        src={photo3}
        alt="Profile 3"
        position="absolute"
        top={{ base: "70%", md: "80%" }}
        left={{ base: "2%", md: "5%" }}
        boxSize={{ base: "30px", md: "50px" }}
        borderRadius="full"
      />
      <Image
        src={photo4}
        alt="Profile 4"
        position="absolute"
        top={{ base: "10%", md: "20%" }}
        right={{ base: "2%", md: "5%" }}
        boxSize={{ base: "30px", md: "50px" }}
        borderRadius="full"
      />
      <Image
        src={photo5}
        alt="Profile 5"
        position="absolute"
        top={{ base: "30%", md: "50%" }}
        right={{ base: "5%", md: "10%" }}
        boxSize={{ base: "30px", md: "50px" }}
        borderRadius="full"
      />
      <Image
        src={photo6}
        alt="Profile 6"
        position="absolute"
        top={{ base: "70%", md: "80%" }}
        right={{ base: "2%", md: "5%" }}
        boxSize={{ base: "30px", md: "50px" }}
        borderRadius="full"
      />

      <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
        Subscribe For Get Update Every New Courses
      </Text>
      <Text fontSize={{ base: "sm", md: "md" }} my={4}>
        20k+ students daily learn with Eduvi. Subscribe for new courses.
      </Text>
      <Flex justify="center" mt={6}>
        <Box as="form" display="flex" maxW="md" w="100%">
          <Input
            placeholder="enter your email"
            type="email"
            variant="filled"
            bg={inputBgColor}
            color="white"
            _placeholder={{ color: "gray.300" }}
            borderRightRadius="0"
            flex="1"
          />
          <Button
            colorScheme="purple"
            bg={buttonBgColor}
            borderLeftRadius="0"
            px={{ base: 4, md: 8 }}
          >
            Subscribe
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default NewsletterSection;

import React from "react";
import { Box, Button, Flex, Input, Text, Image } from "@chakra-ui/react";
import photo1 from "../assets/icons/photo1.png";
import photo2 from "../assets/icons/photo2.png";
import photo3 from "../assets/icons/photo3.png";
import photo4 from "../assets/icons/photo4.png";
import photo5 from "../assets/icons/photo5.png";
import photo6 from "../assets/icons/photo6.png";

const NewsletterSection: React.FC = () => {
  return (
    <Box
      maxW="1240px"
      mx="auto"
      h={{ base: "auto", md: "320px" }}
      py={{ base: 6, md: 10 }}
      px={{ base: 4, md: 5 }}
      bg={"brand.dark"}
      color={"brand.page"}
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
        top={{ base: "8%", md: "10%" }}
        left={{ base: "2%", md: "5%" }}
        boxSize={{ base: "30px", md: "50px" }}
        borderRadius="full"
      />
      <Image
        src={photo2}
        alt="Profile 2"
        position="absolute"
        top={{ base: "35%", md: "39%" }}
        left={{ base: "5%", md: "15%" }}
        boxSize={{ base: "30px", md: "50px" }}
        borderRadius="full"
      />
      <Image
        src={photo3}
        alt="Profile 3"
        position="absolute"
        top={{ base: "60%", md: "70%" }}
        left={{ base: "2%", md: "5%" }}
        boxSize={{ base: "30px", md: "50px" }}
        borderRadius="full"
      />
      <Image
        src={photo4}
        alt="Profile 4"
        position="absolute"
        top={{ base: "8%", md: "10%" }}
        right={{ base: "2%", md: "5%" }}
        boxSize={{ base: "30px", md: "50px" }}
        borderRadius="full"
      />
      <Image
        src={photo5}
        alt="Profile 5"
        position="absolute"
        top={{ base: "35%", md: "40%" }}
        right={{ base: "5%", md: "15%" }}
        boxSize={{ base: "30px", md: "50px" }}
        borderRadius="full"
      />
      <Image
        src={photo6}
        alt="Profile 6"
        position="absolute"
        top={{ base: "60%", md: "70%" }}
        right={{ base: "2%", md: "5%" }}
        boxSize={{ base: "30px", md: "50px" }}
        borderRadius="full"
      />
      <Box
        alignContent="center"
        width={{ base: "60%", md: "50%", sm: "70%" }}
        mx={{ base: "auto", md: "auto" }}
      >
        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
          Subscribe For Get Update Every New Courses
        </Text>
        <Text color={"brand.page"} fontSize={{ base: "sm", md: "md" }} my={4}>
          20k+ students daily learn with Hep. Subscribe for new courses.
        </Text>
      </Box>
      <Flex justify="center" mt={6}>
        <Box as="form" display="flex" maxW="md" w="100%">
          <Input
            placeholder="enter your email"
            type="email"
            variant="filled"
            bg={"brand.grey"}
            color="white"
            _placeholder={{ color: "brand.offwhite" }}
            borderRightRadius="0"
            flex="1"
          />
          <Button
            colorScheme={"brand.action"}
            bg={"brand.action"}
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

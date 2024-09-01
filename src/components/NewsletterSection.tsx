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
    <Box w="full" bg={"brand.dark"}>
      <Box
        mx="auto"
        py={{ base: 6, md: 10 }}
        color={"brand.page"}
        textAlign="center"
        position="relative"
        overflow="hidden"
        maxW={"1280px"}
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
            Subscribe To Get Update <br /> Of Our New Courses
          </Text>
          <Text color={"brand.page"} fontSize={{ base: "sm", md: "md" }} my={4}>
            20k+ students daily learn with HEP. Subscribe for new courses.
          </Text>
        </Box>
        <Flex justify="center" mt={6}>
          <Box as="form" maxW="md" w="100%" justifyContent={"center"}>
            <Flex flexDir={"column"} gap={2}>
              <Input
                placeholder="Name"
                type="text"
                variant="filled"
                bg={"brand.grey"}
                color="black"
                py={4}
                _placeholder={{ color: "brand.offwhite" }}
                _focusVisible={{ outline: "brand.action" }}
                flex="1"
              />
              <Input
                placeholder="Email"
                type="email"
                variant="filled"
                bg={"brand.grey"}
                py={4}
                color="black"
                _placeholder={{ color: "brand.offwhite" }}
                _focusVisible={{ outline: "brand.action" }}
                flex="1"
              />
            </Flex>
            <Button
              mt={4}
              colorScheme={"brand.action"}
              color={"rgba(0, 0, 0, 0.87)"}
              bg={"brand.action"}
              px={{ base: 4, md: 8 }}
            >
              Subscribe
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default NewsletterSection;

import {
  Box,
  Heading,
  HStack,
  Text,
  Flex,
  Image,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";

import Logo from "../assets/icons/Logo.png";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

function Footer() {
  return (
    <VStack py={4} w={`full`} fontFamily={"Metropolis"} fontSize={"14px"}>
      <SimpleGrid
        w="100%"
        alignItems={`start`}
        justifyItems={`center`}
        color={"brand.offwhite"}
        columns={{ base: 1, md: 5 }}
        spacing={`5`}
      >
        <HStack
          flexBasis={{ base: "100%", md: "auto" }}
          justifyContent="center"
        >
          <Box textAlign={"left"} w={{ base: "100%", md: "100%" }} h="auto">
            <Flex w="100%" h="30px" gap="1" py="2px">
              <Image
                boxSize="18px"
                mt="3px"
                objectFit="cover"
                alt="logo"
                src={Logo}
              />
              <Heading size="md" color="brand.dark">
                Hep
              </Heading>
            </Flex>
            <Flex h="30px" gap={5} py="5px" mt={"10px"}>
              <FaFacebook />
              <BsInstagram />
              <BsTwitter />
              <BsLinkedin />
            </Flex>
            <Box px="5px" py={"10px"} gap={10}>
              <Text>© 2024 Help.co</Text>
              <Text>Hep is a registered trademark of Hep.co</Text>
            </Box>
          </Box>
        </HStack>
        {/* <Spacer /> */}
        <HStack
          flexBasis={{ base: "100%", md: "auto" }}
          justifyContent="center"
        >
          <Box textAlign={"left"} w={{ base: "100%", md: "100%" }} h="auto">
            <Heading size="md" color="brand.dark">
              Courses
            </Heading>
            <Box py="10px" gap={10}>
              <Text>Classroom Courses</Text>
              <Text>Visual classroom courses</Text>
              <Text>E-learning Courses</Text>
              <Text>Video courses</Text>
              <Text>OfflineCourse</Text>
            </Box>
          </Box>
        </HStack>
        {/* <Spacer /> */}
        <HStack
          flexBasis={{ base: "100%", md: "auto" }}
          justifyContent="center"
        >
          <Box textAlign={"left"} w={{ base: "100%", md: "100%" }} h="auto">
            <Heading size="md" color="brand.dark">
              Community
            </Heading>
            <Box py="10px" gap={10}>
              <Text>Leaners</Text>
              <Text>Partners</Text>
              <Text>Developers</Text>
              <Text>Transaction</Text>
              <Text>Blog</Text>
              <Text>Teaching center</Text>
            </Box>
          </Box>
        </HStack>
        {/* <Spacer /> */}
        <HStack
          flexBasis={{ base: "100%", md: "auto" }}
          justifyContent="center"
        >
          <Box textAlign={"left"} w={{ base: "100%", md: "100%" }} h="auto">
            <Heading size="md" color="brand.dark">
              Quick link
            </Heading>
            <Box py="10px">
              <Text>Home</Text>
              <Text>Professional Education</Text>
              <Text>Courses</Text>
              <Text>Addmission</Text>
              <Text>Testionial</Text>
              <Text>Programs</Text>
            </Box>
          </Box>
        </HStack>
        {/* <Spacer /> */}
        <HStack
          flexBasis={{ base: "100%", md: "auto" }}
          justifyContent="center"
        >
          <Box textAlign={"left"} w={{ base: "100%", md: "100%" }} h="auto">
            <Heading size="md" color="brand.dark">
              More
            </Heading>
            <Box py="10px">
              <Text>Press</Text>
              <Text>Inventors</Text>
              <Text>Terms</Text>
              <ChakraLink as={ReactRouterLink} to={"/privacyP"}>
                <Text>Privacy</Text>
              </ChakraLink>
              <Text>Help</Text>
              <Text>Contact</Text>
            </Box>
          </Box>
        </HStack>
      </SimpleGrid>
    </VStack>
  );
}

export default Footer;

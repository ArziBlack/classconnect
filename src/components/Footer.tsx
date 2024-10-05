import {
  Box,
  Text,
  Flex,
  Image,
  Heading,
  VStack,
  SimpleGrid,
  Link as ChakraLink,
  useBreakpointValue,
} from "@chakra-ui/react";

import Logo from "../assets/icons/dark-logo.png";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { Link as ReactRouterLink } from "react-router-dom";

function Footer() {
  const columns = useBreakpointValue({ base: 1, md: 5 });

  const commonLinkProps = { py: "5px", fontSize: "16px" };

  return (
    <VStack
      py={10}
      w="full"
      px={"20px"}
      color="text"
      fontSize="16px"
      bg="white"
      alignItems="center"
    >
      <SimpleGrid
        w="100%"
        maxWidth="1280px"
        columns={columns}
        alignItems="start"
        justifyItems="center"
        spacing={{ base: 5, md: 10 }}
      >
        <Box textAlign="left" w="100%">
          <Flex w="100%" gap="1" py="2px">
            <Image
              mt="3px"
              alt="logo"
              src={Logo}
              width={"40px"}
              objectFit="cover"
            />
          </Flex>
          <Flex gap={5} py="5px" mt="5px" fontSize={26}>
            <a
              href="https://web.facebook.com/profile.php?id=61555382193329"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="pointer" />
            </a>
            <a
              href="https://www.instagram.com/hep_coding/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram className="pointer" />
            </a>
            <a
              href="https://twitter.com/HepCoding"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter className="pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/hepcoding"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="pointer" />
            </a>
          </Flex>
          <Box px="5px" py="10px" gap={10}>
            <Text>© 2024 HEP Coding</Text>
            <Text>HEP is a registered trademark of HEP.co</Text>
          </Box>
        </Box>

        <LinkGroup title="Courses" linkProps={commonLinkProps}>
          <Text>Visual classroom courses</Text>
          <Text>E-learning Courses</Text>
          <Text>Video courses</Text>
          <Text>OfflineCourse</Text>
        </LinkGroup>

        <LinkGroup title="Community" linkProps={commonLinkProps}>
          <Text>Developers</Text>
          <Text>Transaction</Text>
          <Text>Blog</Text>
          <Text>Teaching center</Text>
        </LinkGroup>

        <LinkGroup title="Quick Links" linkProps={commonLinkProps}>
          <Text>Professional Education</Text>
          <Text>Admission</Text>
          <Text>Programs</Text>
        </LinkGroup>

        <LinkGroup title="More" linkProps={commonLinkProps}>
          <Text>Terms</Text>
          <ChakraLink as={ReactRouterLink} to="/privacy">
            <Text>Privacy</Text>
          </ChakraLink>
          <Text>Help</Text>
          <Text>Contact</Text>
        </LinkGroup>
      </SimpleGrid>
    </VStack>
  );
}

function LinkGroup({ title, children, linkProps }) {
  return (
    <Box w="100%">
      <Heading size="md" fontWeight={500} fontFamily={"Metropolis"}>
        {title}
      </Heading>
      <Box py="10px" gap={10}>
        {children.map((linkText, idx) => (
          <Box
            cursor={"pointer"}
            _hover={{ opacity: "1" }}
            key={idx}
            {...linkProps}
          >
            {linkText}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Footer;

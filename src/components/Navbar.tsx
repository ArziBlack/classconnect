import { useState } from "react";
import {
  HStack,
  Stack,
  Image,
  Text,
  Link as ChakraLink,
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { LOGO } from "../constants/icon";
import { FaUser, FaBars } from "react-icons/fa6";
import { Outlet, Link as ReactRouterLink } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");

  return (
    <VStack height={`100%`} minH={`100vh`} pos={`relative`}>
      <HStack
        justifyContent="space-between"
        w="100vw"
        paddingTop="2"
        paddingX={{ base: "4", md: "12" }}
        gap={10}
        pos={`fixed`}
        bg={`brand.page`}
        zIndex="1000"
      >
        <HStack flex={1}>
          <Image src={LOGO} marginRight="1.4" />
          <Text paddingLeft="1.4" fontWeight={500}>
            HEP
          </Text>
        </HStack>

        {/* Hamburger Icon for Mobile */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          icon={<FaBars />}
          onClick={onOpen}
          aria-label="Open Menu"
        />

        <HStack
          fontSize="18px"
          fontWeight={300}
          flex={3}
          justifyContent={`space-between`}
          paddingX={`55px`}
          display={{ base: "none", md: "flex" }}
        >
          <ChakraLink as={ReactRouterLink} to="/library">
            Library
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="/courses">
            Courses
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="/pricing">
            Pricing
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="/mentor">
            Mentor
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="/about">
            About
          </ChakraLink>
        </HStack>

        <HStack
          flex={0.8}
          justifyContent={`space-between`}
          paddingLeft={`45px`}
          display={{ base: "none", md: "flex" }}
        >
          <HStack>
            <Text>Register</Text>
            <FaUserPlus />
          </HStack>
          <HStack>
            <Text paddingLeft="1.4">Signin</Text>
            <FaUser />
          </HStack>
        </HStack>
      </HStack>

      {/* Drawer for Mobile Navigation */}
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack alignItems="flex-start">
              <ChakraLink as={ReactRouterLink} to="/library" onClick={onClose}>
                Library
              </ChakraLink>
              <ChakraLink as={ReactRouterLink} to="/courses" onClick={onClose}>
                Courses
              </ChakraLink>
              <ChakraLink as={ReactRouterLink} to="/pricing" onClick={onClose}>
                Pricing
              </ChakraLink>
              <ChakraLink as={ReactRouterLink} to="/mentor" onClick={onClose}>
                Mentor
              </ChakraLink>
              <ChakraLink as={ReactRouterLink} to="/about" onClick={onClose}>
                About
              </ChakraLink>
              <HStack>
                <Text>Register</Text>
                <FaUserPlus />
              </HStack>
              <HStack>
                <Text>Signin</Text>
                <FaUser />
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Stack px={{ base: "4", md: "16" }}>
        <Outlet />
      </Stack>
    </VStack>
  );
};

export default Navbar;

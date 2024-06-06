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
import {
  Outlet,
  Link as ReactRouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  window.onscroll = () => {
    setScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const openSignInModal = () => {
    if (location.pathname !== "/signin") {
      navigate("/signin");
    }
  };

  return (
    <VStack height={`100%`} pos={`relative`}>
      <HStack
        justifyContent="space-between"
        w="100vw"
        paddingTop="2"
        paddingBottom="2"
        paddingX={{ base: "4", md: "12" }}
        // paddingY={`4px`}
        gap={10}
        pos={`fixed`}
        bg={`brand.page`}
        zIndex="1000"
        maxWidth={`1444px`}
        css={{
          background: scrolled
            ? "linear-gradient(to top, transparent 0%, #F7F5FA 50%)"
            : "",
        }}
      >
        <HStack flex={1}>
          <Image src={LOGO} marginRight="1.4" />
          <Text paddingLeft="1.4" fontWeight={500}>
            HEP
          </Text>
        </HStack>

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
            <ChakraLink
              as={ReactRouterLink}
              to={location.pathname !== "/signin" && "/signin"}
            >
              Signin
            </ChakraLink>
            <FaUser />
          </HStack>
        </HStack>
      </HStack>

      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
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
      <Stack px={{ base: "4", md: "16" }} maxW={`1444px`}>
        <Outlet />
      </Stack>
    </VStack>
  );
};

export default Navbar;

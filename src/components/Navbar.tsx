import {
  Text,
  HStack,
  Image,
  VStack,
  Drawer,
  DrawerBody,
  IconButton,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { LOGO } from "../constants/icon";
import { FaUser, FaBars } from "react-icons/fa6";
import {
  Link as ReactRouterLink,
  useLocation,
  NavLink,
} from "react-router-dom";

type NavbarLinksProp = {
  onClick?: () => void;
};

const NavbarLinks = ({ onClick }: NavbarLinksProp) => {
  const links = [
    { to: "/", label: " Home " },
    { to: "/tutor", label: "Tutor" },
    { to: "/courses", label: "Courses" },
    { to: "/pricing", label: "Pricing" },
    { to: "/about", label: "About" },
  ];

  return (
    <>
      {links.map((link) => (
        <NavLink
          to={link.to}
          key={link.to}
          onClick={onClick}
          style={({ isActive, isTransitioning }) => {
            return {
              padding: "0 10px",
              color: "#ffffff",
              position: "relative",
              opacity: isActive ? "1" : "0.7",
              fontWeight: isActive ? "bold" : "",
              transition: "opacity 0.3s ease-in-out",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          {({ isActive }) => (
            <>
              {link.label}
              {isActive && (
                <span
                  style={{
                    left: "50%",
                    width: "6px",
                    height: "6px",
                    bottom: "-5px",
                    borderRadius: "50%",
                    position: "absolute",
                    backgroundColor: "#00ff84",
                    transform: "translateX(-50%)",
                  }}
                ></span>
              )}
            </>
          )}
        </NavLink>
      ))}
    </>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  return (
    <VStack
      height="100%"
      pos="sticky"
      top={0}
      zIndex="1000"
      bg={"brand.dark"}
      color={"#ffff"}
      borderBottom={"1px solid #003d4d"}
    >
      <HStack
        py="2"
        width="full"
        gap={10}
        height="80px"
        maxWidth="1280px"
        alignItems="center"
        justifyContent="space-between"
      >
        <HStack>
          <Image src={LOGO} marginRight="1.4" width={8} />
          <Text paddingLeft="1.4" fontWeight={500} opacity={0.7}>
            HEP
          </Text>
        </HStack>

        <IconButton
          icon={<FaBars />}
          onClick={onOpen}
          bg={"transaprent"}
          aria-label="Open Menu"
          display={{ base: "flex", md: "none" }}
        />

        <HStack
          flex={3}
          gap={8}
          fontSize="16px"
          fontWeight={700}
          justify="center"
          display={{ base: "none", md: "flex" }}
        >
          <NavbarLinks />
        </HStack>

        <HStack
          ml="auto"
          pb={"2px"}
          opacity={0.7}
          borderBottom="2px solid transparent"
          display={{ base: "none", md: "block" }}
          transition="border-bottom 0.3s ease-in-out"
          _hover={{
            opacity: "1",
            textDecor: "none",
            borderBottom: "2px solid",
          }}
        >
          <HStack>
            <ChakraLink
              fontSize="16px"
              fontWeight={700}
              as={ReactRouterLink}
              _hover={{
                textDecor: "none",
              }}
              to={location.pathname !== "/signin" ? "/signin" : "/"}
            >
              Login
            </ChakraLink>
            <FaUser />
          </HStack>
        </HStack>
      </HStack>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack alignItems="flex-start">
              <NavbarLinks onClick={onClose} />
              <HStack>
                <Text>Login</Text>
                <FaUser />
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </VStack>
  );
};

export default Navbar;

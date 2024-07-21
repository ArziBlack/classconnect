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
  Box,
  Flex,
} from "@chakra-ui/react";
import { LOGO } from "../constants/icon";
import { FaUser, FaBars } from "react-icons/fa6";
import {
  NavLink,
  useLocation,
  Link as ReactRouterLink,
} from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { setUserType } from "../services/others/otherSlice";
import { useAppDispatch } from "../hooks/reactReduxHooks";

type NavbarLinksProp = {
  onClick?: () => void;
};

const NavbarLinks = ({ onClick }: NavbarLinksProp) => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/tutor", label: "Tutor" },
    { to: "/courses", label: "Courses" },
    { to: "/pricing", label: "Pricing" },
    { to: "/about", label: "About" },
  ];

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    if (onClick) onClick();
  };
  return (
    <>
      {links.map((link) => (
        <NavLink
          to={link.to}
          key={link.to}
          onClick={() => handleLinkClick()}
          className={"group"}
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
              <span
                style={{
                  left: "50%",
                  width: "6px",
                  height: "6px",
                  bottom: "-5px",
                  borderRadius: "50%",
                  position: "absolute",
                  opacity: isActive ? 1 : 0.3,
                  transform: "translateX(-50%)",
                  transition: "opacity 0.3s ease-in-out",
                }}
                className={` ${isActive ? "bg-primary-action" : "group-hover:bg-white"}`}
              />
            </>
          )}
        </NavLink>
      ))}
    </>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const dispatch = useAppDispatch();

  const userType = [{ type: "student" }, { type: "tutor" }];

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (event: string) => {
    dispatch(setUserType(event));
    setShowDropdown(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <VStack
      top={0}
      pos="sticky"
      height="100%"
      zIndex="1000"
      bg={"brand.dark"}
      color={"#ffff"}
    >
      <HStack
        py="2"
        px={"16px"}
        width="full"
        gap={10}
        height="80px"
        maxWidth="1280px"
        alignItems="center"
        justifyContent="space-between"
      >
        <HStack>
          <Image src={LOGO} marginRight="1.4" width={"60px"} />
        </HStack>

        <IconButton
          icon={<FaBars />}
          onClick={onOpen}
          bg={"transparent"}
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
          display={{ base: "none", md: "block" }}
          transition="border-bottom 0.3s ease-in-out"
          _hover={{
            textDecor: "none",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <HStack>
            <Box
              fontSize="16px"
              opacity={0.7}
              fontWeight={700}
              as={ReactRouterLink}
              onClick={() => setShowDropdown(!showDropdown)}
              _hover={{
                opacity: "1",
                textDecor: "none",
              }}
            >
              Login as
            </Box>
            <FaUser
              color={isHovered ? "#00ff84" : ""}
              opacity={isHovered ? 1 : 0.7}
            />
            {showDropdown && (
              <Flex
                direction="column"
                position="absolute"
                top="60px"
                bg="rgba(0, 0, 0, 0.5)"
                color="white"
                backdropFilter="blur(10px)"
                zIndex={1}
                ref={dropdownRef}
              >
                {userType?.map((type) => (
                  <Box
                    as={ReactRouterLink}
                    key={type.type}
                    fontSize={"sm"}
                    py={2}
                    px={4}
                    onClick={() => handleSelect(type.type)}
                    _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
                    cursor="pointer"
                    textTransform={"capitalize"}
                    to={location.pathname !== "/signin" ? "/signin" : "/"}
                  >
                    {type.type}
                  </Box>
                ))}
              </Flex>
            )}
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

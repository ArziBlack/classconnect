import {
  HStack,
  Image,
  Text,
  Link as ChakraLink,
  VStack,
} from "@chakra-ui/react";
import { LOGO } from "../constants/icon";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { Outlet, Link as ReactRouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <VStack height={`100%`} minH={`100vh`} pos={`relative`}>
      <HStack
        justifyContent="space-between"
        w="100vw"
        paddingTop="2"
        paddingX="12"
        gap={10}
        pos={`fixed`}
      >
        <HStack flex={1}>
          <Image src={LOGO} marginRight="1.4" />
          <Text paddingLeft="1.4" fontWeight={500}>HEP</Text>
        </HStack>
        <HStack fontSize='18px' fontWeight={300} flex={3} justifyContent={`space-between`} paddingX={`55px`}>
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
            About Us
          </ChakraLink>
        </HStack>
        <HStack flex={1} justifyContent={`space-between`} paddingLeft={`45px`}>
          <HStack>
            <Text>Cart (0)</Text>
            <FaCartShopping />
          </HStack>
          <HStack>
            <Text paddingLeft="1.4">My Account</Text>
            <FaUser />
          </HStack>
        </HStack>
      </HStack>
      <Outlet/>
    </VStack>
  );
};

export default Navbar;

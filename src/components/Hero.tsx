import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  Select,
  Text,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { HERO } from "../constants/illustrations";
import CButton from "./Button";

const Hero = () => {
  return (
    <Flex
      w={`full`}
      justifyContent={`space-between`}
      flexDir={{ base: "column-reverse", md: "row" }}
      gap={10}
      alignItems="center"
    >
      <Box
        flex="1"
        display="flex"
        flexDir={`column`}
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent={`space-between`}
        textAlign={{ base: "center", md: "left" }}
      >
        <Box>
          <Text
            mb={"10px"}
            padding={`2`}
            bg={`#f6f3f3`}
            borderRadius={10}
            fontSize={`16px`}
            color={`brand.red`}
            display="inline-block"
          >
            Never Stop Learning
          </Text>
        </Box>
        <Heading
          as="h2"
          fontWeight={500}
          color={`brand.dark`}
          fontFamily={"Metropolis"}
          size={{ base: "xl", md: "2xl" }}
          paddingY={{ base: "5", md: "0" }}
          paddingRight={{ base: "0", md: "20px" }}
        >
          Grow up your Skills with online courses on HEP Educational Platform
        </Heading>
        <Text
          fontSize={`medium`}
          color={`brand.offwhite`}
          paddingY={`10px`}
          fontWeight={400}
        >
          HEP is a Global training provider based in Nigeria that specializes in
          accredited and bespoke training courses. We crush the barriers to
          getting a degree.
        </Text>
        <InputGroup
          w={`100%`}
          border={`none`}
          display={`flex`}
          bg={"#f6f3f3"}
          borderRadius={`12px`}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Input
            flex={2}
            outline={`none`}
            border={`none`}
            placeholder="Class/Content"
            mb={{ base: "2", md: "0" }}
          />
          <CButton
            flex={1}
            outlined
            text="Search"
            icon={FaSearch}
            padding={`2px`}
            bg={`brand.action`}
            borderRadius={`9px`}
            w={{}}
          />
        </InputGroup>
      </Box>
      <Box flex="1" display="flex" justifyContent="center" alignItems="center">
        <Image
          src={HERO}
          h={{ base: "300px", md: "550px" }}
          w={{ base: "300px", md: "550px" }}
        />
      </Box>
    </Flex>
  );
};

export default Hero;

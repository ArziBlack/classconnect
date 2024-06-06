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
        paddingY={{ base: "10", md: "20" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Box>
          <Text
            color={`brand.red`}
            padding={`2`}
            bg={`white`}
            borderRadius={10}
            fontSize={`16px`}
            display="inline-block"
          >
            Never Stop Learning
          </Text>
        </Box>
        <Heading
          // fontSize={{ base: "2xl", md: "xxx-large" }}
          size={{ base: "xl", md: "3xl" }}
          as="h2"
          fontWeight={600}
          color={`brand.dark`}
          paddingRight={{ base: "0", md: "20px" }}
          paddingY={{ base: "5", md: "0" }}
        >
          Grow up your Skills by online courses with HEP Educational Platform
        </Heading>
        <Text fontSize={`medium`} color={`brand.offwhite`} paddingY={`10px`}>
          Eduvi is a Global training provider based across the UK that
          specialises in accredited and bespoke training courses. We crush the
          barriers to getting a degree.
        </Text>
        <InputGroup
          border={`none`}
          borderRadius={`12px`}
          display={`flex`}
          w={`100%`}
          padding={`4px`}
          flexDirection={{ base: "column", md: "row" }}
          bg={`white`}
        >
          <Select value={`primary`} flex={1} mb={{ base: "2", md: "0" }}>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
          </Select>
          <Input
            flex={2}
            outline={`none`}
            border={`none`}
            placeholder="Class/Content"
            mb={{ base: "2", md: "0" }}
          />
          <Button
            bg={`brand.action`}
            padding={`2px`}
            flex={1}
            borderRadius={`9px`}
          >
            <FaSearch color="#fff" />
            <Text color={`white`} paddingLeft={`7px`}>
              Search
            </Text>
          </Button>
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

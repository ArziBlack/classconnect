import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { HERO } from "../constants/illlustrations";

const Hero = () => {
  return (
    <Flex
      w={`full`}
      justifyContent={`space-between`}
      px={`12`}
      paddingTop={`58`}
      gap={10}
    >
      <Box
        flex="1"
        display="flex"
        flexDir={`column`}
        alignItems={`flex-start`}
        justifyContent={`space-around`}
        paddingY={`20`}
      >
        <Box>
          <Text
            color={`brand.red`}
            padding={`2`}
            bg={`white`}
            borderRadius={10}
            fontSize={`16px`}
          >
            Never Stop Learning
          </Text>
        </Box>
        <Text fontSize={`xxx-large`} fontWeight={600} color={`brand.dark`} textAlign={`justify`} paddingRight={`20px`}>
          Grow up your Skills by online courses with HEP Educational Platform
        </Text>
        <Text fontSize={`medium`} color={`brand.offwhite`} paddingY={`10px`}>
          Eduvi is a Global training provider based across the UK that
          specialises in accredited and bespoke training courses. We crush the
          barriers togetting a degree.
        </Text>
        <InputGroup
          border={`1px`}
          borderRadius={`12px`}
          display={`flex`}
          w={`100%`}
          padding={`4px`}
        >
          <Select value={`primary`} flex={1}>
            <option value="">primary</option>
            <option value="">secondary</option>
          </Select>|
          <Input flex={2} outline={`none`} border={`none`} placeholder="Class/Content"/>
          <Button bg={`brand.dark`} padding={`2px`} flex={1}>
            <FaSearch color="#fff" />
            <Text color={`white`}>Search</Text>
          </Button>
        </InputGroup>
      </Box>
      <Box flex="1">
        <Image src={HERO} h={`550px`} w={`550px`} />
      </Box>
    </Flex>
  );
};

export default Hero;

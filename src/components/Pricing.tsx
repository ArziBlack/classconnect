import React, { useEffect } from "react";
import {
  Box,
  Text,
  List,
  Flex,
  Image,
  HStack,
  Heading,
  ListIcon,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import CButton from "./Button";
import { SlClose } from "react-icons/sl";
import { PRICE_TAG } from "../constants/icon";
import { FaRegCheckCircle } from "react-icons/fa";
import { getHomePage } from "../services/others/otherSlice";
import { useSelector } from "react-redux";
import { IRootState } from "../app/store";

interface Package {
  name: string;
  price: number;
  features: Record<string, "yes" | "no">;
}

const packages: Package[] = [
  {
    name: "Basic Pack",
    price: 200,
    features: {
      "3 HD video lessons & tutorials": "yes",
      "1 Official exam": "yes",
      "100 Practice questions": "yes",
      "1 Month subscriptions": "yes",
      "1 Free book": "yes",
      "Practice quizzes & assignments": "no",
      "In-depth explanations": "no",
      "Personal instructor assistance": "no",
    },
  },
  {
    name: "Standard Pack",
    price: 600,
    features: {
      "6 HD video lessons & tutorials": "yes",
      "2 Official exams": "yes",
      "200 Practice questions": "yes",
      "1 Month subscriptions": "yes",
      "3 Free books": "yes",
      "Practice quizzes & assignments": "yes",
      "In-depth explanations": "no",
      "Personal instructor assistance": "no",
    },
  },
  {
    name: "Premium Pack",
    price: 1200,
    features: {
      "12 HD video lessons & tutorials": "yes",
      "3 Official exams": "yes",
      "300 Practice questions": "yes",
      "1 Month subscriptions": "yes",
      "5 Free books": "yes",
      "Practice quizzes & assignments": "yes",
      "In-depth explanations": "yes",
      "Personal instructor assistance": "yes",
    },
  },
];

const PricingPackages: React.FC = () => {
  const { fees } = useSelector((store: IRootState) => store.other);
  useEffect(() => {
    getHomePage();
  }, []);

  return (
    <Box
      px={4}
      py={8}
      mx="auto"
      fontWeight={"400"}
      color={"brand.offwhite"}
      fontFamily={"Metropolis"}
    >
      <Flex mx="auto" maxW="840px" flexDir={"column"} mt={4}>
        <Heading
          mb={8}
          as="h2"
          fontSize="44px"
          textAlign="center"
          color={"brand.dark"}
        >
          We create a monthly pricing package for all standard students
        </Heading>
        <Text textAlign="center" mb={8}>
          Especially we create this package for those who are really interested
          and get benefited from our courses or books. We want to make a
          low-cost package for them so that they can purchase any courses with
          the package they buy from us. Also, get code from every class exam.
        </Text>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {packages.map((pack) => (
          <Box
            p={6}
            width={"full"}
            // maxW={"370px"}
            key={pack.name}
            borderWidth="1px"
            borderRadius="lg"
            textAlign="center"
          >
            <Image w={"40px"} src={PRICE_TAG}></Image>
            <Heading
              mb={4}
              pb={4}
              as="h3"
              size="lg"
              textAlign={"left"}
              color={"brand.dark"}
              borderBottom={"2px solid #dad9e2"}
            >
              {pack.name}
            </Heading>
            <List spacing={3} textAlign="start">
              {Object.entries(pack.features).map(([feature, availability]) => (
                <ListItem
                  key={feature}
                  display="flex"
                  alignItems="center"
                  color={availability === "yes" ? "inherit" : "gray.500"}
                >
                  <ListIcon
                    as={availability === "yes" ? FaRegCheckCircle : SlClose}
                    color={availability === "yes" ? "green.500" : "red.500"}
                    size={"12px"}
                  />
                  {feature}
                </ListItem>
              ))}

              <HStack
                mb={4}
                gap={0}
                fontSize="2xl"
                align={"end"}
                fontWeight="bold"
                color={"brand.dark"}
              >
                <Text fontSize="sm" mb={"5px"}>
                  $
                </Text>
                <Text p={0}>{pack.price}</Text>
              </HStack>
            </List>
            <CButton
              mt={4}
              outlined
              w={"100%"}
              borderRadius={"5px"}
              text="Purchase Course"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PricingPackages;

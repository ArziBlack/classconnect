import {
  Box,
  Tab,
  Text,
  Tabs,
  Flex,
  Image,
  HStack,
  TabList,
  Heading,
  Skeleton,
  TabPanel,
  TabPanels,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { FaRegCheckCircle } from "react-icons/fa";
import { PRICE_TAG } from "../constants/icon";
import { IFees } from "../typings/home";

interface IPricing {
  fees: IFees;
  isLoading: boolean;
}

interface Package {
  name: string;
  features: Record<string, "yes" | "no">;
}

const packages: Package[] = [
  {
    name: "Half Yearly",
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
  {
    name: "Quarterly",
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
    name: "Monthly",
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
    name: "Yearly",
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

const PricingPackages: React.FC<IPricing> = ({ isLoading, fees }) => {
  const classTypes = fees ? Object.keys(fees.tuition_fees) : [];

  return (
    <Box pt={12} px={4} mx="auto" maxW="1240px" fontWeight={"400"}>
      <Flex
        mt={4}
        mx="auto"
        maxW={"650px"}
        flexDir={"column"}
        color={"brand.dark"}
      >
        <Heading
          mb={8}
          as="h2"
          fontSize="44px"
          fontWeight={500}
          textAlign="center"
          color={"brand.dark"}
          fontFamily={"Metropolis"}
        >
          We create a pricing package for all our students
        </Heading>
        <Text textAlign="center" mb={8} fontWeight={700}>
          Especially we create this package for those who are really interested
          and get benefited from our courses or books. We want to make a
          low-cost package for them so that they can purchase any courses with
          the package they buy from us. Also, get code from every class exam.
        </Text>
      </Flex>

      {isLoading ? (
        <Tabs variant="soft-rounded">
          <TabList justifyContent={"center"}>
            <Tab>
              <Skeleton height="40px" width="80px" />
            </Tab>
            <Tab>
              <Skeleton height="40px" width="80px" />
            </Tab>
            <Tab>
              <Skeleton height="40px" width="80px" />
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <SimpleGrid
                spacing={2}
                justifyItems={"center"}
                gap={10}
                maxWidth={"900px"}
                mx={"auto"}
                columns={{ base: 1, md: 2 }}
              >
                {[...Array(4)].map((_, index) => (
                  <Skeleton key={index} height="200px" borderRadius="18px" />
                ))}
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      ) : (
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList justifyContent={"center"}>
            {classTypes.map((classType) => (
              <Tab
                textTransform={"capitalize"}
                key={classType}
                _selected={{
                  color: "white",
                  bg: "brand.dark",
                  opacity: 1,
                }}
              >
                {classType.replace(/_/g, " ")}
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            {classTypes.map((classType, index) => (
              <TabPanel key={classType}>
                <SimpleGrid
                  spacing={2}
                  justifyItems={"center"}
                  gap={10}
                  maxWidth={"900px"}
                  mx={"auto"}
                  columns={{ base: 1, md: 2 }}
                >
                  {Object.entries(fees.tuition_fees[classType]).map(
                    ([paymentType, amount]) => (
                      <Box
                        key={paymentType}
                        p={6}
                        width={"full"}
                        minW={"400px"}
                        borderWidth="1px"
                        borderRadius="lg"
                        textAlign="center"
                      >
                        <Flex
                          mb={4}
                          pb={4}
                          gap={5}
                          align={"center"}
                          borderBottom={"1px solid #dad9e2"}
                        >
                          <Image w={"40px"} src={PRICE_TAG} alt="Price tag" />
                          <Heading
                            as="h3"
                            fontSize="26px"
                            textAlign={"left"}
                            color={"brand.dark"}
                            fontWeight={500}
                            fontFamily={"Metropolis"}
                            textTransform={"capitalize"}
                          >
                            {paymentType
                              .replace("_payment", "")
                              .replace(/_/g, " ")}
                          </Heading>
                        </Flex>
                        <List spacing={3} textAlign="start">
                          {Object.entries(packages[index].features).map(
                            ([feature, availability]) => (
                              <ListItem
                                key={feature}
                                display="flex"
                                alignItems="center"
                                color={
                                  availability === "yes"
                                    ? "inherit"
                                    : "gray.500"
                                }
                              >
                                <ListIcon
                                  as={
                                    availability === "yes"
                                      ? FaRegCheckCircle
                                      : null
                                  }
                                  color={
                                    availability === "yes"
                                      ? "green.500"
                                      : "red.500"
                                  }
                                  size={"12px"}
                                  mr={2}
                                />
                                {feature.length > 120
                                  ? `${feature.substring(0, 120)}...`
                                  : feature}
                              </ListItem>
                            )
                          )}
                        </List>
                        <HStack
                          mb={4}
                          gap={0}
                          fontSize="2xl"
                          align={"end"}
                          fontWeight="bold"
                          color={"brand.dark"}
                        >
                          <Text fontSize="30px" fontWeight={500} mt={"20px"}>
                            {amount as string}
                          </Text>
                        </HStack>
                      </Box>
                    )
                  )}
                </SimpleGrid>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      )}
    </Box>
  );
};

export default PricingPackages;

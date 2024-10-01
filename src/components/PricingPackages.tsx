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
    name: "Class of One",
    features: {
      "One-on-one sessions": "yes",
      "Custom learning plans": "yes",
      "Personal instructor assistance": "yes",
      "Direct feedback and mentorship": "yes",
      "Flexible scheduling": "yes",
      "Exclusive study materials": "yes",
      "Progress tracking and reports": "yes",
      "Dynamic group activities": "no",
      "Team-based assignments": "no",
    },
  },
  {
    name: "Class of Five",
    features: {
      "Small group discussions": "yes",
      "Peer-to-peer feedback": "yes",
      "Interactive group projects": "yes",
      "Shared study materials": "yes",
      "Collaborative problem-solving": "yes",
      "Group mentoring sessions": "yes",
      "Access to study forums": "yes",
      "One-on-one sessions": "no",
      "Direct feedback and mentorship": "no",
    },
  },
  {
    name: "Class of Ten",
    features: {
      "Dynamic group activities": "yes",
      "Collaborative projects": "yes",
      "Diverse learning environment": "yes",
      "Team-based assignments": "yes",
      "Networking opportunities": "yes",
      "General study resources": "yes",
      "Flexible participation options": "yes",
      "One-on-one sessions": "no",
      "Direct feedback and mentorship": "no",
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
          fontSize={{ base: "26px", md: "44px" }}
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
                fontSize={{ base: "10px", md: "12px" }}
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
                        // minW={"400px"}
                        borderWidth="1px"
                        borderRadius="lg"
                        textAlign="center"
                        minW={{ base: "50px", md: "100px" }}
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

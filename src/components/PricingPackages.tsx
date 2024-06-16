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
} from "@chakra-ui/react";
import CButton from "./Button";
import { PRICE_TAG } from "../constants/icon";
import { IFees } from "../services/others/otherSlice";

interface IPricing {
  fees: IFees;
  isLoading: boolean;
}

const PricingPackages: React.FC<IPricing> = ({ isLoading, fees }) => {
  const classTypes = fees ? Object.keys(fees.tuition_fees) : [];

  return (
    <Box
      pt={12}
      px={4}
      mx="auto"
      maxW="1240px"
      fontWeight={"400"}
      color={"brand.offwhite"}
    >
      <Flex mx="auto" maxW="840px" flexDir={"column"} mt={4}>
        <Heading
          mb={8}
          as="h2"
          fontSize="44px"
          fontWeight={500}
          textAlign="center"
          color={"brand.dark"}
          fontFamily={"Metropolis"}
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

      {isLoading ? (
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
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
              <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
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
              <Tab textTransform={"capitalize"} key={classType}>
                {classType.replace(/_/g, " ")}
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            {classTypes.map((classType) => (
              <TabPanel key={classType}>
                <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
                  {Object.entries(fees.tuition_fees[classType]).map(
                    ([paymentType, amount]) => (
                      <Skeleton
                        isLoaded={!isLoading}
                        borderRadius={`18px`}
                        key={paymentType}
                      >
                        <Box
                          p={6}
                          width={"full"}
                          borderWidth="1px"
                          borderRadius="lg"
                          textAlign="center"
                        >
                          <Image w={"40px"} src={PRICE_TAG} alt="Price tag" />
                          <Heading
                            mb={4}
                            pb={4}
                            as="h3"
                            size="lg"
                            textAlign={"left"}
                            color={"brand.dark"}
                            borderBottom={"2px solid #dad9e2"}
                          >
                            {paymentType
                              .replace("_payment", "")
                              .replace(/_/g, " ")}
                          </Heading>
                          <HStack
                            mb={4}
                            gap={0}
                            fontSize="2xl"
                            align={"end"}
                            fontWeight="bold"
                            color={"brand.dark"}
                          >
                            <Text fontSize="sm" mb={"5px"}>
                              {amount as string}
                            </Text>
                          </HStack>
                          <CButton
                            mt={4}
                            outlined
                            w={"100%"}
                            borderRadius={"5px"}
                            text="Purchase Course"
                          />
                        </Box>
                      </Skeleton>
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

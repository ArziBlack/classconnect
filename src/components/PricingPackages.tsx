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
  const { tuition_fees } = fees;
  console.log(tuition_fees);

  const classTypes = fees ? Object.keys(fees?.tution_fees) : [];
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

      <Tabs variant="soft-rounded" colorScheme="blue">
        <TabList>
          {classTypes.map((classType) => (
            <Tab textTransform={"capitalize"} key={classType}>
              {classType.replace(/_/g, " ")}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {classTypes.map((classType) => (
            <TabPanel key={classType}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {Object.entries(fees[classType]).map(
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
                          {paymentType
                            .replace("_payment", "")
                            .replace("_", " ")}
                        </Heading>
                        <HStack
                          mb={4}
                          gap={0}
                          fontSize="2xl"
                          align={"end"}
                          fontWeight="bold"
                          color={"brand.dark"}
                        >
                          {/* <Text fontSize="sm" mb={"5px"}>
                            {amount}
                          </Text> */}
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
    </Box>
  );
};

export default PricingPackages;

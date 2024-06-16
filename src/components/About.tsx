import {
  Box,
  Grid,
  Flex,
  Text,
  Tab,
  Tabs,
  Icon,
  Spacer,
  TabList,
  TabPanel,
  TabPanels,
  ChakraProvider,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  FaStar,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const UserInfo: React.FC = () => {
  return (
    <Box w="100%" p={4} m={2}>
      <Tabs variant="soft-rounded">
        <TabList>
          <Tab
            _selected={{
              color: "white",
              bg: "#002333",
            }}
          >
            About
          </Tab>
          <Tab
            _selected={{
              color: "white",
              bg: "#002333",
            }}
          >
            Vision
          </Tab>
          <Tab
            _selected={{
              color: "white",
              bg: "#002333",
            }}
          >
            Mission
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text fontSize="xl" fontWeight="bold">
              About us
            </Text>
            <Text mt={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis consectetur adipiscing elit.
            </Text>
            <Text fontSize="xl" fontWeight="bold" mt={4}>
              Certification
            </Text>
            <Text mt={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis consectetur adipiscing elit.
            </Text>
          </TabPanel>
          <TabPanel>
            <Text>Courses content here...</Text>
          </TabPanel>
          <TabPanel>
            <Text>Reviews content here...</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

const Sidebar: React.FC = () => {
  return (
    <Box
      bg="brand.dark"
      w={{ base: "100%", md: 300 }}
      mt={{ base: 4, md: 50 }}
      p={4}
      borderRadius="md"
      boxShadow="md"
    >
      <Flex direction="column">
        <Flex mt={4} align="center">
          <Text>Total Course</Text>
          <Spacer />
          <Text fontSize="xl" fontWeight="bold" color="orange.400">
            30
          </Text>
        </Flex>
        <Flex mt={4} align="center">
          <Text>Ratings</Text>
          <Spacer />
          <Icon as={FaStar} color="yellow.400" />
          <Text fontSize="md" fontWeight="bold" ml={2}>
            4.9(153)
          </Text>
        </Flex>
        <Flex mt={4}>
          <Text>Experiences</Text>
          <Spacer />
          <Text fontSize="md" fontWeight="bold">
            10 Years
          </Text>
        </Flex>
        <Flex mt={4}>
          <Text>Graduated</Text>
          <Spacer />
          <Text fontSize="md" fontWeight="bold">
            Yes
          </Text>
        </Flex>
        <Flex mt={4}>
          <Text>Language</Text>
          <Spacer />
          <Text fontSize="md" fontWeight="bold">
            English, French
          </Text>
        </Flex>
        <Flex mt={4}>
          <Text>Social</Text>
          <Spacer />
          <Icon as={FaFacebook} boxSize={6} mx={1} />
          <Icon as={FaInstagram} boxSize={6} mx={1} />
          <Icon as={FaTwitter} boxSize={6} mx={1} />
          <Icon as={FaLinkedin} boxSize={6} mx={1} />
        </Flex>
      </Flex>
    </Box>
  );
};

const About: React.FC = () => {
  const gridTemplateColumns = useBreakpointValue({
    base: "1fr",
    md: "3fr 1fr",
  });

  return (
    <ChakraProvider>
      <Box p={4} mx="auto">
        <Grid templateColumns={gridTemplateColumns} gap={6} mt={4}>
          <Box>
            <UserInfo />
          </Box>
          <Sidebar />
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default About;

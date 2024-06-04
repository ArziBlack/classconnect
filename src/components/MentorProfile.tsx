import {
  ChakraProvider,
  Box,
  Grid,
  Flex,
  Text,
  Spacer,
  Button,
  Tab,
  TabList,
  Image,
  Tabs,
  TabPanels,
  TabPanel,
  Icon,
  HStack,
  Link,
  Img,
} from "@chakra-ui/react";
import {
  FaStar,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import bg from "../assets/images/bg.png";
import kristainwatson from "../assets/images/kristainwatson.png";

const HeadNav: React.FC = () => (
  <HStack spacing={2}>
    <Link>Home</Link>
    <Text>|</Text>
    <Link>Mentor</Link>
    <Text>|</Text>
    <Link color={"blue"}>Kristin Watson</Link>
  </HStack>
);

const UserProfile: React.FC = () => (
  <Box mb={8}>
    <Flex align="center" p={4} mt={5}>
      <Image h={170} mt={-40} alt="Kristin Watson" src={kristainwatson} />
      <Box ml={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Kristin Watson
        </Text>
        <Text color="gray.500">Founder & Mentor</Text>
      </Box>
      <Spacer />
      <Box bottom={-7}>
        <Button colorScheme="purple">Contact Now</Button>
      </Box>
    </Flex>
  </Box>
);

const UserInfo: React.FC = () => {
  return (
    <Box w="100%" p={4} m={2}>
      <Tabs variant="soft-rounded" colorScheme="purple">
        <TabList>
          <Tab>About</Tab>
          <Tab>Courses</Tab>
          <Tab>Reviews</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text fontSize="xl" fontWeight="bold">
              About Kristin
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
      bg="white"
      w={300}
      mt={50}
      right={50}
      p={4}
      h={303}
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

const MentorProfile: React.FC = () => {
  return (
    <ChakraProvider>
      <Box p={4} maxW="1024px" mx="auto">
        <HeadNav />
        <Img
          as="img"
          src={bg}
          alt="Background"
          w="100%"
          h="173px"
          objectFit="cover"
          borderRadius={"15px"}
        />
        <Grid templateColumns="3fr 1fr" gap={6} mt={4}>
          <Box>
            <UserProfile />
            <UserInfo />
          </Box>
          <Sidebar />
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default MentorProfile;

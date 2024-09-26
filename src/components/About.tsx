import {
  Box,
  Grid,
  // Flex,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  useBreakpointValue,
} from "@chakra-ui/react";

const UserInfo: React.FC = () => {
  return (
    <Box w="100%" py={4}>
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
              <strong>HEP-CODING ACADEMY </strong>is a virtual learning platform
              dedicated to shaping the next generation of technology leaders.
              With a primary focus on children and teens aged 8-18, we provide a
              structured, engaging, and hands-on approach to learning software
              development. Whether you're a parent seeking to empower your child
              with technical skills or a student eager to explore the world of
              coding, our platform connects you with world-class tutors who are
              carefully vetted through a rigorous screening process.
            </Text>
            <Text mt={2}>
              We recognize the unique learning needs of young minds and offer
              age-specific programs that cater to students in the 8-10, 11-14,
              and 15-18 age brackets. In addition to our youth-focused programs,
              we provide specialised courses for learners of all ages, ensuring
              everyone has the opportunity to develop their software development
              skills.
            </Text>
            <Text mt={2}>
              At <strong>HEP-CODING ACADEMY</strong>, our commitment to quality
              education is reflected in our practical, real-world teaching
              methods, guided by modern technologies and seasoned instructors.
              We also offer a flexible learning system with options for class
              types and payment methods, making it easy to tailor the learning
              experience to individual preferences.
            </Text>

            <Text fontSize="xl" fontWeight="bold" mt={4}>
              Goal
            </Text>
            <Text mt={2}>
              Our goal is to make quality software development education
              accessible and exciting for young learners, while also providing
              opportunities for lifelong learning to individuals of any age.
            </Text>
          </TabPanel>
          <TabPanel>
            <Text>
              Our vision is to be a global leader in youth-focused technology
              education, cultivating a generation of young innovators and tech
              leaders. We strive to make coding and software development an
              exciting and accessible journey for children and teens, while also
              providing specialised learning paths for learners of all ages to
              contribute to a future driven by technology and creativity.
            </Text>
          </TabPanel>
          <TabPanel>
            <Text>
              Our mission is to inspire and empower children and teens, ages
              8-18, by providing access to world-class software development
              education tailored to their developmental stages. Through
              engaging, hands-on learning experiences, we aim to nurture
              creativity and technical skills in young minds. In addition, we
              offer specialized courses for learners of all ages, ensuring that
              anyone with a passion for technology can benefit from our
              flexible, personalized platform.
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

// const Sidebar: React.FC = () => {
//   return (
//     <Box
//       bg="brand.dark"
//       w={{ base: "100%", md: 300 }}
//       mt={{ base: 4, md: 50 }}
//       p={4}
//       borderRadius="md"
//       boxShadow="md"
//     >
//       <Flex direction="column">
//         <Flex mt={4} align="center">
//           <Text>Total Course</Text>
//           <Spacer />
//           <Text fontSize="xl" fontWeight="bold" color="orange.400">
//             30
//           </Text>
//         </Flex>
//         <Flex mt={4} align="center">
//           <Text>Ratings</Text>
//           <Spacer />
//           <Icon as={FaStar} color="yellow.400" />
//           <Text fontSize="md" fontWeight="bold" ml={2}>
//             4.9(153)
//           </Text>
//         </Flex>
//         <Flex mt={4}>
//           <Text>Experiences</Text>
//           <Spacer />
//           <Text fontSize="md" fontWeight="bold">
//             10 Years
//           </Text>
//         </Flex>
//         <Flex mt={4}>
//           <Text>Graduated</Text>
//           <Spacer />
//           <Text fontSize="md" fontWeight="bold">
//             Yes
//           </Text>
//         </Flex>
//         <Flex mt={4}>
//           <Text>Language</Text>
//           <Spacer />
//           <Text fontSize="md" fontWeight="bold">
//             English, French
//           </Text>
//         </Flex>
//         <Flex mt={4}>
//           <Text>Social</Text>
//           <Spacer />
//           <Icon as={FaFacebook} boxSize={6} mx={1} />
//           <Icon as={FaInstagram} boxSize={6} mx={1} />
//           <Icon as={FaTwitter} boxSize={6} mx={1} />
//           <Icon as={FaLinkedin} boxSize={6} mx={1} />
//         </Flex>
//       </Flex>
//     </Box>
//   );
// };

const About: React.FC = () => {
  const gridTemplateColumns = useBreakpointValue({
    base: "1fr",
    md: "3fr 1fr",
  });

  return (
    <Box py={4} mx="auto" display="flex" justifyContent="center">
      <Grid
        templateColumns="1fr"
        gap={6}
        w="full"
        maxW="1280px"
        justifyItems="center"
      >
        <Box w="full">
          <UserInfo />
        </Box>
        {/* <Sidebar /> */}
      </Grid>
    </Box>
  );
};

export default About;

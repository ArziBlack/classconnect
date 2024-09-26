import {
  Box,
  Flex,
  Text,
  Heading,
  Tabs,
  TabList,
  TabIndicator,
  TabPanels,
  Tab,
  TabPanel,
  List,
  ListItem,
  ListIcon,
  Image,
  useTab,
} from "@chakra-ui/react";
import { PiCircleFill } from "react-icons/pi";
import { APPLY_TUTOR } from "../constants/illustrations";
import CButton from "./Button";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const ApplyInstructor = () => {
  const navigate = useNavigate();

  const CustomTab = ({ children }) => {
    const tabProps = useTab({});

    return (
      <Tab
        {...tabProps}
        opacity={0.7}
        _selected={{
          color: "brand.dark",
          indicator: "brand.dark",
          opacity: 1,
        }}
      >
        {children}
      </Tab>
    );
  };

  return (
    <Box mx="auto" mt={{ base: 4, md: 8 }} mb={{ base: 4, md: 28 }}>
      <Flex direction={{ base: "column", md: "row" }} borderRadius="md">
        <Box
          // px={5}
          pt={5}
          w={{ base: "300px", md: "500px" }}
          mx={"auto"}
        >
          <Image borderRadius="md" src={APPLY_TUTOR} alt="Instructor" />
        </Box>
        <Box
          ml={{ md: 6 }}
          mt={{ base: 4, md: 10 }}
          px={5}
          w={{ base: "full", md: "50%" }}
        >
          <Heading
            as="h2"
            size="lg"
            mb={4}
            fontWeight={600}
            color={"brand.text"}
            fontFamily={"Metropolis"}
          >
            Apply as a Tutor
          </Heading>
          <Text
            fontSize="md"
            color="gray.700"
            mb={4}
            maxW={{ base: "500px", md: "600px" }}
          >
            Teaching is a vital and admirable career. As such, it comes with
            quite a bit of responsibility, both in practice and in preparation
            with many skills required to be a teacher. The following steps
            provide a general breakdown of the requirements for teachers:
          </Text>
          <Tabs position="relative" variant="unstyled">
            <TabList fontWeight={"600"}>
              <CustomTab>
                <Text fontWeight={"600"}>Tutor Responsibilities</Text>
              </CustomTab>
              <CustomTab>
                <Text fontWeight={"600"}>Tutor Qualifications</Text>
              </CustomTab>
            </TabList>
            <TabIndicator
              display={{ base: "colum", md: "flex" }}
              mt="-1.5px"
              height="2px"
              bg="brand.action"
              borderRadius="1px"
              w={{ base: "5px", md: "10px" }}
            />
            <TabPanels
              color={"brand.text"}
              fontWeight={400}
              fontSize={14}
              maxW={{ base: "400px", md: "550px" }}
            >
              <TabPanel>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={PiCircleFill} color="brand.dark" />
                    Conducting instructional sessions on software development
                    topics as it applies to your domain.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={PiCircleFill} color="brand.dark" />
                    Ability to contribute to and work effectively with the
                    school curriculum.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={PiCircleFill} color="brand.dark" />
                    Sending a session notice for every upcoming session at least
                    a day before the session.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={PiCircleFill} color="brand.dark" />
                    Constructive feedback on every session and on every student
                    performance in a session.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={PiCircleFill} color="brand.dark" />
                    Providing guidance and support to students in their learning
                    journey.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={PiCircleFill} color="brand.dark" />
                    Assessing and evaluating student progress.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={PiCircleFill} color="brand.dark" />
                    Flexibility to work at any two (2) of the following class
                    time options every week. Note: The process is that every
                    student will have the liberty to choose any four (4) most
                    convenient time among the class time options. Then, you will
                    choose the two (2) class time options among the differently
                    chosen four (4) class time options that is most common to
                    every student which will then be sent as the official class
                    times for all students connected to you.
                  </ListItem>
                </List>
              </TabPanel>
              <TabPanel>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={PiCircleFill} color="brand.dark" />
                    Strong expertise in relevant and modern Technologies and
                    Programming Languages, etc.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={PiCircleFill} color="brand.dark" />
                    Previous experience in teaching or tutoring in a classroom
                    or virtual learning setting.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={PiCircleFill} color="brand.dark" />
                    Excellent communication and interpersonal skills.
                  </ListItem>
                </List>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <CButton
            mt={5}
            text="Apply now"
            icon={GoArrowUpRight}
            iconPosition="right"
            onClick={() => {
              navigate("/apply");
            }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ApplyInstructor;

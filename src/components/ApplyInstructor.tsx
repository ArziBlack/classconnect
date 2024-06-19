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
import Button from "./Button";
import { APPLY_TUTOR } from "../constants/illustrations";

const ApplyInstructor = () => {
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
        <Box px={5} pt={5} w={"500px"} mx={"auto"}>
          <Image borderRadius="md" src={APPLY_TUTOR} alt="Instructor" />
        </Box>
        <Box ml={{ md: 6 }} mt={{ base: 4, md: 10 }} px={5}>
          <Heading
            as="h2"
            size="lg"
            mb={4}
            fontWeight={600}
            color={"brand.text"}
            fontFamily={"Metropolis"}
          >
            Apply as an Instructor
          </Heading>
          <Text fontSize="md" color="gray.700" mb={4} maxW={"600px"}>
            Teaching is a vital and admirable career. As such, it comes with
            quite a bit of responsibility, both in practice and in preparation
            with many skills required to be a teacher. The following steps
            provide a general breakdown of the requirements for teachers:
          </Text>
          <Tabs position="relative" variant="unstyled">
            <TabList fontWeight={"600"}>
              <CustomTab>
                <Text fontWeight={"600"}>Instructor Requirements</Text>
              </CustomTab>
              <CustomTab>
                <Text fontWeight={"600"}>Instructor Rules</Text>
              </CustomTab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="brand.action"
              borderRadius="1px"
              w={"10px"}
            />
            <TabPanels color={"brand.text"} fontWeight={400}>
              <TabPanel>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={PiCircleFill} color="brand.dark" />
                    An undergraduate degree
                  </ListItem>
                  <ListItem>
                    <ListIcon as={PiCircleFill} color="brand.dark" />
                    Participate in supervised teaching
                  </ListItem>
                  <ListItem>
                    <ListIcon as={PiCircleFill} color="brand.dark" />
                    State teaching license
                  </ListItem>
                  <ListItem>
                    <ListIcon as={PiCircleFill} color="brand.dark" />
                    Pursue graduate studies
                  </ListItem>
                </List>
              </TabPanel>
              <TabPanel>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={PiCircleFill} color="brand.dark" />
                    Respect and courtesy
                  </ListItem>
                  <ListItem>
                    <ListIcon as={PiCircleFill} color="brand.dark" />
                    Punctuality
                  </ListItem>
                  <ListItem>
                    <ListIcon as={PiCircleFill} color="brand.dark" />
                    Constructive feedback
                  </ListItem>
                  <ListItem>
                    <ListIcon as={PiCircleFill} color="brand.dark" />
                    Up-to-date content
                  </ListItem>
                </List>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Button mt={5} bg={"brand.action"} text="Apply Now" />
        </Box>
      </Flex>
    </Box>
  );
};

export default ApplyInstructor;

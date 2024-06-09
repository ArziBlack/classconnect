// @ts-nocheck
import React from "react";
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
  UseTabProps,
} from "@chakra-ui/react";
import { PiCircleFill } from "react-icons/pi";
import applyInstructor from "../assets/icons/applyInstructor.png";
import Button from "./Button";

const ApplyInstructor: React.FC = () => {
  const CustomTab: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const tabProps = useTab() as UseTabProps;

    return (
      <Tab
        {...tabProps}
        _selected={{
          color: "brand.orange",
        }}
      >
        {children}
      </Tab>
    );
  };

  return (
    <Flex direction={{ base: "column", md: "row" }} borderRadius="md">
      <Box flexShrink={0} px={5} pt={5} bg="pink.100" borderRadius="md">
        <Image borderRadius="md" src={applyInstructor} alt="Instructor" />
      </Box>
      <Box ml={{ md: 6 }} mt={{ base: 4, md: 10 }}>
        <Heading as="h2" size="lg" mb={4}>
          Apply As Instructor
        </Heading>
        <Text fontSize="md" color="gray.700" mb={4} maxW={"600px"}>
          Teaching is a vital and admirable career. As such, it comes with quite
          a bit of responsibility, both in practice and in preparation with many
          skills required to be a teacher. The following steps provide a general
          breakdown of the requirements for teachers:
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
            bg="brand.orange"
            borderRadius="1px"
            w={"10px"}
          />
          <TabPanels>
            <TabPanel>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={PiCircleFill} color="red.500" />
                  An undergraduate degree
                </ListItem>
                <ListItem>
                  <ListIcon as={PiCircleFill} color="red.500" />
                  Participate in supervised teaching
                </ListItem>
                <ListItem>
                  <ListIcon as={PiCircleFill} color="red.500" />
                  State teaching license
                </ListItem>
                <ListItem>
                  <ListIcon as={PiCircleFill} color="red.500" />
                  Pursue graduate studies
                </ListItem>
              </List>
            </TabPanel>
            <TabPanel>
              <Text>Instructor rules content goes here.</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Button mt={5} bg={"brand.action"} text="Apply Now" />
      </Box>
    </Flex>
  );
};

export default ApplyInstructor;

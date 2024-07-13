import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Box,
} from "@chakra-ui/react";

export const Content = () => {
  return (
    <Flex color="white">
      <Accordion
        allowMultiple
        width={"700px"}
        display={"flex"}
        flexDir={"column"}
        gap={4}
      >
        <AccordionItem border={"none"}>
          <h2>
            <AccordionButton
              h={"50px"}
              borderRadius={"8px"}
              _hover={{ bg: "#37474f" }}
              bg={"#37474F"}
            >
              <Box as="span" flex="1" textAlign="left">
                Introduction
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border={"none"}>
          <h2>
            <AccordionButton
              h={"50px"}
              borderRadius={"8px"}
              _hover={{ bg: "#37474f" }}
              bg={"#37474F"}
            >
              <Box as="span" flex="1" textAlign="left">
                Indept HTML
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem border={"none"}>
          <h2>
            <AccordionButton
              h={"50px"}
              borderRadius={"8px"}
              _hover={{ bg: "#37474f" }}
              bg={"#37474F"}
            >
              <Box as="span" flex="1" textAlign="left">
                CSS Basics
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem border={"none"}>
          <h2>
            <AccordionButton
              h={"50px"}
              borderRadius={"8px"}
              _hover={{ bg: "#37474f" }}
              bg={"#37474F"}
            >
              <Box as="span" flex="1" textAlign="left">
                Introduction to Javascript
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

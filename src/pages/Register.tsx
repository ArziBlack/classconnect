import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import { AUTH } from "../constants/illustrations.ts";

import "tachyons";
import { Box, Text, Image, Link } from "@chakra-ui/react";
import { Flex, Heading } from "@chakra-ui/layout";
import PageFinal from "../components/Signup/PageFinal";
import PageOne from "../components/Signup/PageOne";
import PageTwo from "../components/Signup/PageTwo";
import MultistepProgressBar from "../components/MultistepProgressBar";
import { LOGO } from "../constants/icon";
import { ChangeEvent, useState } from "react";
import PageA from "../components/Signup/PageA.tsx";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  const closeModal = () => {
    onClose();
  };

  const { log } = console;
  const [page, setPage] = useState<string>("pageone");
  function nextPage(page: string) {
    setPage(page);
  }
  const nextPageIndex = (pageIndex: string) => {
    switch (pageIndex) {
      case "1":
        setPage("pageone");
        break;
      case "2":
        setPage("pagetwo");
        break;
      case "3":
        setPage("pagethree");
        break;
      case "4":
        setPage("pagefour");
        break;
      default:
        setPage("pageone");
    }
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    country: "",
    role: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  log(formData);

  const modalSize = useBreakpointValue({ base: "full", md: "4xl" });
  const imageDisplay = useBreakpointValue({ base: "none", md: "block" });

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        size={modalSize}
        scrollBehavior="inside"
        blockScrollOnMount={true}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Box
              h="100%"
              maxH="610px"
              p={{ base: "20px", md: "60px" }}
              overflow="hidden"
              fontFamily="Metropolis"
            >
              <Flex
                flexDir={{ base: "column", md: "row" }}
                justifyItems="space-between"
                gap={14}
              >
                <Flex
                  width={{ base: "100%", md: "40%" }}
                  flexDir="column"
                  mr="auto"
                  display={imageDisplay}
                >
                  <Text
                    as="h3"
                    mb={8}
                    fontSize={{ base: "24px", md: "30px" }}
                    fontWeight={600}
                    lineHeight={1.3}
                  >
                    Welcome to <br /> HEP Online <br /> Learning Platform
                  </Text>

                  <Image p={0} m={0} src={AUTH} maxW="240px" />
                </Flex>
                <Box
                  width={{ base: "0", md: "1px" }}
                  bg="brand.dark"
                  height="auto"
                  position="relative"
                  display={{ base: "none", md: "block" }}
                >
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    height="100px"
                    bgGradient="linear(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))"
                    zIndex="1"
                    pointerEvents="none"
                  />

                  <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    height="100px"
                    bgGradient="linear(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))"
                    zIndex="1"
                    pointerEvents="none"
                  />
                </Box>
                <Flex
                  flex="1"
                  width={{ base: "100%", md: "40%" }}
                  maxW="340px"
                  ml="auto"
                  flexDir="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box mb="2px">
                    <Heading
                      as="h5"
                      fontSize="27px"
                      fontWeight="700"
                      color="black"
                    >
                      Create your account
                    </Heading>
                    <Text
                      fontSize="15px"
                      fontWeight="400"
                      color="black"
                      mt={4}
                      mb={6}
                    >
                      Join thousands of students advancing their careers on HEP
                      Coding.
                    </Text>
                    <Box>
                      <MultistepProgressBar
                        page={page}
                        onPageIndexClick={nextPageIndex}
                      />
                      {
                        {
                          pageone: (
                            <PageOne
                              onClick={nextPage}
                              onChange={onChange}
                              data={formData}
                            />
                          ),
                          pagetwo: (
                            <PageA
                              onClick={nextPage}
                              onChange={onChange}
                              data={formData}
                            />
                          ),
                          pagethree: (
                            <PageTwo
                              onClick={nextPage}
                              onChange={onChange}
                              data={formData}
                            />
                          ),
                          pagefour: (
                            <PageFinal onChange={onChange} data={formData} />
                          ),
                        }[page]
                      }
                    </Box>
                  </Box>
                  <Text as="a" textAlign="center" fontSize="16px">
                    Already have an account?{" "}
                    <b className=" text-[#002C8A]">
                      <Link href="/">Sign in</Link>
                    </b>
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegisterModal;

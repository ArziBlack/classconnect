import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SIGNUP } from "../constants/illustrations.ts";

import "tachyons";
import { Box, Text, Image, Link } from "@chakra-ui/react";
import { Flex, Heading } from "@chakra-ui/layout";
import MultistepProgressBar from "../components/MultistepProgressBar.jsx";
import { ChangeEvent, useEffect, useState } from "react";
import { ITutor, RegisterModalProps, tutorInit } from "../typings/signup.ts";

import TutorA from "../components/Signup/TutorA.tsx";
import TutorB from "../components/Signup/TutorB.tsx";
import TutorC from "../components/Signup/TutorC.tsx";
import TutorD from "../components/Signup/TutorD.tsx";
import TutorE from "../components/Signup/TutorE.tsx";
import TutorFinal from "../components/Signup/TutorFinal.tsx";
import TutorF from "../components/Signup/TutorF.tsx";
import { getSignupPage } from "../services/others/otherSlice.ts";
import { useAppDispatch } from "../hooks/reactReduxHooks.ts";

const ApplyModal = ({ isOpen, onClose }: RegisterModalProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSignupPage());
  }, []);

  const closeModal = () => {
    onClose();
  };

  const [page, setPage] = useState<string>("pageone");
  // const toast = useToast();

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
      case "5":
        setPage("pagefive");
        break;
      case "6":
        setPage("pagesix");
        break;
      default:
        setPage("pageone");
    }
  };

  const [formData, setFormData] = useState<ITutor>(tutorInit);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? (checked ? "agreed" : null) : value,
    }));
  };

  const handleClassTimeOptionsChange = (selectedOptions: string[]) => {
    setFormData((prevState) => ({
      ...prevState,
      classTime_options: selectedOptions,
    }));
  };

  const modalSize = useBreakpointValue({ base: "full", md: "4xl" });
  const imageDisplay = useBreakpointValue({ base: "none", md: "block" });

  console.log(formData);

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
          <ModalCloseButton />

          <ModalBody>
            <Box
              h="100%"
              maxH="610px"
              p={{ base: "20px", md: "60px" }}
              overflow="hidden"
              fontFamily="Metropolis"
              className="no-scrollbar"
            >
              <Flex
                flexDir={{ base: "column", md: "row" }}
                justifyItems="space-between"
                gap={14}
                className="no-scrollbar"
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

                  <Image p={0} m={0} src={SIGNUP} maxW="240px" />
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
                  maxW="340px"
                  ml="auto"
                  flexDir="column"
                  alignItems="center"
                  justifyContent="center"
                  width={{ base: "100%", md: "40%" }}
                >
                  <Box mb="auto">
                    <Heading as="h5" fontSize="27px" fontWeight="700">
                      Become a tutor
                    </Heading>
                    <Text fontSize="15px" fontWeight="400" mt={4} mb={6}>
                      Join thousands of dedicated tutors on HEP Coding.
                    </Text>

                    <Box>
                      <MultistepProgressBar
                        page={page}
                        onPageIndexClick={nextPageIndex}
                      />
                      {
                        {
                          pageone: (
                            <TutorA
                              onClick={nextPage}
                              onChange={onChange}
                              data={formData}
                            />
                          ),
                          pagetwo: (
                            <TutorB
                              onClick={nextPage}
                              onChange={onChange}
                              data={formData}
                            />
                          ),
                          pagethree: (
                            <TutorC
                              onClick={nextPage}
                              onChange={onChange}
                              data={formData}
                            />
                          ),
                          pagefour: (
                            <TutorD
                              data={formData}
                              setFormData={setFormData}
                              onChange={onChange}
                              onClick={nextPage}
                            />
                          ),
                          pagefive: (
                            <TutorE
                              data={formData}
                              onChange={onChange}
                              handleClassTimeOptionsChange={
                                handleClassTimeOptionsChange
                              }
                              onClick={nextPage}
                            />
                          ),
                          pagesix: (
                            <TutorF
                              data={formData}
                              onChange={onChange}
                              onClick={nextPage}
                              setFormData={setFormData}
                            />
                          ),
                          pagefinal: (
                            <TutorFinal
                              data={formData}
                              onChange={onChange}
                              onClick={nextPage}
                              setFormData={setFormData}
                            />
                          ),
                        }[page]
                      }
                    </Box>
                  </Box>
                  <Text textAlign="center" fontSize="14px">
                    Already have an account?{" "}
                    <b className=" text-[#002C8A]">
                      <Link href="/signin">Sign in</Link>
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

export default ApplyModal;

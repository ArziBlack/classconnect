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
import PageFinal from "../components/Signup/StudentFinal.tsx";
import PageOne from "../components/Signup/StudentA.tsx";
import PageTwo from "../components/Signup/StudentB.tsx";
import MultistepProgressBar from "../components/MultistepProgressBar.jsx";
import { ChangeEvent, useState } from "react";
import PageA from "../components/Signup/StudentD.tsx";
import { IGuardian, IStudent, RegisterModalProps } from "../typings/signup.ts";
import CButton from "../components/Button.tsx";
import GuardianA from "../components/Signup/GuardianA.tsx";
import GuardianB from "../components/Signup/GuardianB.tsx";
import GuardianD from "../components/Signup/GuardianD.tsx";
import GuardianC from "../components/Signup/GuardianC.tsx";
import GuardianE from "../components/Signup/GuardianE.tsx";
import GuardianF from "../components/Signup/GuardianF.tsx";
import GuardianG from "../components/Signup/GuardianG.tsx";
import { useAppSelector } from "../hooks/reactReduxHooks.ts";

const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  const [signUpAsGuardian, setSignUpAsGuardian] = useState<boolean>(false);
  const [signTypeModal, setSignTypeModal] = useState<boolean>(true);
  const SignUpType = () => {
    return (
      <div className="w-full flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">Signup as a:</h2>
        <div className="flex space-x-4 mb-6">
          <button
            className={`px-4 py-2 text-lg ${signUpAsGuardian === false ? "bg-purple-600 text-white" : "bg-gray-200"}`}
            onClick={() => setSignUpAsGuardian(false)}
          >
            Student
          </button>
          <button
            className={`px-4 py-2 text-lg ${signUpAsGuardian === true ? "bg-purple-600 text-white" : "bg-gray-200"}`}
            onClick={() => setSignUpAsGuardian(true)}
          >
            Guardian
          </button>
        </div>
        <CButton text="Next" onClick={toggleSignUpType} />
      </div>
    );
  };

  const closeModal = () => {
    onClose();
  };

  const { log } = console;
  const [page, setPage] = useState<string>("pageone");

  function toggleSignUpType() {
    setSignTypeModal(!signTypeModal);
  }

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

  const nextPageIndexGuardian = (pageIndex: string) => {
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
      case "7":
        setPage("pagefinal");
        break;
      default:
        setPage("pageone");
    }
  };
  const [formData, setFormData] = useState<IStudent>({
    first_name: null,
    last_name: null,
    student_email: null,
    sex: null,
    country: null,
    state: null,
    course: null,
    dateOfBirth: null,
    classTime_options: null,
    payment_plan: null,
    class_type: null,
    salutation: null,
    password: "",
    profileImage: null,
    agreement_status: false,
    student_phoneNum: null,
  });

  const [guardianData, setGuardianData] = useState<IGuardian>({
    first_name: null,
    last_name: null,
    student_email: null,
    sex: null,
    country: null,
    state: null,
    course: null,
    dateOfBirth: null,
    classTime_options: null,
    payment_plan: null,
    class_type: null,
    salutation: null,
    parent_name: null,
    parent_phoneNum: null,
    parent_email: null,
    password: "",
    profileImage: null,
    agreement_status: false,
    student_phoneNum: null,
  });
  const { url } = useAppSelector((store) => store.image);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      profileImage: url,
    }));
  };

  const onChangeGuardian = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === "date" ? new Date(value) : value;

    setGuardianData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleClassTimeOptionsChange = (selectedOptions: string[]) => {
    setGuardianData((prevState) => ({
      ...prevState,
      classTime_options: selectedOptions,
    }));
  };

  function submit() {}
  // log(formData);
  log(guardianData);

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
              p={{ base: "20px", md: "" }}
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
                    {signTypeModal === true ? (
                      <SignUpType />
                    ) : signUpAsGuardian === true ? (
                      <Box>
                        <MultistepProgressBar
                          page={page}
                          onPageIndexClick={nextPageIndexGuardian}
                        />
                        {
                          {
                            pageone: (
                              <GuardianA
                                onClick={nextPage}
                                onChange={onChangeGuardian}
                                data={guardianData}
                              />
                            ),
                            pagetwo: (
                              <GuardianB
                                onClick={nextPage}
                                onChange={onChangeGuardian}
                                data={guardianData}
                              />
                            ),
                            pagethree: (
                              <GuardianC
                                onClick={nextPage}
                                onChange={onChangeGuardian}
                                data={guardianData}
                              />
                            ),
                            pagefour: (
                              <GuardianD
                                onClick={nextPage}
                                onChange={onChangeGuardian}
                                data={guardianData}
                              />
                            ),
                            pagefive: (
                              <GuardianE
                                onClick={nextPage}
                                onChange={onChangeGuardian}
                                data={guardianData}
                                handleClassTimeOptionsChange={
                                  handleClassTimeOptionsChange
                                }
                              />
                            ),
                            pagesix: (
                              <GuardianF
                                onClick={nextPage}
                                onChange={onChangeGuardian}
                                data={guardianData}
                              />
                            ),
                            pagefinal: (
                              <GuardianG
                                onChange={onChangeGuardian}
                                submit={submit}
                              />
                            ),
                          }[page]
                        }
                      </Box>
                    ) : (
                      signUpAsGuardian === false && (
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
                                <PageFinal
                                  onChange={onChange}
                                  data={formData}
                                />
                              ),
                            }[page]
                          }
                        </Box>
                      )
                    )}
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

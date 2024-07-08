import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  Radio,
  RadioGroup,
  useBreakpointValue,
  // useToast,
  useRadioGroup,
  CircularProgress,
} from "@chakra-ui/react";
import { SIGNUP } from "../constants/illustrations.ts";

import "tachyons";
import { Box, Text, Image, Link } from "@chakra-ui/react";
import { Flex, Heading } from "@chakra-ui/layout";
import MultistepProgressBar from "../components/MultistepProgressBar.jsx";
import { ChangeEvent, useEffect, useState } from "react";
import {
  guardianInit,
  IGuardian,
  IStudent,
  RegisterModalProps,
  studentInit,
} from "../typings/signup.ts";
import CButton from "../components/Button.tsx";
import GuardianA from "../components/Signup/GuardianA.tsx";
import GuardianB from "../components/Signup/GuardianB.tsx";
import GuardianD from "../components/Signup/GuardianD.tsx";
import GuardianC from "../components/Signup/GuardianC.tsx";
import GuardianE from "../components/Signup/GuardianE.tsx";
import GuardianF from "../components/Signup/GuardianF.tsx";
import GuardianG from "../components/Signup/GuardianG.tsx";
import StudentA from "../components/Signup/StudentA.tsx";
import StudentB from "../components/Signup/StudentB.tsx";
import StudentC from "../components/Signup/StudentC.tsx";
import StudentD from "../components/Signup/StudentD.tsx";
import StudentE from "../components/Signup/StudentE.tsx";
import StudentFinal from "../components/Signup/StudentFinal.tsx";
import StudentF from "../components/Signup/StudentF.tsx";
import { getSignupPage } from "../services/others/otherSlice.ts";
import { useAppDispatch, useAppSelector } from "../hooks/reactReduxHooks.ts";

const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  const dispatch = useAppDispatch();
  const { isLoading, fees } = useAppSelector((store) => store.other);
  console.log(fees);
  const [signUpAsGuardian, setSignUpAsGuardian] = useState<boolean>(false);
  const [signTypeModal, setSignTypeModal] = useState<boolean>(true);

  const { value, setValue } = useRadioGroup();

  const handleChange = (value) => {
    value === "student"
      ? setSignUpAsGuardian(false)
      : setSignUpAsGuardian(true);
    setValue(value);
  };

  useEffect(() => {
    dispatch(getSignupPage());
  }, []);

  const SignUpType = () => {
    return (
      <div className="w-full flex flex-col items-center justify-center p-4 mt-10">
        <h2 className="text-xl font-[600] mb-4 ">What best describes you?</h2>
        {isLoading ? (
          <CircularProgress isIndeterminate color="blue.500" />
        ) : (
          <div className="flex flex-column justify-center items-center">
            <RadioGroup
              colorScheme="green"
              onChange={handleChange}
              value={value as string}
              marginBottom={10}
            >
              <Radio value="student" marginRight={4}>
                Student
              </Radio>
              <Radio value="guardian">Guardian</Radio>
            </RadioGroup>
            <CButton
              justifySelf={"center"}
              text="Continue"
              onClick={toggleSignUpType}
            />
          </div>
        )}
      </div>
    );
  };

  const closeModal = () => {
    onClose();
  };

  const [page, setPage] = useState<string>("pageone");
  // const toast = useToast();

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

  const [formData, setFormData] = useState<IStudent>(studentInit);

  const [guardianData, setGuardianData] = useState<IGuardian>(guardianInit);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onChangeGuardian = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === "date" ? new Date(value) : value;

    setGuardianData((prevState) => ({
      ...prevState,
      [name]: newValue,
      // profileImage: url,
    }));
  };

  const handleClassTimeOptionsChange = (selectedOptions: string[]) => {
    setGuardianData((prevState) => ({
      ...prevState,
      classTime_options: selectedOptions,
    }));
  };
  const handleClassTimeOptionsChangeStudent = (selectedOptions: string[]) => {
    setFormData((prevState) => ({
      ...prevState,
      classTime_options: selectedOptions,
    }));
  };
  function submit() {}

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
                      Create your account
                    </Heading>
                    <Text fontSize="15px" fontWeight="400" mt={4} mb={6}>
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
                                typeModal={toggleSignUpType}
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
                                onClick={nextPage}
                                onChange={onChangeGuardian}
                                setGuardianData={setGuardianData}
                                submit={submit}
                                isGuardian={signUpAsGuardian}
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
                                <StudentA
                                  onClick={nextPage}
                                  onChange={onChange}
                                  typeModal={toggleSignUpType}
                                  data={formData}
                                />
                              ),
                              pagetwo: (
                                <StudentB
                                  onClick={nextPage}
                                  onChange={onChange}
                                  data={formData}
                                />
                              ),
                              pagethree: (
                                <StudentC
                                  onClick={nextPage}
                                  onChange={onChange}
                                  data={formData}
                                />
                              ),
                              pagefour: (
                                <StudentD
                                  data={formData}
                                  setFormData={setFormData}
                                  onChange={onChange}
                                  onClick={nextPage}
                                />
                              ),
                              pagefive: (
                                <StudentE
                                  data={formData}
                                  onChange={onChange}
                                  handleClassTimeOptionsChange={
                                    handleClassTimeOptionsChangeStudent
                                  }
                                  onClick={nextPage}
                                />
                              ),
                              pagesix: (
                                <StudentF
                                  data={formData}
                                  onChange={onChange}
                                  onClick={nextPage}
                                />
                              ),
                              pagefinal: (
                                <StudentFinal
                                  data={formData}
                                  onChange={onChange}
                                  onClick={nextPage}
                                  setFormData={setFormData}
                                  isGuardian={signUpAsGuardian}
                                />
                              ),
                            }[page]
                          }
                        </Box>
                      )
                    )}
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

export default RegisterModal;

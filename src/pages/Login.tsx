import {
  Box,
  Flex,
  Text,
  Image,
  Modal,
  HStack,
  Heading,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  Link as ChakraLink,
  useBreakpointValue,
} from "@chakra-ui/react";
import CButton from "../components/Button";
import InputField from "../components/Input.tsx";
import { LOGIN } from "../constants/illustrations.ts";
import {
  IResponse,
  login,
  loginTutor,
  reset,
} from "../services/auth/authSlice.ts";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, IRootState } from "../app/store.ts";
import {
  Link as ReactRouterLink,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useState, ChangeEvent, useEffect } from "react";
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import useCustomToast from "../hooks/useCustomToast.tsx";
import { setUserType } from "../services/others/otherSlice.ts";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignInModal = ({ isOpen, onClose }: SignInModalProps) => {
  const { user } = useParams();

  useEffect(() => {
    setUserType(user);
  }, [user]);

  const closeModal = () => {
    onClose();
  };

  const navigate = useNavigate();
  const showToast = useCustomToast();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((store: IRootState) => store.auth);
  const [check, setCheck] = useState<boolean>(false);
  const [inputError] = useState<string>("");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    if (userData.email === "" || userData.password === "") {
      showToast("All fields must be filled", "error");
      return;
    }

    const resultAction =
      user === "student"
        ? await dispatch(login(userData))
        : await dispatch(loginTutor(userData));
    dispatch(reset());
    if (
      login.fulfilled.match(resultAction) ||
      loginTutor.fulfilled.match(resultAction)
    ) {
      showToast(resultAction.payload.message || "Login successful", "success");
      setTimeout(() => {
        if (user === "student") {
          navigate("/student");
        } else {
          navigate("/instructor");
        }
      }, 3000);
    } else if (
      login.rejected.match(resultAction) ||
      loginTutor.rejected.match(resultAction)
    ) {
      showToast(
        (resultAction.payload as IResponse).message ||
          (resultAction.payload as IResponse).error ||
          "Login failed",
        "error"
      );
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckBox = () => {
    setCheck(!check);
  };

  const modalSize = useBreakpointValue({ base: "full", md: "4xl" });
  const imageDisplay = useBreakpointValue({ base: "none", md: "block" });
  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal} size={modalSize}>
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
                    Welcome to <br /> CLASSCONNECTS <br /> Learning Platform
                  </Text>

                  <Image p={0} m={0} src={LOGIN} maxW="240px" />
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
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    width="100%"
                  >
                    <Box mb="2px">
                      <Heading
                        as="h5"
                        mb="4px"
                        color="black"
                        fontSize={{ base: "22px", md: "27px" }}
                        fontWeight="700"
                      >
                        Welcome Back
                      </Heading>
                      <Text
                        fontSize={{ base: "14px", md: "15px" }}
                        fontWeight="400"
                        color="black"
                      >
                        Sign In to your{" "}
                        <strong className="font-[500]">{user}</strong> dashboard
                      </Text>
                    </Box>
                    <Box w="100%" mb={3}>
                      <InputField
                        id="Email"
                        type="email"
                        name="email"
                        label=" Email"
                        error={inputError}
                        icon={IoMailOutline}
                        value={userData.email}
                        onChange={handleChange}
                        placeholder="bill.sanders@example.com"
                      />
                    </Box>
                    <Box w="100%">
                      <InputField
                        id="Password"
                        name="password"
                        label="Password"
                        type="password"
                        error={inputError}
                        onChange={handleChange}
                        showPasswordToggle
                        value={userData.password}
                        icon={IoLockClosedOutline}
                        placeholder="************"
                      />

                      <Text
                        my="4"
                        fontSize="12px"
                        cursor="pointer"
                        w="fit-content"
                        _hover={{
                          color: "brand.action",
                        }}
                      >
                        <ChakraLink
                          as={ReactRouterLink}
                          display={"inline-block"}
                          cursor="pointer"
                          to={"/reset"}
                          _hover={{
                            color: "brand.action",
                          }}
                        >
                          Forgot Password?
                        </ChakraLink>
                      </Text>
                    </Box>
                    <HStack>
                      <label className="flex">
                        <Box flexDir="row" display="flex" alignItems="center">
                          <input type="checkbox" onChange={handleCheckBox} />
                          <Text fontSize="12px" color="gray.600" ml="2">
                            Keep me signed in
                          </Text>
                        </Box>
                      </label>
                    </HStack>
                    <CButton
                      my={4}
                      text="Sign In"
                      width="full"
                      isLoading={isLoading}
                      onClick={handleSubmit}
                    />
                    <Text textAlign="center" fontSize="12px">
                      Don't have an account?{" "}
                      <ChakraLink
                        w="fit-content"
                        cursor="pointer"
                        to={"/register"}
                        as={ReactRouterLink}
                        display={"inline-block"}
                        _hover={{
                          color: "brand.action",
                        }}
                      >
                        Create one for Free.
                      </ChakraLink>
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignInModal;

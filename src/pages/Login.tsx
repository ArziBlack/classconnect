import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { SpinnerIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { useState, ChangeEvent, SyntheticEvent } from "react";
// import { useNavigate } from "react-router-dom";
import { AppDispatch, IRootState } from "../app/store.ts";
import { LOGIN_IMG } from "../constants/image.ts";
import { LOGO } from "../constants/icon.ts";
import { login } from "../services/auth/authSlice.ts";
import { useToast } from "@chakra-ui/react";

const Login = () => {
  const toast = useToast();
  const dispatch = useDispatch<AppDispatch>();
  // const navigate = useNavigate();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (store: IRootState) => store.auth
  );
  const [check, setCheck] = useState<boolean>(false);
  const [inputError, setInputError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleShow = () => {
    setShowPassword(!showPassword);
  };
  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    if (userData.email === "" || userData.password === "") {
      toast({
        title: 'Fields cannot be blank',
        description: "An error occured.",
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top',
      });
      return;
    }
    dispatch(login(userData));
    isError && toast({
      title: 'An Error occured',
      description: `${message}`,
      status: 'error',
      duration: 9000,
      isClosable: true,
      position: 'top'
    });
    isSuccess && toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 9000,
      isClosable: true,
      position: 'top'
    });
  }
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }
  function handleCheckBox(e: SyntheticEvent) {
    setCheck(!check);
    if (check) {
      console.log("I was Checked");
    } else {
      console.log("You just UnChecked me");
    }
  }
  return (
    <>
      <Box overflow="hidden" color="#002C8A">
        <Flex justifyItems="space-between" w="100vw">
          <Flex
            flex="1"
            h="100vh"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              padding="60px"
              h="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              maxH="610px"
            >
              <Box mb="2px">
                <Heading
                  as="h5"
                  fontSize="27px"
                  fontWeight="700"
                  color="black"
                  mb="4px"
                >
                  Welcome Back
                </Heading>
                <Text fontSize="15px" fontWeight="400" color="black">
                  Sign In to your account to continue
                </Text>
              </Box>
              <div className=" border-t-[.5px] border-grey flex w-full mb-1"></div>
              {inputError && (
                <Text
                  color="red.900"
                  bg="red.300"
                  textAlign="center"
                  borderRadius="8px"
                >
                  {inputError}
                </Text>
              )}
              <Box w="100%">
                <label
                  className="block text-gray-800 text-sm font-medium mb-1"
                  htmlFor="Email"
                >
                  Email Address
                </label>
                <Input
                  placeholder="Email Address"
                  size="md"
                  id="Email"
                  fontSize="14px"
                  border='1px'
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={userData.email}
                />
              </Box>
              <Box w="100%">
                <label
                  className="block text-gray-800 text-sm font-medium mb-1"
                  htmlFor="Password"
                >
                  Password
                </label>
                <InputGroup border='1px' borderRadius='6px'>
                  <Input
                    placeholder="Enter Password"
                    size="md"
                    id="Password"
                    fontSize="14px"
                    pr="4.5rem"
                    outline='none'
                    border='none'
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={handleChange}
                    value={userData.password}
                  />
                  <InputRightElement>
                    <Button
                      size="sm"
                      w="4.5rem"
                      fontSize="10px"
                      color="black"
                      bg="none"
                      onClick={handleShow}
                      p="5px"
                      mr="5px"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Text mt="12px" textDecorationLine="underline">
                  Forgot Password?
                </Text>
              </Box>
              <HStack>
                <label className="flex">
                  <Box display='flex' flexDir='row' alignItems='center'>
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    onChange={handleCheckBox}
                  />
                  <Text fontSize="12px" color="gray.600" ml="2" mt="5">
                    By Logging In you Agree to our Terms & Conditions and
                    Privacy Policy
                  </Text>
                  </Box>
                </label>
              </HStack>
              <Button
                bg="#002C8A"
                color="white"
                onClick={handleSubmit}
                isDisabled={check ? false : true}
              >
                {isLoading ? <SpinnerIcon /> : "Login"}
              </Button>
              <Text as="a" textAlign="center" fontSize="12px">
                Don't have an account? <b>Create one for Free.</b>
              </Text>
            </Box>
          </Flex>
          <Box
            flex="2"
            bgImage={LOGIN_IMG}
            m="30px"
            bgSize="cover"
            borderRadius="60px"
          >
            <Box
              bgGradient="linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))"
              h="100%"
              w="100%"
              borderRadius="60px"
              padding="20px"
            >
              <Box
                p="40px"
                display="flex"
                flexDir="column"
                h="100%"
                justifyContent="space-between"
              >
                <Image src={LOGO} w="70px" h="50.5px" />
                <Box color="white">
                  <Text fontSize="35px" fontWeight="400" lineHeight="43px">
                    Unlock the Gateway to Knowledge
                  </Text>
                  <Text fontSize="22px" lineHeight="34px" mt="20px">
                    Welcome to HEP 🎓 Where
                    Learning Knows No Boundaries. Login to Explore, Learn, and
                    Excel!
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Login;

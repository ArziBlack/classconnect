import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { resetPassword, resetTutorPassword } from "../services/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reactReduxHooks";
import { useEffect, useState } from "react";
import useCustomToast from "../hooks/useCustomToast";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../constants/icon";

const ResetPassword = () => {
  const bgColor = useColorModeValue("#002333", "#002333");
  const cardBgColor = useColorModeValue("#EDE9F2", "#EDE9F2");
  const borderColor = useColorModeValue("gray.300", "gray.600");
  const textColor = useColorModeValue("gray.900", "white");
  const placeholderColor = useColorModeValue("gray.400", "gray.400");
  const primaryColor = useColorModeValue("blue.500", "primary.600");

  const dispatch = useAppDispatch();
  const toast = useCustomToast();
  const [email, setEmail] = useState<{ email: string }>({ email: "" });
  const { message, isError, isSuccess, isLoading } = useAppSelector(
    (state) => state.auth
  );
  const { userType } = useAppSelector((state) => state.other);
  const navigate = useNavigate();

  async function sendReset(e) {
    e.preventDefault();
    if (email?.email === "") {
      toast("Email field can't be Blank!!!", "error");
    }
    if (userType === "student") {
      const result = await dispatch(resetPassword(email));
      if (result.meta.requestStatus === "fulfilled") {
        toast("Password reset link sent successfully!", "success");
        setTimeout(() => {
          navigate("/reset-check");
        }, 4000);
      }
      if (result.meta.requestStatus === "rejected") {
        toast("Error sending password reset link!", "error");
      }
    } else {
      const result = await dispatch(resetTutorPassword(email));
      if (result.meta.requestStatus === "fulfilled") {
        toast("Password reset link sent successfully!", "success");
        setTimeout(() => {
          navigate("/reset-check");
        }, 4000);
      }
      if (result.meta.requestStatus === "rejected") {
        toast("Error sending password reset link!", "error");
      }
    }
  }

  useEffect(() => {
    if (isError) {
      toast(message, "error");
    }
    if (isSuccess) {
      toast(message, "success");
    }
  }, [isError, isSuccess, message, toast]);
  
  return (
    <Box
      bg={bgColor}
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={6}
      py={8}
      w="100vw"
    >
      <Container centerContent width={`100%`}>
        <Link
          href="#"
          display="flex"
          alignItems="center"
          mb={6}
          fontSize="2xl"
          fontWeight="semibold"
          color={textColor}
        >
          <Box as="img" src={LOGO} alt="logo" w={12} h={8} mr={2} />
        </Link>
        <Box
          w="full"
          bg={cardBgColor}
          p={6}
          rounded="lg"
          shadow="md"
          borderColor={borderColor}
          borderWidth={1}
          maxW="md"
          //   sm={{ p: 8 }}
        >
          <Heading
            as="h2"
            size="lg"
            mb={1}
            fontWeight="bold"
            textAlign="center"
            color={textColor}
          >
            Reset Password
          </Heading>
          <VStack
            as="form"
            mt={4}
            spacing={4}
            // lg={{ mt: 5 }}
            // md={{ spacing: 5 }}
            action="#"
          >
            <FormControl>
              <FormLabel
                htmlFor="email"
                mb={2}
                fontSize="sm"
                fontWeight="medium"
                color={textColor}
              >
                Your email
              </FormLabel>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="name@company.com"
                bg={`#FFF`}
                borderColor={borderColor}
                color={textColor}
                _placeholder={{ color: placeholderColor }}
                focusBorderColor={primaryColor}
                required
                onChange={(e) => setEmail({ email: e.target.value })}
              />
            </FormControl>
            {/* <FormControl>
              <FormLabel
                htmlFor="password"
                mb={2}
                fontSize="sm"
                fontWeight="medium"
                color={textColor}
              >
                New Password
              </FormLabel>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                bg={bgColor}
                borderColor={borderColor}
                color={textColor}
                _placeholder={{ color: placeholderColor }}
                focusBorderColor={primaryColor}
                required
              />
            </FormControl> */}
            {/* <FormControl>
              <FormLabel
                htmlFor="confirm-password"
                mb={2}
                fontSize="sm"
                fontWeight="medium"
                color={textColor}
              >
                Confirm password
              </FormLabel>
              <Input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="••••••••"
                bg={bgColor}
                borderColor={borderColor}
                color={textColor}
                _placeholder={{ color: placeholderColor }}
                focusBorderColor={primaryColor}
                required
              />
            </FormControl> */}
            <FormControl display="flex" alignItems="start">
              <Checkbox
                id="newsletter"
                required
                colorScheme="blue"
                borderColor={borderColor}
                mr={3}
                bg={`white`}
                ringColor={primaryColor}
                // dark={{ ringOffsetColor: "gray.800" }}
              />
              <Text
                fontSize="sm"
                color="gray.500"
                //   dark={{ color: "gray.300" }}
              >
                I accept the{" "}
                <Link
                  color={primaryColor}
                  fontWeight="medium"
                  href="#"
                  _hover={{ textDecoration: "underline" }}
                >
                  Terms and Conditions
                </Link>
              </Text>
            </FormControl>
            <Button
              type="submit"
              w="full"
              colorScheme="blue"
              bg={primaryColor}
              _hover={{ bg: "blue.700" }}
              //   focusRingColor={primaryColor}
              fontSize="sm"
              fontWeight="medium"
              rounded="lg"
              py={2.5}
              textAlign="center"
              onClick={sendReset}
              //   dark={{
              //     bg: primaryColor,
              //     _hover: { bg: "primary.700" },
              //     focusRingColor: "primary.800",
              //   }}
            >
              {isLoading ? <CircularProgress /> : "Reset password"}
            </Button>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default ResetPassword;

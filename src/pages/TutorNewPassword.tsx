import {
  Box,
  Button,
  CircularProgress,
  Container,
  Heading,
  Link,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import {
  newTutorPassword,
} from "../services/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reactReduxHooks";
import { useEffect, useState } from "react";
import useCustomToast from "../hooks/useCustomToast";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../constants/icon";
import InputField from "../components/Input";
import { setUserType } from "../services/others/otherSlice";

const TutorNewPassword = () => {
  const bgColor = useColorModeValue("#002333", "#002333");
  const cardBgColor = useColorModeValue("#EDE9F2", "#EDE9F2");
  const borderColor = useColorModeValue("gray.300", "gray.600");
  const textColor = useColorModeValue("gray.900", "white");
  const primaryColor = useColorModeValue("blue.500", "primary.600");
  const { isLoading, message, resetURL } = useAppSelector(
    (state) => state.auth
  );
  const [form, setForm] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const { confirmPassword } = form;

  const handlePasswordChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const dispatch = useAppDispatch();
  const toast = useCustomToast();
  const navigate = useNavigate()

  const handleCreateNewPassword = async(e) => {
    e.preventDefault();
    const newPassword = {
      newPassword: form.newPassword
    };
    const url = resetURL;
    if (!url) {
      toast("resetURL cannot be null!!", "warning");
      return;
    }
    if (!confirmPassword && !form.newPassword) {
      toast("password fields cannot be empty!!", "warning");
    } else {
      const result = await dispatch(newTutorPassword({ url, newPassword }));
      if (result.meta.requestStatus === "fulfilled") {
        toast(message || "Password reset link sent successfully!", "success");
        setUserType("tutor");
        setTimeout(() => {
          navigate("/signin/tutor");
        }, 4000);
      }
      if (result.meta.requestStatus === "rejected") {
        toast(message || "Error sending password reset link!", "error");
      }
    }
  };

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
            as="h3"
            size="lg"
            mb={1}
            fontWeight="bold"
            textAlign="center"
            color={textColor}
          >
            Create New Password
          </Heading>
          <VStack
            as="form"
            mt={4}
            spacing={4}
            // lg={{ mt: 5 }}
            // md={{ spacing: 5 }}
            action="#"
          >
            <Box w="100%">
              <InputField
                type="password"
                id="password"
                name="newPassword"
                placeholder="new password"
                color={textColor}
                required
                showPasswordToggle
                value={form.newPassword}
                onChange={handlePasswordChange}
              />
            </Box>
            <Box w="100%">
              <InputField
                type="password"
                id="confirm"
                name="confirmPassword"
                placeholder="confirm password"
                color={textColor}
                required
                showPasswordToggle
                value={form.confirmPassword}
                onChange={handlePasswordChange}
              />
            </Box>
            <Button
              type="submit"
              w="full"
              colorScheme="blue"
              bg={primaryColor}
              _hover={{ bg: "blue.700" }}
              fontSize="sm"
              fontWeight="medium"
              rounded="lg"
              py={2.5}
              textAlign="center"
              isLoading={isLoading}
              onClick={handleCreateNewPassword}
            >
              Change password
            </Button>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default TutorNewPassword;

import { Box, Container, Center, Text, Stack } from "@chakra-ui/react";
import { ImMail4 } from "react-icons/im";
import { useAppDispatch, useAppSelector } from "../hooks/reactReduxHooks";
import { useEffect, useRef } from "react";
import { emailVerify } from "../services/auth/authSlice";
import { useNavigate, useParams } from "react-router-dom";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { setUserType } from "../services/others/otherSlice";
import Button from "../components/Button";

const StudentEmailV = () => {
  const { width, height } = useWindowSize();
  const dispatch = useAppDispatch();
  const { studentId, uniqueString } = useParams();
  const navigate = useNavigate();
  const { message, isSuccess, isError } = useAppSelector((state) => state.auth);
  const hasRequested = useRef(false);

  useEffect(() => {
    if (!hasRequested.current) {
      dispatch(emailVerify({ studentId, uniqueString }));
      hasRequested.current = true;
    }
  }, [dispatch, studentId, uniqueString]);

  useEffect(() => {
    if (isSuccess) {
      setUserType("student");
      const timer = setTimeout(() => {
        navigate("/signin");
      }, 3000);
      return () => clearTimeout(timer);
    }
    if (isError) {
      console.log(message, isSuccess);
    }
  }, [isSuccess, isError, message, navigate]);

  const handleRetry = () => {
    hasRequested.current = false;
    dispatch(emailVerify({ studentId, uniqueString }));
  };

  return (
    <>
      <Container overflowY={"hidden"} className="no-scrollbar">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 4, md: 7 }}
          py={{ base: 20, md: 36 }}
        >
          <Center>
            <ImMail4
              size={200}
              color={isSuccess ? "#1e9e61" : isError ? "#a80a0a" : "#002c8a"}
            />
          </Center>
          <Text fontWeight="bold" fontSize="3xl" color="gray.800">
            {isSuccess ? (
              <>
                Account successfully verified!
                <br />
                <Text fontWeight="bold" fontSize="lg">
                  You'll be redirected to login shortly.
                </Text>
              </>
            ) : isError ? (
              <>
                Verification failed!
                <br />
                <Text fontWeight="bold" fontSize="lg">
                  Please try again.
                </Text>
                <Button
                  mt={4}
                  bg="white"
                  border="1px solid black"
                  onClick={handleRetry}
                  text="Click to retry"
                />
              </>
            ) : (
              "We are trying to verify your Account!"
            )}
          </Text>
          <Center>
            <Text fontSize={"md"} color={"gray.600"}>
              {isSuccess
                ? `...told you this wouldn't take long`
                : isError
                  ? `There was an issue while trying to verify you.`
                  : `This shouldn't take long, please wait a bit.`}
            </Text>
          </Center>
        </Stack>
        {isSuccess && <Confetti width={width} height={height} />}
      </Container>
    </>
  );
};

export default StudentEmailV;

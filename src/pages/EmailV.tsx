import {
    Box,
    Container,
    Center,
    Text,
    Stack
} from "@chakra-ui/react";
import { ImMail4 } from "react-icons/im";
import { useAppDispatch, useAppSelector } from "../hooks/reactReduxHooks";
import { useEffect } from "react";
import { emailVerify } from "../services/auth/authSlice";
import { useNavigate, useParams } from "react-router-dom";

const EmailV = () => {
    const dispatch = useAppDispatch();
    const { studentId, uniqueString } = useParams();
    const navigate = useNavigate();
    const { message, isSuccess, isError } = useAppSelector(star => star.auth);
    console.log(message, isSuccess, studentId, uniqueString);
    useEffect(() => {
        dispatch(emailVerify({ studentId, uniqueString }));
        if (isSuccess) {
            navigate("/student");
        }
        if (isError) {
            console.log(message, isSuccess);
        }
    }, [dispatch, isSuccess]);

    return (
        <>
            <Container maxW={"3xl"}>
                <Stack
                    as={Box}
                    textAlign={"center"}
                    spacing={{ base: 4, md: 7 }}
                    py={{ base: 20, md: 36 }}
                >
                    <Center>
                        <ImMail4 size={200} color='#002c8a' />
                    </Center>
                    <Text fontWeight="bold" fontSize="3xl" color={"gray.800"}>
                        We are trying to verify your Account!
                    </Text>
                    <Center>
                        <Text w="90%" fontWeight="bold" fontSize="lg" color={"gray.600"}>
                            Thanks for signing up! To fully verify your account, click the
                            button in the verification email we sent you and continue the
                            process.
                        </Text>
                    </Center>
                </Stack>
            </Container>
        </>
    )
}

export default EmailV
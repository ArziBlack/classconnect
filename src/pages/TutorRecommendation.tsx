import {
  Box,
  Link,
  Text,
  VStack,
  Button,
  Heading,
  Container,
  FormControl,
  useColorModeValue,
  Spinner,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { LOGO } from "../constants/icon";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reactReduxHooks";
import {
  acceptRecommendation,
  rejectRecommendation,
} from "../services/student/studentThunks";
import { useEffect } from "react";

const TutorRecommendation = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.student);

  const bgColor = useColorModeValue("#F7FAFC", "#1A202C");
  const { recommendationStatus, tutorId, studentId } = useParams();
  const cardBgColor = useColorModeValue("#FFFFFF", "#2D3748");
  const borderColor = useColorModeValue("gray.300", "gray.600");
  const textColor = useColorModeValue("gray.800", "white");
  const primaryColor = useColorModeValue("blue.500", "blue.300");
  const blueColor = useColorModeValue("blue.600", "blue.400");

  const greyColor = useColorModeValue("gray.600", "gray.400");

  const navigate = useNavigate();

  useEffect(() => {
    const handleRecommendation = async () => {
      if (recommendationStatus === "accept_recommendation") {
        await dispatch(acceptRecommendation({ tutorId, studentId }));
      } else {
        await dispatch(rejectRecommendation({ tutorId, studentId }));
      }
    };
    handleRecommendation();
  }, []);

  return (
    <Box
      bg={bgColor}
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
      py={8}
      w="full"
    >
      <Container centerContent w="full">
        <Link href="#" display="flex" alignItems="center" mb={8}>
          <Box as="img" src={LOGO} alt="logo" w={"full"} h={10} mr={2} />
        </Link>

        {isLoading ? (
          <Spinner size="lg" color={"black"} />
        ) : error ? (
          <Alert status="error" mb={4}>
            <AlertIcon />
            {error?.message || error?.error}
          </Alert>
        ) : (
          <Box
            w="full"
            maxW="md"
            bg={cardBgColor}
            p={8}
            borderRadius="lg"
            shadow="md"
            borderColor={borderColor}
            borderWidth={1}
          >
            <Heading
              as="h2"
              size="md"
              mb={6}
              fontWeight="bold"
              textAlign="center"
              color={textColor}
            >
              {recommendationStatus === "accept_recommendation"
                ? "Tutor Recommendation Accepted!"
                : "Recommendation Disapproved"}
            </Heading>

            <Text fontSize="md" textAlign="center" mb={8} color={greyColor}>
              {recommendationStatus === "accept_recommendation"
                ? "You have successfully accepted the tutor recommendation."
                : "You have disapproved of the recommendation. You can request another tutor recommendation."}
            </Text>

            <VStack spacing={4} align="stretch">
              <FormControl></FormControl>
              <Button
                w="full"
                colorScheme="blue"
                bg={primaryColor}
                _hover={{ bg: blueColor }}
                size="md"
                fontWeight="300"
                rounded="lg"
                onClick={() => navigate("/signin/student")}
              >
                Login to Continue
              </Button>
            </VStack>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default TutorRecommendation;

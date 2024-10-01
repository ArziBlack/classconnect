import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { VIDEO } from "../constants/illustrations";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const CollegeLevel = () => {
  const navigate = useNavigate();

  return (
    <Flex
      w={`full`}
      marginY="40px"
      bg={`brand.dark`}
      alignItems={"center"}
      p={{ base: 4, md: 20 }}
      gap={{ base: 0, md: 10 }}
      justifyContent={`space-between`}
      flexDir={{ base: "column-reverse", md: "row" }}
    >
      <Box
        w={{ base: "100%", md: "50%" }}
        display="flex"
        flex={{ base: "none", md: 1 }}
        justifyContent={`space-between`}
        paddingY={{ base: "10", md: "20" }}
        flexDir={{ base: "column", md: "row" }}
        textAlign={{ base: "center", md: "left" }}
        alignItems={{ base: "center", md: "flex-start" }}
      >
        <Box flex="1">
          <Heading
            as="h2"
            fontWeight={500}
            color={`white`}
            fontFamily={"Metropolis"}
            size={{ base: "xl", md: "2xl" }}
            paddingY={{ base: "5", md: "0" }}
            paddingRight={{ base: "0", md: "20px" }}
          >
            Make the most of every moment.
          </Heading>
          <Text fontSize={`medium`} color={`white`} paddingY={`10px`} mt={5}>
            Unlock your potential with our reimagined learning platform,
            designed to empower your personal and professional growth in the
            tech industry
          </Text>
          <Text fontSize={`medium`} color={`white`} paddingY={`10px`} mb={4}>
            Discover a world of opportunities and stay ahead with our
            comprehensive courses, tailored to help you master the latest
            technologies and skills.
          </Text>

          <Button text="Register Now" onClick={() => navigate("/register")} />
        </Box>
      </Box>
      <Box
        display={"flex"}
        h={{ base: "full" }}
        pt={{ base: "20", md: 0 }}
        justifyContent={"center"}
        flex={{ base: "none", md: 1 }}
        w={{ base: "100%", md: "50%" }}
      >
        <Image
          h="full"
          w="500px"
          src={VIDEO}
          objectFit={{ base: "cover", md: "contain" }}
        />
      </Box>
    </Flex>
  );
};

export default CollegeLevel;

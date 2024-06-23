import Button from "./Button";
import { Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { TUTOR } from "../constants/illustrations";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";

const Career = () => {
  const navigate = useNavigate();
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    navigate("/tutor");
  };
  return (
    <Flex
      w="full"
      justifyContent="space-between"
      paddingTop={{ base: "20", md: "58" }}
      flexDir={{ base: "column-reverse", md: "row-reverse" }}
      alignItems="center"
      h={{ base: "auto", md: "550px" }}
      borderRadius="20px"
      marginY="40px"
    >
      <Box
        flex={{ base: "none", md: 1 }}
        display="flex"
        flexDir={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent="space-between"
        paddingY={{ base: "10", md: "20" }}
        textAlign={{ base: "center", md: "left" }}
        p={{ base: 4, md: 20 }}
      >
        <Box flex="1">
          <Heading
            as="h2"
            mb="2"
            fontWeight={500}
            color={`brand.dark`}
            fontFamily={"Metropolis"}
            size={{ base: "x", md: "2xl" }}
            paddingY={{ base: "5", md: "0" }}
            paddingRight={{ base: "0", md: "20px" }}
          >
            Want to share your knowledge? Join us as a Tutor
          </Heading>
          <Text
            mb="2"
            paddingY="10px"
            fontWeight={500}
            fontSize="medium"
            color="brand.text"
          >
            Join Hepcoding Academy as a tutor and inspire the next generation of
            tech professionals. We seek passionate experts with strong
            communication skills to provide high-quality education.
          </Text>
          <Button text="Join as Tutor" onClick={() => handleLinkClick()} />
        </Box>
      </Box>
      <Box
        flex={{ base: "none", md: 1 }}
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
        marginY="10px"
        h="full"
        w="full"
        p="15px"
      >
        <Image
          src={TUTOR}
          objectFit="contain"
          h={{ base: "300px", md: "500px" }}
          w={{ base: "300px", md: "500px" }}
        />
      </Box>
    </Flex>
  );
};

export default Career;

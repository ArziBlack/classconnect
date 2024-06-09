import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import Button from "./Button";
import { CAREER } from "../constants/illustrations";
import { useNavigate } from "react-router-dom";

const Career = () => {
  const navigate = useNavigate();
  return (
    <Flex
      w="full"
      justifyContent="space-between"
      paddingTop={{ base: "20", md: "58" }}
      flexDir={{ base: "column-reverse", md: "row-reverse" }}
      alignItems="center"
      h={{ base: "auto", md: "550px" }} // Adjusted height for responsiveness
      borderRadius="20px"
      marginY="40px"
    >
      <Box
        flex={{ base: "none", md: 1 }} // Adjusted flex basis
        display="flex"
        flexDir={{ base: "column", md: "row" }} // Adjusted flex direction
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent="space-between"
        paddingY={{ base: "10", md: "20" }}
        textAlign={{ base: "center", md: "left" }}
        p={{ base: 4, md: 20 }} // Adjusted padding
      >
        <Box flex="1">
          <Heading
            as="h2"
            fontWeight={500}
            color={`brand.dark`}
            fontFamily={"Metropolis"}
            size={{ base: "x", md: "2xl" }}
            paddingRight={{ base: "0", md: "20px" }}
            paddingY={{ base: "5", md: "0" }}
          >
            Want to share your knowledge? Join us as a Mentor
          </Heading>
          <Text fontSize="medium" color="brand.offwhite" paddingY="10px">
            High-definition video is video of higher resolution and quality than
            standard-definition. While there is no standardized meaning for
            high-definition, generally any video.
          </Text>
          <Button
            text="Career Information"
            onClick={() => navigate("/tutor")}
          />
        </Box>
      </Box>
      <Box
        flex={{ base: "none", md: 1 }} // Adjusted flex basis
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
        marginY="10px"
        h="full"
        w="full"
        p="15px"
      >
        <Image
          src={CAREER}
          h={{ base: "300px", md: "500px" }}
          w={{ base: "300px", md: "500px" }}
          objectFit="contain"
        />
      </Box>
    </Flex>
  );
};

export default Career;

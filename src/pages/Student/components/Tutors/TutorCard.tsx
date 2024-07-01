import React from "react";
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { LiaBookOpenSolid } from "react-icons/lia";
import { CgGenderMale, CgGenderFemale } from "react-icons/cg";

interface TutorCardProps {
  name: string;
  bio: string;
  course: string;
  gender: string;
  imageUrl: string;
}

export const TutorCard: React.FC<TutorCardProps> = ({
  name,
  bio,
  course,
  gender,
  imageUrl,
}) => {
  const navigate = useNavigate();

  const getGenderIcon = (gender: string) => {
    return gender === "Female" ? (
      <CgGenderFemale fontSize={"18px"} className="m2-[4px]" />
    ) : (
      <CgGenderMale fontSize={"18px"} className="m2-[4px]" />
    );
  };

  return (
    <Box
      position="relative"
      width={"100%"}
      maxW="600px"
      p={4}
      fontSize={"14px"}
      boxShadow="md"
      borderRadius="md"
      bg="#254f62"
      color="white"
      cursor={"pointer"}
      onClick={() => navigate("/student/tutor-details")}
      border={"1px solid #5E7079"}
      overflow="hidden"
      _hover={{ ".overlay": { transform: "translateY(0)" } }}
    >
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        {name}
      </Text>
      <Text opacity={0.8} mb={4} fontWeight={300} fontFamily={"Work Sans"}>
        {bio}
      </Text>
      <Flex
        pt={4}
        w={"100%"}
        align={"center"}
        justifyContent={"space-between"}
        fontFamily={"Work Sans"}
      >
        <Flex align="center">
          <Flex
            alignItems="center"
            justifyContent={"center"}
            opacity={0.6}
            gap={1}
            color="brand.action"
          >
            <LiaBookOpenSolid fontSize={"18px"} className="mb-[2px]" />
            <Text textTransform={"capitalize"}>{course?.toLowerCase()}</Text>
          </Flex>
          <Flex align="center" ml={4}>
            {getGenderIcon(gender)}
            <Text>{gender}</Text>
          </Flex>
        </Flex>
        <Image
          objectFit={"cover"}
          borderRadius="full"
          boxSize="40px"
          src={imageUrl}
          alt="Avatar"
        />
      </Flex>

      <Box
        className="overlay"
        position="absolute"
        bottom={0}
        left={0}
        width="100%"
        height="50%"
        bg="rgba(0, 0, 0, 0.8)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        transition="transform 0.3s ease-in-out"
        transform="translateY(100%)"
      >
        <Button colorScheme="teal" onClick={() => alert("Tutor chosen!")}>
          Choose Tutor
        </Button>
      </Box>
    </Box>
  );
};

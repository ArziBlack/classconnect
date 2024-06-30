import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { LiaBookOpenSolid } from "react-icons/lia";
import { CgGenderMale } from "react-icons/cg";
import { CgGenderFemale } from "react-icons/cg";

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
  const getGenderIcon = (gender: string) => {
    return gender === "Female" ? (
      <CgGenderFemale fontSize={"18px"} className="m2-[4px]" />
    ) : (
      <CgGenderMale fontSize={"18px"} className="m2-[4px]" />
    );
  };

  const navigate = useNavigate();

  return (
    <Box
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
            <Text>{course}</Text>
          </Flex>
          <Flex align="center" ml={4}>
            {getGenderIcon(gender)}
            <Text>{gender}</Text>
          </Flex>
        </Flex>
        <Image borderRadius="full" boxSize="40px" src={imageUrl} alt="Avatar" />
      </Flex>
    </Box>
  );
};

import React from "react";
import { Box, Flex, Text, Image, Icon } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import { SiLevelsdotfyi } from "react-icons/si";

interface CardProps {
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advance";
  lessons: string;
  imageUrl: string;
}

export const CourseCard: React.FC<CardProps> = ({
  title,
  description,
  difficulty,
  lessons,
  imageUrl,
}) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Intermediate":
        return "yellow"; // Use Chakra UI color or hex color
      case "Advance":
        return "red"; // Use Chakra UI color or hex color
      default:
        return "brand.action"; // Default color for Beginner
    }
  };
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
      border={"1px solid #5E7079"}
    >
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        {title}
      </Text>
      <Text opacity={0.8} mb={4} fontWeight={300} fontFamily={"Work Sans"}>
        {description}
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
            color={getDifficultyColor(difficulty)}
          >
            <SiLevelsdotfyi className="mb-[4px]" />
            <Text>{difficulty}</Text>
          </Flex>
          <Flex align="center" ml={4}>
            <Icon as={TimeIcon} mr={2} />
            <Text>{lessons}</Text>
          </Flex>
        </Flex>
        <Image borderRadius="full" boxSize="40px" src={imageUrl} alt="Avatar" />
      </Flex>
    </Box>
  );
};

import React from "react";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import { SiLevelsdotfyi } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";

interface CardProps {
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advance";
  lessons: string;
  link: string;
}

export const CourseCard: React.FC<CardProps> = ({
  title,
  description,
  difficulty,
  lessons,
  link
}) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Intermediate":
        return "yellow";
      case "Advance":
        return "sky-blue";
      default:
        return "brand.action";
    }
  };

  const navigate = useNavigate();

  const truncateDescription = (
    description: string,
    maxLength: number = 140
  ) => {
    if (description.length <= maxLength) {
      return description;
    }
    return `${description.substring(0, maxLength)}...`;
  };

  return (
    <Link to={`/student/courses/${link}`}>
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
        onClick={() => navigate("/student/detailed")}
        border={"1px solid #5E7079"}
      >
        <Text textTransform={"capitalize"} fontSize="xl" fontWeight="bold" mb={2}>
          {title?.toLocaleLowerCase()}
        </Text>
        <Text opacity={0.8} mb={4} fontWeight={300} fontFamily={"Work Sans"}>
          {truncateDescription(description)}
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
        </Flex>
      </Box>
    </Link>
  );
};

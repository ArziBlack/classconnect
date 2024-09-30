import React from "react";
import { Link } from "react-router-dom";
import { TimeIcon } from "@chakra-ui/icons";
// import { SiLevelsdotfyi } from "react-icons/si";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";

interface CardProps {
  title: string;
  description: string;
  ageBracket: string;
  difficulty: "Beginner" | "Intermediate" | "Advance";
  lessons: string;
  link?: string;
}

export const CourseCard: React.FC<CardProps> = ({
  title,
  description,
  difficulty,
  lessons,
  ageBracket = "All ages",
  link,
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
      <Text textTransform={"capitalize"} fontSize="xl" fontWeight="bold" mb={2}>
        {title?.toLocaleLowerCase()}
      </Text>
      <Text
        opacity={0.8}
        mb={4}
        fontWeight={300}
        fontFamily={"Work Sans"}
        noOfLines={2}
      >
        {truncateDescription(description)}
      </Text>
      <Flex
        pt={4}
        w={"100%"}
        align={"center"}
        justifyContent={"space-between"}
        fontFamily={"Work Sans"}
      >
        <Flex align="center" gap={4}>
          {ageBracket && (
            <Flex
              alignItems="center"
              justifyContent={"center"}
              opacity={0.6}
              gap={1}
              color={getDifficultyColor(difficulty)}
              display={{ base: "none", md: "flex" }}
            >
              {/* <SiLevelsdotfyi className="mb-[4px]" /> */}
              <Text>
                {ageBracket === "All ages"
                  ? ageBracket
                  : ageBracket.replace(/\s+/g, "")}{" "}
                {ageBracket !== "All ages" && "years old"}
              </Text>
            </Flex>
          )}
          <Flex align="center">
            <Icon as={TimeIcon} mr={2} />
            <Text textTransform={"capitalize"}>{lessons?.toLowerCase()}</Text>
          </Flex>
        </Flex>
        <Flex align="center" ml={4} textDecor={"underline"}>
          <Link to={`/student/courses/${link}`}>
            <Text textTransform={"capitalize"} cursor={"pointer"}>
              {"view curriculum"}
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

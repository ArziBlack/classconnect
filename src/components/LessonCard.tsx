import { VStack, Image, Text } from "@chakra-ui/react";
import Button from "./Button";
import React from "react";

interface ICardProps {
  image: string;
  title: string;
  description: string;
  bgColor: string;
}

const LessonCard: React.FC<ICardProps> = ({ image, title, description }) => {
  return (
    <VStack
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="white"
      _hover={{ transform: "scale(1.05)", transition: "0.3s linear", }}
      p="18px"
      justifyContent={`space-between`}
    >
      <Image src={image} />
      {/* <Badge borderRadius="full" px="2" colorScheme={bgColor}>
        {number}
      </Badge> */}
      <VStack mt="4">
        <Text fontWeight="bold" fontSize="xl">
          {title}
        </Text>
        <Text fontSize="md" color="gray.500" textAlign="center">
          {description}
        </Text>
      </VStack>
      <Button text="Class Details" />
    </VStack>
  );
};

export default LessonCard;

import { VStack, Image, Text } from "@chakra-ui/react";
import Button from "./Button";
import React from "react";

interface ICardProps {
  CTA: string;
  title: string;
  image: string;
  bgColor: string;
  description: string;
  onClick?: () => void;
}

const LessonCard: React.FC<ICardProps> = ({
  CTA,
  image,
  title,
  description,
  onClick = () => {},
}) => {
  return (
    <VStack
      bg="brand.dark"
      maxW={"300px"}
      transition="0.3s linear"
      _hover={{
        transform: "scale(1.05)",
        transition: "0.1s linear",
      }}
      px="18px"
      py="50px"
      my="20px"
      borderRadius={20}
      justifyContent={`space-between`}
    >
      <Image src={image} width={"50px"} />

      <VStack my="4">
        <Text
          fontSize="lg"
          noOfLines={1}
          color={"white"}
          fontWeight="bold"
          textTransform={"uppercase"}
        >
          {title}
        </Text>
        <Text
          fontSize="sm"
          opacity={0.9}
          noOfLines={3}
          color={"white"}
          fontWeight={200}
          textAlign="center"
        >
          {description}
        </Text>
      </VStack>
      <Button text={CTA} onClick={onClick} />
    </VStack>
  );
};

export default LessonCard;

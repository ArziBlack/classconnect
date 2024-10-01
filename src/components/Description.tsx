import React, { ReactNode } from "react";
import { Text } from "@chakra-ui/react";

interface IDescriptionProps {
  children: ReactNode;
}

const Description: React.FC<IDescriptionProps> = ({ children }) => {
  return (
    <Text
      mt={{ base: 5, lg: 10 }}
      fontWeight={500}
      fontSize={{ base: "16px", md: "20px" }}
      color={"brand.text"}
      textAlign={`center`}
      paddingBottom={`10px`}
      w={{ base: "90%", md: "650px" }}
    >
      {children}
    </Text>
  );
};

export default Description;

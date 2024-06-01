import React, { ReactNode } from "react";
import { Text } from "@chakra-ui/react";

interface IDescriptionProps {
  children: ReactNode;
}

const Description: React.FC<IDescriptionProps> = ({ children }) => {
  return (
    <Text
      w={{ base: "90%", md: "650px" }}
      textAlign={`center`}
      color="brand.offwhite"
      paddingBottom={`10px`}
    >
      {children}
    </Text>
  );
};

export default Description;

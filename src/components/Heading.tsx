import { Heading as ChakraHeading } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface IHeadingProps {
    children: ReactNode;
}

const Heading: React.FC<IHeadingProps> = ({children}) => {
  return (
    <ChakraHeading
        as={`h2`}
        size={`xl`}
        w={{ base: "90%", md: "450px" }}
        textAlign={`center`}
        color="brand.dark"
        marginBottom={{ base: "4", md: "0" }}
      >
        {children}
      </ChakraHeading>
  )
}

export default Heading
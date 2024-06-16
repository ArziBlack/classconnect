import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Text, Flex, Heading } from "@chakra-ui/react";

interface SecondaryHeroProps {
  title: string;
  description: string;
}
function formatPath(path) {
  if (!path) return "";
  const cleanedPath = path.startsWith("/") ? path.substring(1) : path;
  return cleanedPath.charAt(0).toUpperCase() + cleanedPath.slice(1);
}

const SecondaryHero: React.FC<SecondaryHeroProps> = ({
  title,
  description,
}) => {
  const location = useLocation();
  const formattedPath = formatPath(location.pathname);
  return (
    <Box
      py={2}
      w="full"
      minH={"330px"}
      color={"white"}
      margin={"0 auto"}
      bg={"brand.dark"}
      position={"relative"}
      overflow={"hidden"}
      fontFamily={"Metropolis"}
    >
      <svg
        className="fade-in-image"
        width="1983"
        height="382"
        viewBox="0 0 1983 382"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          left: "15%",
          top: "-120%",
          opacity: 0.5,
          zIndex: 1,
          bottom: "30px",
          position: "absolute",
          transform: "translateY(90%)",
        }}
      >
        <path
          d="M1983 190.359C1898.6 123.677 1262.51 -58.6132 1265.98 27.8067C1270.3 135.832 1290.86 418.411 1145.87 358.398C1000.88 298.384 799.621 80.3332 803.949 190.359C808.277 300.384 1114.49 509.918 0 255.86"
          stroke="#00FF84"
          stroke-width="10"
        ></path>
      </svg>
      <Flex
        h={"100%"}
        wrap="wrap"
        px={"16px"}
        pt={"24px"}
        maxW={"1280px"}
        margin={"0 auto"}
        direction={"row"}
      >
        <Box textAlign={{ base: "center", md: "left" }} maxWidth={"680px"}>
          <Text
            mb={"24px"}
            fontWeight={500}
            fontSize={"18px"}
            color={"brand.action"}
          >
            {formattedPath}
          </Text>
          <Heading
            as="h1"
            size="lg"
            mb={"24px"}
            fontWeight={600}
            fontFamily={"Metropolis"}
          >
            {title}
          </Heading>

          <Text fontWeight={700}>{description}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SecondaryHero;

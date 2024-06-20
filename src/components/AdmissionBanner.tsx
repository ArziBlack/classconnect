import { Box, Text, keyframes } from "@chakra-ui/react";

const slide = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AdmissionBanner = () => {
  return (
    <Box
      zIndex="2"
      fontSize="16px"
      textAlign="center"
      color="black"
      fontFamily={"Metropolis"}
      p="0.3rem 0.5rem"
      textTransform="uppercase"
      bgGradient="linear(to-l, rgb(171, 102, 255), rgb(20, 241, 149))"
      cursor="pointer"
      fontWeight="700"
      bgSize="200% 200%"
      animation={`${slide} 15s linear infinite`}
      _hover={{
        color: "white",
      }}
    >
      <Text
        m="0 auto"
        textAlign="center"
        width="fit-content"
        textTransform="uppercase"
      >
        Admission is now open - Enroll today →
      </Text>
    </Box>
  );
};

export default AdmissionBanner;

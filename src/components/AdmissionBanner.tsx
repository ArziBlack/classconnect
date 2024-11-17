import { Box, SkeletonText, Text, keyframes } from "@chakra-ui/react";
import { useAppSelector } from "../hooks/reactReduxHooks";

const slide = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AdmissionBanner = () => {
  const { home } = useAppSelector((store) => store.other);
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
      display="flex"
      alignItems="center"
      justifyContent="center"
      // h='50px'
      w="100%"
      bgSize="200% 200%"
      animation={`${slide} 15s linear infinite`}
      _hover={{
        color: "white",
      }}
    >
      <SkeletonText w="100%" isLoaded={home !== null} noOfLines={2}>
        <Text
          m="0 auto"
          textAlign="center"
          width="fit-content"
          textTransform="uppercase"
        >
          {home?.admissionMessage || "Enroll now and get a discount  → "}{" "}
          {home?.admission?.from && "  / "} {home?.admission?.from}{" "}
          {home?.admission?.to && "  → "} {home?.admission?.to}
        </Text>
      </SkeletonText>
    </Box>
  );
};

export default AdmissionBanner;

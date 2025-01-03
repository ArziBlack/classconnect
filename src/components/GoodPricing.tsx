import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { GOOD_PRICING } from "../constants/illustrations";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const GoodPricing = () => {
  const navigate = useNavigate();
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    navigate("/pricing");
  };
  return (
    <Box w="full" bg={`brand.dark`} marginY="40px">
      <Flex
        maxW="1240px"
        margin="0 auto"
        alignItems={"center"}
        p={{ base: 4, md: 5 }}
        gap={{ base: 0, md: 10 }}
        justifyContent={`space-between`}
        flexDir={{ base: "column-reverse", md: "row" }}
      >
        <Box
          order={2}
          display="flex"
          flex={{ base: "none", md: 1 }}
          justifyContent={`space-between`}
          w={{ base: "100%", md: "50%" }}
          paddingY={{ base: "10", md: "20" }}
          flexDir={{ base: "column", md: "row" }}
          textAlign={{ base: "center", md: "left" }}
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <Box flex="1">
            <Heading
              as="h2"
              fontWeight={500}
              color={`white`}
              fontFamily={"Metropolis"}
              size={{ base: "xl", md: "2xl" }}
              paddingY={{ base: "5", md: "0" }}
              paddingRight={{ base: "0", md: "20px" }}
            >
              Affordable Pricing for Everyone
            </Heading>
            <Text
              fontSize={{ base: "16px", md: "medium" }}
              color="white"
              paddingY="10px"
              mt={5}
            >
              Discover the perfect plan for your learning style with our
              flexible pricing options. Whether you prefer one-on-one sessions,
              small group interactions, or dynamic group classes, we have a plan
              that fits your budget.
            </Text>
            <Text
              fontSize={{ base: "16px", md: "medium" }}
              color="white"
              paddingY="10px"
              mb={4}
            >
              Unlock personalized instruction, collaborative learning, or a
              vibrant classroom experience at prices designed to make
              top-quality education accessible to everyone. Start your journey
              today and choose the right plan for you!
            </Text>

            <Button text="View Pricing" onClick={() => handleLinkClick()} />
          </Box>
        </Box>
        <Box
          w={{ base: "100%", md: "50%" }}
          display={"flex"}
          h={{ base: "full" }}
          justifyContent={"center"}
          flex={{ base: "none", md: 1 }}
        >
          <Image
            h="full"
            w="500px"
            src={GOOD_PRICING}
            objectFit={{ base: "cover", md: "contain" }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default GoodPricing;

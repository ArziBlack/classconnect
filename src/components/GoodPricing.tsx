import Button from "./Button";
import { GOOD_PRICING } from "../constants/illustrations";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const GoodPricing = () => {
  return (
    <Flex
      w={`full`}
      marginY="40px"
      bg={`brand.dark`}
      alignItems={"center"}
      p={{ base: 4, md: 20 }}
      justifyContent={`space-between`}
      flexDir={{ base: "column-reverse", md: "row" }}
    >
      <Box
        w={"50%"}
        order={2}
        display="flex"
        flex={{ base: "none", md: 1 }}
        justifyContent={`space-between`}
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
          <Text fontSize="medium" color="white" paddingY="10px" mt={5}>
            Discover the perfect plan for your needs with our flexible pricing
            options. Whether you're a beginner or a professional, we have a plan
            that fits your budget.
          </Text>
          <Text fontSize="medium" color="white" paddingY="10px" mb={4}>
            Unlock premium features and exclusive content at prices designed to
            make top-quality learning accessible to everyone. Start your journey
            today and find the right plan for you!
          </Text>

          <Button text="View Pricing" />
        </Box>
      </Box>
      <Box
        w={"50%"}
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
  );
};

export default GoodPricing;

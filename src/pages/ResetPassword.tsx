import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const ResetPassword = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const cardBgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.300", "gray.600");
  const textColor = useColorModeValue("gray.900", "white");
  const placeholderColor = useColorModeValue("gray.400", "gray.400");
  const primaryColor = useColorModeValue("blue.500", "primary.600");

  return (
    <Box
      bg={bgColor}
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={6}
      py={8}
    >
      <Container centerContent width={`100%`}>
        <Link
          href="#"
          display="flex"
          alignItems="center"
          mb={6}
          fontSize="2xl"
          fontWeight="semibold"
          color={textColor}
        >
          <Box
            // as="img"
            // src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            // alt="logo"
            w={8}
            h={8}
            // mr={2}
          />
          HEP
        </Link>
        <Box
          w="full"
          bg={cardBgColor}
          p={6}
          rounded="lg"
          shadow="md"
          borderColor={borderColor}
          borderWidth={1}
          maxW="md"
        //   sm={{ p: 8 }}
        >
          <Heading
            as="h2"
            size="xl"
            mb={1}
            fontWeight="bold"
            textAlign="center"
            color={textColor}
          >
            Change Password
          </Heading>
          <VStack
            as="form"
            mt={4}
            spacing={4}
            // lg={{ mt: 5 }}
            // md={{ spacing: 5 }}
            action="#"
          >
            <FormControl>
              <FormLabel
                htmlFor="email"
                mb={2}
                fontSize="sm"
                fontWeight="medium"
                color={textColor}
              >
                Your email
              </FormLabel>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="name@company.com"
                bg={bgColor}
                borderColor={borderColor}
                color={textColor}
                _placeholder={{ color: placeholderColor }}
                focusBorderColor={primaryColor}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel
                htmlFor="password"
                mb={2}
                fontSize="sm"
                fontWeight="medium"
                color={textColor}
              >
                New Password
              </FormLabel>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                bg={bgColor}
                borderColor={borderColor}
                color={textColor}
                _placeholder={{ color: placeholderColor }}
                focusBorderColor={primaryColor}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel
                htmlFor="confirm-password"
                mb={2}
                fontSize="sm"
                fontWeight="medium"
                color={textColor}
              >
                Confirm password
              </FormLabel>
              <Input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="••••••••"
                bg={bgColor}
                borderColor={borderColor}
                color={textColor}
                _placeholder={{ color: placeholderColor }}
                focusBorderColor={primaryColor}
                required
              />
            </FormControl>
            <FormControl display="flex" alignItems="start">
              <Checkbox
                id="newsletter"
                required
                colorScheme="blue"
                borderColor={borderColor}
                mr={3}
                bg={bgColor}
                ringColor={primaryColor}
                // dark={{ ringOffsetColor: "gray.800" }}
              />
              <Text fontSize="sm" color="gray.500" 
            //   dark={{ color: "gray.300" }}
              >
                I accept the{" "}
                <Link
                  color={primaryColor}
                  fontWeight="medium"
                  href="#"
                  _hover={{ textDecoration: "underline" }}
                >
                  Terms and Conditions
                </Link>
              </Text>
            </FormControl>
            <Button
              type="submit"
              w="full"
              colorScheme="blue"
              bg={primaryColor}
              _hover={{ bg: "blue.700" }}
            //   focusRingColor={primaryColor}
              fontSize="sm"
              fontWeight="medium"
              rounded="lg"
              py={2.5}
              textAlign="center"
            //   dark={{
            //     bg: primaryColor,
            //     _hover: { bg: "primary.700" },
            //     focusRingColor: "primary.800",
            //   }}
            >
              Reset password
            </Button>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default ResetPassword;

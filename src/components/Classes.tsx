import Button from "./Button";
import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { VStack, Heading } from "@chakra-ui/layout";

const Classes = () => {
  const navigate = useNavigate();
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    navigate("/programs");
  };
  return (
    <VStack paddingY="40px" h="full" mt={{ base: 10, lg: 20 }}>
      <Heading
        as={`h2`}
        color="brand.dark"
        textAlign={`center`}
        size={{ base: "xl", md: "2xl" }}
        w={{ base: "90%", md: "450px" }}
        marginBottom={{ base: "4", md: "0" }}
      >
        Beginner-Friendly Classes
      </Heading>

      <Text
        mt={10}
        color={"brand.text"}
        textAlign={`center`}
        paddingBottom={`10px`}
        w={{ base: "90%", md: "650px" }}
        fontWeight={{ base: 300, md: 500 }}
        fontSize={{ base: "16px", md: "20px" }}
      >
        Our platform is designed with flexibility in mind, offering courses and
        classes that are perfect for beginners. All classes are conducted via
        Google Meet and in-app video conferencing tools, ensuring that you can
        join from anywhere with ease. Our courses are structured to accommodate
        your schedule, allowing you to learn at your own pace and convenience.
      </Text>
      <Button text="Visit Courses" onClick={() => handleLinkClick()} />
    </VStack>
  );
};

export default Classes;

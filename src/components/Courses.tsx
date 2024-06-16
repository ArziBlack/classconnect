import { Box, VStack, SimpleGrid, Heading, Text } from "@chakra-ui/layout";
import SecondaryHero from "./SecondaryHero";
import LessonCard from "./LessonCard";
import { getHomeResponse } from "../services/others/otherSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { useAppSelector } from "../hooks/reactReduxHooks";
import { ONE } from "../constants/icon";
import { Skeleton } from "@chakra-ui/react";

const Courses = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getHomeResponse());
  }, []);

  const { home, isLoading } = useAppSelector((store) => store.other);

  const truncateDescription = (description) => {
    const maxLength = 110;
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };
  return (
    <section>
      <SecondaryHero
        title="HEP Courses Are For All Standards"
        description="Focus your creative journey with Skillshare Learning Paths. Deepen your skillset with a set of curated classes that build on one another, reinforcing lessons. Available in a range of experience levels from beginner to advanced."
      />
      <VStack>
        <Box
          py="40px"
          alignItems={`center`}
          justifyContent={`center`}
          display={`flex`}
          flexDir={`column`}
        >
          <Heading
            as={`h2`}
            color="brand.dark"
            textAlign={`center`}
            size={{ base: "xl", md: "2xl" }}
            w={{ base: "90%", md: "450px" }}
            marginBottom={{ base: "4", md: "0" }}
          >
            Browse Through Our Elite Courses
          </Heading>

          <Text
            mt={10}
            fontWeight={500}
            fontSize={"20px"}
            color={"brand.text"}
            textAlign={`center`}
            paddingBottom={`10px`}
            w={{ base: "90%", md: "650px" }}
          >
            Welcome to our tech course! We take you from beginner to advanced
            levels with a curriculum designed to be comprehensive yet
            accessible. Our course is perfect for those just starting out,
            providing clear and easy-to-follow lessons. As you progress, you'll
            delve into more advanced topics, ensuring a thorough understanding
            of the subject. Join us and transform your skills and knowledge in
            the tech world.
          </Text>
        </Box>
        <Box mb={10}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="12">
            {home?.courses?.map((item, index) => (
              <Skeleton isLoaded={!isLoading}>
                <LessonCard
                  key={index}
                  image={ONE}
                  title={item?.title}
                  bgColor={"brand.dark"}
                  description={truncateDescription(item?.description)}
                />
              </Skeleton>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </section>
  );
};

export default Courses;

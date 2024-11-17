import {
  Box,
  Text,
  Flex,
  VStack,
  Heading,
  Spinner,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
} from "@chakra-ui/react";
import LessonCard from "./LessonCard";
import ChakraModal from "./ChakraModal";
import SecondaryHero from "./SecondaryHero";
import {
  getCurriculum,
  getHomeResponse,
  RESET_CURRICULUM,
} from "../services/others/otherSlice";
import { ONE } from "../constants/icon";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { useEffect, useState } from "react";
import { Skeleton } from "@chakra-ui/react";
import { useAppSelector } from "../hooks/reactReduxHooks";
import { FaArrowTurnDown } from "react-icons/fa6";

const Courses = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isCurriculumOpen, setIsCurriculumOpen] = useState(false);

  useEffect(() => {
    dispatch(getHomeResponse());
  }, []);

  const fetchCurriculum = async (id: string) => {
    await dispatch(getCurriculum(id));
  };

  const { home, isLoading, curriculum, isCurriculumLoading } = useAppSelector(
    (store) => store.other
  );

  const truncateDescription = (description) => {
    const maxLength = 110;
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };

  const resetCurriculum = () => {
    dispatch(RESET_CURRICULUM());
  };

  return (
    <section>
      <SecondaryHero
        title="CLASSCONNECTS courses Are For Everyone"
        description="At ClassConnects, we offer a diverse range of programs designed to equip you with the skills needed to excel in the tech industry. Whether you’re a beginner eager to learn the basics or an experienced professional looking to advance your knowledge, our programs cater to all skill levels."
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
            fontWeight={{ base: 300, md: 500 }}
            color={"brand.text"}
            textAlign={`center`}
            paddingBottom={`10px`}
            w={{ base: "90%", md: "650px" }}
            fontSize={{ base: "16px", md: "20px" }}
          >
            Welcome to our courses page! We take you from beginner to advanced
            levels with a curriculum designed to be comprehensive yet
            accessible. Our Courses are perfect for those just starting out,
            providing clear and easy-to-follow lessons. As you progress, you'll
            delve into more advanced topics, ensuring a thorough understanding
            of the subject. Join us and transform your skills and knowledge in
            the tech world.
          </Text>
        </Box>
        <Box mb={10}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="12">
            {home?.courses?.map((item, index) => (
              <Skeleton key={index} isLoaded={!isLoading}>
                <LessonCard
                  image={ONE}
                  title={item?.title}
                  bgColor={"brand.dark"}
                  CTA="Read more"
                  onClick={() => {
                    resetCurriculum();
                    fetchCurriculum(item?.id);
                    setIsCurriculumOpen(true);
                  }}
                  description={truncateDescription(item?.description)}
                />
              </Skeleton>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
      <ChakraModal
        size="xl"
        isOpen={isCurriculumOpen}
        onClose={() => setIsCurriculumOpen(false)}
      >
        <Flex
          bg={"white"}
          color={"#023248"}
          flexDirection={"column"}
          borderRadius={"12px"}
          padding={10}
        >
          {isCurriculumLoading ? (
            <Spinner size={"lg"} color="black" />
          ) : !curriculum?.data ? (
            <Text
              fontSize="lg"
              color={"#023248"}
              textAlign="center"
              mt={6}
              fontWeight="bold"
            >
              😞 Curriculum isn’t available for this program yet, check again
              later.
            </Text>
          ) : (
            <>
              <Heading size="lg" color={"#023248"} mb={4}>
                {curriculum?.data?.title}
              </Heading>
              <Text fontSize="md" color={"#023248"} mb={6}>
                {curriculum?.data?.description}
              </Text>
              <Text fontSize="md" fontWeight="semibold" color={"#023248"}>
                Age Bracket:{" "}
                {!curriculum?.data?.ageBracket
                  ? "All ages"
                  : curriculum?.data?.ageBracket.replace(/\s+/g, "")}{" "}
                {curriculum?.data?.ageBracket && "years old"}
              </Text>
              <Text fontSize="md" fontWeight="semibold" color={"#023248"}>
                Duration: {curriculum?.data?.duration.toLowerCase()}
              </Text>

              <Text
                display="flex"
                alignItems={"center"}
                fontSize="md"
                gap={2}
                fontWeight="semibold"
                color={"#023248"}
                mb={6}
              >
                Curriculum: <FaArrowTurnDown />
              </Text>

              <Flex color="white" justify={"space-between"}>
                <Accordion allowToggle w={"full"} defaultIndex={[]}>
                  {curriculum?.data?.curriculum
                    ?.filter(
                      (levelItems) =>
                        Array.isArray(levelItems) &&
                        levelItems.some(
                          (topicItem) =>
                            topicItem?.content && topicItem.content.length > 0
                        )
                    )
                    .map((levelItems, levelIndex) => (
                      <AccordionItem key={levelIndex} border="none" mb="2px">
                        <h2>
                          <AccordionButton
                            h="50px"
                            borderRadius="8px"
                            _hover={{ bg: "#37474f" }}
                            bg="#37474F"
                          >
                            <Box as="span" flex="1" textAlign="left">
                              {levelItems[0]?.level ||
                                `Level ${levelIndex + 1}`}
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>

                        <AccordionPanel pb={4}>
                          <Accordion allowMultiple>
                            {Array.isArray(levelItems) &&
                              levelItems
                                .filter(
                                  (topicItem) =>
                                    topicItem?.content &&
                                    topicItem.content.length > 0
                                )
                                .map((topicItem, topicIndex) => (
                                  <AccordionItem
                                    key={topicIndex}
                                    border="none"
                                    mb="4px"
                                    _last={{ mb: 0 }}
                                  >
                                    <AccordionButton
                                      h="45px"
                                      borderRadius="6px"
                                      _hover={{ bg: "#2b3b46" }}
                                      bg="#2A3A45"
                                      _expanded={{
                                        bg: "#1f2a33",
                                        color: "white",
                                      }}
                                    >
                                      <Box
                                        flex="1"
                                        textAlign="left"
                                        color="white"
                                        fontWeight="medium"
                                      >
                                        {topicItem?.topic?.replace(":", "")}
                                      </Box>
                                      <AccordionIcon />
                                    </AccordionButton>

                                    <AccordionPanel
                                      pb={2}
                                      bg="#2A3A45"
                                      borderRadius="6px"
                                      mt="8px"
                                      boxShadow="md"
                                    >
                                      {Array.isArray(topicItem?.content) &&
                                      topicItem?.content.length > 0 ? (
                                        topicItem.content.map(
                                          (
                                            contentItem: string,
                                            contentIndex: number
                                          ) => {
                                            const contentArray =
                                              contentItem.includes(",")
                                                ? contentItem.split(",")
                                                : [contentItem];

                                            return contentArray.map(
                                              (item: string, index: number) => (
                                                <Text
                                                  key={`${contentIndex}-${index}`}
                                                  mb={2}
                                                  fontSize="sm"
                                                  color="gray.300"
                                                >
                                                  • {item.trim()}
                                                </Text>
                                              )
                                            );
                                          }
                                        )
                                      ) : (
                                        <Text color="gray.500">
                                          No content available
                                        </Text>
                                      )}
                                    </AccordionPanel>
                                  </AccordionItem>
                                ))}
                          </Accordion>
                        </AccordionPanel>
                      </AccordionItem>
                    ))}
                </Accordion>
              </Flex>
            </>
          )}
        </Flex>
      </ChakraModal>
    </section>
  );
};

export default Courses;

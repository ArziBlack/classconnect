import { useAppSelector } from "../../../../hooks/reactReduxHooks";
import { CourseCard } from "./CourseCard";
import { SimpleGrid, Skeleton, Box, Text } from "@chakra-ui/react";

export const Started = () => {
  const { myCoursesRes, isLoading } = useAppSelector((state) => state.student);

  return (
    <Box className="text-white">
      {myCoursesRes ? (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} color="#ffffff">
          {myCoursesRes?.message?.map((item, idx) => (
            <Skeleton borderRadius={"md"} isLoaded={!isLoading} key={idx}>
              <CourseCard
                title={item.title}
                description={item.description}
                difficulty="Beginner"
                lessons="3 months"
                link={item?.courseId}
              />
            </Skeleton>
          ))}
        </SimpleGrid>
      ) : (
        <Box p={8}>
          <Text fontWeight="bold">Your ongoing courses will appear here.</Text>
        </Box>
      )}
    </Box>
  );
};

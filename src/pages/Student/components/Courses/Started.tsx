import { useAppSelector } from "../../../../hooks/reactReduxHooks";
import { CourseCard } from "./CourseCard";
import { SimpleGrid, Skeleton } from "@chakra-ui/react";

export const Started = () => {
  const { myCoursesRes, isLoading } = useAppSelector((state) => state.student);
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} color="#ffffff">
      {myCoursesRes?.message?.map((item, idx) => (
        <Skeleton borderRadius={20} isLoaded={!isLoading} key={idx}>
          <CourseCard
            title={item.title}
            description={item.description}
            difficulty="Beginner"
            lessons="5 Lessons"
          />
        </Skeleton>
      ))
      }
    </SimpleGrid>
  );
};

import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import { CourseCard } from "./CourseCard";
import { useAppSelector } from "../../../../hooks/reactReduxHooks";

export const Browse = () => {
  const { allCoursesResponse, isLoading } = useAppSelector(
    (state) => state.student
  );
  console.log(allCoursesResponse);

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} color="#ffffff">
      {allCoursesResponse && allCoursesResponse?.message?.map((item, idx) => (
        <Skeleton borderRadius={"md"} isLoaded={!isLoading} key={idx}>
          <CourseCard
            title={item.title}
            description={item.description}
            difficulty="Beginner"
            lessons="5 Lessons"
            link={item?.courseId}
          />
        </Skeleton>
      ))}
    </SimpleGrid>
  );
};

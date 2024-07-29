import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { CourseCard } from "./CourseCard";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reactReduxHooks";
import Refresh from "../../../../components/Refresh";
import useCustomToast from "../../../../hooks/useCustomToast";
import { getAllCourses } from "../../../../services/student/studentThunks";

export const Browse = () => {
  const toast = useCustomToast();
  const dispatch = useAppDispatch();
  const { allCoursesResponse, isLoading } = useAppSelector(
    (state) => state.student
  );

  const handleRefresh = async () => {
    const response = await dispatch(getAllCourses());
    if (getAllCourses.fulfilled.match(response)) {
      toast("Refreshed", "info");
    } else if (getAllCourses.rejected.match(response)) {
      toast(response?.payload, "warning");
    }
  }

  return (
    <Box>
      <Refresh handleRefresh={handleRefresh}/>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} color="#ffffff">
        {allCoursesResponse &&
          allCoursesResponse?.message?.map((item, idx) => (
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
    </Box>
  );
};

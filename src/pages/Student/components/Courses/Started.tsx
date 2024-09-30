import Refresh from "../../../../components/Refresh";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/reactReduxHooks";
import useCustomToast from "../../../../hooks/useCustomToast";
import { getMyCourses } from "../../../../services/student/studentThunks";
import { CourseCard } from "./CourseCard";
import { SimpleGrid, Skeleton, Box, Text } from "@chakra-ui/react";

export const Started = () => {
  const toast = useCustomToast();
  const dispatch = useAppDispatch();
  const { myCoursesRes, isLoading } = useAppSelector((state) => state.student);

  const handleRefresh = async () => {
    const response = await dispatch(getMyCourses());
    if (getMyCourses.fulfilled.match(response)) {
      toast("Refreshed", "info");
    } else if (getMyCourses.rejected.match(response)) {
      toast(response?.payload, "warning");
    }
  };

  return (
    <Box className="text-white" ml={{ base: 5, md: 0 }}>
      <Refresh handleRefresh={handleRefresh} />
      {myCoursesRes ? (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} color="#ffffff">
          {myCoursesRes?.message?.map((item, idx) => (
            <Skeleton borderRadius={"md"} isLoaded={!isLoading} key={idx}>
              <CourseCard
                title={item.title}
                ageBracket={item.ageBracket}
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

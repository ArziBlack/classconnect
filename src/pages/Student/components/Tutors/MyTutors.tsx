import { useEffect } from "react";
import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { TutorCard } from "./TutorCard";
import { getMyTutors } from "../../../../services/student/studentThunks";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reactReduxHooks";

export const MyTutors = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMyTutors());
  }, [dispatch])
  
  const { myTutors, isLoading } = useAppSelector(state => state.student);
  return (
    <Box className="text-white ">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} color="#ffffff">
        {myTutors?.data?.map((tutor, index) => (
          <Skeleton borderRadius={20} isLoaded={isLoading}>
            <TutorCard
              key={index}
              name={tutor?.name}
              bio={tutor?.introduction}
              course={tutor?.specialization}
              gender={tutor?.sex}
              imageUrl={tutor?.profileImage}
            />
          </Skeleton>
        ))}
      </SimpleGrid>
    </Box>
  );
};

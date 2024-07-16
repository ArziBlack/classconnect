import { useEffect } from "react";
import { Box, SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import { TutorCard } from "./TutorCard";
import { getMyTutors } from "../../../../services/student/studentThunks";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/reactReduxHooks";
import { IMyTutor } from "../../../../typings/student";

export const MyStudents = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMyTutors());
  }, [dispatch]);

  const { myTutors, isLoading } = useAppSelector((state) => state.student);
  return (
    <Box className="text-white" textAlign="center">
      {myTutors?.data?.length ? (
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} color="#ffffff">
          {myTutors.data.map((tutor: IMyTutor, index: number) => (
            <Skeleton key={index} borderRadius={"md"} isLoaded={!isLoading}>
              <TutorCard
                name={tutor?.name}
                bio={tutor?.introduction}
                course={tutor?.specialization}
                gender={tutor?.sex}
                imageUrl={tutor?.profileImage}
                link={tutor?.name.split(" ")[0]}
              />
            </Skeleton>
          ))}
        </SimpleGrid>
      ) : (
        <Box p={8}>
          <Text fontWeight="bold">You are yet to be assigned a student.</Text>
        </Box>
      )}
    </Box>
  );
};
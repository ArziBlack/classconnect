import { useEffect } from "react";
import { TutorCard } from "./TutorCard";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/reactReduxHooks";
import Refresh from "../../../../components/Refresh";
import { IMyTutor } from "../../../../typings/student";
import useCustomToast from "../../../../hooks/useCustomToast";
import { Box, SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import { getMyTutors } from "../../../../services/student/studentThunks";

export const MyTutors = () => {
  const dispatch = useAppDispatch();
  const toast = useCustomToast();
  const { myTutors, isLoading } = useAppSelector((state) => state.student);
  useEffect(() => {
    !myTutors && dispatch(getMyTutors());
  }, [dispatch]);

  const handleRefresh = async () => {
    const response = await dispatch(getMyTutors());
    if (getMyTutors.fulfilled.match(response)) {
      toast("Refreshed", "info");
    } else if (getMyTutors.rejected.match(response)) {
      toast(response?.payload, "warning");
    }
  };

  return (
    <Box className="text-white" >
      <Refresh handleRefresh={handleRefresh} />
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
                link={tutor?.id}
              />
            </Skeleton>
          ))}
        </SimpleGrid>
      ) : (
        <Box p={8}>
          <Text fontWeight="bold">You are yet to be assigned a tutor.</Text>
        </Box>
      )}
    </Box>
  );
};

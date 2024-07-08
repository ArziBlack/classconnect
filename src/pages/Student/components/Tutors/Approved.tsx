import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { TutorCard } from "./TutorCard";
import { useAppSelector } from "../../../../hooks/reactReduxHooks";
import { IMyTutor } from "../../../../typings/student";

export const Approved = () => {
  const { approvedTutors, isLoading } = useAppSelector(
    (state) => state.student
  );

  return (
    <Box className="text-white ">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} color="#ffffff">
        {approvedTutors?.data?.map((tutor: IMyTutor, index: number) => (
          <Skeleton borderRadius={"md"} isLoaded={!isLoading}>
            <TutorCard
              key={index}
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
    </Box>
  );
};

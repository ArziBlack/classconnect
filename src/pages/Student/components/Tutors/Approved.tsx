import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { TutorCard } from "./TutorCard";
import { useAppSelector } from "../../../../hooks/reactReduxHooks";

export const Approved = () => {
  const { approvedTutors, isLoading } = useAppSelector(
    (state) => state.student
  );
  const { data } = approvedTutors;
  return (
    <Box className="text-white ">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} color="#ffffff">
        {data?.map((tutor, index) => (
          <Skeleton borderRadius={20} isLoaded={!isLoading}>
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

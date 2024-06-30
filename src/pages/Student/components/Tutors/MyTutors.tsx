import { Box, SimpleGrid } from "@chakra-ui/react";
import { TutorCard } from "./TutorCard";
import { useAppSelector } from "../../../../hooks/reactReduxHooks";

export const MyTutors = () => {
  const { myTutors } = useAppSelector(state => state.student);
  return (
    <Box className="text-white ">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} color="#ffffff">
        {myTutors?.data?.map((tutor, index) => (
          <TutorCard
            key={index}
            name={tutor?.name}
            bio={tutor?.introduction}
            course={tutor?.specialization}
            gender={tutor?.sex}
            imageUrl={tutor?.profileImage}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

import { useState, useEffect } from "react";
import { Box, SimpleGrid, Skeleton, Select, Text } from "@chakra-ui/react";
import { TutorCard } from "./TutorCard";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/reactReduxHooks";
import { IMyTutor } from "../../../../typings/student";
import { getHomeResponse } from "../../../../services/others/otherSlice";

export const Approved = () => {
  const { approvedTutors, isLoading } = useAppSelector(
    (state) => state.student
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getHomeResponse());
  }, []);
  const { home } = useAppSelector((dat) => dat.other);

  const [selectedSpecialization, setSelectedSpecialization] = useState("");

  const handleSpecializationChange = (event) => {
    setSelectedSpecialization(event.target.value);
  };

  const filteredTutors = approvedTutors?.data?.filter((tutor: IMyTutor) =>
    selectedSpecialization
      ? tutor.specialization === selectedSpecialization
      : true
  );

  console.log(home);

  return (
    <Box className="text-white">
      <Select
        placeholder="View all"
        onChange={handleSpecializationChange}
        value={selectedSpecialization}
        mb={4}
      >
        {home?.courses?.map((course) => (
          <option key={course?.title} value={course?.title.toString()?.trim()}>
            {course?.title}
          </option>
        ))}
      </Select>

      <Text mb={4} fontSize="lg">
        Available Tutors:
      </Text>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} color="#ffffff">
        {filteredTutors?.map((tutor: IMyTutor, index: number) => (
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
    </Box>
  );
};

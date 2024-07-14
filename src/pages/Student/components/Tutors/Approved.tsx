import { useState } from "react";
import { Box, SimpleGrid, Skeleton, Text, Flex } from "@chakra-ui/react";
import { TutorCard } from "./TutorCard";
import { useAppSelector } from "../../../../hooks/reactReduxHooks";
import { IMyTutor } from "../../../../typings/student";
import Button from "../../../../components/Button";
import { IoFilter } from "react-icons/io5";

export const Approved = () => {
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   !home && dispatch(getHomeResponse());
  // }, []);
  // const { home } = useAppSelector((dat) => dat.other);

  const { approvedTutors, isLoading } = useAppSelector(
    (state) => state.student
  );

  const home = {
    courses: [
      { title: "FRONTEND DEVELOPEMENT" },
      { title: "BACKEND DEVELOPEMENT" },
      { title: "CLOUD ENGINEERING" },
    ],
  };

  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSpecializationChange = (specialization) => {
    setSelectedSpecialization(specialization);
    setShowDropdown(false); // Close the dropdown
  };

  const filteredTutors = approvedTutors?.data?.filter((tutor: IMyTutor) =>
    selectedSpecialization
      ? tutor.specialization === selectedSpecialization
      : true
  );

  return (
    <Box className="text-white">
      <Flex justify={"space-between"} align={"center"} mb={4}>
        <Text fontSize="md" textTransform="capitalize">
          {selectedSpecialization
            ? `Available Tutors: ${selectedSpecialization.toLowerCase()}`
            : "Available Tutors:"}
        </Text>
        <Flex gap={4} align={"center"} position="relative">
          <IoFilter
            aria-label="Filter Tutors"
            onClick={() => setShowDropdown(!showDropdown)}
            cursor="pointer"
          />
          {showDropdown && (
            <Flex
              direction="column"
              position="absolute"
              top="100%"
              right={0}
              bg="rgba(0, 0, 0, 0.5)"
              color="white"
              backdropFilter="blur(10px)"
              borderRadius="md"
              mt={2}
              zIndex={1}
            >
              {home?.courses?.map((course) => (
                <Box
                  key={course?.title}
                  fontSize={"sm"}
                  py={2}
                  px={4}
                  borderRadius="md"
                  _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
                  cursor="pointer"
                  onClick={() => handleSpecializationChange(course?.title)}
                >
                  {course?.title}
                </Box>
              ))}
            </Flex>
          )}
          <Button text="Recommend a tutor" />
        </Flex>
      </Flex>

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

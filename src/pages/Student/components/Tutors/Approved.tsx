import { useState } from "react";
import { Box, SimpleGrid, Skeleton, Text, Flex } from "@chakra-ui/react";
import { TutorCard } from "./TutorCard";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/reactReduxHooks";
import { IMyTutor } from "../../../../typings/student";
import Button from "../../../../components/Button";
import { IoFilter, IoRefreshCircleOutline } from "react-icons/io5";
import { getApprovedTutors, requestRecommendation } from "../../../../services/student/studentThunks";
import useCustomToast from "../../../../hooks/useCustomToast";
import { toObject } from "../../../../utils/utility";

export const Approved = () => {
  const toast = useCustomToast();
  const dispatch = useAppDispatch();
  const {
    approvedTutors,
    isLoading,
    recommendLoading,
    error,
    recommendResponse,
  } = useAppSelector((state) => state.student);
  const titles = JSON.parse(sessionStorage.getItem("courseTitles"));
  const courseTitles = toObject(titles);

  console.log(recommendResponse);

  const handleRecommendation = async () => {
    const result = await dispatch(requestRecommendation());
    if (result.meta.requestStatus === "fulfilled") {
      toast(recommendResponse?.message, "success");
    } else if (result.meta.requestStatus === "rejected") {
      toast(error?.message, "error");
    }
  };

  console.log(courseTitles);

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

  const handleRefresh = async () => {
    const response = await dispatch(getApprovedTutors());
    if (getApprovedTutors.fulfilled.match(response)) {
      toast("Refreshed", "info");
    } else if (getApprovedTutors.rejected.match(response)) {
      toast(response?.payload, "warning");
    }
  }

  return (
    <Box className="text-white">
      <Flex justify={"space-between"} align={"center"} mb={4}>
        <div className="flex items-center">
          <Text fontSize="md" textTransform="capitalize">
            {selectedSpecialization
              ? `Available Tutors: ${selectedSpecialization.toLowerCase()}`
              : "Available Tutors:"}
          </Text>
          <Box ml={`15px`} className="">
            <button className="h-10 w-14 rounded-full bg-white flex items-center justify-center hover:rotate-180 hover:scale-105 hover:bg-gray-200/25 mr-2" onClick={handleRefresh}>
              <IoRefreshCircleOutline size={25} color="black" className="" />
            </button>
          </Box>
        </div>

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
              {titles?.map((course) => (
                <Box
                  key={course}
                  fontSize={"sm"}
                  py={2}
                  px={4}
                  borderRadius="md"
                  _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
                  cursor="pointer"
                  onClick={() => handleSpecializationChange(course)}
                >
                  {course}
                </Box>
              ))}
            </Flex>
          )}
          <Button
            text="Get Recommendation"
            onClick={handleRecommendation}
            isLoading={recommendLoading}
          />
        </Flex>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} color="#ffffff">
        {approvedTutors &&
          filteredTutors?.map((tutor: IMyTutor, index: number) => (
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
    </Box>
  );
};

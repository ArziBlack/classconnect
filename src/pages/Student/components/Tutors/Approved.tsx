import { useState } from "react";
import {
  Box,
  SimpleGrid,
  Skeleton,
  Text,
  Flex,
  CircularProgress,
  Button as CButton,
} from "@chakra-ui/react";
import { TutorCard } from "./TutorCard";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/reactReduxHooks";
import { IMyTutor, IRecommendationResponse } from "../../../../typings/student";
import Button from "../../../../components/Button";
import { IoFilter, IoRefreshCircleOutline } from "react-icons/io5";
import {
  getApprovedTutors,
  requestRecommendation,
} from "../../../../services/student/studentThunks";
import useCustomToast from "../../../../hooks/useCustomToast";
import ChakraModal from "../../../../components/ChakraModal";

export const Approved = () => {
  const toast = useCustomToast();
  const dispatch = useAppDispatch();
  const [confirmation, setConfirmation] = useState(false);
  const [showError, setShowError] = useState<string | null>(null);

  const { approvedTutors, isLoading, recommendLoading, recommendResponse } =
    useAppSelector((state) => state.student);
  const titles = JSON.parse(sessionStorage.getItem("courseTitles"));

  const handleRecommendation = async () => {
    const result = await dispatch(requestRecommendation());
    if (result.meta.requestStatus === "fulfilled") {
      setConfirmation(false);
      toast(recommendResponse?.message, "success");
    } else if (result.meta.requestStatus === "rejected") {
      setShowError(
        (result.payload as IRecommendationResponse)?.message as string
      );
      setConfirmation(false);
      toast(result.payload, "error");
    }
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

  const handleRefresh = async () => {
    const response = await dispatch(getApprovedTutors());
    if (getApprovedTutors.fulfilled.match(response)) {
      toast("Refreshed", "info");
    } else if (getApprovedTutors.rejected.match(response)) {
      toast(response?.payload, "warning");
    }
  };

  return (
    <Box className="text-white" mx={{ base: 5, md: 0 }} minH={"70dvh"}>
      <Flex justify={"space-between"} align={"center"} mb={4}>
        <div className="flex items-center">
          <Text
            fontSize={{ base: "sm", md: "md" }}
            textTransform="capitalize"
            display={{ base: "none", md: "flex" }}
          >
            {selectedSpecialization
              ? `Available Tutors: ${selectedSpecialization.toLowerCase()}`
              : "Available Tutors:"}
          </Text>
          <Box ml={`15px`} className="">
            <button
              className="h-10 w-14 rounded-full bg-white hidden items-center justify-center hover:rotate-180 hover:scale-105 hover:bg-gray-200/25 mr-2 md:flex"
              onClick={handleRefresh}
            >
              <IoRefreshCircleOutline size={25} color="black" className="" />
            </button>
          </Box>
        </div>

        <Flex
          gap={4}
          align={"center"}
          position="relative"
          fontSize={{ base: "sm", md: "md" }}
        >
          <Flex
            aria-label="Filter Tutors"
            onClick={() => setShowDropdown(!showDropdown)}
            cursor="pointer"
            flexWrap={"nowrap"}
            align={"center"}
            gap={2}
          >
            Sort by
            <IoFilter />
          </Flex>
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
              zIndex={10000}
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
            p={{ base: "15px 15px", md: "20px 20px" }}
            fontSize={{ base: "sm", md: "md" }}
            text="Get Recommendation"
            onClick={() => setConfirmation(true)}
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

      <ChakraModal isOpen={confirmation} onClose={() => setConfirmation(false)}>
        <Flex
          bg={"#023248"}
          flexDirection={"column"}
          borderRadius={"12px"}
          padding={10}
        >
          {recommendLoading ? (
            <CircularProgress />
          ) : (
            <>
              <Text color={"white"}>
                {showError
                  ? showError
                  : "Are you sure about a tutor recommendation?"}
              </Text>
              <Flex gap={8} justify={"center"} mt={4}>
                {showError ? (
                  <CButton onClick={() => setConfirmation(false)}>Ok</CButton>
                ) : (
                  <>
                    <CButton onClick={handleRecommendation}>Yes</CButton>
                    <CButton onClick={() => setConfirmation(false)}>No</CButton>
                  </>
                )}
              </Flex>
            </>
          )}
        </Flex>
      </ChakraModal>
    </Box>
  );
};

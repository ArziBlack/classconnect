import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Flex,
  HStack,
  Input,
  keyframes,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reactReduxHooks";
import { IResponse } from "../../../services/auth/authSlice";
import { UpdateTutorProfile } from "../../../services/tutor/tutorThunk";
import useCustomToast from "../../../hooks/useCustomToast";

const fadeAnimation = keyframes`
  0% { opacity: 0.2; }
  50% { opacity: 0.9; }
  100% { opacity: 0.2; }
`;

const Profile = () => {
  const dispatch = useAppDispatch();
  const toast = useCustomToast();
  const { data } = useAppSelector(state => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    first_name: data?.first_name,
    lastName: data?.last_name,
    email: data?.email,
    mobile: data?.phoneNum,
    dob: "Unknown",
    sex: "Unknown",
    state: "Unknown",
    student_count: data?.student_count,
    class_type: data?.class_type,
  });
  const { first_name, lastName, mobile } = profile;

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    if (isEditing === true) {
      handleSave();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const tutor: IResponse = JSON.parse(localStorage.getItem("tutor"));

  const handleSave = async() => {
    const update = {
      first_name,
      last_name: lastName,
      phoneNum: mobile
    }
    const response = await dispatch(UpdateTutorProfile({ update }));
    if (UpdateTutorProfile.fulfilled.match(response)) 
    {
      toast("Profile Updated Successfully", "success");
      const updated = { ...tutor, first_name, last_name: lastName, phoneNum: mobile }
      localStorage.setItem("user", JSON.stringify(updated));
    }
    else
    {
      toast("Error Updating Profile", "error");
    }
  }

  const sharedStyles = {
    fontSize: "md",
    fontWeight: 200,
    flexBasis: "30%",
  };

  return (
    <Box
      color="white"
      w="100%"
      maxW="1200px"
      borderRadius="lg"
      boxShadow="md"
      p={6}
      fontFamily="Inter"
      h="calc(100vh - 80px)"
    >
      <Flex direction={{ base: "column", md: "row" }} gap={6} h="full">
        <Box
          p={6}
          w={{ base: "100%", md: "35%" }}
          textAlign="center"
          borderWidth="1px"
          borderRadius="lg"
          borderColor="gray"
        >
          <Avatar
            size="2xl"
            name="John Michael Drake"
            src="/path/to/image.jpg"
          />
          <Text fontSize="2xl" fontWeight="bold" mt={4}>
            {data?.first_name}{" "}{data?.last_name}
          </Text>
          <Text fontSize="md" fontWeight={200} mt={2}>
            {data?.greeting}...
          </Text>
          <VStack spacing={4} mt={6}>
            <HStack>
              <Badge colorScheme="teal">Design</Badge>
              <Badge colorScheme="teal">Communication</Badge>
              <Badge colorScheme="teal">Research</Badge>
            </HStack>
            <HStack>
              <Badge colorScheme="blue">UI/UX Design</Badge>
              <Badge colorScheme="blue">Graphics Design</Badge>
            </HStack>
          </VStack>
        </Box>
        <Flex
          flexDir="column"
          justify="space-between"
          w={{ base: "100%", md: "65%" }}
          h="full"
        >
          <Box
            borderWidth="1px"
            borderRadius="lg"
            bg="#023248"
            py={4}
            mb={6}
            borderColor="gray"
          >
            <Flex borderBottom="1px solid #5E7079" mb={4}>
              <Flex justify="space-between" w="full" px={4}>
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                  My profile
                </Text>

                <Text
                  cursor={"pointer"}
                  onClick={handleEditClick}
                  className="text-right text-[#00ff84]"
                >
                  {isEditing ? "Save" : "Edit"}
                </Text>
              </Flex>
            </Flex>
            <Flex
              gap={6}
              align="start"
              wordBreak="keep-all"
              flexWrap="wrap"
              px={4}
            >
              {Object.entries(profile).map(([key, value]) => (
                <Box key={key} sx={sharedStyles}>
                  {key.charAt(0).toUpperCase() +
                    key.slice(1).replace(/([A-Z])/g, " $1")}
                  :{" "}
                  {isEditing ? (
                    <Input
                      name={key}
                      value={value}
                      onChange={handleChange}
                      fontWeight={500}
                      fontSize="md"
                      _focusVisible={"none"}
                      animation={
                        isEditing ? `${fadeAnimation} 2s infinite` : "none"
                      }
                      opacity={0.7}
                      p="0"
                      m="0"
                      my={-2}
                      border="none"
                      transition="all 0.2s ease-in-out"
                      _focus={{ outline: "none" }}
                    />
                  ) : (
                    <Text
                      fontWeight={500}
                      transition="opacity 0.2s ease-in-out"
                    >
                      {value}
                    </Text>
                  )}
                </Box>
              ))}
            </Flex>
          </Box>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            py={4}
            borderColor="gray"
            bg="#023248"
          >
            <Flex borderBottom="1px solid #5E7079" mb={4}>
              <Flex justify="space-between" w="full" px={4}>
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                  Cover letter
                </Text>
              </Flex>
            </Flex>
            <Text px={4} fontWeight={200}>
              I am a UI/UX Designer with over 3 years of experience, blending
              technical expertise with a keen eye for design. My background
              includes a B.Sc in Computer Science, which provides a solid
              foundation in both the creative and technical aspects of design.
              Technical expertise with a keen eye for design. My background
              includes a B.Sc in Computer Science, which provides a solid
              foundation in both the creative and technical aspects of design.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Profile;

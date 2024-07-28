import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Flex,
  HStack,
  Input,
  Text,
  VStack,
  Img,
  CircularProgress
} from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "../../../hooks/reactReduxHooks";
import { IResponse, updateAuthData } from "../../../services/auth/authSlice";
import { UpdateTutorProfile, updateTutorProfileImage } from "../../../services/tutor/tutorThunk";
import useCustomToast from "../../../hooks/useCustomToast";
import { CAMERA } from "../../../constants/icon";
import { IProfileImage } from "../../../typings/student";
import { fadeAnimation } from "../../../styles/keyframes";

const Profile = () => {
  const dispatch = useAppDispatch();
  const toast = useCustomToast();
  const { data } = useAppSelector(state => state.auth);
  const {  isLoading } = useAppSelector(state => state.tutor);
  let success = false;
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    first_name: data?.first_name,
    lastName: data?.last_name,
    email: data?.email,
    mobile: data?.phoneNum,
    dob: data?.dateOfBirth,
    sex: data?.sex,
    state: data?.state,
    student_count: data?.student_count,
    class_type: data?.class_type,
  });
  const [profilImage, setProfilImage] = useState(null);
  const [Image, setImage] = useState<File>(null);
  const { first_name, lastName, mobile, sex, state } = profile;

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

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(file);
        setProfilImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const tutor: IResponse = JSON.parse(sessionStorage.getItem("tutor"));

  const handleSave = async () => {
    const update = {
      first_name,
      last_name: lastName,
      phoneNum: mobile,
      sex,
      state
    }
    const response = await dispatch(UpdateTutorProfile({ update }));
    if (UpdateTutorProfile.fulfilled.match(response)) {
      toast("Updated Successfully", "success");
      const updated = { ...tutor, first_name, last_name: lastName, phoneNum: mobile }
      sessionStorage.setItem("tutor", JSON.stringify(updated));
      dispatch(updateAuthData(updated));
    }
    else {
      toast("Error Updating Profile", "error");
    }
  }

  const handleImageSave = async () => {
    const pImage: IProfileImage = {
      profileImage: Image,
    }
    if (success === true) {
      toast("You Cannot Re-Upload your profile now", "error");
      return;
    } 
    const result = await dispatch(updateTutorProfileImage({ pImage }));
    if (updateTutorProfileImage.fulfilled.match(result)) {
      toast("Image Updated Successfully", "success");
      success = true;
    }
    if (updateTutorProfileImage.rejected.match(result)) {
      toast("Error Updating Image", "error");
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
          className="flex flex-col items-center justify-center"
        >
          <Box className="relative w-[200px] h-[200px] rounded-full flex items-center justify-center">
            <Avatar
              size="2xl"
              name="John Michael Drake"
              src={profilImage ||
                data?.profileImage ||
                "https://via.placeholder.com/150"
              }
              h={"165px"}
              w={"165px"}
            />
            {!profilImage ?
              <Img
                src={CAMERA}
                zIndex={5}
                position="absolute"
                bottom="0"
                right="5"
                aria-label="Upload Image"
                onClick={() => document.getElementById("imageUpload").click()}
                cursor={"pointer"}
                w={30}
              /> : <span className="absolute z-5 bottom-0 right-5 cursor-pointer w-12 h-12 rounded-full bg-white flex items-center justify-center" onClick={handleImageSave}>
                {isLoading ? <CircularProgress size={`25px`}/> : <FaUpload color="black" />}
              </span>}
            <Input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </Box>
          <Text fontSize="2xl" fontWeight="bold" mt={4}>
            {data?.first_name}{" "}{data?.last_name} {success? "true" : "false"}
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
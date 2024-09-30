import { useState } from "react";
import {
  Avatar,
  Box,
  HStack,
  Input,
  VStack,
  Img,
  CircularProgress,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "../../../hooks/reactReduxHooks";
import { IResponse, updateAuthData } from "../../../services/auth/authSlice";
import {
  UpdateTutorProfile,
  updateTutorProfileImage,
} from "../../../services/tutor/tutorThunk";
import useCustomToast from "../../../hooks/useCustomToast";
import { CAMERA } from "../../../constants/icon";
import { IProfileImage } from "../../../typings/student";
import CButton from "../../../components/Button";

const Profile = () => {
  const dispatch = useAppDispatch();
  const toast = useCustomToast();
  const { data } = useAppSelector((state) => state.auth);
  const { isLoading } = useAppSelector((state) => state.tutor);
  let success = false;
  const [profile, setProfile] = useState({
    first_name: data?.first_name,
    last_name: data?.last_name,
    email: data?.email,
    mobile: data?.phoneNum,
    dob: data?.dateOfBirth,
    sex: data?.sex,
    state: data?.state,
    student_count: data?.student_count,
    class_type: data?.class_type,
    country: data?.country,
    phoneNum: data?.phoneNum,
  });
  const [profilImage, setProfilImage] = useState(null);
  const [Image, setImage] = useState<File>(null);
  const {
    first_name,
    last_name,
    mobile,
    sex,
    dob,
    state,
    email,
    country,
    class_type,
    phoneNum,
    student_count,
  } = profile;

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
      last_name,
      phoneNum: mobile,
      sex,
      state,
    };
    const response = await dispatch(UpdateTutorProfile({ update }));
    if (UpdateTutorProfile.fulfilled.match(response)) {
      toast("Updated Successfully", "success");
      const updated = { ...tutor, first_name, last_name, phoneNum: mobile };
      sessionStorage.setItem("tutor", JSON.stringify(updated));
      dispatch(updateAuthData(updated));
    } else {
      toast("Error Updating Profile", "error");
    }
  };

  const handleImageSave = async () => {
    const ImageURL = URL.createObjectURL(Image);

    const pImage: IProfileImage = {
      profileImage: Image,
    };
    if (success === true) {
      toast("You Cannot Re-Upload your profile now", "error");
      return;
    }
    const result = await dispatch(updateTutorProfileImage({ pImage }));
    if (updateTutorProfileImage.fulfilled.match(result)) {
      const updated = {
        ...data,
        profileImage: ImageURL,
      };
      sessionStorage.setItem("user", JSON.stringify(updated));
      dispatch(updateAuthData(updated));
      toast("Image Updated Successfully", "success");
      success = true;
    }
    if (updateTutorProfileImage.rejected.match(result)) {
      toast("Error Updating Image", "error");
    }
  };

  const [isSmallerThan900] = useMediaQuery("(max-width: 900px)");

  return (
    <Box className="text-white flex flex-col items-center">
      <VStack spacing={6} w={"full"} maxW={"1080px"}>
        <Box className=" bg-gray-500 h-[250px] w-full relative">
          <Box className="mb-10 bg-[#002333] p-10 w-[200px] h-[200px] rounded-full flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <Box className="relative">
              <Avatar
                src={
                  profilImage ||
                  data?.profileImage ||
                  "https://via.placeholder.com/150"
                }
                h={"165px"}
                w={"165px"}
              />
              {!profilImage ? (
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
                />
              ) : (
                <span
                  className="absolute z-5 bottom-0 right-5 cursor-pointer w-[30px] h-[30px] rounded-full bg-[#3ee478] flex items-center justify-center"
                  onClick={handleImageSave}
                >
                  {isLoading ? (
                    <CircularProgress size={`25px`} />
                  ) : (
                    <FaUpload color="white" />
                  )}
                </span>
              )}
              <Input
                type="file"
                id="imageUpload"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </Box>
          </Box>
        </Box>
        <Box marginTop={"30px"} w={`full`} pl={1}>
          <HStack
            flexDir={isSmallerThan900 ? "column" : "row"}
            gap={5}
            alignItems="center"
            w="full"
          >
            <Box display={`flex`} flexDir={`column`} w="full">
              <label className="block text-sm font-medium text-green-500 mb-2">
                First Name
              </label>
              <Input
                value={first_name}
                onChange={handleChange}
                className="p-2 border border-gray-700 bg-gray-800 text-white"
                height={55}
                width="full"
                display={`flex`}
                name="first_name"
              />
            </Box>
            <Box display={`flex`} flexDir={`column`} w="full">
              <label className="block text-sm font-medium text-green-500 mb-2">
                Last Name
              </label>
              <Input
                value={last_name}
                onChange={handleChange}
                className="p-2 border border-gray-700 bg-gray-800 text-white"
                height={55}
                width="full"
                display={`flex`}
                name="last_name"
              />
            </Box>
          </HStack>
          <HStack
            flexDir={isSmallerThan900 ? "column" : "row"}
            marginTop={`10px`}
            gap={5}
            alignItems="center"
            w="full"
          >
            <Box
              display={`flex`}
              flexDir={`column`}
              w="100%"
              marginRight={`3px`}
            >
              <label className="block text-sm font-medium text-green-500 mb-2">
                Email
              </label>
              <Input
                value={email}
                className="p-2 border border-gray-700 bg-gray-800 text-white"
                height={55}
                width="full"
                display={`flex`}
                disabled
                name="email"
              />
            </Box>
            <Box
              display={`flex`}
              flexDir={`column`}
              w="100%"
              marginRight={`3px`}
            >
              <label className="block text-sm font-medium text-green-500 mb-2">
                Phone
              </label>
              <Input
                value={phoneNum}
                onChange={handleChange}
                className="p-2 border border-gray-700 bg-gray-800 text-white"
                height={55}
                width="full"
                display={`flex`}
                name="phoneNum"
              />
            </Box>
          </HStack>
          <HStack
            marginTop={`10px`}
            gap={5}
            flexDir={isSmallerThan900 ? "column" : "row"}
          >
            <Box
              display={`flex`}
              flexDir={`column`}
              w="100%"
              marginRight={`3px`}
            >
              <label className="block text-sm font-medium text-green-500 mb-2">
                Sex
              </label>
              <Input
                value={sex}
                className="p-2 border border-gray-700 bg-gray-800 text-white"
                height={55}
                width="full"
                display={`flex`}
                onChange={handleChange}
                name="sex"
              />
            </Box>
            <Box
              display={`flex`}
              flexDir={`column`}
              w="100%"
              marginRight={`3px`}
            >
              <label className="block text-sm font-medium text-green-500 mb-2">
                Student count
              </label>
              <Input
                value={student_count}
                onChange={handleChange}
                className="p-2 border border-gray-700 bg-gray-800 text-white"
                height={55}
                width="full"
                display={`flex`}
                name="student_count"
                disabled
              />
            </Box>
          </HStack>
          <HStack
            marginTop={`10px`}
            gap={5}
            flexDir={isSmallerThan900 ? "column" : "row"}
          >
            <Box
              display={`flex`}
              flexDir={`column`}
              w="100%"
              marginRight={`3px`}
            >
              <label className="block text-sm font-medium text-green-500 mb-2">
                Date of Birth
              </label>
              <Input
                value={dob.slice(0, 10)}
                className="p-2 border border-gray-700 bg-gray-800 text-white"
                height={55}
                width="full"
                display={`flex`}
                onChange={handleChange}
                name="dob"
                disabled
              />
            </Box>
            <Box
              display={`flex`}
              flexDir={`column`}
              w="100%"
              marginRight={`3px`}
            >
              <label className="block text-sm font-medium text-green-500 mb-2">
                Class type
              </label>
              <Input
                value={class_type.replace(/_/g, " ")}
                onChange={handleChange}
                className="p-2 border border-gray-700 bg-gray-800 text-white"
                height={55}
                width="full"
                display={`flex`}
                name="class_type"
                textTransform={"capitalize"}
                disabled
              />
            </Box>
          </HStack>
          <HStack marginTop={`10px`} gap={5}>
            <Box
              display={`flex`}
              flexDir={`column`}
              w="100%"
              marginRight={`3px`}
            >
              <label className="block text-sm font-medium text-green-500 mb-2">
                State
              </label>
              <Input
                value={state}
                onChange={handleChange}
                className="p-2 border border-gray-700 bg-gray-800 text-white"
                height={55}
                width="full"
                display={`flex`}
                name="state"
              />
            </Box>
            <Box
              display={`flex`}
              flexDir={`column`}
              w="100%"
              marginRight={`3px`}
            >
              <label className="block text-sm font-medium text-green-500 mb-2">
                Country
              </label>
              <Input
                value={country}
                onChange={handleChange}
                className="p-2 border border-gray-700 bg-gray-800 text-white"
                height={55}
                width="full"
                display={`flex`}
                name="country"
                disabled
              />
            </Box>
          </HStack>
        </Box>
        <CButton
          onClick={handleSave}
          className="bg-green-500 text-white"
          cursor="pointer"
          marginLeft={"auto"}
          text="Save Changes"
          isLoading={isLoading}
        />
      </VStack>
    </Box>
  );
};

export default Profile;

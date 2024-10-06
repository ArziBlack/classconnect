import { useState } from "react";
import {
  Box,
  Img,
  Input,
  Avatar,
  VStack,
  HStack,
  CircularProgress,
} from "@chakra-ui/react";
import { CAMERA } from "../../../../constants/icon";
import CButton from "../../../../components/Button";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/reactReduxHooks";
import {
  updateProfileImage,
  UpdateStudentProfile,
} from "../../../../services/student/studentThunks";
import { IProfileImage, IUpdateStudentData } from "../../../../typings/student";
import { IResponse, updateAuthData } from "../../../../services/auth/authSlice";
import useCustomToast from "../../../../hooks/useCustomToast";
import { FaUpload } from "react-icons/fa6";

export const ProfileDetails = () => {
  let success = false;
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((sam) => sam.auth);
  const { isLoading } = useAppSelector((sam) => sam.student);
  const [first_name, setFirstName] = useState(data?.first_name);
  const [last_name, setLastName] = useState(data?.last_name);
  const [email] = useState(data?.email);
  const [student_phoneNum, setPhone] = useState<number>(
    parseInt(data?.phoneNum)
  );
  const [sex, setSex] = useState(data?.sex);
  const [age, setAge] = useState<number | string>(data?.dateOfBirth);
  const [country, setCountry] = useState<string>(data?.country);
  const [state, setState] = useState<string>(data?.state);
  const [profilImage, setProfilImage] = useState(null);
  const [Image, setImage] = useState<File>(null);
  const toast = useCustomToast();

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

  const user: IResponse = JSON.parse(sessionStorage.getItem("user"));

  const handleSave = async () => {
    const update: IUpdateStudentData = {
      first_name,
      last_name,
      student_phoneNum,
      sex,
      state,
      country,
    };
    const response = await dispatch(UpdateStudentProfile({ update }));
    if (UpdateStudentProfile.fulfilled.match(response)) {
      toast("Updated Successfully", "success");
      const updated = {
        ...user,
        first_name,
        last_name,
        phoneNum: student_phoneNum,
      };
      sessionStorage.setItem("user", JSON.stringify(updated));
      dispatch(updateAuthData(updated));
    } else {
      toast("Error Updating", "success");
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
    const result = await dispatch(updateProfileImage({ pImage }));
    if (updateProfileImage.fulfilled.match(result)) {
      const updated = {
        ...user,
        profileImage: ImageURL,
      };
      sessionStorage.setItem("user", JSON.stringify(updated));
      dispatch(updateAuthData(updated));
      toast("Image Updated Successfully", "success");
      success = true;
    }
    if (updateProfileImage.rejected.match(result)) {
      toast("Error Updating Image", "error");
    }
  };

  return (
    <Box className="text-white flex flex-col items-center">
      <VStack spacing={6} w={"full"} maxW={"1080px"}>
        <Box className=" md:bg-gray-500 h-[250px] w-full relative flex items-center justify-center">
          <Box className="ml-5 sm:ml-0 mb-2 md:mb-10 bg-gray-500 md:bg-[#002333] p-10 w-[200px] h-[200px] rounded-full flex items-center justify-center md:absolute top-[140px] right-[40%] ">
            <Box className="relative">
              <Avatar
                src={
                  profilImage ||
                  data?.profileImage ||
                  "https://via.placeholder.com/150"
                }
                size="2xl"
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
        <Box marginTop={{base: "10px", md:"80px"}} w={`full`}>
          <HStack
            gap={5}
            alignItems="center"
            w="full"
            flexDir={{ base: "column", md: "row" }}
          >
            <Box display={`flex`} flexDir={`column`} w="full">
              <label className="block text-sm font-medium text-green-500 mb-2">
                First Name
              </label>
              <Input
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                className="p-2 border border-gray-700 bg-gray-800 text-white"
                height={{ base: 45, md: 55}}
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
                onChange={(e) => setLastName(e.target.value)}
                className="p-2 border border-gray-700 bg-gray-800 text-white"
                height={{ base: 45, md: 55}}
                width="full"
                display={`flex`}
                name="last_name"
              />
            </Box>
          </HStack>
          <HStack marginTop={`10px`} gap={5} flexDir={{ base: "column", md: "row" }}>
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
                height={{ base: 45, md: 55}}
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
                value={student_phoneNum}
                onChange={(e) => setPhone(Number(e.target.value))}
                className="p-2 border border-gray-700 bg-gray-800 text-white"
                height={{ base: 45, md: 55}}
                width="full"
                display={`flex`}
                name="student_phoneNum"
              />
            </Box>
          </HStack>
          <HStack marginTop={`10px`} gap={5} flexDir={{ base: "column", md: "row" }}>
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
                height={{ base: 45, md: 55}}
                width="full"
                display={`flex`}
                onChange={(e) => setSex(e.target.value)}
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
                Date of Birth
              </label>
              <Input
                value={(age as string).slice(0, 10)}
                onChange={(e) => setAge(Number(e.target.value))}
                className="p-2 border border-gray-700 bg-gray-800 text-white"
                height={{ base: 45, md: 55}}
                width="full"
                display={`flex`}
                name="age"
                disabled
              />
            </Box>
          </HStack>
          <HStack marginTop={`10px`} gap={5} flexDir={{ base: "column", md: "row" }}>
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
                onChange={(e) => setState(e.target.value)}
                className="p-2 border border-gray-700 bg-gray-800 text-white"
                height={{ base: 45, md: 55}}
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
                onChange={(e) => setCountry(e.target.value)}
                className="p-2 border border-gray-700 bg-gray-800 text-white"
                height={55}
                width="full"
                display={`flex`}
                name="country"
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

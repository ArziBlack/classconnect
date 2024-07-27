import { useState } from "react";
import { Box, Img, Input, Avatar, VStack, HStack } from "@chakra-ui/react";
import { CAMERA } from "../../../../constants/icon";
import CButton from "../../../../components/Button";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/reactReduxHooks";
import { updateProfileImage, UpdateStudentProfile } from "../../../../services/student/studentThunks";
import { IUpdateStudentData } from "../../../../typings/student";
import { IResponse, updateAuthData } from "../../../../services/auth/authSlice";
import useCustomToast from "../../../../hooks/useCustomToast";
import { FaUpload } from "react-icons/fa6";

export const ProfileDetails = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((sam) => sam.auth);
  const { isLoading } = useAppSelector((sam) => sam.student);
  const [first_name, setFirstName] = useState(data?.first_name);
  const [last_name, setLastName] = useState(data?.last_name);
  const [email] = useState(data?.email);
  const [student_phoneNum, setPhone] = useState<number>(
    parseInt(data?.phoneNum)
  );
  const [sex, setSex] = useState("");
  const [age, setAge] = useState<number>(null);
  const [country, setCountry] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [profileImage, setProfileImage] = useState(null);
  const toast = useCustomToast();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
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

  const handleImageSave = () => {
    const result = dispatch(updateProfileImage({ profileImage }));
    if (updateProfileImage.fulfilled.match(result)) {
      toast("Image Updated Successfully", "success");
    }
    if (updateProfileImage.rejected.match(result)) {
      toast("Error Updating Image", "error");
    }
  }

  return (
    <Box className="text-white flex flex-col items-center">
      <VStack spacing={6} w={"full"} maxW={"900px"}>
        <Box className=" bg-gray-500 h-[250px] w-full relative">
          <Box className="mb-10 bg-[#002333] p-10 w-[200px] h-[200px] rounded-full flex items-center justify-center absolute top-[140px] right-[40%] ">
            <Box className="relative">
              <Avatar
                src={
                  profileImage ||
                  data?.profileImage ||
                  "https://via.placeholder.com/150"
                }
                size="2xl"
                h={"165px"}
                w={"165px"}
              />
              {!profileImage ?
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
                  <FaUpload color="black" />
                </span>}
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
        <Box marginTop={"80px"} w={`full`}>
          <HStack gap={5} alignItems="center" w="full">
            <Box display={`flex`} flexDir={`column`} w="full">
              <label className="block text-sm font-medium text-green-500 mb-2">
                First Name
              </label>
              <Input
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
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
                onChange={(e) => setLastName(e.target.value)}
                className="p-2 border border-gray-700 bg-gray-800 text-white"
                height={55}
                width="full"
                display={`flex`}
                name="last_name"
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
                Email
              </label>
              <Input
                value={email}
                // onChange={(e) => setLastName(e.target.value)}
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
                value={student_phoneNum}
                onChange={(e) => setPhone(Number(e.target.value))}
                className="p-2 border border-gray-700 bg-gray-800 text-white"
                height={55}
                width="full"
                display={`flex`}
                name="student_phoneNum"
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
                Sex
              </label>
              <Input
                value={sex}
                className="p-2 border border-gray-700 bg-gray-800 text-white"
                height={55}
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
                Age
              </label>
              <Input
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="p-2 border border-gray-700 bg-gray-800 text-white"
                height={55}
                width="full"
                display={`flex`}
                name="age"
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
                onChange={(e) => setState(e.target.value)}
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

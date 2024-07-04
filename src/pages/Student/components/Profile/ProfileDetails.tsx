import { useState } from "react";
import {
  Box,
  Img,
  Input,
  Avatar,
  VStack,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { CAMERA } from "../../../../constants/icon";
import CButton from "../../../../components/Button";
import { useAppSelector } from "../../../../hooks/reactReduxHooks";

export const ProfileDetails = () => {
  const { data } = useAppSelector(sam => sam.auth);
  const [first_name, setFirstName] = useState(data?.first_name);
  const [last_name, setLastName] = useState(data?.last_name);
  const [email, ] = useState(data?.email);
  const [phone, setPhone] = useState<number>(+2349037289192);
  const [profileImage, setProfileImage] = useState(null);
  const toast = useToast();

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

  const handleSave = () => {
    toast({
      title: "Profile updated.",
      description: "Your changes have been saved.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box className="text-white flex flex-col">
      <VStack spacing={6}>
        <Box className=" bg-gray-500 h-[250px] w-full relative">
          <Box className="mb-10 bg-[#002333] p-10 w-[200px] h-[200px] rounded-full flex items-center justify-center absolute top-[140px] right-[40%] ">
            <Box className="relative">
              <Avatar
                src={data?.profileImage || "https://via.placeholder.com/150" || profileImage}
                size="2xl"
                h={"165px"}
                w={"165px"}
              />
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
              />
            </Box>
          </HStack>
          <HStack marginTop={`10px`} gap={5}>
            <Box display={`flex`} flexDir={`column`} w="100%" marginRight={`3px`}>
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
              />
            </Box>
            <Box display={`flex`} flexDir={`column`} w="100%" marginRight={`3px`}>
              <label className="block text-sm font-medium text-green-500 mb-2">
                Phone
              </label>
              <Input
                value={phone}
                onChange={(e) => setPhone(Number(e.target.value))}
                className="p-2 border border-gray-700 bg-gray-800 text-white"
                height={55}
                width="full"
                display={`flex`}
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
        />
      </VStack>
    </Box>
  );
};

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

export const ProfileDetails = () => {
  const [fullName, setFullName] = useState("Favour Ogechi");
  const [profession, setProfession] = useState("Student");
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
                src={profileImage || "https://via.placeholder.com/150"}
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
        <Box marginTop={"80px"}>
          <HStack gap={5} alignItems="center">
            <Box>
              <label className="block text-sm font-medium text-green-500 mb-2">
                Full Name
              </label>
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="p-2 border border-gray-700 bg-gray-800 text-white"
                height={55}
                width="450px"
              />
            </Box>
            <Box>
              <label className="block text-sm font-medium text-green-500 mb-2">
                Profession
              </label>
              <Input
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="p-2 border border-gray-700 bg-gray-800 text-white"
                height={55}
                width="450px"
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

import { useState, useEffect } from "react";
import {
  Box,
  Input,
  useToast,
  Avatar,
  VStack,
  // IconButton,
  HStack,
  Img,
} from "@chakra-ui/react";
import CAMERA from "../../../assets/icons/Camera.svg";

const NavBar = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: "details", label: "Details" },
    { id: "notification", label: "Notification" },
    { id: "tuition", label: "Tuition Fee" },
    { id: "courses", label: "Courses" },
    { id: "invite", label: "Invite a Friend" },
    { id: "tutor", label: "Become a Tutor" },
  ];

  const handleNavigation = (id) => {
    setCurrentPage(id);
    window.history.pushState(null, "", `/profile/${id}`);
  };

  return (
    <nav className="flex justify-around  p-4 text-white">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleNavigation(item.id)}
          className={`${
            currentPage === item.id ? "border-b-2 border-green-500" : ""
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

const ProfileDetails = () => {
  const [fullName, setFullName] = useState("Favour ogechi");
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
    <Box className="p-6 text-white min-h-screen flex flex-col mt-20 items-center">
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
        <Box marginTop={60}>
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
        <Box
          onClick={handleSave}
          className="bg-green-500 text-white"
          cursor="pointer"
          padding="16px"
          borderRadius="5px"
          height="56px"
          marginLeft={800}
        >
          Save Changes
        </Box>
      </VStack>
    </Box>
  );
};

const PlaceholderComponent = ({ title }) => (
  <Box className="text-white p-6 min-h-screen flex items-center justify-center">
    <h1 className="text-2xl">{title} Page</h1>
  </Box>
);

const Profiletab = () => {
  const [currentPage, setCurrentPage] = useState(
    window.location.pathname.split("/")[2] || "details"
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(window.location.pathname.split("/")[2] || "details");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "details":
        return <ProfileDetails />;
      case "notification":
        return <PlaceholderComponent title="Notification" />;
      case "tuition":
        return <PlaceholderComponent title="Tuition Fee" />;
      case "courses":
        return <PlaceholderComponent title="Courses" />;
      case "invite":
        return <PlaceholderComponent title="Invite a Friend" />;
      case "tutor":
        return <PlaceholderComponent title="Become a Tutor" />;
      default:
        return <ProfileDetails />;
    }
  };

  return (
    <Box className="min-h-screen text-white">
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </Box>
  );
};

const Profile = () => {
  return <Profiletab />;
};

export default Profile;

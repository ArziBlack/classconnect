import { FC } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Box, Flex, Image, Input, Text, useMediaQuery } from "@chakra-ui/react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import {
  ASSESSMENT,
  COURSES,
  HOME,
  LOGOUT,
  PROFILE,
  SETTINGS,
  TUTORS,
} from "../../constants/icon";
import { TEMPLATE } from "../../constants/image";

type NavProps = {
  to: string;
  text: string;
  icon: string;
};

const Nav: FC<NavProps> = ({ text, to, icon }) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        textDecoration: "none",
        padding: "10px 1.25rem",
        color: "#fffff",
        opacity: isActive ? "1" : "0.8",
        background: isActive ? "#254F62" : "transparent",
        borderRadius: "15px",
      })}
      end
    >
      {({ isActive }) => (
        <Flex
          gap={"1rem"}
          cursor={"pointer"}
          alignItems={"center"}
          fontFamily={"Metropolis"}
        >
          <Flex
            w={"35px"}
            h={"35px"}
            borderRadius={"50px"}
            alignItems={"center"}
            justifyContent={"center"}
            // color={isActive ? "#ffffff" : "white"}
            color={"white"}
            bgColor={"white"}
            border={isActive ? "none" : "1px solid brand.text"}
          >
            <Image src={icon} />
          </Flex>
          <Text
            fontSize={"16px"}
            fontWeight={isActive ? "400" : "400"}
            color={isActive ? "#ffffff" : "white"}
          >
            {text}
          </Text>
        </Flex>
      )}
    </NavLink>
  );
};

const SideBarNav: FC = () => {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      flexDir={"column"}
      padding="10px 1.25rem"
      pt={"3rem"}
      position={"sticky"}
      top={0}
      backgroundColor={"#023248"}
      justifyContent={"space-between"}
    >
      <Flex
        w={"full"}
        //   gap={"1rem"}
        // bgColor={"brand.dark"}
        flexDirection={"column"}
      >
        <Nav text="Home" to="/student" icon={HOME} />
        <Nav text="Tutors" to="tutors" icon={TUTORS} />
        <Nav text="My Courses" to="my-courses" icon={COURSES} />
        <Nav text="Profile" to="profile" icon={PROFILE} />
        <Nav text="Assessment" to="assessment" icon={ASSESSMENT} />
        <Nav text="Billing" to="billing" icon={SETTINGS} />
      </Flex>
      <Flex>
        <Nav text="Log out" to="/" icon={LOGOUT} />
      </Flex>
    </Flex>
  );
};

type MainViewProps = {
  mainText: string;
  subText?: string;
};

const MainView: FC<MainViewProps> = ({ mainText, subText }) => {
  const [isSmallerThan900] = useMediaQuery("(max-width: 900px)");

  return (
    <Flex w={"full"} h={"100%"} position={"relative"} flexDirection={"column"}>
      <Flex
        mt={4}
        w={"full"}
        alignItems={"center"}
        pb={"20px"}
        pr={"20px"}
        justifyContent={"space-between"}
      >
        <Flex
          right={4}
          h={"45px"}
          color={"white"}
          width={"400px"}
          paddingLeft={"10px"}
          borderRadius={"8px"}
          alignItems={"center"}
          background={"transparent"}
          border={"1px solid #5E7079"}
          display={isSmallerThan900 ? "none" : "flex"}
        >
          <IoIosSearch fontSize={"30px"} color="#CED1DD" />
          <Input
            type="text"
            width={"100%"}
            height={"100%"}
            border={"none"}
            paddingLeft={"5px"}
            placeholder="Search"
            _focusVisible={"none"}
            background="transparent"
          />
        </Flex>
        <Flex alignItems={"center"} gap={"20px"}>
          <IoMdNotificationsOutline fontSize={"25px"} color="white" />
          <Image w={"40px"} h={"40px"} src={TEMPLATE} borderRadius={"50%"} />
          <Text fontSize={"12px"} color="#ffffff">
            Favour Oge
          </Text>
          <MdOutlineKeyboardArrowDown fontSize={"25px"} color="white" />
        </Flex>
      </Flex>
      {mainText !== "Home" && (
        <Text
          fontSize={"25px"}
          fontWeight={500}
          color={"white"}
          lineHeight={"60.48px"}
          alignItems={"center"}
          display={isSmallerThan900 ? "none" : "inline-flex"}
        >
          <MdOutlineKeyboardArrowLeft fontSize={"25px"} color="white" />

          {mainText}
        </Text>
      )}
      {subText && (
        <Text
          mt={"0.2rem"}
          fontWeight={300}
          color={"white"}
          maxW={"600px"}
          fontSize={"14px"}
          display={isSmallerThan900 ? "none" : "block"}
        >
          {subText}
        </Text>
      )}
      <Box display={{ base: "none", md: "block" }} h={"1rem"} w={"full"}></Box>
      <Outlet />
    </Flex>
  );
};

function formatPath(path) {
  if (!path) return "";
  const segments = path.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1];
  if (lastSegment === "student") {
    return "Home";
  }
  const formattedSegment = lastSegment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return formattedSegment;
}

const StudentLayout: FC = () => {
  const location = useLocation();
  const formattedPath = formatPath(location.pathname);
  const segments = location.pathname
    .split("/")
    .filter((segment) => segment.length > 0);

  const lastSegment = segments[segments.length - 1];
  const [isSmallerThan900] = useMediaQuery("(max-width: 900px)");

  const subtexts = {
    tutors:
      "Find and interact with your course tutors. Access their contact information, office hours, and schedule one-on-one sessions to enhance your learning experience.",
    "my-courses":
      "View and manage your enrolled courses. Track your progress, access course materials, and stay updated with upcoming lessons and assignments.",
    profile:
      "Update and manage your personal details, academic information, and preferences. Ensure your profile is always up-to-date to receive relevant notifications and updates.",
    billing:
      "View and handle your billing information. Check your payment history, manage subscriptions, and ensure your account is in good standing.",
    assessment:
      "Access your assessments, view grades, and track your academic progress. Get detailed feedback on your performance to identify areas for improvement.",
  };

  return (
    <Flex
      w={"full"}
      h={"full"}
      bgColor={"#002333"}
      gap={{ base: "1rem", xl: "2rem" }}
    >
      <Box
        minW={{ base: "full", md: "280px" }}
        display={isSmallerThan900 ? "none" : "block"}
      >
        <SideBarNav />
      </Box>
      <MainView mainText={formattedPath} subText={subtexts[lastSegment]} />
    </Flex>
  );
};

export default StudentLayout;

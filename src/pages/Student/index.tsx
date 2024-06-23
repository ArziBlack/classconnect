import { FC } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import {
  ASSESSMENT,
  COURSES,
  HOME,
  LOGOUT,
  PROFILE,
  SETTINGS,
  TUTORS,
} from "../../constants/icon";

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
        opacity: isActive ? "1" : "0.7",
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
            fontWeight={isActive ? "500" : "400"}
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
        top={0}
        right={4}
        gap={"1.5rem"}
        pt={4}
        alignItems={"center"}
        display={isSmallerThan900 ? "none" : "flex"}
      ></Flex>
      <Text
        fontSize={"38px"}
        fontWeight={500}
        color={"white"}
        lineHeight={"60.48px"}
        display={isSmallerThan900 ? "none" : "block"}
      >
        {mainText}
      </Text>
      {subText && (
        <Text
          mt={"1rem"}
          fontWeight={400}
          fontSize={"1rem"}
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
  const [isSmallerThan900] = useMediaQuery("(max-width: 900px)");

  return (
    <Flex
      w={"full"}
      h={"full"}
      bgColor={"#002333"}
      gap={{ base: "1rem", xl: "2rem" }}
    >
      <Box
        w={{ base: "full", md: "25%" }}
        maxW={{ base: "full", md: "410px" }}
        display={isSmallerThan900 ? "none" : "block"}
      >
        <SideBarNav />
      </Box>
      <MainView mainText={formattedPath} />
    </Flex>
  );
};

export default StudentLayout;

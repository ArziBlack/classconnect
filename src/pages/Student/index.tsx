import { FC } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";

type NavProps = {
  number: string;
  text: string;
  to: string;
};

const Nav: FC<NavProps> = ({ number, text, to }) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        textDecoration: "none",
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
            color={isActive ? "#4C9063" : "white"}
            bgColor={isActive ? "#CFFFDF" : "transparent"}
            border={isActive ? "none" : "1px solid white"}
          >
            <Text fontSize={"16px"}>{number}</Text>
          </Flex>
          <Text fontSize={"16px"} color={"white"}>
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
      pt={"3rem"}
      gap={"1rem"}
      bgColor={"brand.dark"}
      flexDirection={"column"}
      borderRight={"1px"}
      borderRightColor={"brand.grey"}
      px={{ md: "1.25rem", xl: "2rem" }}
    >
      <Nav number="1" text="Home" to="/student" />
      <Nav number="2" text="Tutors" to="tutors" />
      <Nav number="3" text="My Courses" to="my-courses" />
      <Nav number="4" text="Profile" to="profile" />
      <Nav number="5" text="Assessment" to="assessment" />
      <Nav number="6" text="Settings" to="settings" />
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
        color={"brand.text"}
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
      bgColor={"white"}
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

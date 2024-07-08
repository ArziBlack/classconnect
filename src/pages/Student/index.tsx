import { FC } from "react";
import { IoIosSearch } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Box, Flex, Image, Input, Text, useMediaQuery } from "@chakra-ui/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  ASSESSMENT,
  COURSES,
  HOME,
  LOGO,
  LOGOUT,
  PROFILE,
  SETTINGS,
  TUTORS,
} from "../../constants/icon";
import { logout } from "../../services/auth/authSlice";
import { useAppDispatch } from "../../hooks/reactReduxHooks";
import { useAppSelector } from "../../hooks/reactReduxHooks";

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
        padding: "8px 0.5rem",
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
            w={"30px"}
            h={"30px"}
            borderRadius={"50px"}
            alignItems={"center"}
            justifyContent={"center"}
            // color={isActive ? "#ffffff" : "white"}
            color={"white"}
            bgColor={"white"}
            border={isActive ? "none" : "1px solid brand.text"}
          >
            <Image width={"20px"} src={icon} />
          </Flex>
          <Text
            fontSize={"14px"}
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
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    setTimeout(() => {
      // navigate("/");
    }, 1500);
  };
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      flexDir={"column"}
      padding="10px 1rem"
      pt={"1.5rem"}
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
        <Image w="50px" src={LOGO} marginLeft={"5px"} marginBottom={"20px"} />
        <Nav text="Home" to="/student" icon={HOME} />
        <Nav text="Tutors" to="tutors" icon={TUTORS} />
        <Nav text="Courses" to="courses" icon={COURSES} />
        <Nav text="Profile" to="profile" icon={PROFILE} />
        <Nav text="Assessments" to="assessments" icon={ASSESSMENT} />
        <Nav text="Billing" to="billing" icon={SETTINGS} />
      </Flex>
      <Flex onClick={handleLogout}>
        <Nav text="Log out" to="/" icon={LOGOUT} />
      </Flex>
    </Flex>
  );
};

const MainView: FC = () => {
  const [isSmallerThan900] = useMediaQuery("(max-width: 900px)");
  const { data } = useAppSelector((state) => state.auth);

  return (
    <Flex
      w={"full"}
      h={"100vh"}
      position={"relative"}
      pr={"20px"}
      flexDirection={"column"}
    >
      <Flex
        mt={4}
        w={"full"}
        alignItems={"center"}
        color={"white"}
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
          <Image
            w={"40px"}
            h={"40px"}
            src={data.profileImage}
            borderRadius={"50%"}
          />
          <Text fontSize={"12px"} color="#ffffff">
            {data.first_name + " " + data.last_name}
          </Text>
          <MdOutlineKeyboardArrowDown fontSize={"25px"} color="white" />
        </Flex>
      </Flex>
      <Box w={"full"} overflowY={"auto"} mt={4} pb={4} className="no-scrollbar">
        <Outlet />
      </Box>
    </Flex>
  );
};

const StudentLayout: FC = () => {
  const [isSmallerThan900] = useMediaQuery("(max-width: 900px)");

  // eslint-disable-next-line
  const subtext = {
    billing:
      "View and handle your billing information. Check your payment history, manage subscriptions, and ensure your account is in good standing.",
  };

  return (
    <Flex
      w={"full"}
      h={"full"}
      bgColor={"#002333"}
      gap={{ base: "1rem", xl: "2rem" }}
    >
      <Box
        minW={{ base: "full", md: "220px" }}
        display={isSmallerThan900 ? "none" : "block"}
      >
        <SideBarNav />
      </Box>
      <MainView />
    </Flex>
  );
};

export default StudentLayout;

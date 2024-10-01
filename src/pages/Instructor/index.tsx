import { FC } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import {
  COURSES,
  HOME,
  LOGO,
  LOGOUT,
  _ASSESSMENT,
  TUTORS,
  ACADEMIC_CAP,
  NOTIFICATION,
} from "../../constants/icon";
import { logout } from "../../services/auth/authSlice";
import { useAppDispatch } from "../../hooks/reactReduxHooks";
import { useAppSelector } from "../../hooks/reactReduxHooks";

type NavProps = {
  to: string;
  text: string;
  icon: string;
  w?: string;
};

const Nav: FC<NavProps> = ({ text, to, icon, w = "20px" }) => {
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
            <Image width={w} src={icon} />
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
        <Image w="40px" src={LOGO} marginLeft={"5px"} marginBottom={"20px"} />
        <Nav text="Home" to="/instructor" icon={HOME} />
        <Nav text="Students" to="students" icon={ACADEMIC_CAP} />
        <Nav text="Curriculum" to="curriculum" icon={COURSES} />
        <Nav text="Profile" to="profile" icon={TUTORS} />
        <Nav text="Communications" to="assessments" icon={_ASSESSMENT} />
        <Nav
          text="Notification"
          to="notification"
          icon={NOTIFICATION}
          w="14px"
        />
        <Nav text="Send feedback" to="feedback" icon={_ASSESSMENT} />
      </Flex>
      <Flex onClick={handleLogout}>
        <Nav text="Log out" to="/" icon={LOGOUT} />
      </Flex>
    </Flex>
  );
};

type NavPillProps = {
  number?: string;
  text: string;
  onClick: () => void;
  isActive?: boolean;
  danger?: boolean;
};
const NavPill: FC<NavPillProps> = ({
  number,
  text,
  isActive,
  onClick,
  danger,
}) => {
  return (
    <Flex
      border={isActive || danger ? "none" : "1px solid #ffffff"}
      borderRadius={"144px"}
      bgColor={danger ? "#C60303" : isActive ? "#CFFFDF" : "transparent"}
      h={"40px"}
      px={"1rem"}
      justifyContent={"center"}
      alignItems={"center"}
      color={danger ? "#FFFFFF" : isActive ? "#4C9063" : "#ffffff"}
      onClick={onClick}
      minW={"fit-content"}
    >
      {number && <Text>{number}</Text>}
      {number && <Text>.&nbsp;</Text>}
      <Text>{text}</Text>
    </Flex>
  );
};

const MainView: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const [isSmallerThan900] = useMediaQuery("(max-width: 900px)");
  const { data } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    setTimeout(() => {
      // navigate("/");
    }, 1500);
  };

  const navItems = [
    { number: "1", text: "Home", to: "/instructor", icon: HOME, state: false },
    {
      number: "2",
      text: "Students",
      to: "students",
      icon: ACADEMIC_CAP,
      state: false,
    },
    {
      number: "3",
      text: "Curriculum",
      to: "curriculum",
      icon: COURSES,
      state: false,
    },
    { number: "4", text: "Profile", to: "profile", icon: TUTORS, state: false },
    {
      number: "5",
      text: "Communications",
      to: "assessments",
      icon: _ASSESSMENT,
      state: false,
    },
    {
      number: "6",
      text: "Notification",
      to: "notification",
      icon: NOTIFICATION,
      state: false,
      w: "14px",
    },
    {
      number: "7",
      text: "Send feedback",
      to: "feedback",
      icon: _ASSESSMENT,
      state: false,
    },
    {
      number: "8",
      text: "Log out",
      to: "/",
      icon: LOGOUT,
      state: false,
      onContextClick: handleLogout,
      danger: true, // Sets background color to indicate danger (e.g., red)
    },
  ];

  return (
    <Flex
      w={"full"}
      h={"100vh"}
      position={"relative"}
      pr={"20px"}
      pl={isSmallerThan900 ? "20px" : "0"}
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
          borderRadius={"8px"}
          alignItems={"center"}
          background={"transparent"}
          // border={"1px solid #5E7079"}
          // display={isSmallerThan900 ? "none" : "flex"}
        >
          {/* <IoIosSearch fontSize={"30px"} color="#CED1DD" /> */}
          {/* <Input
            type="text"
            width={"100%"}
            height={"100%"}
            border={"none"}
            paddingLeft={"5px"}
            placeholder="Search"
            _focusVisible={"none"}
            background="transparent"
          /> */}
          <Flex alignItems={"center"} gap={"20px"}>
            {!isSmallerThan900 ? (
              <Flex
                w={"30px"}
                h={"30px"}
                borderRadius={"50px"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"#002333"}
                fontSize={"18px"}
                bgColor={"white"}
                border={"1px solid brand.text"}
                cursor={"pointer"}
                onClick={() => navigate("notification")}
              >
                <Image width={"15px"} src={NOTIFICATION} />
              </Flex>
            ) : (
              <Image w="40px" src={LOGO} />
            )}
            {/* <Image
              w={"40px"}
              h={"40px"}
              src={data?.profileImage}
              borderRadius={"50%"}
            />
            <Text fontSize={"12px"} color="#ffffff">
              {data?.first_name + " " + data?.last_name}
            </Text> */}
            {/* <MdOutlineKeyboardArrowDown fontSize={"25px"} color="white" /> */}
          </Flex>
          {/* <Text fontSize={"26px"} fontWeight={600}>
            Tutor Dashboard
          </Text> */}
        </Flex>
        <Flex alignItems={"center"} gap={"20px"}>
          {/* <Flex
            w={"30px"}
            h={"30px"}
            borderRadius={"50px"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"#002333"}
            fontSize={"18px"}
            bgColor={"white"}
            border={"1px solid brand.text"}
            cursor={"pointer"}
            onClick={() => navigate("notification")}
          >
            <Image width={"15px"} src={NOTIFICATION} />
          </Flex> */}
          <Image
            w={"40px"}
            h={"40px"}
            src={data?.profileImage}
            borderRadius={"50%"}
          />
          {!isSmallerThan900 && (
            <Text fontSize={"12px"} color="#ffffff">
              {data?.first_name + " " + data?.last_name}
            </Text>
          )}
          {/* <MdOutlineKeyboardArrowDown fontSize={"25px"} color="white" /> */}
        </Flex>
      </Flex>
      <Flex
        w="full"
        h={"40px"}
        py={"20px"}
        mt={"10px"}
        gap={"0.5rem"}
        overflowX="auto"
        alignItems={"center"}
        className="no-scrollbar"
        display={isSmallerThan900 ? "flex" : "none"}
      >
        <Flex
          overflowX={"scroll"}
          className={"no-scrollbar"}
          gap={"0.5rem"}
          py={"10px"}

          // pr={"1rem"}
          // pt={"1rem"}
          // pb={"1rem"}
        >
          {navItems.map(
            ({ number, text, onContextClick, danger, to }, index) => (
              <NavPill
                key={number + text + index}
                number={number}
                text={text}
                danger={danger}
                onClick={() => {
                  if (onContextClick) {
                    onContextClick();
                  } else {
                    navigate(to);
                  }
                }}
                isActive={
                  to === "/instructor"
                    ? location.pathname === to
                    : location.pathname.includes(to)
                }
              />
            )
          )}
        </Flex>
      </Flex>
      <Box w={"full"} overflowY={"auto"} mt={4} pb={4} className="no-scrollbar">
        <Outlet />
      </Box>
    </Flex>
  );
};

const TutorLayout: FC = () => {
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

export default TutorLayout;

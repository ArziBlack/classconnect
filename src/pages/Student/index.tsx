import { FC, useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  ASSESSMENT,
  COURSES,
  HOME,
  LOGO,
  LOGOUT,
  PROFILE,
  SETTINGS,
  TUTORS,
  NOTIFICATION,
} from "../../constants/icon";
import { logout } from "../../services/auth/authSlice";
import { useAppDispatch } from "../../hooks/reactReduxHooks";
import { useAppSelector } from "../../hooks/reactReduxHooks";
import { FaGoogleScholar, FaLink } from "react-icons/fa6";
import { MdOutlineWorkHistory } from "react-icons/md";
import { FaBars } from "react-icons/fa";

type NavProps = {
  to: string;
  text: string;
  icon?: string;
  isImage?: boolean;
  children?: React.ReactNode;
  w?: string;
};

const Nav: FC<NavProps> = ({
  text,
  to,
  icon,
  children,
  isImage = true,
  w = "20px",
}) => {
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
            color={"002333"}
            fontSize={"18px"}
            bgColor={"white"}
            border={isActive ? "none" : "1px solid brand.text"}
          >
            {isImage ? <Image width={w} src={icon} /> : children}
          </Flex>
          <Text
            fontSize={"14px"}
            fontWeight={isActive ? "400" : "400"}
            color={isActive ? "#ffffff" : "white"}
            display={{ base: "none", md: "none", lg: "flex" }}
          >
            {text}
          </Text>
        </Flex>
      )}
    </NavLink>
  );
};

const MobileNav: FC<NavProps> = ({
  text,
  to,
  icon,
  children,
  isImage = true,
  w = "20px",
}) => {
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
            w={"25px"}
            h={"25px"}
            borderRadius={"50px"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"002333"}
            fontSize={"16px"}
            bgColor={"white"}
            border={isActive ? "none" : "1px solid brand.text"}
          >
            {isImage ? <Image width={w} src={icon} /> : children}
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
      padding="0 1rem"
      pt={"1.5rem"}
      position={"sticky"}
      top={0}
      backgroundColor={"#023248"}
      justifyContent={"space-between"}
    >
      <Flex w={"full"} flexDirection={"column"}>
        <Image w="40px" src={LOGO} marginLeft={"5px"} marginBottom={"20px"} />
        <Nav text="Home" to="/student" icon={HOME} />
        <Nav text="Tutors" to="tutors" icon={TUTORS} />
        <Nav text="Courses" to="courses" icon={COURSES} />
        <Nav text="Profile" to="profile" icon={PROFILE} />
        <Nav text="Assessments" to="assessments" icon={ASSESSMENT} />
        <Nav text="Billing" to="billing" icon={SETTINGS} />
        <Nav
          text="Notification"
          to="notification"
          icon={NOTIFICATION}
          w="14px"
        />
        <Nav text="Referral" to="referral" isImage={false}>
          <FaLink />
        </Nav>
        <Nav text="Scholarship" to="scholarship" isImage={false}>
          <FaGoogleScholar />
        </Nav>
        <Nav text="Internship" to="internship" isImage={false}>
          <MdOutlineWorkHistory />
        </Nav>
      </Flex>
      <Flex onClick={handleLogout}>
        <Nav text="Log out" to="/" icon={LOGOUT} />
      </Flex>
    </Flex>
  );
};

const MainView: FC = () => {
  const navigate = useNavigate();
  const [isSmallerThan900] = useMediaQuery("(max-width: 900px)");
  const { data } = useAppSelector((state) => state.auth);
  useEffect(() => {
    document.title = "HEP | Student Dashboard";
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    setTimeout(() => {}, 1500);
  };

  return (
    <Flex w={"full"} h={"100vh"} position={"relative"} flexDirection={"column"}>
      <Flex
        mt={4}
        w={"full"}
        px={3}
        alignItems={"center"}
        color={"white"}
        justifyContent={"space-between"}
      >
        <Flex
          h={"45px"}
          color={"white"}
          width={"400px"}
          borderRadius={"8px"}
          alignItems={"center"}
          background={"transparent"}
          display={isSmallerThan900 ? "none" : "flex"}
        >
          <Text fontSize={"26px"} fontWeight={600}>
            Student LRC
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={"20px"}>
          <Flex
            display={{ base: "none", md: "flex" }}
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
          <Image
            w={"40px"}
            h={"40px"}
            src={data.profileImage}
            borderRadius={"50%"}
            objectFit={"cover"}
          />
          <Text fontSize={"12px"} color="#ffffff">
            {data.first_name + " " + data.last_name}
          </Text>
        </Flex>
        <Flex
          gap={5}
          alignItems="center"
          display={{ base: "flex", md: "none" }}
        >
          <Box
            w={"30px"}
            h={"30px"}
            borderRadius={"50px"}
            alignItems={"center"}
            display={{ base: "flex", md: "hidden" }}
            justifyContent={"center"}
            color={"#002333"}
            fontSize={"18px"}
            bgColor={"white"}
            border={"1px solid brand.text"}
            cursor={"pointer"}
            onClick={() => navigate("notification")}
          >
            <Image width={"15px"} src={NOTIFICATION} />
          </Box>

          <Flex cursor="pointer" onClick={toggleMenu}>
            <FaBars />
          </Flex>
        </Flex>
      </Flex>
      <Box
        mt={4}
        pb={4}
        px={4}
        w={"full"}
        overflowY={"auto"}
        className="no-scrollbar"
      >
        <Outlet />
      </Box>
      <Drawer placement="left" onClose={() => toggleMenu()} isOpen={isMenuOpen}>
        <DrawerOverlay />
        <DrawerContent backgroundColor={"#023248"}>
          <DrawerCloseButton />
          <DrawerHeader color="white">
            <Image
              w="50px"
              src={LOGO}
              marginLeft={"5px"}
              marginBottom={"20px"}
            />
          </DrawerHeader>
          <DrawerBody>
            <Flex
              w={"full"}
              h={"100%"}
              flexDir={"column"}
              padding="1rem"
              pt={"1.5rem"}
              pl="10px"
              position={"sticky"}
              top={0}
              backgroundColor={"#023248"}
              justifyContent={"space-between"}
            >
              <Flex w={"full"} flexDirection={"column"} onClick={toggleMenu}>
                <MobileNav text="Home" to="/student" icon={HOME} />
                <MobileNav text="Tutors" to="tutors" icon={TUTORS} />
                <MobileNav text="Courses" to="courses" icon={COURSES} />
                <MobileNav text="Profile" to="profile" icon={PROFILE} />
                <MobileNav
                  text="Assessments"
                  to="assessments"
                  icon={ASSESSMENT}
                />
                <MobileNav text="Billing" to="billing" icon={SETTINGS} />
                <MobileNav
                  text="Notification"
                  to="notification"
                  icon={NOTIFICATION}
                  w="14px"
                />
                <MobileNav text="Referral" to="referral" isImage={false}>
                  <FaLink />
                </MobileNav>
                <MobileNav text="Scholarship" to="scholarship" isImage={false}>
                  <FaGoogleScholar />
                </MobileNav>
                <MobileNav text="Internship" to="internship" isImage={false}>
                  <MdOutlineWorkHistory />
                </MobileNav>
              </Flex>
              <Flex onClick={handleLogout}>
                <MobileNav text="Log out" to="/" icon={LOGOUT} />
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

const StudentLayout: FC = () => {
  // const [isSmallerThan900] = useMediaQuery("(max-width: 900px)");

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
        minW={{ base: "full", md: "80px", lg: "220px" }}
        display={{ base: "none", md: "block", lg: "block" }}
      >
        <SideBarNav />
      </Box>
      <MainView />
    </Flex>
  );
};

export default StudentLayout;

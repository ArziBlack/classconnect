import { FC } from "react";
import { Home } from "./views/Home";
import { useSnapshot } from "valtio";
import { Tutors } from "./views/Tutors";
import { Profile } from "./views/Profile";
import { Settings } from "./views/Settings";
import Courses from "../../components/Courses";
import { Assessment } from "./views/Assessments";
import { StudentView, StudentStore } from "../../utils/views";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";

type NavProps = {
  number: string;
  text: string;
  isActive?: boolean;
  onClick: () => void;
};
const Nav: FC<NavProps> = ({ number, text, isActive, onClick }) => {
  return (
    <Flex
      gap={"1rem"}
      onClick={onClick}
      cursor={"pointer"}
      alignItems={"center"}
      fontFamily={"Metropolis"}
    >
      <Flex
        w={"45px"}
        h={"45px"}
        borderRadius={"50px"}
        alignItems={"center"}
        justifyContent={"center"}
        color={isActive ? "#4C9063" : "#000000"}
        bgColor={isActive ? "#CFFFDF" : "transparent"}
        border={isActive ? "none" : "1px solid #000000"}
      >
        <Text fontSize={"20px"}>{number}</Text>
      </Flex>
      <Text fontFamily={"font4"} fontSize={"20px"}>
        {text}
      </Text>
    </Flex>
  );
};

const SideBarNav = () => {
  const { studentView } = useSnapshot(StudentStore);

  return (
    <Flex
      w={"full"}
      h={"36rem"}
      bgColor={"#F9F9F9"}
      borderRadius={"32px"}
      flexDirection={"column"}
      px={{ md: "1.25rem", xl: "2rem" }}
      pt={"3rem"}
      gap={"1rem"}
    >
      <Nav
        number="1"
        text="Home"
        onClick={() => {
          StudentStore.studentView = StudentView.Home;
        }}
        isActive={studentView === StudentView.Home}
      />
      <Nav
        number="2"
        text="Tutors"
        onClick={() => {
          StudentStore.studentView = StudentView.Tutors;
        }}
        isActive={studentView === StudentView.Tutors}
      />
      <Nav
        number="3"
        text="My Courses"
        onClick={() => {
          StudentStore.studentView = StudentView.Courses;
        }}
        isActive={studentView === StudentView.Courses}
      />
      <Nav
        number="4"
        text="Profile"
        onClick={() => {
          StudentStore.studentView = StudentView.Profile;
        }}
        isActive={studentView === StudentView.Profile}
      />
      <Nav
        number="5"
        text="Assessment"
        onClick={() => {
          StudentStore.studentView = StudentView.Assessment;
        }}
        isActive={studentView === StudentView.Assessment}
      />
      <Nav
        number="6"
        text="Settings"
        onClick={() => {
          StudentStore.studentView = StudentView.Settings;
        }}
        isActive={studentView === StudentView.Settings}
      />
    </Flex>
  );
};

type MainViewProps = {
  mainText: string;
  subText?: string;
  extraComp?: JSX.Element;
};
const MainView: FC<MainViewProps> = ({ mainText, subText }) => {
  const { studentView } = useSnapshot(StudentStore);
  const [isSmallerThan900] = useMediaQuery("(max-width: 900px)");

  return (
    <Flex w={"full"} h={"100%"} position={"relative"} flexDirection={"column"}>
      <Flex
        top={0}
        right={4}
        position={"absolute"}
        display={isSmallerThan900 ? "none" : "flex"}
        gap={"1.5rem"}
        alignItems={"center"}
      ></Flex>
      <Text
        fontFamily={"font4"}
        fontSize={"48px"}
        lineHeight={"60.48px"}
        display={isSmallerThan900 ? "none" : "block"}
      >
        {mainText}
      </Text>
      {subText && (
        <Text
          mt={"1rem"}
          fontFamily={"font4"}
          fontWeight={400}
          fontSize={"1rem"}
          display={isSmallerThan900 ? "none" : "block"}
        >
          {subText}
        </Text>
      )}
      <Box display={{ base: "none", md: "block" }} h={"1rem"} w={"full"}></Box>
      {studentView === StudentView.Home && <Home />}
      {studentView === StudentView.Tutors && <Tutors />}
      {studentView === StudentView.Profile && <Profile />}
      {studentView === StudentView.Courses && <Courses />}
      {studentView === StudentView.Assessment && <Assessment />}
      {studentView === StudentView.Settings && <Settings />}
    </Flex>
  );
};

const ViewLayout = () => {
  const { studentView } = useSnapshot(StudentStore);
  const [isSmallerThan900] = useMediaQuery("(max-width: 900px)");

  return (
    <Flex
      w={"full"}
      h={"full"}
      py={{ base: "5rem", md: "3rem" }}
      px={{ md: "3rem" }}
      gap={{ base: "2rem", xl: "4rem" }}
    >
      <Box
        w={{ base: "full", md: "35%" }}
        maxW={{ base: "full", md: "410px" }}
        display={isSmallerThan900 ? "none" : "block"}
      >
        <SideBarNav />
      </Box>
      <MainView mainText={studentView} />
    </Flex>
  );
};

export default ViewLayout;

import {
  Box,
  Grid,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import React from "react";
import { YoutubeEmbed } from "./CustomComponent";
import { getLandingVideos } from "../services/others/otherSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reactReduxHooks";

const UserInfo: React.FC = () => {
  const dispatch = useAppDispatch();
  const { videos } = useAppSelector((state) => state.other);
  React.useEffect(() => {
    if (!videos) dispatch(getLandingVideos());
  }, [dispatch, videos]);

  const videoList = Array.isArray(videos)
    ? videos
        .map((video) => {
          const videoIdMatch = video.link.match(/v=([^&]+)/);
          return videoIdMatch ? videoIdMatch[1] : null;
        })
        .filter(Boolean)
    : [];

  return (
    <Box w="100%" py={4} maxW="890px">
      <Tabs variant="soft-rounded">
        <TabList>
          <Tab
            _selected={{
              color: "white",
              bg: "#002333",
            }}
          >
            About
          </Tab>
          <Tab
            _selected={{
              color: "white",
              bg: "#002333",
            }}
          >
            Vision
          </Tab>
          <Tab
            _selected={{
              color: "white",
              bg: "#002333",
            }}
          >
            Mission
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {/* <Text fontSize="xl" fontWeight="bold">
              About us
            </Text> */}
            <Text mt={2}>
              <strong>CLASSCONNECTS </strong>is a virtual and e learning
              platform dedicated to shaping the next generation of technology
              leaders with proper and affordable education. With a primary focus
              on college students, high-school students, educational communities
              and organisations, we provide a structured, engaging, and hands-on
              approach to learning. Whether you're a parent seeking to empower
              your child with technical skills or a student eager to explore the
              world of learning and education, our platform connects you with
              world-class tutors who are carefully vetted through a rigorous
              screening process.
            </Text>
            <Text mt={2}>
              We recognize the unique learning needs of young minds and offer
              age-specific programs that cater to students in the 8-10, 11-14,
              15-18, and 19 above age brackets. In addition to our youth-focused
              programs, we provide specialised courses with a matching and
              expercienced tutor for learners of all ages, ensuring everyone has
              the opportunity to develop themselves and their skills.
            </Text>
            <Text mt={2}>
              At <strong>CLASS CONNECTS</strong>, our commitment to quality
              education is reflected in our practical, real-world teaching
              methods, guided by modern technologies and seasoned instructors.
              We also offer a flexible learning system with options for class
              types and payment methods, making it easy to tailor the learning
              experience to individual preferences.
            </Text>
            {/* 
            <Text fontSize="xl" fontWeight="bold" mt={4}>
              Goal
            </Text> */}
            <Text mt={2}>
              Our goal is to make quality learning process and education
              accessible and exciting for young learners, while also providing
              opportunities for lifelong learning to individuals of any age.
            </Text>

            {videoList && videoList.length > 0 ? (
              <YoutubeEmbed
                initialEmbedId={videoList[0]}
                title={"All you need to know about CLASS CONNECTS"}
                videoList={videoList}
              />
            ) : (
              <p>Loading videos...</p>
            )}
          </TabPanel>
          <TabPanel>
            <Text>
              Our vision is to be a global leader in youth-focused technology
              education, cultivating a generation of young innovators and tech
              leaders. We strive to make coding and software development an
              exciting and accessible journey for children and teens, while also
              providing specialised learning paths for learners of all ages to
              contribute to a future driven by technology and creativity.
            </Text>
          </TabPanel>
          <TabPanel>
            <Text>
              Our mission is to inspire and empower children and teens, ages
              8-18, by providing access to world-class self development
              education tailored to their developmental stages. Through
              engaging, hands-on learning experiences, we aim to nurture
              creativity and technical skills in young minds. In addition, we
              offer specialized courses for learners of all ages, ensuring that
              anyone with a passion for technology can benefit from our
              flexible, personalized platform.
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

const About: React.FC = () => {
  return (
    <Box py={4} mx="auto" display="flex" justifyContent="center">
      <Grid
        templateColumns="1fr"
        gap={6}
        w="full"
        maxW="1280px"
        justifyItems="center"
      >
        <Box w="full">
          <UserInfo />
        </Box>
      </Grid>
    </Box>
  );
};

export default About;

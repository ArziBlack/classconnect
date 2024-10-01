import React from "react";
import Classes from "../components/Classes";
import Lessons from "../components/Lessons";
import CollegeLevel from "../components/CollegeLevel";
import Career from "../components/Career";
import HeroMaster from "../components/HeroMaster";
import GoodPricing from "../components/GoodPricing";
import {
  getHomeResponse,
  getTuitionFees,
  getLandingVideos,
} from "../services/others/otherSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reactReduxHooks";
import { YoutubeEmbed } from "../components/CustomComponent";

const Home = () => {
  const dispatch = useAppDispatch();
  const { home, fees, videos } = useAppSelector((state) => state.other);
  React.useEffect(() => {
    if (!home) dispatch(getHomeResponse());
    if (!fees) dispatch(getTuitionFees());
    if (!videos) dispatch(getLandingVideos());
  }, [dispatch, home, fees, videos]);

  const videoList = Array.isArray(videos)
    ? videos
        .map((video) => {
          const videoIdMatch = video.link.match(/v=([^&]+)/);
          return videoIdMatch ? videoIdMatch[1] : null;
        })
        .filter(Boolean)
    : [];

  console.log(videoList);

  return (
    <>
      <HeroMaster />
      <Classes />
      <GoodPricing />
      <Lessons />
      <CollegeLevel />
      <Career />
      {videoList && videoList.length > 0 ? (
        <YoutubeEmbed
          initialEmbedId={videoList[0]}
          title={"All you need to know about HEP Coding"}
          videoList={videoList}
        />
      ) : (
        <p>Loading videos...</p>
      )}
    </>
  );
};

export default Home;

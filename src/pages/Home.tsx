import React from "react";
import Classes from "../components/Classes";
import Lessons from "../components/Lessons";
import CollegeLevel from "../components/CollegeLevel";
import Career from "../components/Career";
import HeroMaster from "../components/HeroMaster";
import GoodPricing from "../components/GoodPricing";
import { getHomeResponse, getTuitionFees } from "../services/others/otherSlice";
import { useAppDispatch } from "../hooks/reactReduxHooks";

const Home = () => {
  const dispatch = useAppDispatch();
  React.useEffect(()=> {
    dispatch(getHomeResponse());
    dispatch(getTuitionFees());
  },[])

  return (
    <>
      <HeroMaster />
      <Classes />
      <GoodPricing />
      <Lessons />
      <CollegeLevel />
      <Career />
    </>
  );
};

export default Home;

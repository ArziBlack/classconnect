import Classes from "../components/Classes";
import Lessons from "../components/Lessons";
import CollegeLevel from "../components/CollegeLevel";
import Career from "../components/Career";
import HeroMaster from "../components/HeroMaster";
import GoodPricing from "../components/GoodPricing";

const Home = () => {
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

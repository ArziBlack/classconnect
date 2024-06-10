import Classes from "../components/Classes";
import Lessons from "../components/Lessons";
import CollegeLevel from "../components/CollegeLevel";
import Career from "../components/Career";
import HeroMaster from "../components/HeroMaster";

const Home = () => {
  return (
    <>
      <HeroMaster/>
      <Classes />
      <Lessons />
      <CollegeLevel />
      <Career />
    </>
  );
};

export default Home;

import Hero from "../components/Hero";
import Classes from "../components/Classes";
import Lessons from "../components/Lessons";
import CollegeLevel from "../components/CollegeLevel";
import Career from "../components/Career";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Classes/>
      <Lessons/>
      <CollegeLevel/>
      <Career/>
      <NewsletterSection/>
      <Footer/>
    </>
  );
};

export default Home;

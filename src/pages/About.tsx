import { Box } from "@chakra-ui/react";
import SecondaryHero from "../components/SecondaryHero.tsx";
import CAbout from "../components/About.tsx";

const About = () => {
  return (
    <Box>
      <SecondaryHero
        title="Discover Your Tech Potential"
        description="Welcome to Class Connects where your journey in education and self development begins. Our mission is to empower individuals, students, communities from all backgrounds to achieve their dreams through an educational perspective"
      />
      <CAbout />
    </Box>
  );
};

export default About;

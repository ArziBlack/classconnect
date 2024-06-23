import { Box } from "@chakra-ui/react";
import SecondaryHero from "../components/SecondaryHero.tsx";
import CAbout from "../components/About.tsx";

const About = () => {
  return (
    <Box>
      <SecondaryHero
        title="Discover Your Tech Potential"
        description="Welcome to Hepcoding Academy, where your journey in technology and software development begins. Our mission is to empower individuals from all backgrounds to achieve their dreams in the tech industry."
      />
      <CAbout />
    </Box>
  );
};

export default About;

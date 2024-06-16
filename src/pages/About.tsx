// import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
// import { AppDispatch, IRootState } from "../app/store.ts";
// import { useDispatch, useSelector } from "react-redux";
import SecondaryHero from "../components/SecondaryHero.tsx";
import CAbout from "../components/About.tsx";
// import { getTuitionFees } from "../services/others/otherSlice.ts";
// import PricingPackages from "../components/PricingPackages.tsx";

const About = () => {
  // const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   dispatch(getTuitionFees());
  // }, []);

  // const { fees, isLoading } = useSelector((store: IRootState) => store.other);
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

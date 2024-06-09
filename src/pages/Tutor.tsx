import { Box } from "@chakra-ui/react";
import { PRICING } from "../constants/illustrations.ts";
import SecondaryHero from "../components/SecondaryHero.tsx";
import ApplyInstructor from "../components/ApplyInstructor.tsx";
import CustomComponent from "../components/CustomComponent.tsx";

const Tutor = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Tutor", href: "/tutor" },
  ];

  return (
    <Box>
      <SecondaryHero
        links={links}
        imageUrl={PRICING}
        title="Our Pre-ready Pricing Packages"
      />
      <ApplyInstructor />
      <CustomComponent />
    </Box>
  );
};

export default Tutor;

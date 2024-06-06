import { Box } from "@chakra-ui/react";
import PricingPackages from "../components/Pricing";
import { PRICING } from "../constants/illustrations";
import SecondaryHero from "../components/SecondaryHero";

const Pricing = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/pricing" },
  ];

  return (
    <Box pt={20}>
      <SecondaryHero
        links={links}
        imageUrl={PRICING}
        title="Our Pre-ready Pricing Packages"
      />
      <PricingPackages />
    </Box>
  );
};

export default Pricing;

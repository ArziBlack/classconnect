import { Box } from "@chakra-ui/react";
import PricingPackages from "../components/PricingPackages.tsx";
import { PRICING } from "../constants/illustrations";
import SecondaryHero from "../components/SecondaryHero";
import { AppDispatch, IRootState } from "../app/store";
import { getHomePage, getTutionFees } from "../services/others/otherSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Pricing = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/pricing" },
  ];

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getHomePage());
    dispatch(getTutionFees());
  }, []);

  const { fees, home, isLoading } = useSelector((store: IRootState) => store.other);
  console.log(fees);
  console.log(home);
  console.log(isLoading);
  return (
    <Box pt={20}>
      <SecondaryHero
        links={links}
        imageUrl={PRICING}
        title="Our Pre-ready Pricing Packages"
      />
      <PricingPackages isLoading={isLoading} />
    </Box>
  );
};

export default Pricing;
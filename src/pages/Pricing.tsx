import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { PRICING } from "../constants/illustrations";
import { AppDispatch, IRootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import SecondaryHero from "../components/SecondaryHero";
import { getTuitionFees } from "../services/others/otherSlice.ts";
import PricingPackages from "../components/PricingPackages.tsx";

const Pricing = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/pricing" },
  ];

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getTuitionFees());
  }, []);

  const { fees, isLoading } = useSelector((store: IRootState) => store.other);
  return (
    <Box pt={20}>
      <SecondaryHero
        links={links}
        imageUrl={PRICING}
        title="Our Pre-ready Pricing Packages"
      />
      <PricingPackages isLoading={isLoading} fees={fees} />
    </Box>
  );
};

export default Pricing;

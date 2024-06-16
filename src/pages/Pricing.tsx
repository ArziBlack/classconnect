import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { AppDispatch, IRootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import SecondaryHero from "../components/SecondaryHero";
import { getTuitionFees } from "../services/others/otherSlice.ts";
import PricingPackages from "../components/PricingPackages.tsx";

const Pricing = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getTuitionFees());
  }, []);

  const { fees, isLoading } = useSelector((store: IRootState) => store.other);
  return (
    <Box>
      <SecondaryHero
        title="Our Pre-ready Pricing Packages"
        description="Explore our flexible pricing packages tailored for students at all levels. Choose from monthly, quarterly, half-yearly, and yearly payment plans that best suit your needs. Our affordable options ensure you can access high-quality courses and materials without breaking the bank. Join us and invest in your education today!"
      />
      <PricingPackages isLoading={isLoading} fees={fees} />
    </Box>
  );
};

export default Pricing;

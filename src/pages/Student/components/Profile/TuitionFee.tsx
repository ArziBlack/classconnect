import { Box } from "@chakra-ui/react";
import { useAppSelector } from "../../../../hooks/reactReduxHooks";

export const TuitionFee = () => {
  const { data } = useAppSelector(tam => tam.auth)
  return (
    <Box className="text-white pt-6 ">
      <h1 className="text-lg uppercase p-2 border border-grey max-w-[320px] rounded-md">Tuition Fee : {data?.paymentPlan}</h1>
    </Box>
  );
};

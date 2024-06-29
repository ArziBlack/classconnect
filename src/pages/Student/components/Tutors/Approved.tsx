import { Box } from "@chakra-ui/react";
import { useAppSelector } from "../../../../hooks/reactReduxHooks";

export const Approved = () => {
  const { approvedTutors, isSuccess } = useAppSelector(state => state.student);
  console.log(approvedTutors);
  console.log(isSuccess);
  return (
    <Box className="text-white pt-6 ">
      <h1 className="text-lg">Approved {isSuccess} {approvedTutors && "HI, i am the approved Tutor's Friend!!!"}</h1>
    </Box>
  );
};

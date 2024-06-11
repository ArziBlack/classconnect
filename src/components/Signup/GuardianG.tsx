import CButton from "../Button";
import { Box } from "@chakra-ui/react";
import { IGuardianProps } from "../../typings/home";

const GuardianG = ({ submit }: IGuardianProps) => {
  return (
    <>
      <Box w="100%" mb={3}></Box>
      <CButton my={3} text="Submit" width="full" onClick={() => submit()} />
    </>
  );
};

export default GuardianG;

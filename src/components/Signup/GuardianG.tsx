import { useState } from "react";
import { Box, Checkbox, Text } from "@chakra-ui/react";
import { IGuardianProps } from "../../typings/home";
import CButton from "../Button";
import { ImageUpload } from "../ImageUpload";

const GuardianG = ({ submit: Submit, setGuardianData, isGuardian }: IGuardianProps) => {
  const [check, setCheck] = useState<boolean>(false);
  function handleCheckBox() {
    setCheck(!check);
    check ? console.log("I was checked") : console.log("You just unchecked me");
  }

  return (
    <>
      <Box w="100%" mb={3}>
        <ImageUpload setGuardianData={setGuardianData} isGuardian={isGuardian} />
      </Box>
      <Box display="flex" mb={6} gap={2}>
        <Checkbox defaultChecked onChange={handleCheckBox}></Checkbox>
        <Text fontSize="14px">
          By creating an account, you agree to our{" "}
          <Text
            display={"inline-block"}
            cursor={"pointer"}
            _hover={{ color: "brand.action" }}
          >
            Terms & Conditions and Privacy Policy
          </Text>
        </Text>
      </Box>
      <CButton
        my={3}
        text="Submit"
        width="full"
        onClick={Submit}
        isDisabled={check ? false : true}
      />
    </>
  );
};

export default GuardianG;

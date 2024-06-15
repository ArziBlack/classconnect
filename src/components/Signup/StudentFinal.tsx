import { useState } from "react";
import {
  Box,
  Text,
  Checkbox,
} from "@chakra-ui/react";
import CButton from "../Button";
import { IStudentProps } from "../../typings/home";
import { ImageUpload } from "../ImageUpload";
// import { useAppSelector } from "../../hooks/reactReduxHooks";

const StudentFinal = ({ submit: Submit, onChange, setFormData, isGuardian }: IStudentProps) => {
  // const {  } = useAppSelector((store) => store.image);
  const [check, setCheck] = useState(true);
  function handleCheckBox() {
    setCheck(!check);
    if (check) {
      console.log("I was checked");
    } else {
      console.log("You just unchecked me");
    }
  }
  return (
    <>
      <Box w="100%" mb={3}>
        <ImageUpload setFormData={setFormData} isGuardian={isGuardian} />
      </Box>
      <Box display="flex" mb={6} gap={2} onClick={handleCheckBox}>
        <Checkbox defaultChecked onChange={onChange} name="agreement_status"></Checkbox>
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

export default StudentFinal;

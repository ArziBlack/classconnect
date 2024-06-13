import { useEffect, useState } from "react";
import {
  Box,
  Text,
  Checkbox,
} from "@chakra-ui/react";
// import { useDispatch } from "react-redux";
import CButton from "../Button";
import { IStudentProps } from "../../typings/home";
import { ImageUpload } from "../ImageUpload";

const StudentFinal = ({ data, onClick, submit: Submit }: IStudentProps) => {
  // const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState<object>({});
  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);

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
        <ImageUpload />
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

export default StudentFinal;

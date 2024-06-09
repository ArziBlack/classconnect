import { SyntheticEvent, useEffect, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Select,
  Text,
  Checkbox
} from "@chakra-ui/react";
import Select1 from "react-select";
import { useDispatch } from "react-redux";
import { SignupProps } from "../../typings/home";
import CButton from "../Button";

const PageFinal = ({ onChange, data }: SignupProps) => {
  const dispatch = useDispatch();
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
  function handleCheckBox(e: SyntheticEvent) {
    setCheck(!check);
    if (check) {
      console.log("I was checked");
    } else {
      console.log("You just unchecked me");
    }
  }
  return (
    <>
      <Box w="100%" mb={6}>
        <FormControl>
          <FormLabel fontWeight="bold" fontSize="15px">
            Country
          </FormLabel>
          <Select1
            options={countries}
            value={selectedCountry}
            onChange={(selectedOption: object) =>
              setSelectedCountry(selectedOption)
            }
          ></Select1>
        </FormControl>
      </Box>
      <Box w="100%" mb={6}>
        <FormLabel fontWeight="bold" fontSize="15px">
          What is your current role?
        </FormLabel>
        <Select fontSize="15" placeholder="Select option">
          <option value="founder">Founder</option>
          <option value="engineer">Software Engineer</option>
          <option value="Finance Officer">Finance Officer</option>
        </Select>
      </Box>
      <Box w="100%" mb={6}>
        <FormLabel fontWeight="bold" fontSize="15px">
          How did you discover Tensfer?
        </FormLabel>
        <Select borderRadius="lg" fontSize="15" placeholder="Select option">
          <option value="social media">Social media</option>
          <option value="blog">Blog or publication</option>
          <option value="search engine">Search engine</option>
          <option value="others">Others</option>
        </Select>
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
        type="submit"
        text="Register"
        width="full"
        isDisabled={check ? false : true}
      />
    </>
  );
};

export default PageFinal;

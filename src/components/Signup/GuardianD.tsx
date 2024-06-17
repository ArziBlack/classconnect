import CButton from "../Button";
import { Box, FormControl, FormLabel, Select, Flex } from "@chakra-ui/react";
import { IGuardianProps } from "../../typings/home";
import { states } from "../../typings/states";
import { IGender } from "../../typings/signup";
import { useEffect, useState } from "react";
import InputField from "../Input";
import { FaRegUser } from "react-icons/fa6";

const GuardianD = ({ data, onChange, onClick }: IGuardianProps) => {
  const gender: IGender[] = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        console.log(data.countries);
        setSelectedCountry(data.userSelectValue);
        console.log(data.userSelectValue);
      });
  }, []);

  return (
    <>
      <Box w="100%" mb={3}>
        <Select
          onChange={onChange}
          mb="1px"
          name="gender"
          placeholder="Select a Gender"
        >
          {gender.map((item, idx) => (
            <option key={idx} value={item.value}>
              {item.label}
            </option>
          ))}
        </Select>
      </Box>
      <Box w="100%" mb={3}>
        <FormControl>
          <FormLabel fontWeight="bold" fontSize="15px">
            Country
          </FormLabel>
          <Select
            name="country"
            onChange={onChange}
            placeholder="Select a country"
          >
            {/* <option>{selectedCountry}</option> */}
            <option>{selectedCountry?.userCountryCode}</option>
            {countries &&
              countries?.map((country, idx) => (
                <option key={idx} value={country.value}>
                  {country.label}
                </option>
              ))}
          </Select>
        </FormControl>
      </Box>
      <Box w="100%" mb={3}>
        <Select name="state" onChange={onChange} placeholder="Select a state">
          {states.map((item, idx) => (
            <option value={item.value} key={idx}>
              {item.label}
            </option>
          ))}
        </Select>
      </Box>
      <Box w="100%" mb={3}>
        <InputField
          required
          type="number"
          name="student_phoneNum"
          icon={FaRegUser}
          placeholder="+234 9037289192"
          label="Student Phone Number"
          onChange={onChange}
          value={data.student_phoneNum}
        />
      </Box>
      <Flex gap={5}>
        <CButton
          my={3}
          w={"full"}
          text="Back"
          onClick={() => onClick("pagethree")}
        />
        <CButton
          my={3}
          w={"full"}
          text="Next"
          onClick={() => onClick("pagefive")}
        />
      </Flex>
    </>
  );
};

export default GuardianD;

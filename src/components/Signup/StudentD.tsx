import CButton from "../Button";
import { Box, Flex, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { states } from "../../typings/states";
import { IStudentProps } from "../../typings/home";

const StudentD: React.FC<IStudentProps> = ({ onClick, onChange }) => {
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
        <FormControl>
          <FormLabel fontWeight="bold" fontSize="15px">
            State
          </FormLabel>
          <Select name="state" onChange={onChange} placeholder="Select a state">
            {states.map((item, idx) => (
              <option value={item.value} key={idx}>
                {item.label}
              </option>
            ))}
          </Select>
        </FormControl>
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

export default StudentD;

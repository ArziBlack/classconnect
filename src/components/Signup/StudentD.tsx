import CButton from "../Button";
import { Box, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { states } from "../../typings/states";
import { IStudentProps } from "../../typings/home";

const StudentD: React.FC<IStudentProps> = ({ onClick, onChange }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(
    null
  );

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
          >
            <option>{selectedCountry}</option>
            {countries && countries?.map((country, idx) => (
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
          <Select name="state" onChange={onChange}>
            {states.map((item, idx) => (
              <option value={item.value} key={idx}>
                {item.label}
              </option>
            ))}
          </Select>
        </FormControl>
      </Box>
      <CButton
        my={4}
        text="Next"
        width="full"
        onClick={() => onClick("pagefive")}
      />
    </>
  );
};

export default StudentD;

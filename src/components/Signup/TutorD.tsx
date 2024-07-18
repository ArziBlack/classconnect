import CButton from "../Button";
import { Box, Flex, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { states } from "../../typings/states";
import { ITutorProps } from "../../typings/home";
import InputField from "../Input";

const TutorD: React.FC<ITutorProps> = ({
  data,
  onClick,
  onChange,
  setFormData,
}) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry] = useState(null);

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        console.log("Data Country: ", data.countries);
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
            onChange={(e) => {
              setFormData((prevState) => ({
                ...prevState,
                state: "",
              }));
              onChange(e);
            }}
            placeholder="Select a country"
            value={data.country}
          >
            {/* <option>{selectedCountry}</option> */}
            <option>{selectedCountry?.userCountryCode}</option>
            {countries &&
              countries?.map((country, idx) => (
                <option key={idx} value={country.label.split(" ")[1]}>
                  {country.label}
                </option>
              ))}
          </Select>
        </FormControl>
      </Box>
      <Box w="100%" mb={3}>
        <FormControl>
          {data.country === "Nigeria" ? (
            <>
              <FormLabel fontWeight="bold" fontSize="15px">
                State
              </FormLabel>
              <Select
                name="state"
                onChange={onChange}
                placeholder="Select a state"
                value={data.state}
              >
                {states.map((item, idx) => (
                  <option value={item.value} key={idx}>
                    {item.label}
                  </option>
                ))}
              </Select>
            </>
          ) : (
            <InputField
              id="state"
              name="state"
              label="State"
              type="text"
              onChange={onChange}
              value={data.state}
              placeholder="Enter state"
            />
          )}
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

export default TutorD;

import CButton from "../Button";
import { Box, FormControl, FormLabel } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Select1 from "react-select";
import { FaRegUser } from "react-icons/fa6";
import { states, genders } from "../../typings/states";

// import { SignupProps } from '../../typings/home'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PageA = ({ data, onChange, onClick }: any) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState<object>({});

  const [selectedState, setSelectedState] = useState<object>({
    value: "abia",
    label: "Abia",
  });
  const [selectedGender, setSelectedGender] = useState<object>({
    value: "male",
    label: "Male",
  });

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
            Gender
          </FormLabel>
          <Select1
            options={genders}
            value={selectedGender}
            onChange={(selectedOption: object) =>
              setSelectedGender(selectedOption)
            }
          ></Select1>
        </FormControl>
      </Box>
      <Box w="100%" mb={3}>
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
      <Box w="100%" mb={3}>
        <FormControl>
          <FormLabel fontWeight="bold" fontSize="15px">
            State
          </FormLabel>
          <Select1
            options={states}
            value={selectedState}
            onChange={(selectedOption: object) =>
              setSelectedState(selectedOption)
            }
          ></Select1>
        </FormControl>
      </Box>
      <CButton
        my={4}
        text="Next"
        width="full"
        onClick={() => onClick("pagethree")}
      />
    </>
  );
};

export default PageA;

import CButton from "../Button";
import { Box, FormControl, FormLabel } from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import Select1, { SingleValue } from "react-select";
import { states, genders } from "../../typings/states";
import { IGuardian, IStudent } from "../../typings/signup";

interface SelectOption {
  value: string;
  label: string;
}

interface PageAProps {
  onClick: (page: string) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  data: IGuardian | IStudent;
}

const StudentD: React.FC<PageAProps> = ({ onClick }) => {
  const [countries, setCountries] = useState<SelectOption[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<SelectOption | null>(null);
  const [selectedState, setSelectedState] = useState<SelectOption>({
    value: "abia",
    label: "Abia",
  });
  const [selectedGender, setSelectedGender] = useState<SelectOption>({
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
            onChange={(selectedOption: SingleValue<SelectOption>) =>
              setSelectedGender(selectedOption as SelectOption)
            }
          />
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
            onChange={(selectedOption: SingleValue<SelectOption>) =>
              setSelectedCountry(selectedOption as SelectOption)
            }
          />
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
            onChange={(selectedOption: SingleValue<SelectOption>) =>
              setSelectedState(selectedOption as SelectOption)
            }
          />
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

export default StudentD;

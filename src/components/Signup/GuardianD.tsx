import CButton from "../Button";
import { Box, Select } from "@chakra-ui/react";
import { IGuardianProps } from "../../typings/home";
import { ICountry, IGender, IState } from "../../typings/signup";
import axios from "axios";
import { useEffect, useState } from "react";
import InputField from "../Input";
import { FaRegUser } from "react-icons/fa6";

const GuardianD = ({ data, onChange, onClick }: IGuardianProps) => {
  const [countries, setCountries] = useState<ICountry | null>(null);
  const [states, setStates] = useState<IState[]>([]);
  const [, setLoading] = useState<boolean>(true);
  const [, setStateLoading] = useState<boolean>(false);
  
  const gender: IGender[] = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get<ICountry>(
          "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
        );
        setCountries(response.data);
        setLoading(false);
        console.log(response.data);
        
      } catch (error) {
        console.error("Error fetching countries:", error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    if (data.country) {
      const fetchStates = async () => {
        setStateLoading(true);
        try {
          const response = await axios.get<IState[]>(
            `https://api.example.com/states?countryCode=${data.country}`
          );
          setStates(response.data);
          setStateLoading(false);
        } catch (error) {
          console.error("Error fetching states:", error);
          setStateLoading(false);
        }
      };

      fetchStates();
    } else {
      setStates([]);
    }
  }, [data.country]);

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
        <Select
          name="country"
          onChange={onChange}
          placeholder="Select a country"
        >
          {countries.countries?.map((country, idx) => (
            <option key={idx} value={country.value}>
              {country.label}
            </option>
          ))}
        </Select>
      </Box>
      <Box w="100%" mb={3}>
        <Select name="state" onChange={onChange} placeholder="Select a state">
          {states.map((state, idx) => (
            <option key={idx} value={state.name}>
              {state.name}
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
      <CButton
        my={3}
        text="Next"
        width="full"
        onClick={() => onClick("pagefive")}
      />
    </>
  );
};

export default GuardianD;

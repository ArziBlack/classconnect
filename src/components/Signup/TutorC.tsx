import { Box, Flex } from "@chakra-ui/layout";
import { ITutorProps } from "../../typings/home";
import InputField from "../Input";
import CButton from "../Button";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { IGender } from "../../typings/signup";
import { CiPhone } from "react-icons/ci";
import Input from "../Input";

const TutorC = ({ data, onChange, onClick }: ITutorProps) => {
  const gender: IGender[] = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  return (
    <>
      {" "}
      <FormControl mt={4}>
        <FormLabel fontWeight="bold" fontSize="15px">
          Date of Birth
        </FormLabel>
        <Input
          type="date"
          name="dateOfBirth"
          value={
            data.dateOfBirth
              ? new Date(data.dateOfBirth).toISOString().split("T")[0]
              : ""
          }
          onChange={onChange}
        />
      </FormControl>
      <Box w="100%" py={3}>
        <FormControl>
          <FormLabel fontWeight="bold" fontSize="15px">
            Gender
          </FormLabel>
          <Select
            onChange={onChange}
            mb="1px"
            name="sex"
            placeholder="Select a Gender"
            value={data.sex}
          >
            {gender.map((item, idx) => (
              <option key={idx} value={item.value}>
                {item.label}
              </option>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box w="100%" mb={3}>
        <InputField
          required
          type="number"
          name="phoneNum"
          label="Phone number"
          onChange={onChange}
          value={data.phoneNum}
          icon={CiPhone}
          placeholder="+234 123 456 789"
        />
      </Box>
      <Flex gap={5}>
        <CButton
          my={3}
          w={"full"}
          text="Back"
          onClick={() => onClick("pagetwo")}
        />
        <CButton
          my={3}
          w={"full"}
          text="Next"
          onClick={() => onClick("pagefour")}
        />
      </Flex>
    </>
  );
};

export default TutorC;

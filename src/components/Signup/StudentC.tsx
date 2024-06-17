import { Box, Flex } from "@chakra-ui/layout";
import { IStudentProps } from "../../typings/home";
import InputField from "../Input";
import CButton from "../Button";
import { IoMailOutline } from "react-icons/io5";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { IGender } from "../../typings/signup";

const StudentC = ({ data, onChange, onClick }: IStudentProps) => {
  const gender: IGender[] = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  return (
    <>
      <Box w="100%" mb={3}>
        <FormControl>
          <FormLabel fontWeight="bold" fontSize="15px">
            Gender
          </FormLabel>
          <Select
            onChange={onChange}
            mb="1px"
            name="sex"
            placeholder="Select a Gender"
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
          name="student_phoneNum"
          label="Email"
          onChange={onChange}
          value={data.student_phoneNum}
          icon={IoMailOutline}
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

export default StudentC;

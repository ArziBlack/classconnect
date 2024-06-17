import CButton from "../Button";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Flex,
} from "@chakra-ui/react";
import { IGuardianProps } from "../../typings/home";
import MultipleSelectDropdown from "../Dropdown";
import { useState } from "react";

const GuardianE = ({
  data,
  onChange,
  onClick,
  handleClassTimeOptionsChange,
}: IGuardianProps) => {
  const maxSelections = 4;
  const times: string[] = [
    "Wednesday 5:00pm - 7:00pm WAT",
    "Wednesday 8:00pm - 10:00pm WAT",
    "Saturday 5:00pm - 7:00pm WAT",
    "Saturday 8:00pm - 10:00pm WAT",
    "Saturday 10:00am - 12:00noon WAT",
    "Sunday 10:00am - 12:00noon WAT",
    "Sunday 5:00pm - 7:00pm WAT",
    "Sunday 8:00pm - 10:00pm WAT",
  ];

  const courses: Array<string> = [
    "FRONTEND DEVELOPMENT",
    "BACKEND DEVELOPMENT",
    "CLOUD ENGINEERING",
  ];

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  return (
    <>
      <Box w="100%" mb={3}>
        <FormLabel fontWeight="bold" fontSize="15px">
          Class Time Options
        </FormLabel>
        <MultipleSelectDropdown
          options={times}
          maxSelections={maxSelections}
          onChange={handleClassTimeOptionsChange}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      </Box>
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
      <Box w="100%" mb={3}>
        <FormLabel fontWeight="bold" fontSize="15px" mt="2px">
          Course
        </FormLabel>
        <Select
          onChange={onChange}
          mb="1px"
          name="course"
          placeholder="Select a Course"
        >
          {courses.map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </Box>
      <Flex gap={5}>
        <CButton
          my={3}
          w={"full"}
          text="Back"
          onClick={() => onClick("pagefour")}
        />
        <CButton
          my={3}
          w={"full"}
          text="Next"
          onClick={() => onClick("pagesix")}
        />
      </Flex>
    </>
  );
};

export default GuardianE;

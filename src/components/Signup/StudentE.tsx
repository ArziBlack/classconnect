import CButton from "../Button";
import { Box, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import MultipleSelectDropdown from "../Dropdown";
import { IStudentProps } from "../../typings/home";
import { useState } from "react";

const StudentE = ({
  onClick,
  onChange,
  data,
  handleClassTimeOptionsChange,
}: IStudentProps) => {
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
    "Python for Beginners",
    "Python for Intermediate",
    "Python for Advanced",
    "JavaScript for Beginners",
    "JavaScript for Intermediate",
    "JavaScript for Advanced",
  ];

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  return (
    <>
      <Box w="100%" mb={3}>
        <FormLabel>Class Time Options</FormLabel>
        <MultipleSelectDropdown
          options={times}
          maxSelections={maxSelections}
          onChange={handleClassTimeOptionsChange}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      </Box>
      <FormControl mt={4}>
        <FormLabel>Date of Birth</FormLabel>
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
        <FormLabel mt="2px">Course</FormLabel>
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
      <CButton
        my={3}
        text="Next"
        width="full"
        onClick={() => onClick("pagesix")}
      />
    </>
  );
};

export default StudentE;
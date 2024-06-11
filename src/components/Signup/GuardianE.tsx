import CButton from "../Button";
import InputField from "../Input";
import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { IoMailOutline } from "react-icons/io5";
import { IGuardianProps } from "../../typings/home";
import MultipleSelectDropdown from "../Dropdown";
import { useState } from "react";

const GuardianE = ({
  data,
  onChange,
  onClick,
  handleClassTimeOptionsChange,
}: IGuardianProps) => {
  // DOB, course, paymentPlan, class_type
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

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  return (
    <>
      <Box w="100%" mb={3}>
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
        <InputField
          required
          type="email"
          name="student_email"
          label="Student Email"
          onChange={onChange}
          value={data.student_email}
          icon={IoMailOutline}
          placeholder="guardian@email.com"
        />
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

export default GuardianE;

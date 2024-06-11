import CButton from "../Button";
import InputField from "../Input";
import { Box } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { IGuardianProps } from "../../typings/home";
import MultipleSelectDropdown from "../Dropdown";
import { useState } from "react";

const GuardianE = ({ data, onChange, onClick, handleClassTimeOptionsChange }: IGuardianProps) => {
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
    "Sunday 8:00pm - 10:00pm WAT"
];

const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  return (
    <>
      <Box w="100%" mb={3}>
        <MultipleSelectDropdown options={times} maxSelections={maxSelections} onChange={handleClassTimeOptionsChange} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
      </Box>
      <Box w="100%" mb={3}>
        <InputField
          required
          type="text"
          name="last_name"
          icon={FaRegUser}
          label="Student Last Name"
          placeholder="Milton"
          onChange={onChange}
          value={data.last_name}
        />
      </Box>
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
  )
}

export default GuardianE
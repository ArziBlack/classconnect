import CButton from "../Button";
import InputField from "../Input";
import { Box, Select } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { IGuardianProps } from "../../typings/home";
import { ISalutation } from "../../typings/signup";

const GuardianC = ({ data, onChange, onClick }: IGuardianProps) => {
  
  const salutation: ISalutation[] = [
    { value: "Mr", label: "Mr" },
    { value: "Mrs", label: "Mrs" },
    { value: "Ms", label: "Ms" },
    { value: "Dr", label: "Dr" },
  ];

  return (
    <>
      <Box w="100%" mb={3}>
        <Select onChange={onChange} mb="1px" name="salutation">
          <option>Select Salutation</option>
          {salutation.map((item, idx) => (
            <option key={idx} value={item.value}>
              {item.label}
            </option>
          ))}
        </Select>
        <InputField
          required
          type="text"
          name="first_name"
          icon={FaRegUser}
          placeholder="John"
          label="Student First Name"
          onChange={onChange}
          value={data.first_name}
        />
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
        onClick={() => onClick("pagefour")}
      />
    </>
  );
};

export default GuardianC;

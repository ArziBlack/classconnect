import CButton from "../Button";
import InputField from "../Input";
import { Box, Select } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { IStudentProps } from '../../typings/home';
import { ISalutation } from "../../typings/signup";

const StudentA = ({ data, onChange, onClick }: IStudentProps) => {

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
          label="First Name"
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
          label="Last Name"
          placeholder="Doe"
          onChange={onChange}
          value={data.last_name}
        />
      </Box>
      <Box w="100%" mb={3}>
        <InputField
          required
          type="email"
          name="student_email"
          label="Email"
          onChange={onChange}
          value={data.student_email}
          icon={IoMailOutline}
          placeholder="johndoe@email.com"
        />
      </Box>
      <CButton
        my={3}
        text="Next"
        width="full"
        onClick={() => onClick("pagetwo")}
      />
    </>
  );
};

export default StudentA;

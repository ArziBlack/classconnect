import CButton from "../Button";
import InputField from "../Input";
import { Box } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { IGuardianProps } from "../../typings/home";

const GuardianA = ({ data, onChange, onClick }: IGuardianProps) => {
  return (
    <>
      <Box w="100%" mb={3}>
        <InputField
          required
          type="text"
          name="parent_name"
          icon={FaRegUser}
          placeholder="John"
          label="Guardian Full Name"
          onChange={onChange}
          value={data.parent_name}
        />
      </Box>
      <Box w="100%" mb={3}>
        <InputField
          required
          type="number"
          name="parent_phoneNum"
          icon={FaRegUser}
          label="Guardian Phone No"
          placeholder="+2349037289192"
          onChange={onChange}
          value={data.parent_phoneNum}
        />
      </Box>
      <Box w="100%" mb={3}>
        <InputField
          required
          type="email"
          name="parent_email"
          label="Guardian_Email"
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
        onClick={() => onClick("pagetwo")}
      />
    </>
  );
};

export default GuardianA;

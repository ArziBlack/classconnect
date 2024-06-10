import CButton from "../Button";
import InputField from "../Input";
import { Box } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { IGuardianProps } from "../../typings/home";

const GuardianC = ({ data, onChange, onClick }: IGuardianProps) => {
  return (
    <>
      <Box w="100%" mb={3}>
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
          label="Guardian Phone No"
          placeholder="Milton"
          onChange={onChange}
          value={data.last_name}
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
  )
}

export default GuardianC
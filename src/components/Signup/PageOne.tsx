import CButton from "../Button";
import InputField from "../Input";
import { Box } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { SignupProps } from '../../typings/home'

const PageOne = ({ data, onChange, onClick }: SignupProps) => {
  return (
    <>
      <Box w="100%" mb={3}>
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
          name="stutent_email"
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

export default PageOne;

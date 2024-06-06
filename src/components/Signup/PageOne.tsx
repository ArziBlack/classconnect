import CButton from "../Button";
import InputField from "../Input";
import { Box } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

// import { SignupProps } from '../../typings/home'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PageOne = ({ data, onChange, onClick }: any) => {
  return (
    <>
      <Box w="100%" mb={3}>
        <InputField
          required
          type="text"
          name="firstName"
          icon={FaRegUser}
          placeholder="John"
          label="First Name"
          onChange={onChange}
          value={data?.firstName}
        />
      </Box>
      <Box w="100%" mb={3}>
        <InputField
          required
          type="text"
          name="lastName"
          icon={FaRegUser}
          label="Last Name"
          placeholder="Doe"
          onChange={onChange}
          value={data?.lastName}
        />
      </Box>
      <Box w="100%" mb={3}>
        <InputField
          required
          type="email"
          name="email"
          label="Email"
          onChange={onChange}
          value={data?.email}
          icon={IoMailOutline}
          placeholder="johndoe@email.com"
        />
      </Box>

      <CButton
        my={4}
        text="Next"
        width="full"
        onClick={() => onClick("pagetwo")}
      />
    </>
  );
};

export default PageOne;

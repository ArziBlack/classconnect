import CButton from "../Button";
import InputField from "../Input";
import { Box, Flex } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { IStudentProps } from "../../typings/home";
// import { ISalutation } from "../../typings/signup";

const StudentA = ({ data, onChange, onClick, typeModal }: IStudentProps) => {
const { first_name, last_name, student_email} = data;
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
          name="student_email"
          label="Email"
          onChange={onChange}
          value={data.student_email}
          icon={IoMailOutline}
          placeholder="johndoe@email.com"
        />
      </Box>
      <Flex gap={5}>
        <CButton my={3} w={"full"} text="Back" onClick={typeModal} />
        <CButton
          my={3}
          w={"full"}
          text="Next"
          onClick={() => onClick("pagetwo")}
          isDisabled={!first_name || !last_name || !student_email}
        />
      </Flex>
    </>
  );
};

export default StudentA;

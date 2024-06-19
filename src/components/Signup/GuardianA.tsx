import CButton from "../Button";
import InputField from "../Input";
import { Box, Flex } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { IGuardianProps } from "../../typings/home";

const GuardianA = ({ data, onChange, onClick, typeModal }: IGuardianProps) => {
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
          label="Guardian Email"
          onChange={onChange}
          value={data.student_email}
          icon={IoMailOutline}
          placeholder="guardian@email.com"
        />
      </Box>

      <Flex gap={5}>
        <CButton my={3} w={"full"} text="Back" onClick={typeModal} />
        <CButton
          my={3}
          w={"full"}
          text="Next"
          onClick={() => onClick("pagetwo")}
        />
      </Flex>
    </>
  );
};

export default GuardianA;

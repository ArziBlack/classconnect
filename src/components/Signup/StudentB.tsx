import { IStudentProps } from "../../typings/home";
import CButton from "../Button";
import InputField from "../Input";
import { Box } from "@chakra-ui/react";
import { IoLockClosedOutline } from "react-icons/io5";

const StudentB = ({ data, onChange, onClick }: IStudentProps) => {
  return (
    <>
      <Box w="100%" mb={3}>
        <InputField
          id="Password"
          name="password"
          label="Password"
          type="password"
          onChange={onChange}
          showPasswordToggle
          value={data.password}
          icon={IoLockClosedOutline}
          placeholder="************"
        />
      </Box>
      <Box w="100%" mb={6}>
        <InputField
          id="Password2"
          name="password2"
          label="Confirm Password"
          type="password"
          onChange={onChange}
          showPasswordToggle
          value={data.confirm_password}
          icon={IoLockClosedOutline}
          placeholder="************"
        />
        <Box
          pt="20px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <CButton
            my={4}
            text="Next"
            width="full"
            onClick={() => onClick("pagethree")}
          />
        </Box>
      </Box>
    </>
  );
};

export default StudentB;
import CButton from "../Button";
import InputField from "../Input";
import { Box } from "@chakra-ui/react";
import { IoLockClosedOutline } from "react-icons/io5";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StudentB = ({ password, password2, onChange, onClick }: any) => {
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
          value={password}
          icon={IoLockClosedOutline}
          placeholder="************"
        />
        {/* <PasswordStrengthBar password={password} minLength='4' scoreWords={['Weak', 'Weak', 'Good', 'Strong', 'Perfect']} shortScoreWord='Too short' /> */}
      </Box>
      <Box w="100%" mb={6}>
        <InputField
          id="Password2"
          name="password2"
          label="Confirm Password"
          type="password"
          onChange={onChange}
          showPasswordToggle
          value={password2}
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
            onClick={() => onClick("pagefour")}
          />
        </Box>
      </Box>
    </>
  );
};

export default StudentB;

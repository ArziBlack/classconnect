import { IStudentProps } from "../../typings/home";
import CButton from "../Button";
import InputField from "../Input";
import { Box, Flex } from "@chakra-ui/react";
import { IoLockClosedOutline } from "react-icons/io5";
import zxcvbn from "zxcvbn";

const PasswordStrengthBar = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;

  const createPassLabel = () => {
    switch (testResult.score) {
      case 0:
        return "Very Weak";
      case 1:
        return "Weak";
      case 2:
        return "Fair";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "";
    }
  };

  const progressColor = () => {
    switch (testResult.score) {
      case 0:
        return "#e74c3c";
      case 1:
        return "#e67e22";
      case 2:
        return "#f1c40f";
      case 3:
        return "#2ecc71";
      case 4:
        return "#27ae60";
      default:
        return "none";
    }
  };

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: progressColor(),
    height: "5px",
  });

  return (
    <div className="mt-[10px]">
      <div
        className="w-full bg-[#e0e0e0]"
        style={{ height: "5px", background: "#e0e0e0" }}
      >
        <div style={changePasswordColor()} />
      </div>
      <p className="text-[12px]">
        Your password is {""} {createPassLabel()}
      </p>
    </div>
  );
};

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
        <PasswordStrengthBar password={data.password} />
      </Box>
      <Box w="100%" mb={6}>
        <InputField
          id="Password2"
          label="Confirm Password"
          type="password"
          showPasswordToggle
          value={data.confirm_password}
          icon={IoLockClosedOutline}
          placeholder="************"
        />
        <Flex gap={5}>
          <CButton
            my={3}
            w={"full"}
            text="Back"
            onClick={() => onClick("pageone")}
          />
          <CButton
            my={3}
            w={"full"}
            text="Next"
            onClick={() => onClick("pagethree")}
          />
        </Flex>
      </Box>
    </>
  );
};

export default StudentB;

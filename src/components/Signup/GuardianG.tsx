import { useState } from "react";
import { Box, Checkbox, Text, useToast } from "@chakra-ui/react";
import { IGuardianProps } from "../../typings/home";
import CButton from "../Button";
import { ImageUpload } from "../ImageUpload";
import { useAppDispatch } from "../../hooks/reactReduxHooks";
import { login } from "../../services/auth/authSlice";
import { IGuardian } from "../../typings/signup";

const GuardianG = ({ setGuardianData, isGuardian, onChange, data }: IGuardianProps) => {
  const toast = useToast();
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  const handleCheckBoxToggle = () => {
    setIsChecked(!isChecked);
  };

  const validateGuardianData = (data: IGuardian): boolean => {
    const fieldNames: { [key: string]: string } = {
      first_name: "First Name",
      last_name: "Last Name",
      student_email: "Student Email",
      sex: "Sex",
      country: "Country",
      state: "State",
      course: "Course",
      dateOfBirth: "Date of Birth",
      classTime_options: "Class Time Options",
      payment_plan: "Payment Plan",
      class_type: "Class Type",
      salutation: "Salutation",
      parent_name: "Parent Name",
      parent_phoneNum: "Parent Phone Number",
      parent_email: "Parent Email",
      password: "Password",
      profileImage: "Profile Image",
      student_phoneNum: "Student Phone Number",
    };

    for (const key in fieldNames) {
      if (data[key as keyof IGuardian] === null) {
        toast({
          title: "Error",
          description: `${fieldNames[key]} cannot be null.`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return false;
      }
    }

    if (!data.agreement_status) {
      toast({
        title: "Error",
        description: "Agreement status must be true.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (validateGuardianData(data)) {
      dispatch(login(data));
    } else {
      toast({
        title: "Error Signing You Up",
        description: "No Field can be left blank!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Box w="100%" mb={3}>
        <ImageUpload setGuardianData={setGuardianData} isGuardian={isGuardian} />
      </Box>
      <Box display="flex" mb={6} gap={2} onClick={handleCheckBoxToggle}>
        <Checkbox
          isChecked={isChecked}
          onChange={onChange}
          name="agreement_status"
        />
        <Text fontSize="14px">
          By creating an account, you agree to our{" "}
          <Text
            display="inline-block"
            cursor="pointer"
            _hover={{ color: "brand.action" }}
          >
            Terms & Conditions and Privacy Policy
          </Text>
        </Text>
      </Box>
      <CButton
        my={3}
        text="Submit"
        width="full"
        onClick={handleSubmit}
        isDisabled={!isChecked}
      />
    </>
  );
};

export default GuardianG;

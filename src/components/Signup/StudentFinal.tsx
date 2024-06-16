import { useState } from "react";
import { Box, Text, Checkbox, useToast } from "@chakra-ui/react";
import CButton from "../Button";
import { IStudentProps } from "../../typings/home";
import { ImageUpload } from "../ImageUpload";
import { useAppDispatch, useAppSelector } from "../../hooks/reactReduxHooks";
import { IStudent } from "../../typings/signup";
import { register } from "../../services/auth/authSlice";

const StudentFinal = ({
  onChange,
  setFormData,
  isGuardian,
  data,
}: IStudentProps) => {
  const toast = useToast();
  const [check, setCheck] = useState(true);
  const { isLoading, isError, isSuccess, message } = useAppSelector(
    (state) => state.auth
  );

  const dispatch = useAppDispatch();

  function handleCheckBox() {
    setCheck(!check);
    if (check) {
      console.log("I was checked");
    } else {
      console.log("You just unchecked me");
    }
  }

  const validateGuardianData = (data: IStudent): boolean => {
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
      password: "Password",
      profileImage: "Profile Image",
      student_phoneNum: "Student Phone Number",
    };

    for (const key in fieldNames) {
      if (data[key as keyof IStudent] === null) {
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

  const handleSubmit = async () => {
    if (validateGuardianData(data)) {
      await dispatch(register(data));
      isSuccess &&
        toast({
          title: "Account created successfully",
          description: "Please check your email for more details",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

      isError &&
        toast({
          title: "Error Signing You Up",
          description: message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
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
        <ImageUpload setFormData={setFormData} isGuardian={isGuardian} />
      </Box>
      <Box display="flex" mb={6} gap={2} onClick={handleCheckBox}>
        <Checkbox
          defaultChecked
          onChange={onChange}
          name="agreement_status"
        ></Checkbox>
        <Text fontSize="14px">
          By creating an account, you agree to our{" "}
          <Text
            display={"inline-block"}
            cursor={"pointer"}
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
        isLoading={isLoading}
        onClick={handleSubmit}
        isDisabled={check ? false : true}
      />
    </>
  );
};

export default StudentFinal;

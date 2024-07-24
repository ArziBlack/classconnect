import CButton from "../Button";
import { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AVATAR } from "../../constants/icon";
import { IGuardian } from "../../typings/signup";
import { IGuardianProps } from "../../typings/home";
import { register } from "../../services/auth/authSlice";
import { Box, Checkbox, Text, useToast, Flex } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../hooks/reactReduxHooks";

const validationSchema = Yup.object({
  profileImage: Yup.mixed().required("Profile Image is required"),
  agreement_status: Yup.boolean().oneOf(
    [true],
    "Agreement status must be true"
  ),
});

const GuardianG = ({
  setGuardianData,
  // isGuardian,
  onChange,
  onClick,
  data,
}: IGuardianProps) => {
  const toast = useToast();
  const { URL: URI } = useAppSelector((store) => store.other);
  const { isLoading, isError, message, isSuccess } = useAppSelector(
    (state) => state.auth
  );
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const [imgUrl, setImgUrl] = useState(AVATAR);

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

  const handleSubmit = async () => {
    if (validateGuardianData(data)) {
      await dispatch(register({ URI, data }));
      isSuccess &&
        toast({
          title: "Account created successfully",
          description: "Please check your child's email for more details",
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

  const imgRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFieldValue) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImgUrl(URL.createObjectURL(file));
      setFieldValue("profileImage", file);
      setGuardianData((prevState) => ({
        ...prevState,
        profileImage: file,
      }));
    }
  };

  const openFile = () => {
    imgRef?.current?.click();
  };

  return (
    <Formik
      initialValues={data}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, isValid }) => (
        <Form>
          <div className="flex flex-col items-center mb-8">
            <div
              onClick={openFile}
              className="relative rounded-full overflow-hidden cursor-pointer opacity-65 hover:opacity-80"
            >
              <div className="text-xs bottom-0 h-[25%] w-full absolute bg-[#979292] opacity-60 text-center text-[#000000] font-bold pt-1">
                Image
              </div>
              <img
                alt="profile image"
                className="rounded-full w-[100px] h-[100px] object-cover"
                src={imgUrl}
              />
              <input
                type="file"
                ref={imgRef}
                max={1000}
                className="hidden"
                onChange={(e) => handleFileChange(e, setFieldValue)}
                accept="image/png, image/jpg, image/jpeg"
              />
            </div>
          </div>
          <Box display="flex" mb={6} gap={2} onClick={handleCheckBoxToggle}>
            <Field name="agreement_status">
              {({ field }) => (
                <Checkbox
                  {...field}
                  // isChecked={isChecked}
                  isChecked={data.agreement_status}
                  onChange={(e) => {
                    onChange(e);
                    field.onChange(e);
                    setFieldValue("agreement_status", e.target.checked);
                  }}
                  name="agreement_status"
                />
              )}
            </Field>
            <Text fontSize="12px">
              By creating an account, you agree to our{" "}
              <Text
                display="inline"
                cursor="pointer"
                _hover={{
                  textDecoration: "underline",
                  textDecorationColor: "brand.action",
                }}
              >
                Terms & Conditions and Privacy Policy
              </Text>
            </Text>
          </Box>
          <ErrorMessage
            name="agreement_status"
            component="div"
            className="!text-[#e53e3e] !text-xs mt-1"
          />
          <Flex gap={5}>
            <CButton
              my={3}
              w={"full"}
              text="Back"
              onClick={() => onClick("pagesix")}
            />
            <CButton
              my={3}
              text="Submit"
              width="full"
              isLoading={isLoading}
              type="submit"
              isDisabled={!isValid}
            />
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default GuardianG;

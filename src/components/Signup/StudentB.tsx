import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CButton from "../Button";
import InputField from "../Input";
import { Box, Flex } from "@chakra-ui/react";
import { IoLockClosedOutline } from "react-icons/io5";
import zxcvbn from "zxcvbn";
import { IStudentProps } from "../../typings/home";

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

const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const StudentB = ({ data, onChange, onClick }: IStudentProps) => {
  const handlePasswordChange = (password: string) => {
    const syntheticEvent = {
      target: {
        name: "password",
        value: password,
      },
    } as React.ChangeEvent<HTMLInputElement>;

    onChange(syntheticEvent);
  };
  return (
    <Formik
      initialValues={{ password: data.password, confirmPassword: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handlePasswordChange(values.password);
        onClick("pagethree");
      }}
    >
      {({ isValid }) => (
        <Form>
          <Box w="100%" mb={3}>
            <Field
              name="password"
              render={({ field, form }) => (
                <>
                  <InputField
                    {...field}
                    type="password"
                    icon={IoLockClosedOutline}
                    placeholder="************"
                    label="Password"
                    onChange={(e) => {
                      field.onChange(e);
                      onChange(e);
                    }}
                    showPasswordToggle
                    value={field.value}
                    error={
                      form.errors.password && form.touched.password
                        ? form.errors.password
                        : null
                    }
                  />
                  <PasswordStrengthBar password={field.value} />
                </>
              )}
            />
          </Box>
          <Box w="100%" mb={6}>
            <Field
              name="confirmPassword"
              render={({ field, form }) => (
                <InputField
                  {...field}
                  type="password"
                  icon={IoLockClosedOutline}
                  placeholder="************"
                  label="Confirm Password"
                  showPasswordToggle
                  value={field.value}
                  error={
                    form.errors.confirmPassword && form.touched.confirmPassword
                      ? form.errors.confirmPassword
                      : null
                  }
                />
              )}
            />
          </Box>
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
              type="submit"
              isDisabled={!isValid}
            />
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default StudentB;

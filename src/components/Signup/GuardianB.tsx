import CButton from "../Button";
import InputField from "../Input";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Box, Flex } from "@chakra-ui/react";
import { IoLockClosedOutline } from "react-icons/io5";
import zxcvbn from "zxcvbn";
import { IGuardianProps } from "../../typings/home";

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
      <p>{createPassLabel()}</p>
    </div>
  );
};

const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/^\S*$/, "Password must not contain spaces")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const GuardianB = ({ data, onChange, onClick }: IGuardianProps) => {
  const { password } = data;
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
      initialValues={{ password: password, confirmPassword: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handlePasswordChange(values.password);
        onClick("pagethree");
      }}
    >
      {({ isValid }) => (
        <Form>
          <Box w="100%" mb={3}>
            <Field name="password">
              {({ field, form }) => (
                <InputField
                  {...field}
                  id="Password"
                  name="password"
                  label="Password"
                  type="password"
                  onChange={(e) => {
                    field.onChange(e);
                    onChange(e);
                  }}
                  showPasswordToggle
                  value={field.value}
                  icon={IoLockClosedOutline}
                  placeholder="************"
                  error={
                    form.errors.password && form.touched.password
                      ? form.errors.password
                      : null
                  }
                />
              )}
            </Field>
            <PasswordStrengthBar password={data.password} />
          </Box>
          <Box w="100%" mb={6}>
            <Field name="confirmPassword">
              {({ field, form }) => (
                <InputField
                  {...field}
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  showPasswordToggle
                  value={field.value}
                  icon={IoLockClosedOutline}
                  placeholder="************"
                  error={
                    form.errors.confirmPassword && form.touched.confirmPassword
                      ? form.errors.confirmPassword
                      : null
                  }
                />
              )}
            </Field>
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
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default GuardianB;

import CButton from "../Button";
import InputField from "../Input";
import { Box, Flex } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { ITutorProps } from "../../typings/home";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email address"
    )
    .required("Email is required"),
});

const TutorA = ({ data, onChange, onClick }: ITutorProps) => {
  return (
    <Formik
      initialValues={data}
      validationSchema={validationSchema}
      onSubmit={() => onClick("pagetwo")}
    >
      {({ isValid }) => (
        <Form>
          <Box w="100%" mb={3}>
            <Field name="first_name">
              {({ field, form }) => (
                <InputField
                  {...field}
                  type="text"
                  icon={FaRegUser}
                  placeholder="John"
                  label="First Name"
                  onChange={(e) => {
                    field.onChange(e);
                    onChange(e);
                  }}
                  value={data.first_name}
                  error={
                    form.errors.first_name && form.touched.first_name
                      ? form.errors.first_name
                      : null
                  }
                />
              )}
            </Field>
          </Box>
          <Box w="100%" mb={3}>
            <Field name="last_name">
              {({ field, form }) => (
                <InputField
                  {...field}
                  type="text"
                  icon={FaRegUser}
                  placeholder="Doe"
                  label="Last Name"
                  onChange={(e) => {
                    field.onChange(e);
                    onChange(e);
                  }}
                  value={data.last_name}
                  error={
                    form.errors.last_name && form.touched.last_name
                      ? form.errors.last_name
                      : null
                  }
                />
              )}
            </Field>
          </Box>
          <Box w="100%" mb={3}>
            <Field name="email">
              {({ field, form }) => (
                <InputField
                  {...field}
                  type="email"
                  icon={IoMailOutline}
                  placeholder="johndoe@email.com"
                  label="Email"
                  onChange={(e) => {
                    field.onChange(e);
                    onChange(e);
                  }}
                  value={data.email}
                  error={
                    form.errors.email && form.touched.email
                      ? form.errors.email
                      : null
                  }
                />
              )}
            </Field>
          </Box>
          <Flex gap={5}>
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

export default TutorA;

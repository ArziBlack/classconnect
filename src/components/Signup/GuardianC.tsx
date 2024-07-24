import CButton from "../Button";
import InputField from "../Input";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, Select, Flex } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { IGuardianProps } from "../../typings/home";
import { ISalutation } from "../../typings/signup";

const validationSchema = Yup.object({
  salutation: Yup.string().oneOf(["Mr", "Mrs", "Ms", "Dr"], "Salutation is Required!").required("Gender is Required"),
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  student_email: Yup.string()
    .email("Invalid email address")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email address"
    )
    .required("Email is required"),
})

const GuardianC = ({ data, onChange, onClick }: IGuardianProps) => {
  const salutation: ISalutation[] = [
    { value: "Mr", label: "Mr" },
    { value: "Mrs", label: "Mrs" },
    { value: "Ms", label: "Ms" },
    { value: "Dr", label: "Dr" },
  ];

  return (
    <Formik
      initialValues={data}
      validationSchema={validationSchema}
      onSubmit={() => onClick("pagefour")}
    >
      {({ isValid }) => (
        <Form>
          <Box w="100%" mb={3}>
            <Field name="salutation">
              {({ field, form }) => (
                <Select
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    onChange(e);
                  }}
                  mb="1px"
                  name="salutation"
                  value={data?.salutation}
                  error={
                    form.errors.salutation && form.touched.salutation
                      ? form.errors.salutation
                      : null
                  }>
                  <option>Select Salutation</option>
                  {salutation.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </Select>
              )}
            </Field>
            <ErrorMessage
              className="!text-[#e53e3e] !text-xs mt-1"
              name="salutation"
              component="div"
            />
            <Field name="first_name">
              {({ field, form }) => (
                <InputField
                  required
                  {...field}
                  type="text"
                  name="first_name"
                  icon={FaRegUser}
                  placeholder="John"
                  label="Student First Name"
                  onChange={(e) => {
                    field.onChange(e);
                    onChange(e);
                  }}
                  value={data.first_name}
                  error={
                    form.errors.first_name &&
                      form.touched.first_name
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
                  required
                  type="text"
                  name="last_name"
                  icon={FaRegUser}
                  label="Student Last Name"
                  placeholder="Milton"
                  onChange={(e) => {
                    field.onChange(e);
                    onChange(e);
                  }}
                  value={data.last_name}
                  error={
                    form.errors.last_name &&
                      form.touched.last_name
                      ? form.errors.last_name
                      : null
                  }
                />
              )}
            </Field>
          </Box>
          <Box w="100%" mb={3}>
            <Field name="student_email">
              {({ field, form }) => (
                <InputField
                  required
                  {...field}
                  type="email"
                  name="student_email"
                  label="Student Email"
                  onChange={(e) => {
                    field.onChange(e);
                    onChange(e);
                  }}
                  value={data.student_email}
                  icon={IoMailOutline}
                  placeholder="guardian@email.com"
                  error={
                    form.errors.student_email &&
                    form.touched.student_email
                      ? form.errors.student_email
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
              text="Back"
              onClick={() => onClick("pagetwo")}
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

export default GuardianC;
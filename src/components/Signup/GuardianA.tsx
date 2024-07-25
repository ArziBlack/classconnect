import CButton from "../Button";
import InputField from "../Input";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Box, Flex, Select } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { IGuardianProps } from "../../typings/home";
import { ISalutation } from "../../typings/signup";

const salutation: ISalutation[] = [
  { value: "Mr", label: "Mr" },
  { value: "Mrs", label: "Mrs" },
  { value: "Ms", label: "Ms" },
  { value: "Dr", label: "Dr" },
];

const validationSchema = Yup.object({
  salutation: Yup.string().oneOf(
    ["Mr", "Mrs", "Ms", "Dr"],
    "Salutation is Required!"
  ),
  parent_name: Yup.string().required("Guardian Full Name is Required!"),
  parent_phoneNum: Yup.string()
    .matches(
      /^\+\d{1,3}\d{1,3}\d{3}\d{3,4}$/,
      "Guardian Phone number is not valid"
    )
    .required("Guardian Phone number is required"),
  parent_email: Yup.string()
    .email("Invalid email address")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email address"
    )
    .required("Guardian Email is required"),
});

const GuardianA = ({ data, onChange, onClick, typeModal }: IGuardianProps) => {
  return (
    <Formik
      initialValues={data}
      validationSchema={validationSchema}
      onSubmit={() => onClick("pagetwo")}
    >
      {({ isValid }) => (
        <Form>
          <Box w="100%" mb={3}>
            <Field name="salutation">
              {({ field }) => (
                <Select
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    onChange(e);
                  }}
                  mb="1px"
                  name="salutation"
                  value={data?.salutation}
                >
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
          </Box>
          <Box w="100%" mb={3}>
            <Field name="parent_name">
              {({ field, form }) => (
                <InputField
                  {...field}
                  type="text"
                  name="parent_name"
                  icon={FaRegUser}
                  placeholder="John"
                  label="Guardian Full Name"
                  onChange={(e) => {
                    field.onChange(e);
                    onChange(e);
                  }}
                  value={data.parent_name}
                  error={
                    form.errors.parent_name && form.touched.parent_name
                      ? form.errors.parent_name
                      : null
                  }
                />
              )}
            </Field>
          </Box>
          <Box w="100%" mb={3}>
            <Field name="parent_phoneNum">
              {({ field, form }) => (
                <InputField
                  {...field}
                  type="text"
                  name="parent_phoneNum"
                  icon={FaRegUser}
                  label="Guardian Phone No"
                  placeholder="+2349037289192"
                  onChange={(e) => {
                    field.onChange(e);
                    onChange(e);
                  }}
                  value={data.parent_phoneNum}
                  error={
                    form.errors.parent_phoneNum && form.touched.parent_phoneNum
                      ? form.errors.parent_phoneNum
                      : null
                  }
                />
              )}
            </Field>
          </Box>
          <Box w="100%" mb={3}>
            <Field name="parent_email">
              {({ field, form }) => (
                <InputField
                  {...field}
                  type="email"
                  name="parent_email"
                  label="Guardian Email"
                  onChange={(e) => {
                    field.onChange(e);
                    onChange(e);
                  }}
                  value={data.parent_email}
                  icon={IoMailOutline}
                  placeholder="guardian@email.com"
                  error={
                    form.errors.parent_email && form.touched.parent_email
                      ? form.errors.parent_email
                      : null
                  }
                />
              )}
            </Field>
          </Box>
          <Flex gap={5}>
            <CButton my={3} w={"full"} text="Back" onClick={typeModal} />
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

export default GuardianA;

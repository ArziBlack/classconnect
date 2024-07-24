import CButton from "../Button";
import InputField from "../Input";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Box, Flex } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { IGuardianProps } from "../../typings/home";

const validationSchema = Yup.object({
  parent_name: Yup.string().required("Guardian Full Name is Required!"),
  parent_phoneNum: Yup.number().required("Guardian Phone Number is Required!"),
  parent_email: Yup.string()
    .email("Invalid email address")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email address"
    )
    .required("Email is required"),
})

const GuardianA = ({ data, onChange, onClick, typeModal }: IGuardianProps) => {
  const { parent_name, parent_phoneNum, student_email } = data;
  return (
    <Formik
      initialValues={data}
      validationSchema={validationSchema}
      onSubmit={() => onClick("pagetwo")}>
      {({ isValid }) => (
        <Form>

          <Box w="100%" mb={3}>
            <Field name="parent_name">
              {({ field, form }) => (
                <InputField
                  {...field}
                  required
                  type="text"
                  name="parent_name"
                  icon={FaRegUser}
                  placeholder="John"
                  label="Guardian Full Name"
                  onChange={(e) => { field.onChange(e); onChange(e); }}
                  value={parent_name}
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
                  required
                  type="number"
                  name="parent_phoneNum"
                  icon={FaRegUser}
                  label="Guardian Phone No"
                  placeholder="+2349037289192"
                  onChange={(e) => { field.onChange(e); onChange(e); }}
                  value={parent_phoneNum}
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
              {({ field, form }) => {
                <InputField
                {...field}
                required
                type="email"
                name="parent_email"
                label="Guardian Email"
                onChange={(e) => { field.onChange(e); onChange(e); }}
                value={student_email}
                icon={IoMailOutline}
                placeholder="guardian@email.com"
                error={
                  form.errors.parent_email && form.touched.parent_email
                    ? form.errors.parent_email
                    : null
                }
                />
              }}
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
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, Flex } from "@chakra-ui/layout";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import InputField from "../Input";
import CButton from "../Button";
import { CiPhone } from "react-icons/ci";
import { IStudentProps } from "../../typings/home";
import { IGender } from "../../typings/signup";

const genderOptions: IGender[] = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];

const dateOfBirthSchema = Yup.string()
  .required("Date of Birth is required")
  .test("future-date", "Date of birth cannot be in the future", (value) => {
    if (!value) return true;

    const [year, month, day] = value.split("-");
    const birthDate = new Date(Number(year), Number(month) - 1, Number(day));
    return birthDate <= new Date();
  })
  .test("min-age", "You must be at least 10 years old", (value) => {
    if (!value) return true;

    const [year, month, day] = value.split("-");
    const birthDate = new Date(Number(year), Number(month) - 1, Number(day));
    const tenYearsAgo = new Date();
    tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10);

    return birthDate <= tenYearsAgo;
  });

const validationSchema = Yup.object({
  dateOfBirth: dateOfBirthSchema,
  sex: Yup.string()
    .oneOf(["Male", "Female"], "Gender is required")
    .required("Gender is required"),
  student_phoneNum: Yup.string()
    .matches(/^\+\d{1,3}\d{1,3}\d{3}\d{3,4}$/, "Phone number is not valid")
    .required("Phone number is required"),
});

const StudentC = ({ data, onChange, onClick }: IStudentProps) => {
  return (
    <Formik
      initialValues={data}
      validationSchema={validationSchema}
      onSubmit={() => {
        onClick("pagefour");
      }}
    >
      {({ isValid }) => (
        <Form>
          <FormControl mt={4}>
            <FormLabel fontWeight="bold" fontSize="15px">
              Date of Birth
            </FormLabel>
            <Field name="dateOfBirth">
              {({ field, form }) => (
                <InputField
                  {...field}
                  type="date"
                  onChange={(e) => {
                    field.onChange(e);
                    onChange(e);
                  }}
                  value={data.dateOfBirth}
                  error={
                    form.errors.dateOfBirth && form.touched.dateOfBirth
                      ? form.errors.dateOfBirth
                      : null
                  }
                />
              )}
            </Field>
          </FormControl>
          <Box w="100%" py={3}>
            <FormControl>
              <FormLabel fontWeight="bold" fontSize="15px">
                Gender
              </FormLabel>
              <Field name="sex">
                {({ field, form }) => (
                  <Select
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      onChange(e);
                    }}
                    value={data.sex}
                    placeholder="Select a Gender"
                    error={
                      form.errors.sex && form.touched.sex
                        ? form.errors.sex
                        : null
                    }
                  >
                    {genderOptions.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </Select>
                )}
              </Field>
              <ErrorMessage
                className="!text-[#e53e3e] !text-xs mt-1"
                name="sex"
                component="div"
              />
            </FormControl>
          </Box>
          <Box w="100%" mb={3}>
            <Field name="student_phoneNum">
              {({ field, form }) => (
                <InputField
                  {...field}
                  type="text"
                  onChange={(e) => {
                    field.onChange(e);
                    onChange(e);
                  }}
                  value={data.student_phoneNum}
                  label="Phone number"
                  placeholder="+234123456789"
                  icon={CiPhone}
                  error={
                    form.errors.student_phoneNum &&
                    form.touched.student_phoneNum
                      ? form.errors.student_phoneNum
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

export default StudentC;

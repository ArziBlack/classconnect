import { useState } from "react";
import { Box, FormControl, FormLabel, Select, Flex } from "@chakra-ui/react";
import CButton from "../Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MultipleSelectDropdown from "../Dropdown";
import { IGuardianProps } from "../../typings/home";
import { useAppSelector } from "../../hooks/reactReduxHooks";
import InputField from "../Input";

const dateOfBirthSchema = Yup.string()
  .required("Date of Birth is required")
  .test("future-date", "Date of birth cannot be in the future", (value) => {
    if (!value) return true;

    const [year, month, day] = value.split("-");
    const birthDate = new Date(Number(year), Number(month) - 1, Number(day));
    return birthDate <= new Date();
  })
  .test("min-age", "Student must be at least 10 years old", (value) => {
    if (!value) return true;

    const [year, month, day] = value.split("-");
    const birthDate = new Date(Number(year), Number(month) - 1, Number(day));
    const tenYearsAgo = new Date();
    tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10);

    return birthDate <= tenYearsAgo;
  });

const validationSchema = Yup.object({
  classTimeOptions: Yup.array()
    .min(1, "At least one class time option is required")
    .max(4, "You can select up to 4 class time options")
    .required("Class time options are required"),
  dateOfBirth: dateOfBirthSchema,
  course: Yup.string().required("Course is required"),
});

const GuardianE = ({
  data,
  onChange,
  onClick,
  handleClassTimeOptionsChange,
}: IGuardianProps) => {
  const { home } = useAppSelector((from) => from.other);
  const maxSelections = 4;
  const times: string[] = [
    "Wednesday 5:00pm - 7:00pm WAT",
    "Wednesday 8:00pm - 10:00pm WAT",
    "Saturday 5:00pm - 7:00pm WAT",
    "Saturday 8:00pm - 10:00pm WAT",
    "Saturday 10:00am - 12:00noon WAT",
    "Sunday 10:00am - 12:00noon WAT",
    "Sunday 5:00pm - 7:00pm WAT",
    "Sunday 8:00pm - 10:00pm WAT",
  ];

  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    !data?.classTime_options ? [] : data?.classTime_options
  );

  return (
    <Formik
      initialValues={data}
      validationSchema={validationSchema}
      onSubmit={() => onClick("pagesix")}
    >
      {({ isValid, setFieldValue }) => (
        <Form>
          <Box w="100%" mb={3}>
            <FormLabel fontWeight="bold" fontSize="15px">
              Class Time Options
            </FormLabel>
            <Field name="classTimeOptions">
              {() => (
                <MultipleSelectDropdown
                  options={times}
                  maxSelections={maxSelections}
                  onChange={(options) => {
                    handleClassTimeOptionsChange(options);
                    setSelectedOptions(options);
                    setFieldValue("classTimeOptions", selectedOptions);
                  }}
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
              )}
            </Field>
            <ErrorMessage
              className="!text-[#e53e3e] !text-xs mt-1"
              name="classTimeOptions"
              component="div"
            />
          </Box>
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
                  name="dateOfBirth"
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
          <Box w="100%" mb={3}>
            <FormLabel fontWeight="bold" fontSize="15px" mt="2px">
              Course
            </FormLabel>
            <Field name="course">
              {({ field }) => (
                <Select
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    onChange(e);
                  }}
                  mb="1px"
                  name="course"
                  placeholder="Select a Course"
                  className="capitalize"
                  value={data.course}
                >
                  {home?.courses?.map((item, idx) => (
                    <option key={idx} value={item?.title}>
                      {item?.title?.toLowerCase()}
                    </option>
                  ))}
                </Select>
              )}
            </Field>
          </Box>
          <Flex gap={5}>
            <CButton
              my={3}
              w={"full"}
              text="Back"
              onClick={() => onClick("pagefour")}
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

export default GuardianE;

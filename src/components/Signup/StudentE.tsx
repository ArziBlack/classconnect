import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, Flex, FormLabel, Select } from "@chakra-ui/react";
import CButton from "../Button";
import MultipleSelectDropdown from "../Dropdown";
import { IStudentProps } from "../../typings/home";
import { useAppSelector } from "../../hooks/reactReduxHooks";

// Validation Schema using Yup
const validationSchema = Yup.object({
  course: Yup.string().required("Course is required"),
  classTimeOptions: Yup.array()
    .min(1, "At least one class time option is required")
    .max(4, "You can select up to 4 class time options")
    .required("Class time options are required"),
});

const StudentE = ({
  data,
  onClick,
  onChange,
  handleClassTimeOptionsChange,
}: IStudentProps) => {
  const { home } = useAppSelector((dat) => dat.other);
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

  const maxSelections = 4;
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    !data?.classTime_options ? [] : data?.classTime_options
  );

  return (
    <Formik
      initialValues={data}
      validationSchema={validationSchema}
      onSubmit={() => {
        onClick("pagesix");
      }}
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
          <Box w="100%" mb={3}>
            <FormLabel fontWeight="bold" fontSize="15px" mt="2px">
              Course
            </FormLabel>
            <Field name="course" as="select">
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
                    <option key={idx} value={item?.title?.toString()?.trim()}>
                      {item?.title?.toLowerCase()}
                    </option>
                  ))}
                </Select>
              )}
            </Field>
            <ErrorMessage
              className="!text-[#e53e3e] !text-xs mt-1"
              name="course"
              component="div"
            />
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

export default StudentE;

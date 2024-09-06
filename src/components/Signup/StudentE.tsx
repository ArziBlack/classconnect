import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Box,
  Flex,
  FormLabel,
  Select,
  Text,
  Tag,
  TagLabel,
  TagCloseButton,
} from "@chakra-ui/react";
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
    "Wednesday 5:00pm - 6:00pm WAT",
    "Wednesday 8:00pm - 9:00pm WAT",
    "Saturday 5:00pm - 6:00pm WAT",
    "Saturday 8:00pm - 9:00pm WAT",
    "Saturday 10:00am - 11:00noon WAT",
    "Sunday 10:00am - 11:00noon WAT",
    "Sunday 5:00pm - 6:00pm WAT",
    "Sunday 8:00pm - 9:00pm WAT",
  ];

  const maxSelections = 4;
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    data?.classTime_options || []
  );

  const initialValues = {
    course: data.course || "",
    classTimeOptions: selectedOptions,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => {
        onClick("pagesix");
      }}
    >
      {({ isValid, setFieldValue, values }) => (
        <Form>
          <Box w="100%" mb={3}>
            <FormLabel fontWeight="bold" fontSize="15px" mb={0}>
              Class Time Options
            </FormLabel>
            <Text color="yellow.500" mb={1} fontSize={"xs"}>
              Select at most four (4) time options
            </Text>
            <Field name="classTimeOptions">
              {() => (
                <>
                  <MultipleSelectDropdown
                    options={times}
                    maxSelections={maxSelections}
                    onChange={(options) => {
                      setFieldValue("classTimeOptions", options);
                      setSelectedOptions(options);
                      handleClassTimeOptionsChange(options);
                    }}
                    selectedOptions={values.classTimeOptions}
                    setSelectedOptions={setSelectedOptions}
                  />
                  <Flex wrap="wrap" mt={2} gap={2}>
                    {selectedOptions.map((option, index) => (
                      <Tag
                        key={index}
                        size="md"
                        borderRadius="full"
                        variant="solid"
                        colorScheme="blue"
                        fontWeight={300}
                      >
                        <TagLabel>{option}</TagLabel>
                        <TagCloseButton
                          onClick={() => {
                            const newOptions = selectedOptions.filter(
                              (item) => item !== option
                            );
                            setFieldValue("classTimeOptions", newOptions);
                            setSelectedOptions(newOptions);
                            handleClassTimeOptionsChange(newOptions);
                          }}
                        />
                      </Tag>
                    ))}
                  </Flex>
                </>
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
                  value={values.course}
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

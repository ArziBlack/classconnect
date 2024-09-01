import CButton from "../Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FC } from "react";
import { ITutorProps } from "../../typings/home";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Textarea,
  Text,
} from "@chakra-ui/react";
import InputField from "../Input";

const validationSchema = Yup.object({
  resume: Yup.mixed().required("Resume is required"),
  introduction: Yup.string()
    .min(150, "Introduction must be at least 150 characters")
    .required("Introduction is required"),
});

const TutorF: FC<ITutorProps> = ({ data, onClick, onChange, setFormData }) => {
  const handleResumeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFieldValue("resutme", file);
      setFormData((prevState) => ({
        ...prevState,
        resume: file,
      }));
    }
  };
  return (
    <Formik
      initialValues={data}
      validationSchema={validationSchema}
      onSubmit={() => {
        onClick("pagefinal");
      }}
    >
      {({ setFieldValue, isValid }) => (
        <Form>
          <Box w="100%" mb={3}>
            <FormControl>
              <Field name="resume">
                {({ field, form }) => (
                  <InputField
                    {...field}
                    type="file"
                    name="resume"
                    isFileInput
                    label="Resume"
                    file={data.resume}
                    accept="application/pdf"
                    fileChange={(e) => {
                      field.onChange(e);
                      handleResumeChange(e, setFieldValue);
                    }}
                    placeholder="Upload your updated resume"
                    error={
                      form.errors.file && form.touched.file
                        ? form.errors.file
                        : null
                    }
                  />
                )}
              </Field>
              {/* <ErrorMessage
                className="!text-[#e53e3e] !text-xs mt-1"
                name="file"
                component="div"
              /> */}
            </FormControl>
          </Box>
          <Box w="100%" mb={3}>
            <FormLabel fontWeight="bold" fontSize="15px" mb={0}>
              Introduction
            </FormLabel>
            <Text color="yellow.500" mb={1} fontSize={"xs"}>
              Describe yourself, in at least 150 letters...
            </Text>
            <Field name="introduction">
              {({ field }) => (
                <Textarea
                  {...field}
                  name="introduction"
                  onChange={(e) => {
                    field.onChange(e);
                    onChange(e);
                  }}
                  mb="1px"
                  placeholder="Introduce yourself"
                  value={data?.introduction || ""}
                />
              )}
            </Field>
            <ErrorMessage
              className="!text-[#e53e3e] !text-xs mt-1"
              name="introduction"
              component="div"
            />
          </Box>

          <Flex gap={5}>
            <CButton
              my={3}
              w={"full"}
              text="Back"
              onClick={() => onClick("pagefive")}
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

export default TutorF;

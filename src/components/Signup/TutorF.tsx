import CButton from "../Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FC } from "react";
import { ITutorProps } from "../../typings/home";
import { Box, Flex, FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import InputField from "../Input";

const validationSchema = Yup.object({
  file: Yup.mixed().required("Resume is required"),
  introduction: Yup.string()
    .min(150, "Introduction must be at least 150 characters")
    .required("Introduction is required"),
});

const TutorF: FC<ITutorProps> = ({ data, onClick, onChange, setFormData }) => {
  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
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
      {({ isValid }) => (
        <Form>
          <Box w="100%" mb={3}>
            <FormControl>
              <Field name="file">
                {({ field, form }) => (
                  <InputField
                    {...field}
                    type="file"
                    name="file"
                    label="Resume"
                    accept="application/pdf"
                    onChange={(e) => {
                      field.onChange(e);
                      handleResumeChange(e);
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
            <FormLabel fontWeight="bold" fontSize="15px" mt="2px">
              Introduction
            </FormLabel>
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

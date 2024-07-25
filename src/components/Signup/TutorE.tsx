import { Box, Flex, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CButton from "../Button";
import { ITutorProps } from "../../typings/home";
import { useAppSelector } from "../../hooks/reactReduxHooks";

const validationSchema = Yup.object({
  yearsOfExperience: Yup.string().required("Years of experience is required"),
  specialization: Yup.string().required("Specialization is required"),
});

const TutorE = ({ data, onClick, onChange }: ITutorProps) => {
  const { home } = useAppSelector((dat) => dat.other);
  const yearsOfExperience = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <Formik
      initialValues={data}
      validationSchema={validationSchema}
      onSubmit={() => {
        onClick("pagesix");
      }}
    >
      {({ isValid }) => (
        <Form>
          <Box w="100%" mb={3}>
            <FormControl>
              <FormLabel fontWeight="bold" fontSize="15px" mt="2px">
                Years of Experience
              </FormLabel>
              <Field name="yearsOfExperience">
                {({ field }) => (
                  <Select
                    {...field}
                    name="yearsOfExperience"
                    onChange={(e) => {
                      field.onChange(e);
                      onChange(e);
                    }}
                    mb="1px"
                    placeholder="Select your years of experience"
                    value={data?.yearsOfExperience}
                  >
                    {yearsOfExperience?.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </Select>
                )}
              </Field>
              <ErrorMessage
                className="!text-[#e53e3e] !text-xs mt-1"
                name="yearsOfExperience"
                component="div"
              />
            </FormControl>
          </Box>
          <Box w="100%" mb={3}>
            <FormControl>
              <FormLabel fontWeight="bold" fontSize="15px" mt="2px">
                Specialization
              </FormLabel>
              <Field name="specialization">
                {({ field }) => (
                  <Select
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      onChange(e);
                    }}
                    mb="1px"
                    name="specialization"
                    placeholder="Select your Specialization"
                    className="capitalize"
                    value={data?.specialization}
                  >
                    {home?.courses?.map((item, idx) => (
                      <option key={idx} value={item?.title}>
                        {item?.title?.toLowerCase()}
                      </option>
                    ))}
                  </Select>
                )}
              </Field>
              <ErrorMessage
                className="!text-[#e53e3e] !text-xs mt-1"
                name="specialization"
                component="div"
              />
            </FormControl>
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

export default TutorE;

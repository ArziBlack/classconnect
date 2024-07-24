import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CButton from "../Button";
import { Box, FormControl, FormLabel, Select, Flex } from "@chakra-ui/react";
import { IGuardianProps } from "../../typings/home";
import { states } from "../../typings/states";
import { IGender } from "../../typings/signup";
import { useEffect, useState } from "react";
import InputField from "../Input";
import { FaRegUser } from "react-icons/fa6";

const GuardianD = ({ data, onChange, onClick, setGuardianData }: IGuardianProps) => {
  const gender: IGender[] = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        console.log(data.countries);
        setSelectedCountry(data.userSelectValue);
        console.log(data.userSelectValue);
      });
  }, []);

  const validationSchema = Yup.object({
    sex: Yup.string().oneOf(["Male", "Female"], "Gender is required")
      .required("Gender is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    student_phoneNum: Yup.string()
      .matches(/^\+\d{1,3}\d{1,3}\d{3}\d{3,4}$/, "Phone number is not valid")
      .required("Phone number is required"),
  });

  return (
    <Formik
      initialValues={data}
      validationSchema={validationSchema}
      onSubmit={() => {
        onClick("pagefive");
      }}
    >
      {({ isValid }) => (
        <Form>

          <Box w="100%" mb={3}>
            <FormLabel fontWeight="bold" fontSize="15px">
              Gender
            </FormLabel>
            <Select
              onChange={onChange}
              mb="1px"
              name="gender"
              placeholder="Select a Gender"
            >
              {gender.map((item, idx) => (
                <option key={idx} value={item.value}>
                  {item.label}
                </option>
              ))}
            </Select>
          </Box>
          <Box w="100%" mb={3}>
            <FormControl>
              <FormLabel fontWeight="bold" fontSize="15px">
                Country
              </FormLabel>
              <Field name="country">
                {({ field }) => (
                  <Select
                    {...field}
                    name="country"
                    onChange={(e) => {
                      setGuardianData((prevState) => ({
                        ...prevState,
                        state: "",
                      }));
                      field.onChange(e);
                      onChange(e);
                    }}
                    placeholder="Select a country"
                    value={data?.country}
                  >
                    {/* <option>{selectedCountry}</option> */}
                    <option>{selectedCountry?.userCountryCode}</option>
                    {countries &&
                      countries?.map((country, idx) => (
                        <option key={idx} value={country.label.split(" ")[1]}>
                          {country.label}
                        </option>
                      ))}
                  </Select>
                )}
              </Field>
              <ErrorMessage
                className="!text-[#e53e3e] !text-xs mt-1"
                name="country"
                component="div"
              />
            </FormControl>
          </Box>
          <Box w="100%" mb={3}>
            {data.country === "Nigeria" ? (
              <>
                <FormLabel fontWeight="bold" fontSize="15px">
                  State
                </FormLabel>
                <Field name="state">
                  {({ field }) => (
                    <Select
                      name="state"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        onChange(e);
                      }}
                      placeholder="Select a state"
                      value={data.state}>
                      {states.map((item, idx) => (
                        <option value={item.value} key={idx}>
                          {item.label}
                        </option>
                      ))}
                    </Select>
                  )}
                </Field>
                <ErrorMessage
                  className="!text-[#e53e3e] !text-xs mt-1"
                  name="state"
                  component="div"
                />
              </>
            ) : (
              <Field name="state">
                {({ field, form }) => (
                  <InputField
                    {...field}
                    id="state"
                    name="state"
                    label="State"
                    type="text"
                    onChange={(e) => {
                      field.onChange(e);
                      onChange(e);
                    }}
                    value={data.state}
                    placeholder="Enter state"
                    error={
                      form.errors.state && form.touched.state
                        ? form.errors.state
                        : null
                    }
                  />
                )}
              </Field>
            )}
          </Box>
          <Box w="100%" mb={3}>
            <Field name="student_phoneNum">
              {({ field, form }) => (
                <InputField
                  {...field}
                  required
                  type="number"
                  name="student_phoneNum"
                  icon={FaRegUser}
                  placeholder="+234 9037289192"
                  label="Student Phone Number"
                  onChange={(e) => {
                    field.onChange(e);
                    onChange(e);
                  }}
                  value={data.student_phoneNum}
                  error={
                    form.errors.student_phoneNum && form.touched.student_phoneNum
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
              onClick={() => onClick("pagethree")}
            />
            <CButton
              my={3}
              w={"full"}
              text="Next"
              type="submit"
              isDisabled={!isValid}
            />
          </Flex>
        </Form>)}
    </Formik>
  );
};

export default GuardianD;

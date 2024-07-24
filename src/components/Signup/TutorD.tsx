import CButton from "../Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, Flex, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { states } from "../../typings/states";
import { ITutorProps } from "../../typings/home";
import InputField from "../Input";

const validationSchema = Yup.object({
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
});

const TutorD: React.FC<ITutorProps> = ({
  data,
  onClick,
  onChange,
  setFormData,
}) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry] = useState(null);

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        console.log("Data Country: ", data.countries);
      });
  }, []);

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
            <FormControl>
              <FormLabel fontWeight="bold" fontSize="15px">
                Country
              </FormLabel>
              <Field name="country">
                {({ field }) => (
                  <Select
                    {...field}
                    onChange={(e) => {
                      setFormData((prevState) => ({
                        ...prevState,
                        state: "",
                      }));
                      field.onChange(e);
                      onChange(e);
                    }}
                    placeholder="Select a country"
                    value={data.country}
                  >
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
            <FormControl>
              {data.country === "Nigeria" ? (
                <>
                  <FormLabel fontWeight="bold" fontSize="15px">
                    State
                  </FormLabel>
                  <Field name="state">
                    {({ field }) => (
                      <Select
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          onChange(e);
                        }}
                        placeholder="Select a state"
                        value={data.state}
                      >
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
            </FormControl>
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
        </Form>
      )}
    </Formik>
  );
};

export default TutorD;

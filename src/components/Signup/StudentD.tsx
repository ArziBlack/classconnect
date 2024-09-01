import React, { ChangeEvent, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, Flex, FormControl, FormLabel } from "@chakra-ui/react";
import Select from "react-select"; // Importing react-select
import CButton from "../Button";
import InputField from "../Input";
import { states } from "../../typings/states";
import { IStudentProps } from "../../typings/home";

const validationSchema = Yup.object({
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
});

const StudentD: React.FC<IStudentProps> = ({
  data,
  onClick,
  onChange,
  setFormData,
}) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(
          data.countries.map((country) => ({
            value: country.label,
            label: country.label,
          }))
        );
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
      {({ isValid, setFieldValue, values }) => (
        <Form>
          <Box w="100%" mb={3}>
            <FormControl>
              <FormLabel fontWeight="bold" fontSize="15px">
                Country
              </FormLabel>
              <Field name="country">
                {() => (
                  <Select
                    options={countries}
                    onChange={(option) => {
                      const syntheticEvent = {
                        target: {
                          name: "country",
                          value: option.value,
                        },
                      };
                      setFieldValue("country", option.value);
                      setFormData((prevState) => ({
                        ...prevState,
                        state: "",
                      }));
                      onChange(
                        syntheticEvent as ChangeEvent<
                          HTMLInputElement | HTMLSelectElement
                        >
                      );
                    }}
                    placeholder="Select a country"
                    value={countries.find(
                      (country) => country.value === values.country
                    )}
                    isSearchable
                  />
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
              {values.country === "Nigeria" ? (
                <>
                  <FormLabel fontWeight="bold" fontSize="15px">
                    State
                  </FormLabel>
                  <Field name="state">
                    {({ field }) => (
                      <Select
                        {...field}
                        options={states.map((item) => ({
                          value: item.value,
                          label: item.label,
                        }))}
                        onChange={(
                          option: { value: string; label: string } | null
                        ) => {
                          const syntheticEvent = {
                            target: {
                              name: "state",
                              value: option?.value || "",
                            },
                          };
                          setFieldValue("state", option?.value || "");
                          onChange(
                            syntheticEvent as ChangeEvent<
                              HTMLInputElement | HTMLSelectElement
                            >
                          );
                        }}
                        placeholder="Select a state"
                        value={states.find(
                          (state) => state.value === values.state
                        )}
                        isSearchable
                      />
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
                      value={values.state}
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

export default StudentD;

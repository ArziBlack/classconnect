import CButton from "../Button";
import { Box, Select, Flex, FormLabel } from "@chakra-ui/react";
import { useState, ChangeEvent, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IGuardianProps } from "../../typings/home";
import { useAppSelector } from "../../hooks/reactReduxHooks";

const validationSchema = Yup.object({
  class_type: Yup.string().required("Class type is required"),
  payment_plan: Yup.string().required("Payment plan is required"),
});

const GuardianF = ({ data, onChange, onClick }: IGuardianProps) => {
  const { fees } = useAppSelector((from) => from.other);
  const [paymentPlan, setPaymentPlan] = useState<
    { key: string; value: string }[]
  >([]);
  const [selectedClass, setSelectedClass] = useState<string>(
    data?.class_type || ""
  );

  useEffect(() => {
    if (data?.class_type) {
      const selectedClassPlans =
        fees?.tuition_fees[data.class_type as keyof typeof fees.tuition_fees];
      const formatKey = (key: string) => key.replace("_payment", "");

      if (selectedClassPlans) {
        setPaymentPlan(
          Object.entries(selectedClassPlans).map(([key, value]) => ({
            key: formatKey(key.toString()),
            value: value.toString(),
          }))
        );
      }
    }
  }, [data, fees]);

  const getClassKeys = (fees) => {
    if (fees?.tuition_fees) {
      return Object.keys(fees.tuition_fees);
    }
    return [];
  };

  const classKeys = getClassKeys(fees);

  const handleClassChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;
    setSelectedClass(selected);

    const selectedClassPlans =
      fees?.tuition_fees[selected as keyof typeof fees.tuition_fees];
    const formatKey = (key: string) => key.replace("_payment", "");

    setPaymentPlan(
      Object.entries(selectedClassPlans).map(([key, value]) => ({
        key: formatKey(key.toString()),
        value: value.toString(),
      }))
    );
  };

  return (
    <Formik
      initialValues={{
        class_type: selectedClass,
        payment_plan: data?.payment_plan || "",
      }}
      validationSchema={validationSchema}
      onSubmit={() => {
        onClick("pagefinal");
      }}
    >
      {({ isValid }) => (
        <Form>
          <Box w="100%" mb={3}>
            <FormLabel fontWeight="bold" fontSize="15px" mt="2px">
              Class Type
            </FormLabel>
            <Field name="classType">
              {({ field }) => (
                <Select
                  name="class_type"
                  onChange={(e) => {
                    field.onChange(e);
                    onChange(e), handleClassChange(e);
                  }}
                  mb="1px"
                  placeholder="Select a Class Type"
                  className="capitalize"
                  value={data?.class_type}
                >
                  {classKeys?.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item.replace(/_/g, " ")}
                    </option>
                  ))}
                </Select>
              )}
            </Field>
          </Box>
          <Box w="100%" mb={3}>
            <FormLabel fontWeight="bold" fontSize="15px" mt="2px">
              Payment Plan
            </FormLabel>
            <Field name="paymentPlan">
              {({ field }) => (
                <Select
                  name="payment_plan"
                  onChange={(e) => {
                    field.onChange(e);
                    onChange(e);
                  }}
                  mb="1px"
                  placeholder="Select a Payment plan"
                  className="capitalize"
                  disabled={!selectedClass}
                  value={selectedClass && data?.payment_plan}
                >
                  {selectedClass &&
                    paymentPlan.map((plan, idx) => (
                      <option
                        key={idx}
                        value={plan?.key?.toString()?.trim().replace(/_/g, "-")}
                      >
                        {`${plan.key.replace(/_/g, " ")}`}
                      </option>
                    ))}
                </Select>
              )}
            </Field>
            <ErrorMessage
              className="!text-[#e53e3e] !text-xs mt-1"
              name="paymentPlan"
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

export default GuardianF;

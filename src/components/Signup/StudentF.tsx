import CButton from "../Button";
import { FC, useState, ChangeEvent } from "react";
import { IStudentProps } from "../../typings/home";
import * as Yup from "yup";
import { useAppSelector } from "../../hooks/reactReduxHooks";
import { Box, Select, Flex, FormLabel } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const validationSchema = Yup.object({
  class_type: Yup.string().required("Class type is required"),
  payment_plan: Yup.string().required("Payment plan is required"),
});

const StudentF: FC<IStudentProps> = ({ data, onClick, onChange }) => {
  const { fees } = useAppSelector((from) => from.other);
  const [paymentPlan, setPaymentPlan] = useState<
    { key: string; value: string }[]
  >([]);
  const [selectedClass, setSelectedClass] = useState("");
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
      initialValues={data}
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
            <Field name="classType" as="select">
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
                    <option key={idx} value={item?.toString()?.trim()}>
                      {item?.replace(/_/g, " ")}
                    </option>
                  ))}
                </Select>
              )}
            </Field>
            <ErrorMessage
              className="!text-[#e53e3e] !text-xs mt-1"
              name="classType"
              component="div"
            />
          </Box>
          <Box w="100%" mb={3}>
            <FormLabel fontWeight="bold" fontSize="15px" mt="2px">
              Payment Plan
            </FormLabel>
            <Field name="paymentPlan" as="select">
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
                      <option key={idx} value={plan?.key?.toString()?.trim()}>
                        {`${plan.key.replace(/_/g, " ")}: ${plan.value}`}
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

export default StudentF;

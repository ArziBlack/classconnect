import CButton from "../Button";
import { Box, Select, Flex, FormLabel } from "@chakra-ui/react";
import { useState, ChangeEvent } from "react";
import { IGuardianProps } from "../../typings/home";
import { useAppSelector } from "../../hooks/reactReduxHooks";

const GuardianF = ({ data, onChange, onClick }: IGuardianProps) => {
  const { fees } = useAppSelector(from => from.other);
  const [, setPaymentPlan] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  console.log(fees?.tuition_fees);
  console.log(fees?.tuition_fees[data.class_type]);
  const getClassKeys = (fees) => {
    if (fees?.tuition_fees) {
      return Object.keys(fees.tuition_fees);
    }
    return [];
  };
  // const payment_plan: Array<string> = [
  //   "monthly_payment",
  //   "quarterly_payment",
  //   "half_yearly_payment",
  //   "yearly_payment",
  // ];
  // const class_type: Array<string> = [
  //   "class of One",
  //   "class of Five",
  //   "class of Ten",
  // ];
  const classKeys = getClassKeys(fees);
  const handleClassChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;
    setSelectedClass(selected);
    setPaymentPlan(Object.keys(fees?.tuition_fees[selected]));
  };
  return (
    <>
      <Box w="100%" mb={3}>
        <FormLabel fontWeight="bold" fontSize="15px" mt="2px">
          Class Type
        </FormLabel>
        <Select
          name="class_type"
          onChange={(e) => { onChange(e), handleClassChange(e) }}
          mb="1px"
          placeholder="Select a Class Type"
        >
          {classKeys?.map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </Box>
      <Box w="100%" mb={3}>
        <FormLabel fontWeight="bold" fontSize="15px" mt="2px">
          Payment Plan
        </FormLabel>
        <Select
          name="payment_plan"
          onChange={onChange}
          mb="1px"
          placeholder="Select a Payment plan"
          disabled={!selectedClass}
        >
          {fees?.tuition_fees[data.class_type]?.map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </Select>
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
          onClick={() => onClick("pagefinal")}
        />
      </Flex>
    </>
  );
};

export default GuardianF;

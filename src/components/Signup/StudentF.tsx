import CButton from "../Button";
import { FC, useState, ChangeEvent } from "react";
import { IStudentProps } from "../../typings/home";
import { useAppSelector } from "../../hooks/reactReduxHooks";
import { Box, Select, Flex, FormLabel } from "@chakra-ui/react";

const StudentF: FC<IStudentProps> = ({ onClick, onChange }) => {
  const { fees } = useAppSelector(from => from.other);
  const [paymentPlan, setPaymentPlan] = useState<{ key: string, value: string }[]>([]);
  const [selectedClass, setSelectedClass] = useState('');
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
    const selectedClassPlans = fees?.tuition_fees[selected as keyof typeof fees.tuition_fees];
    setPaymentPlan(Object.entries(selectedClassPlans).map(([key, value]) => ({ key, value })));
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
          className="capitalize"
        >
          {classKeys?.map((item, idx) => (
            <option key={idx} value={item}>
              {item.replace(/_/g, ' ')}
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
          className="capitalize"
          disabled={!selectedClass}
        >
          {selectedClass &&
          paymentPlan.map((plan, idx) => (
            <option key={idx} value={plan.key}>
              {`${plan.key.replace(/_/g, ' ')}: ${plan.value}`}
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

export default StudentF;

import CButton from "../Button";
import { Box, Select, Flex } from "@chakra-ui/react";
import { IGuardianProps } from "../../typings/home";

const GuardianF = ({ onChange, onClick }: IGuardianProps) => {
  const payment_plan: Array<string> = [
    "monthly_payment",
    "quarterly_payment",
    "half_yearly_payment",
    "yearly_payment",
  ];
  const class_type: Array<string> = [
    "class of One",
    "class of Five",
    "class of Ten",
  ];
  return (
    <>
      <Box w="100%" mb={3}>
        <Select
          name="payment_plan"
          onChange={onChange}
          mb="1px"
          placeholder="Select a Payment plan"
        >
          {payment_plan.map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </Box>
      <Box w="100%" mb={3}>
        <Select
          name="class_type"
          onChange={onChange}
          mb="1px"
          placeholder="Select a Class Type"
        >
          {class_type.map((item, idx) => (
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

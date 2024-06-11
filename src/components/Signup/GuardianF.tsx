import CButton from "../Button";
import { Box, Select } from "@chakra-ui/react";
import { IGuardianProps } from "../../typings/home";

const GuardianF = ({ onChange, onClick }: IGuardianProps) => {
  const payment_plan: Array<string> = [
    "monthly_payment",
    "quarterly_payment",
    "half_yearly_payment",
    "yearly_payment",
  ]
  const class_type: Array<string> = [
    "class of One",
    "class of Five",
    "class of Ten"
  ]
  return (
    <>
      <Box w="100%" mb={3}>
        <Select name="payment_plan" onChange={onChange} mb="1px" placeholder="Select a Payment plan">
          {payment_plan.map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </Box>
      <Box w="100%" mb={3}>
      <Select name="class_type" onChange={onChange} mb="1px" placeholder="Select a Class Type">
          {class_type.map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </Box>

      <CButton
        my={3}
        text="Next"
        width="full"
        onClick={() => onClick("pageseven")}
      />
    </>
  );
};

export default GuardianF;

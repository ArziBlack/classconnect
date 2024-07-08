import CButton from "../Button";
import { Box, Select, Flex, FormLabel } from "@chakra-ui/react";
import { IStudentProps } from "../../typings/home";
import { FC } from "react";

const StudentF: FC<IStudentProps> = ({ onClick, onChange }) => {
  const payment_plan: Array<string> = [
    "monthly",
    "quarterly",
    "half_yearly",
    "yearly",
  ];
  const class_type: Array<string> = ["class_of_1", "class_of_5", "class_of_10"];
  return (
    <>
      <Box w="100%" mb={3}>
        <FormLabel fontWeight="bold" fontSize="15px" mt="2px">
          Class Type
        </FormLabel>
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
      <Box w="100%" mb={3}>
        <FormLabel fontWeight="bold" fontSize="15px" mt="2px">
          Payment Plan
        </FormLabel>
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

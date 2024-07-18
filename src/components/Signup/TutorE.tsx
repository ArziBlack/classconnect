import { Box, Flex, FormLabel, Select } from "@chakra-ui/react";
import CButton from "../Button";
import { ITutorProps } from "../../typings/home";
import { useAppSelector } from "../../hooks/reactReduxHooks";

const TutorE = ({ data, onClick, onChange }: ITutorProps) => {
  const { home } = useAppSelector((dat) => dat.other);
  const yearsOfExperience = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <>
      <Box w="100%" mb={3}>
        <FormLabel fontWeight="bold" fontSize="15px" mt="2px">
          Years of Experience
        </FormLabel>
        <Select
          name="yearsOfExperience"
          onChange={onChange}
          mb="1px"
          placeholder="Select your years of experience"
          value={data?.yearsOfExperience}
        >
          {yearsOfExperience?.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Select>
      </Box>
      <Box w="100%" mb={3}>
        <FormLabel fontWeight="bold" fontSize="15px" mt="2px">
          Specialization
        </FormLabel>
        <Select
          onChange={onChange}
          mb="1px"
          name="specialization"
          placeholder="Select your Specialization"
          className="capitalize"
          value={data?.specialization}
        >
          {home?.courses?.map((item, idx) => (
            <option key={idx} value={item?.title}>
              {item?.title?.toLowerCase()}
            </option>
          ))}
        </Select>
      </Box>
      <Flex gap={5}>
        <CButton
          my={3}
          w={"full"}
          text="Back"
          onClick={() => onClick("pagefour")}
        />
        <CButton
          my={3}
          w={"full"}
          text="Next"
          onClick={() => onClick("pagesix")}
        />
      </Flex>
    </>
  );
};

export default TutorE;

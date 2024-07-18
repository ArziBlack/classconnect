import CButton from "../Button";
import { FC } from "react";
import { ITutorProps } from "../../typings/home";
import { Box, Flex, FormLabel, Textarea } from "@chakra-ui/react";
import InputField from "../Input";

const TutorF: FC<ITutorProps> = ({ data, onClick, onChange, setFormData }) => {
  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prevState) => ({
        ...prevState,
        resume: file,
      }));
    }
  };
  return (
    <>
      <Box w="100%" mb={3}>
        <InputField
          required
          type="file"
          name="file"
          label="Resume"
          onChange={handleResumeChange}
          placeholder="Upload your updated resume"
        />
      </Box>
      <Box w="100%" mb={3}>
        <FormLabel fontWeight="bold" fontSize="15px" mt="2px">
          Introduction
        </FormLabel>
        <Textarea
          name="introduction"
          onChange={onChange}
          mb="1px"
          placeholder="Introduce yourself"
          value={data?.introduction || ""}
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
          onClick={() => onClick("pagefinal")}
        />
      </Flex>
    </>
  );
};

export default TutorF;

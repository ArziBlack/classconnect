import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Select,
  Text,
} from "@chakra-ui/react";
import Button from "../../../../components/Button";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reactReduxHooks";
import useCustomToast from "../../../../hooks/useCustomToast";
import { createGeneralAssessments } from "../../../../services/tutor/tutorThunk";
import { IAssessmentData } from "../../../../typings/tutor";

// function truncateString(str, maxLength) {
//   if (str.length > maxLength) {
//     return str.substring(0, maxLength) + "...";
//   } else {
//     return str;
//   }
// }

export const CreateAssessment = () => {
  const dispatch = useAppDispatch();
  const showToast = useCustomToast();
  const [type, setType] = useState("");
  const [content, setContent] = useState("");
  const [attachment, setAttachment] = useState(null);
  const { error, isLoading, message } = useAppSelector(state => state.tutor);

  const handleTypeChange = (e) => setType(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleAttachmentChange = (e) => setAttachment(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(attachment);
    const assessment: IAssessmentData = {
      type,
      content
    }
    if (type === "" && content === "") {
      showToast("Please select assessment type", "error");
    } else if (content === "") {
      showToast("Please enter assessment content", "error");
    } else if (type === "") {
      showToast("Please select assessment type and enter assessment content", "error");
    } else {
      const result = await dispatch(createGeneralAssessments({ assessment }));
      if (result.meta.requestStatus === "fulfilled") {
        showToast(message, "success");
      } else if (result.meta.requestStatus === "rejected") {
        showToast(error, "error");
      }
    }

    setType("");
    setContent("");
    setAttachment(null);
  };

  return (
    <Box
        color="white"
        w="100%"
        borderRadius="lg"
        boxShadow="md"
        p={6}
        fontFamily="Inter"
        bg="#023248"
        mx="auto"
      >
        <Box maxW="600px">
          <Text fontSize="2xl" fontWeight="bold" mb={6}>
            Create Assessment
          </Text>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="stretch">
              <FormControl id="type" isRequired>
                <FormLabel>Type</FormLabel>
                <Select
                  value={type}
                  colorScheme={"dark"}
                  _expanded={{ color: "gray.500" }}
                  // _hover={{ color: "gray.500" }}
                  _focus={{ color: "black" }}
                  _selected={{ color: "white" }}
                  _active={{ color: "white" }}
                  onChange={handleTypeChange}
                  placeholder="Select assessment type"
                >
                  <option value="Home-work">Home-work</option>
                  <option value="Class-work">Class-work</option>
                  <option value="Test">Test</option>
                </Select>
              </FormControl>
              <FormControl id="content" isRequired>
                <FormLabel>Content</FormLabel>
                <Textarea
                  value={content}
                  onChange={handleContentChange}
                  placeholder="Enter the assessment details"
                  rows={6}
                />
              </FormControl>
              <FormControl id="attachment">
                <FormLabel>Attachment (optional)</FormLabel>
                <Input
                  type="file"
                  onChange={handleAttachmentChange}
                  accept="image/*,.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt"
                />
              </FormControl>
              <Button type="submit" text="Send Assessment" ml={"auto"} isLoading={isLoading}></Button>
            </VStack>
          </form>
        </Box>
      </Box>
  );
};

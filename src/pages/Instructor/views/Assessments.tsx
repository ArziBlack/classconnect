import React, { useState } from "react";
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
import ViewHeader from "../components/ViewHeader";
import { BreadCrumb } from "../components/Courses/BreadCrumb";
import Button from "../../../components/Button";
import useCustomToast from "../../../hooks/useCustomToast";
import { useAppDispatch } from "../../../hooks/reactReduxHooks";
import { createGeneralAssessments } from "../../../services/tutor/tutorThunk";
import { IAssessmentData } from "../../../typings/tutor";

export const Assessment = () => {
  const dispatch = useAppDispatch();
  const showToast = useCustomToast();
  const [type, setType] = useState("");
  const [content, setContent] = useState("");
  const [attachment, setAttachment] = useState(null);

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

    const result = await dispatch(createGeneralAssessments({ assessment }));
    if (result.meta.requestStatus === "fulfilled") {
      showToast( "Assessment created successfully", "success");
    } else if (result.meta.requestStatus === "rejected") {
      showToast( "Error creating assessment", "error");
    }

    showToast("The assessment has been sent to all students.", "success");

    setType("");
    setContent("");
    setAttachment(null);
  };

  return (
    <>
      <ViewHeader
        title="Assessments"
        subtext="Access your student list and interact with your students. View their contact information, office hours, and schedule one-on-one sessions to support their learning experience."
      />
      <BreadCrumb links={[{ to: "", label: "General Assessment" }]} />

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
              <Button type="submit" text="Send Assessment" ml={"auto"}></Button>
            </VStack>
          </form>
        </Box>
      </Box>
    </>
  );
};

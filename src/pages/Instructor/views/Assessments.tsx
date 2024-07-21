import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Select,
  useToast,
  Text,
} from "@chakra-ui/react";
import ViewHeader from "../components/ViewHeader";
import { BreadCrumb } from "../components/Courses/BreadCrumb";
import Button from "../../../components/Button";

export const Assessment = () => {
  const [type, setType] = useState("");
  const [content, setContent] = useState("");
  const [attachment, setAttachment] = useState(null);
  const toast = useToast();

  const handleTypeChange = (e) => setType(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleAttachmentChange = (e) => setAttachment(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();

    toast({
      title: "Assessment sent.",
      description: "The assessment has been sent to all students.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

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

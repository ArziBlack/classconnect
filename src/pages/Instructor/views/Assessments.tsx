import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
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

    // Perform the form submission logic here (e.g., sending the data to the backend)
    // For now, we'll just display a toast message
    toast({
      title: "Assessment sent.",
      description: "The assessment has been sent to all students.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Reset the form
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
      <Box
        color="white"
        w="100%"
        maxW="800px"
        borderRadius="lg"
        boxShadow="md"
        p={6}
        fontFamily="Inter"
        bg="#023248"
        mx="auto"
        mt={10}
      >
        <Text fontSize="2xl" fontWeight="bold" mb={6}>
          Create Assessment
        </Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl id="type" isRequired>
              <FormLabel>Type</FormLabel>
              <Select
                value={type}
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
            <Button type="submit" colorScheme="teal" width="full">
              Send Assessment
            </Button>
          </VStack>
        </form>
      </Box>
    </>
  );
};

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Text,
} from "@chakra-ui/react";
import Button from "../../../../components/Button";

export const CreateReport = () => {
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
        Create A General Report
      </Text>
      <form>
        <VStack spacing={4} align="stretch">
          <FormControl id="type" isRequired>
            <FormLabel>Title</FormLabel>
            <Input type="text" placeholder="General Report Title..."/>
          </FormControl>
          <FormControl id="content" isRequired>
            <FormLabel>Content</FormLabel>
            <Textarea
              // value={content}
              // onChange={handleContentChange}
              placeholder="Enter the assessment details"
              rows={6}
            />
          </FormControl>
          <Button type="submit" text="Send Report" ml={"auto"}></Button>
        </VStack>
      </form>
    </Box>
  </Box>
  );
};

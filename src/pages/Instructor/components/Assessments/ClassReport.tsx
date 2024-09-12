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
import { useState } from "react";
import {
  IAssessmentData,
  IAssessmentResponse,
} from "../../../../typings/tutor";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/reactReduxHooks";
import useCustomToast from "../../../../hooks/useCustomToast";
import { sendClassReport } from "../../../../services/tutor/tutorThunk";

export const ClassReport = () => {
  const dispatch = useAppDispatch();
  const showToast = useCustomToast();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const { isLoading, error } = useAppSelector((state) => state.tutor);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const report: IAssessmentData = {
      title: title,
      content: content,
    };
    if (title === "" && content === "") {
      showToast("Please select assessment type", "error");
    } else if (content === "") {
      showToast("Please enter assessment content", "error");
    } else if (title === "") {
      showToast(
        "Please select assessment type and enter assessment content",
        "error"
      );
    } else {
      const result = await dispatch(sendClassReport({ report }));
      if (result.meta.requestStatus === "fulfilled") {
        showToast("Report created successfully", "success");
        setTitle("");
        setContent("");
      } else if (result.meta.requestStatus === "rejected") {
        showToast((result.payload as IAssessmentResponse).message, "error");
        console.log("error", error);
      }
    }
  };

  return (
    <Box color="white" w="100%" borderRadius="lg" fontFamily="Inter" mx="auto">
      <Box maxW="600px">
        <Text fontSize="2xl" fontWeight="bold" mb={6}>
          Send class report
        </Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl id="type" isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                placeholder="Feedback Title..."
                value={title}
                onChange={handleTitleChange}
              />
            </FormControl>
            <FormControl id="content" isRequired>
              <FormLabel>Content</FormLabel>
              <Textarea
                value={content}
                onChange={handleContentChange}
                placeholder="Enter the feedback details"
                rows={6}
              />
            </FormControl>
            <Button
              type="submit"
              text="Send Feedback"
              ml={"auto"}
              isLoading={isLoading}
            ></Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

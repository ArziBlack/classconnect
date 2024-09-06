import {
  Box,
  Text,
  Tag,
  Flex,
  Input,
  VStack,
  TagLabel,
  FormLabel,
  FormControl,
  TagCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import Button from "../../../../components/Button";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/reactReduxHooks";
import useCustomToast from "../../../../hooks/useCustomToast";
import { sendClassNotice } from "../../../../services/tutor/tutorThunk";
import MultipleSelectDropdown from "../../../../components/Dropdown";

const CreateClassNotice = () => {
  const dispatch = useAppDispatch();
  const toast = useCustomToast();
  const { isLoading, noticeResponse, error, message } = useAppSelector(
    (state) => state.tutor
  );
  const [classNotice, setClassNotice] = useState({
    time1: "",
    time2: "",
    date: "",
    class_link: "",
  });
  console.log("error", error);
  const handleChange = (e) => {
    setClassNotice({
      ...classNotice,
      [e.target.name]: e.target.value,
    });
  };

  const times: string[] = [
    "Wednesday 5:00pm - 6:00pm WAT",
    "Wednesday 8:00pm - 9:00pm WAT",
    "Saturday 5:00pm - 6:00pm WAT",
    "Saturday 8:00pm - 9:00pm WAT",
    "Saturday 10:00am - 11:00noon WAT",
    "Sunday 10:00am - 11:00noon WAT",
    "Sunday 5:00pm - 6:00pm WAT",
    "Sunday 8:00pm - 9:00pm WAT",
  ];

  const maxSelections = 2;
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formatted = {
      time1: selectedOptions[0],
      time2: selectedOptions[1],
      date: classNotice.date,
      class_link: classNotice.class_link,
    };

    setClassNotice(formatted);

    if (!formatted.time1 || !formatted.time2) {
      toast("At least two time options are required", "error");
      return;
    }

    if (!classNotice.class_link) {
      toast("Please include class meeting link", "error");
      return;
    }
    if (!classNotice.date) {
      toast("Please include next class date", "error");
      return;
    }

    const notice = {
      ...formatted,
      date: new Date(classNotice.date).toISOString(),
    };

    const res = await dispatch(sendClassNotice({ notice }));
    if (sendClassNotice.fulfilled.match(res)) {
      if (noticeResponse?.statusCode === 200) {
        toast(
          noticeResponse?.message || "Class Notice Sent Successfully",
          "success"
        );
        noticeResponse?.upcomingClassDate &&
          localStorage.setItem("nextclass", noticeResponse?.upcomingClassDate);
        setTimeout(() => {
          toast("Class Notice Saved Successfully", "success");
        }, 3000);
        setClassNotice({ time1: "", time2: "", class_link: "", date: "" });
      } else if (noticeResponse?.statusCode === 403) {
        toast(message, "error");
      }
    }
    if (sendClassNotice.rejected.match(res)) {
      toast("Error Sending Class Notice", "error");
    }
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
      <Box maxW="600px" minH={"400px"}>
        <Text fontSize="2xl" fontWeight="bold" mb={6}>
          Create Class Notice
        </Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormLabel mb={-2}>Time Options</FormLabel>
            <Box color={"black"}>
              <MultipleSelectDropdown
                options={times}
                maxSelections={maxSelections}
                onChange={(options) => {
                  setSelectedOptions(options);
                }}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
              />
              <Flex flex={"wrap"} mt={2} gap={2}>
                {selectedOptions.map((option, index) => (
                  <Tag
                    key={index}
                    size="md"
                    borderRadius="full"
                    variant="solid"
                    colorScheme="red"
                    fontWeight={300}
                    w={"fit-content"}
                  >
                    <TagLabel>{option}</TagLabel>
                    <TagCloseButton
                      onClick={() => {
                        const newOptions = selectedOptions.filter(
                          (item) => item !== option
                        );
                        setSelectedOptions(newOptions);
                      }}
                    />
                  </Tag>
                ))}
              </Flex>
            </Box>
            <FormControl id="type">
              <FormLabel>Next Class Date</FormLabel>
              <Input
                type="date"
                name="date"
                value={classNotice.date}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="content">
              <FormLabel>Class Meeting Link</FormLabel>
              <Input
                type="text"
                name="class_link"
                placeholder="Class Meeting Link..."
                value={classNotice.class_link}
                onChange={handleChange}
              />
            </FormControl>
            <Button
              type="submit"
              text="Send Class Notice"
              ml={"auto"}
              isLoading={isLoading}
            ></Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default CreateClassNotice;

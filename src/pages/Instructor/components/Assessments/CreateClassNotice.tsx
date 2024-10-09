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
import { INoticeResponse } from "../../../../typings/tutor";

const CreateClassNotice = () => {
  const dispatch = useAppDispatch();
  const toast = useCustomToast();
  const { isLoading, noticeResponse } = useAppSelector((state) => state.tutor);

  const { data } = useAppSelector((store) => store.auth);

  const [classNotice, setClassNotice] = useState({
    time1: "",
    time2: "",
    date: "",
    class_link:
      data.classLink === "null" ? "No class link yet" : data.classLink,
  });
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

    if (data.classLink === "null") {
      toast(
        "You are yet receive your class link, you can only send class notice when you have one",
        "error"
      );
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

    const result = await dispatch(sendClassNotice({ notice }));
    if (result.meta.requestStatus === "fulfilled") {
      toast(
        (result.payload as INoticeResponse).message ||
          "Class Notice Sent Successfully",
        "success"
      );
      noticeResponse?.upcomingClassDate &&
        localStorage.setItem("nextclass", noticeResponse?.upcomingClassDate);
      setClassNotice({ time1: "", time2: "", class_link: "", date: "" });
    } else if (result.meta.requestStatus === "rejected") {
      toast((result.payload as INoticeResponse).message, "error");
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
          Send Class Notice
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
                readOnly
                disabled
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

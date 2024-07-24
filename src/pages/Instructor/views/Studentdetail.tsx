import {
    Box,
    Flex,
    HStack,
    Image,
    Input,
    FormLabel,
    Skeleton,
    Spacer,
    SkeletonText,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    Text,
    VStack,
    FormControl,
    Select,
    Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../../components/Button";
import { IoPeopleCircle } from "react-icons/io5";
import { NOT_PROFILE } from "../../../constants/image";
import useCustomToast from "../../../hooks/useCustomToast";
import { IAssessmentData, IClassData } from "../../../typings/tutor";
import { useAppDispatch, useAppSelector } from "../../../hooks/reactReduxHooks";
import { createPersonnalAssessment, createStudentReport } from "../../../services/tutor/tutorThunk";

const StudentDetail = () => {
    const toast = useCustomToast();
    const dispatch = useAppDispatch();
    const { studentId } = useParams();
    const { home } = useAppSelector(from => from.other);
    const { myStudents } = useAppSelector(state => state.tutor);
    const student = myStudents?.data?.find(item => item?.name?.replace(" ", "") === studentId);
    console.log(student)
    const { assessmentFormActionUrl, sessionReportFormActionUrl } = student;
    const [type, setType] = useState("");
    const [content, setContent] = useState("");
    const [course, setCourse] = useState("");
    const [todays_topic, setTopic] = useState("");
    const [homework_status, setHomeworkStatus] = useState("");
    const [next_session_topic, setNextTopic] = useState("");
    const [class_performance, setPerformance] = useState("");
    const [attachment, setAttachment] = useState(null);
    const [assessmentSwitch, setAssessmentSwitch] = useState("");

    const handleTypeChange = (e) => setType(e.target.value);
    const handleCourseChange = (e) => setCourse(e.target.value);
    const handleTopicChange = (e) => setTopic(e.target.value);
    const handleHomeworkChange = (e) => setHomeworkStatus(e.target.value);
    const handleNextTopicChange = (e) => setNextTopic(e.target.value);
    const handlePerformanceChange = (e) => setPerformance(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);
    const handleAttachmentChange = (e) => setAttachment(e.target.files[0]);

    const handleAssessmentSubmit = async (e) => {
        e.preventDefault();
        if (!type) {
            toast("Please select assessment type", "error");
            return;
        }

        if (!content) {
            toast("Please enter assessment content", "error");
            return;
        }

        const assessment: IAssessmentData = {
            type,
            content,
            document: attachment
        };

        const result = await dispatch(createPersonnalAssessment({ assessmentFormActionUrl, assessment }));

        if (result.meta.requestStatus === "fulfilled") {
            toast("Assessment created successfully", "success");
        } else if (result.meta.requestStatus === "rejected") {
            toast("Assessment creation failed", "error");
        }

        setType("");
        setContent("");
        setAttachment(null);
    };

    const handleReportSubmit = async (e) => {
        e.preventDefault();
        if (!course) {
            toast("Please select a course", "error");
            return;
        }

        if (!todays_topic) {
            toast("Please enter today's topic", "error");
            return;
        }

        if (!homework_status) {
            toast("Please enter homework status", "error");
            return;
        }

        if (!next_session_topic) {
            toast("Please enter next session's topic", "error");
            return;
        }

        if (!class_performance) {
            toast("Please enter class performance", "error");
            return;
        }

        const report: IClassData = {
            course,
            todays_topic,
            homework_status,
            next_session_topic,
            class_performance
        };

        const result = await dispatch(createStudentReport({ sessionReportFormActionUrl, report }));

        if (result.meta.requestStatus === "fulfilled") {
            toast("Report created successfully", "success");
        } else if (result.meta.requestStatus === "rejected") {
            toast("Report creation failed", "error");
        }

        setCourse("");
        setTopic("");
        setHomeworkStatus("");
        setNextTopic("");
        setPerformance("");
    };

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [Loaded, setLoaded] = useState(false);
    useEffect(() => {
        if (!Loaded) {
            setTimeout(() => {
                setLoaded(true);
            }, 2000);
        }
    }, [Loaded]);

    return (
        <div>
            <Text
                mt={{ sm: "16", md: "30px" }}
                marginY="30px"
                fontSize="20px"
                fontWeight="700"
                color="white"
            ></Text>
            <Box bg="#023248" color={`white`} w={{ sm: "115%", md: "100%" }} ml={{ sm: "-34px", md: "0px" }} borderRadius="18px" p="30px" mb="20px">
                <Flex alignItems="center" p="5px" mb="10px">
                    <Box p="5px" bg="#f4f5f6" borderRadius="8px" mr="10px">
                        <Skeleton borderRadius="8px" isLoaded={true}>
                            <Image src={NOT_PROFILE} h="17px" w="17px" />
                        </Skeleton>
                    </Box>
                    <Text
                        fontSize={{ sm: "lg", md: "xl" }}
                        className="text-[white]"
                        fontWeight="700"
                    >
                        <SkeletonText isLoaded={Loaded}>Student Profile</SkeletonText>
                    </Text>
                </Flex>
                <Text
                    mt={6}
                    fontSize={{ sm: "xs", md: "sm" }}
                    color="white"
                    fontWeight="normal"
                >
                    <SkeletonText isLoaded={Loaded}>
                        Manage your Student personal Information, and Assessments.
                    </SkeletonText>
                </Text>
                <div className=" w-full border-t-[1px] mt-10"></div>
                <Text
                    mt={6}
                    fontSize={{ sm: "xs", md: "xl" }}
                    fontWeight="600"
                    color="white"
                >
                    Personal
                </Text>
                <Flex flexDirection={{ sm: "column", lg: "row" }}>
                    <Box mt={8} w="50%">
                        <Skeleton
                            borderRadius="xl"
                            boxSize={{ sm: "250px", md: "300px" }}
                            isLoaded={Loaded}
                        >
                            <Image
                                borderRadius="xl"
                                boxSize={{ sm: "250px", md: "300px" }}
                                src={student?.profileImage}
                                alt="Dan Abramov"
                                objectFit={"cover"}
                            />
                        </Skeleton>
                    </Box>
                    <Box w={{ sm: "full", lg: "50%" }}>
                        <HStack>
                            <Text fontWeight="600" fontSize="2xl">
                                <SkeletonText isLoaded={Loaded}>{""}</SkeletonText>
                            </Text>
                        </HStack>
                        <Box>
                            <Text
                                fontSize={{ sm: "xs", md: "md" }}
                                fontWeight="550"
                                my="15px"
                            >
                                <SkeletonText isLoaded={Loaded}>About</SkeletonText>
                            </Text>
                            <Box>
                                <Skeleton mt="5px" borderRadius="10px" isLoaded={Loaded}>
                                    <Input
                                        fontSize={{ sm: "xs", md: "sm" }}
                                        type="name"
                                        placeholder={student?.name}
                                        _placeholder={{ color: "white" }}
                                        mt="5px"
                                        isDisabled
                                    />
                                </Skeleton>
                                <Skeleton my="15px" borderRadius="10px" isLoaded={Loaded}>
                                    <Input
                                        fontSize={{ sm: "xs", md: "sm" }}
                                        type="name"
                                        placeholder={student?.courses[0]}
                                        _placeholder={{ color: "white" }}
                                        mt="15px"
                                        isDisabled
                                    />
                                </Skeleton>
                                <Skeleton borderRadius="10px" isLoaded={Loaded}>
                                    <Input
                                        fontSize={{ sm: "xs", md: "sm" }}
                                        isDisabled
                                        type="email"
                                        placeholder={student?.country}
                                        _placeholder={{ color: "white" }}
                                        mt="15px"
                                    />
                                </Skeleton>
                                <Skeleton borderRadius="10px" isLoaded={Loaded}>
                                    <Input
                                        fontSize={{ sm: "xs", md: "sm" }}
                                        isDisabled
                                        type="text"
                                        placeholder={student?.Age?.toString()}
                                        _placeholder={{ color: "white" }}
                                        mt="15px"
                                    />
                                </Skeleton>
                                <Skeleton borderRadius="10px" isLoaded={Loaded}>
                                    <Input
                                        fontSize={{ sm: "xs", md: "sm" }}
                                        isDisabled
                                        type="email"
                                        placeholder={student?.sex}
                                        _placeholder={{ color: "white" }}
                                        mt="15px"
                                    />
                                </Skeleton>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <Box w={{ sm: "115%", md: "100%" }} color="white" ml={{ sm: "-34px", md: "0px" }} bg="#023248" borderRadius="18px" p="30px" mb="20px">
                <Text
                    fontSize={{ sm: "xs", md: "xl" }}
                    fontWeight="600"
                    color="white"
                >
                    Student Class Time Options
                </Text>
                <div className=" w-full border-t-[1px] mt-5"></div>
                <Box>
                    <Flex>
                        <Text
                            mt={3}
                            fontSize={{ sm: "xs", md: "md" }}
                            fontWeight="550"
                            my="15px"
                        >
                            Class Time
                        </Text>
                        <Spacer />
                        <Button
                            onClick={() => { onOpen(); setAssessmentSwitch("assessment") }}
                            leftIcon={<IoPeopleCircle size={23} />}
                            mt={{ sm: 2, md: 3 }}
                            width={{ sm: "100px", md: "200px" }}
                            height={{ sm: "7", md: "10" }}
                            fontSize={{ sm: "xs", md: "sm" }}
                            borderRadius="md"
                            bg="#002c8a"
                            _hover={{ bg: "#002C6A" }}
                            color="white"
                            text="Create Assessment"
                        />
                        <div className="mx-2"></div>
                        <Button
                            onClick={() => { onOpen(); setAssessmentSwitch("report") }}
                            leftIcon={<IoPeopleCircle size={23} />}
                            mt={{ sm: 2, md: 3 }}
                            width={{ sm: "100px", md: "200px" }}
                            height={{ sm: "7", md: "10" }}
                            fontSize={{ sm: "xs", md: "sm" }}
                            borderRadius="md"
                            bg="#002c8a"
                            _hover={{ bg: "#002C6A" }}
                            color="white"
                            text="Create Report"
                        />
                    </Flex>

                    <Modal
                        size="xl"
                        closeOnOverlayClick={false}
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader
                                textAlign="center"
                                fontSize={{ sm: "xs", md: "sm" }}
                                color="#002c8a"
                            >
                                Create Student Personnal {assessmentSwitch}
                            </ModalHeader>
                            <ModalCloseButton />
                            <Box maxW="600px" p={6}>
                                <Text fontSize="2xl" fontWeight="bold" mb={3}>
                                    Create {assessmentSwitch}
                                </Text>
                                {assessmentSwitch === "assessment" &&
                                    (<form onSubmit={handleAssessmentSubmit}>
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
                                    </form>)}
                                {assessmentSwitch === "report" &&
                                    (<form onSubmit={handleReportSubmit}>
                                        <VStack spacing={4} align="stretch">
                                            <FormControl id="type" isRequired>
                                                <FormLabel>Course</FormLabel>
                                                <Select
                                                    value={course}
                                                    colorScheme={"dark"}
                                                    _expanded={{ color: "gray.500" }}
                                                    _hover={{ color: "gray.500" }}
                                                    _focus={{ color: "black" }}
                                                    _selected={{ color: "white" }}
                                                    _active={{ color: "white" }}
                                                    onChange={handleCourseChange}
                                                    placeholder="Select course to create report..."
                                                    name="course"
                                                    className="capitalize"
                                                >
                                                    {home?.courses?.map((item, idx) => (
                                                        <option key={idx} value={item?.title}>
                                                            {item?.title?.toLowerCase()}
                                                        </option>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                            <FormControl id="content" isRequired>
                                                <FormLabel>Topic</FormLabel>
                                                <Input
                                                    fontSize={{ sm: "xs", md: "sm" }}
                                                    type="text"
                                                    name="todays_topic"
                                                    value={todays_topic}
                                                    onChange={handleTopicChange}
                                                    placeholder="Today's Topic..."
                                                    _placeholder={{ color: "white" }}
                                                />
                                            </FormControl>
                                            <FormControl id="type" isRequired>
                                                <FormLabel>Home Work Status</FormLabel>
                                                <Input
                                                    fontSize={{ sm: "xs", md: "sm" }}
                                                    type="text"
                                                    name="homework_status"
                                                    value={homework_status}
                                                    onChange={handleHomeworkChange}
                                                    placeholder="Home work status..."
                                                    _placeholder={{ color: "white" }}
                                                />
                                            </FormControl>
                                            <FormControl id="type" isRequired>
                                                <FormLabel>Student Class Performance</FormLabel>
                                                <Input
                                                    fontSize={{ sm: "xs", md: "sm" }}
                                                    type="text"
                                                    name="class_performance"
                                                    value={class_performance}
                                                    onChange={handlePerformanceChange}
                                                    placeholder="class performance..."
                                                    _placeholder={{ color: "white" }}
                                                />
                                            </FormControl>
                                            <FormControl id="type" isRequired>
                                                <FormLabel>Next Session Topic</FormLabel>
                                                <Input
                                                    fontSize={{ sm: "xs", md: "sm" }}
                                                    type="text"
                                                    name="next_session_topic"
                                                    value={next_session_topic}
                                                    onChange={handleNextTopicChange}
                                                    placeholder="class performance..."
                                                    _placeholder={{ color: "white" }}
                                                />
                                            </FormControl>
                                            <Button type="submit" text="Send Report" ml={"auto"}></Button>
                                        </VStack>
                                    </form>)}
                            </Box>
                        </ModalContent>
                    </Modal>

                    <Box my="10px">
                        {student?.classTime_options?.map((classTime, id) => (
                            <Input
                                fontSize={{ sm: "xs", md: "sm" }}
                                _placeholder={{ color: "white" }}
                                placeholder={"user"}
                                value={classTime}
                                isDisabled
                                my="10px"
                                key={id}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default StudentDetail;

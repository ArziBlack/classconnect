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
    useToast
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoPeopleCircle } from "react-icons/io5";
import Button from "../../../components/Button";

const StudentDetail = () => {
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

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [Loaded, setLoaded] = useState(false);
    useEffect(() => {
        if (!Loaded) {
            setTimeout(() => {
                setLoaded(true);
            }, 2000);
        }
    }, [Loaded]);

    const onSubmit = (e) => {
        e.preventDefault();
    };

    // if (Loaded) {
    //   return (
    //     <Stack
    //       as={Box}
    //       textAlign={"center"}
    //       spacing={{ base: 4, md: 7 }}
    //       py={{ base: 20, md: 36 }}
    //     >
    //       <Center>
    //         <Spinner size="xl" color="#002c8a" />
    //       </Center>
    //     </Stack>
    //   );
    // }

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
                            {/* <Image src={profile} h="17px" w="17px" /> */}
                        </Skeleton>
                    </Box>
                    <Text
                        fontSize={{ sm: "sm", md: "md" }}
                        className="text-[white]"
                        fontWeight="bold"
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
                                //   src={userimage}
                                alt="Dan Abramov"
                            />
                        </Skeleton>
                    </Box>
                    <Box w={{ sm: "full", lg: "50%" }}>
                        <HStack>
                            <Text fontWeight="600" fontSize="2xl">
                                <SkeletonText isLoaded={Loaded}>{""}</SkeletonText>
                            </Text>
                        </HStack>
                        <div className=" w-full border-t-[1px] mt-2"></div>
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
                                        placeholder={"Full Name"}
                                        _placeholder={{ color: "white" }}
                                        mt="5px"
                                    />
                                </Skeleton>
                                <Skeleton my="15px" borderRadius="10px" isLoaded={Loaded}>
                                    <Input
                                        fontSize={{ sm: "xs", md: "sm" }}
                                        type="name"
                                        placeholder={"Course"}
                                        _placeholder={{ color: "white" }}
                                        mt="15px"
                                    />
                                </Skeleton>
                                <Skeleton borderRadius="10px" isLoaded={Loaded}>
                                    <Input
                                        fontSize={{ sm: "xs", md: "sm" }}
                                        isDisabled
                                        type="email"
                                        placeholder={"Country"}
                                        _placeholder={{ color: "white" }}
                                        mt="15px"
                                    />
                                </Skeleton>
                                <Skeleton borderRadius="10px" isLoaded={Loaded}>
                                    <Input
                                        fontSize={{ sm: "xs", md: "sm" }}
                                        isDisabled
                                        type="email"
                                        placeholder={"Age"}
                                        _placeholder={{ color: "white" }}
                                        mt="15px"
                                    />
                                </Skeleton>
                                <Skeleton borderRadius="10px" isLoaded={Loaded}>
                                    <Input
                                        fontSize={{ sm: "xs", md: "sm" }}
                                        isDisabled
                                        type="email"
                                        placeholder={"Sex"}
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
                            onClick={onOpen}
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
                                Create Student Personnal Assesment
                            </ModalHeader>
                            <ModalCloseButton />
                            <Box maxW="600px" p={6}>
                                <Text fontSize="2xl" fontWeight="bold" mb={3}>
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
                        </ModalContent>
                    </Modal>

                    <Box my="10px">
                        <Input
                            fontSize={{ sm: "xs", md: "sm" }}
                            _placeholder={{ color: "white" }}
                            placeholder={"user"}
                            value={"organization"}
                            isDisabled
                            my="10px"
                        />
                        <Input
                            fontSize={{ sm: "xs", md: "sm" }}
                            placeholder={"user"}
                            _placeholder={{ color: "white" }}
                            value={"organization"}
                            isDisabled
                            my="10px"
                        />
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default StudentDetail;

import {
    Box,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Button from "../../../../components/Button";
import { useAppSelector } from "../../../../hooks/reactReduxHooks";

const CreateClassNotice = () => {
    const { isLoading } = useAppSelector(state => state.tutor);
    const [classNotice, setClassNotice] = useState({
        time1: "",
        time2: "",
        class_link: ""
    });

    const handleChange = (e) => {
        setClassNotice({
            ...classNotice,
            [e.target.name]: e.target.value
        });
    }

    const { time1, time2, class_link } = classNotice;
    const handleSubmit = () => {
        console.log("Submitted");
    }
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
                <form onSubmit={handleSubmit}>
                    <VStack spacing={4} align="stretch">
                        <FormControl id="type" isRequired>
                            <FormLabel>Time Option One</FormLabel>
                            <Input type="DateTime" placeholder="General Report Title..." value={time1} onChange={handleChange} />
                        </FormControl>
                        <FormControl id="type" isRequired>
                            <FormLabel>Time Option Two</FormLabel>
                            <Input type="DateTime" placeholder="General Report Title..." value={time2} onChange={handleChange} />
                        </FormControl>
                        <FormControl id="content" isRequired>
                            <FormLabel>Class Meeting Link</FormLabel>
                            <Input type="text" placeholder="Class Meeting Link..." value={class_link} onChange={handleChange}  />
                        </FormControl>
                        <Button type="submit" text="Send Class Notice" ml={"auto"} isLoading={isLoading}></Button>
                    </VStack>
                </form>
            </Box>
        </Box>
    )
}

export default CreateClassNotice
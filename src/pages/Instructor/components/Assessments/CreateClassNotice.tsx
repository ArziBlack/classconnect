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
import { useAppDispatch, useAppSelector } from "../../../../hooks/reactReduxHooks";
import useCustomToast from "../../../../hooks/useCustomToast";
import { sendClassNotice } from "../../../../services/tutor/tutorThunk";

const CreateClassNotice = () => {
    const dispatch = useAppDispatch();
    const toast = useCustomToast();
    const { isLoading, noticeResponse } = useAppSelector(state => state.tutor);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!time1) {
            toast("Please include class time", "info");
            return;
        }
        if (!time2) {
            toast("Please include class time", "info");
            return;
        }
        if (!class_link) {
            toast("Please include class meeting link", "info");
            return;
        }
        const notice = classNotice;
        const res = await dispatch(sendClassNotice({ notice }));
        if (sendClassNotice.fulfilled.match(res)) {
            toast("Class Notice Sent Successfully", "success");
            noticeResponse?.upcomingClass && localStorage.setItem("nextclass", noticeResponse?.upcomingClass);
            setTimeout(()=> {
                toast("Class Notice Saved Successfully", "success");
            }, 3000);
        }
        if (sendClassNotice.rejected.match(res)) {
            toast("Error Sending Class Notice", "error");
        }
        setClassNotice({ time1: "", time2: "", class_link: "" });
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
                    Create Class Notice
                </Text>
                <form onSubmit={handleSubmit}>
                    <VStack spacing={4} align="stretch">
                        <FormControl id="type" isRequired>
                            <FormLabel>Time Option One</FormLabel>
                            <Input type="text" name="time1" placeholder="General Report Title..." value={time1} onChange={handleChange} />
                        </FormControl>
                        <FormControl id="type" isRequired>
                            <FormLabel>Time Option Two</FormLabel>
                            <Input type="text" name="time2" placeholder="General Report Title..." value={time2} onChange={handleChange} />
                        </FormControl>
                        <FormControl id="content" isRequired>
                            <FormLabel>Class Meeting Link</FormLabel>
                            <Input type="text" name="class_link" placeholder="Class Meeting Link..." value={class_link} onChange={handleChange} />
                        </FormControl>
                        <Button type="submit" text="Send Class Notice" ml={"auto"} isLoading={isLoading}></Button>
                    </VStack>
                </form>
            </Box>
        </Box>
    )
}

export default CreateClassNotice
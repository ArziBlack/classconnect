import { useEffect, useState } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { getNotificationsTutor } from "../../../services/tutor/tutorThunk";
import { useAppDispatch, useAppSelector } from "../../../hooks/reactReduxHooks";

export const NotificationItem = ({ data, number }) => {
  const [date, time, message] = data?.split(": ");

  return (
    <Box
      className="gap-3 border-b border-gray-700 py-4 cursor-pointer hover:bg-[#B3F8DA]/25"
      w={{ base: "100%", md: "80%", lg: "100%" }}
      p={{ base: "2", md: "4" }}
      tabIndex={0}
    >
      <Flex justifyContent="space-between" flexDir={"column"}>
        <Text
          fontSize={{ base: "xs", md: "sm" }}
          color="gray.400"
          fontWeight={500}
        >
          {number}. {date}
        </Text>
        <Text fontSize={{ base: "xs", md: "sm" }} color="gray.200">
          {time}
        </Text>
      </Flex>
      <Text
        fontSize={{ base: "sm", md: "lg" }}
        fontWeight="500"
        color="#B3F8DA"
        mt={2}
      >
        {message}
      </Text>
    </Box>
  );
};

const NotificationList = () => {
  const dispatch = useAppDispatch();
  const { notificationTutor } = useAppSelector((state) => state.tutor);
  const [selectedId, setSelectedId] = useState(null);

  const handleNotificationClick = (index) => {
    setSelectedId(index === selectedId ? null : index);
  };

  useEffect(() => {
    dispatch(getNotificationsTutor());
  }, [dispatch]);

  return (
    <div className="w-full grid grid-cols-1">
      <div className="overflow-y-scroll h-full no-scrollbar">
        {notificationTutor?.data?.length ? (
          notificationTutor?.data?.slice().map((notification, index) => (
            <div onClick={() => handleNotificationClick(index)} key={index}>
              <NotificationItem
                data={notification}
                number={index + 1} // Assign reverse number
              />
            </div>
          ))
        ) : (
          <Box className="flex flex-col h-fit w-full justify-center rounded-lg bg-[#023248] border gap-[10px] border-[#5E7079] text-white max-h-[700px]">
            <Box p={8}>
              <Text fontWeight="bold" textAlign="center">
                Your notifications will appear here...
              </Text>
            </Box>
          </Box>
        )}
      </div>
    </div>
  );
};

const NotificationTutor = () => {
  return (
    <Box
      className="text-white flex items-center"
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent="center"
      alignItems="center"
      w="100%"
      maxH="100vh"
      overflow="hidden"
    >
      <NotificationList />
    </Box>
  );
};

export default NotificationTutor;

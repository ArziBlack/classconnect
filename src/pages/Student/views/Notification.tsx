import { useEffect, useState } from "react";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reactReduxHooks";
import { getNotifications } from "../../../services/student/studentThunks";

export const NotificationItem = ({ data, number }) => {
  // eslint-disable-next-line no-unsafe-optional-chaining
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
  const { notifications, isLoading } = useAppSelector((state) => state.student);
  const [selectedId, setSelectedId] = useState(null);

  const handleNotificationClick = (index) => {
    setSelectedId(index === selectedId ? null : index);
  };

  useEffect(() => {
    dispatch(getNotifications());
  }, []);

  return (
    <div className="w-full grid grid-cols-1">
      {isLoading ? (
        <Flex justify="center" align="center" h="100%">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <div className="overflow-y-scroll h-[100%] no-scrollbar">
          {notifications?.data?.map((notification, index) => (
            <div onClick={() => handleNotificationClick(index)} key={index}>
              <NotificationItem data={notification} number={index + 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export function Notification() {
  return (
    <Box
      className="text-white flex items-center"
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent="center"
      alignItems="center"
      w="100%"
    >
      <NotificationList />
    </Box>
  );
}

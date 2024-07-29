import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { getNotificationsTutor } from "../../../services/tutor/tutorThunk";
import { useAppDispatch, useAppSelector } from "../../../hooks/reactReduxHooks";

export const NotificationItem = ({ data }) => {
  console.log(data);
  return (
    <Box
      className="gap-3 border-b border-gray-700 py-4 cursor-pointer te1xt-sm hover:bg-[#B3F8DA]/25"
      w={{ base: "100%", md: "80%", lg: "100%" }}
      p={{ base: "2", md: "4" }}
      tabIndex={0}
    >
      <Text
        fontSize={{ base: "xs", md: "sm" }}
        fontWeight="500"
        color="#B3F8DA"
      >
        {data}
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
  }, []);

  return (
    <div className="w-full grid grid-cols-1">
      <div className="overflow-y-scroll h-[400px] no-scrollbar">
        {notificationTutor?.data?.map((notification, index) => (
          <div onClick={() => handleNotificationClick(index)} key={index}>
            <NotificationItem data={notification} />
          </div>
        ))}
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

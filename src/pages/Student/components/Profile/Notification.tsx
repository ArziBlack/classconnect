import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reactReduxHooks";
import { getNotifications } from "../../../../services/student/studentThunks";

// const formatDate = (date) => {
//   const d = new Date(date);
//   const day = d.getDate();
//   const month = d.toLocaleString("default", { month: "long" });
//   const year = d.getFullYear();
//   return `${day} ${month} ${year}`;
// };

// function truncateString(str, maxLength) {
//   if (str.length > maxLength) {
//     return str.substring(0, maxLength) + "...";
//   } else {
//     return str;
//   }
// }

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
      {/* <Flex alignItems="center" justifyContent="space-between" paddingTop="5px">
        <Text
          fontSize={{ base: "xs", md: "sm" }}
          fontWeight="100"
          color="gray.400"
        >
          {formatDate(timestamp)}
        </Text>
        <Icon as={FaClock} color="green.500" />
      </Flex> */}
    </Box>
  );
};

const NotificationList = () => {
  const dispatch = useAppDispatch();
  const { notifications } = useAppSelector(state => state.student)
  const [selectedId, setSelectedId] = useState(null);

  const handleNotificationClick = (index) => {
    setSelectedId(index === selectedId ? null : index);
  };

  useEffect(() => {
    dispatch(getNotifications());
  }, []);

  return (
    <div className="w-full grid grid-cols-1">
      <div className="overflow-y-scroll h-[400px] no-scrollbar">
        {notifications?.data?.map((notification, index) => (
          <div onClick={() => handleNotificationClick(index)} key={index}>
            <NotificationItem data={notification} />
          </div>
        ))}
      </div>
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
      maxH="100vh"
      overflow="hidden"
    >
      <NotificationList />
    </Box>
  );
}
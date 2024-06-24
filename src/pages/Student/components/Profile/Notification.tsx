import { Box, Flex, Text, VStack, Icon } from "@chakra-ui/react";
import { FaClock } from "react-icons/fa";

const notifications = [
  {
    title: "Miss Favour Ogechi",
    date: "2 July 2024",
    content: "Important information will be passed to your email...",
  },
  {
    title: "Miss Favour Ogechi",
    date: "3 July 2024",
    content: "Please check your inbox for new updates...",
  },
];

const NotificationItem = ({ title, date, content }) => {
  return (
    <Box className="border-b border-gray-700 py-4" _hover={{ bg: "gray.800" }}>
      <Flex alignItems="center" justifyContent="space-between">
        <Text className="text-lg font-semibold">{title}</Text>
        <Icon as={FaClock} color="gray.500" />
      </Flex>
      <Text className="text-sm text-gray-400">{date}</Text>
      <Text className="text-md text-gray-300">{content}</Text>
    </Box>
  );
};

const NotificationList = () => {
  return (
    <Box className="max-w-lg mx-auto p-4 bg-gray-900 rounded-md">
      <VStack spacing={4} align="stretch">
        {notifications.map((notification, index) => (
          <NotificationItem key={index} {...notification} />
        ))}
      </VStack>
    </Box>
  );
};

function Notification() {
  return (
    <Box className="text-white pt-6 ">
      <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
        <NotificationList />
      </div>
    </Box>
  );
}

export default Notification;

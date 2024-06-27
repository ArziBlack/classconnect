import { Box, Flex, Text, VStack, Icon } from "@chakra-ui/react";
import { FaClock } from "react-icons/fa";

const formatDate = (date) => {
  const d = new Date(date);
  const day = d.getDate(); // Get the day of the month
  const month = d.toLocaleString("default", { month: "long" });
  const year = d.getFullYear(); // Get the year
  return `${day} ${month} ${year}`;
};

// Sample notifications data with static and dynamic dates
const notifications = [
  {
    date: new Date().toISOString(), // Today's date
    title: "Miss Favour Ogechi",
    content: "Important information will be passed to your email...",
  },
  {
    date: new Date(Date.now() - 86400000).toISOString(), // Yesterday's date
    title: "Miss Favour Ogechi",
    content: "Please check your inbox for new updates...",
  },
  {
    date: new Date(Date.now() - 2 * 86400000).toISOString(), // Day before yesterday's date
    title: "Miss Favour Ogechi",
    content: "Reminder: Update your information...",
  },
  {
    date: new Date(Date.now() - 3 * 86400000).toISOString(), // Three days ago
    title: "Miss Favour Ogechi",
    content: "Your new account details are available.",
  },
];

const NotificationItem = ({ title, date, content }) => {
  return (
    <Box
      className="gap-3 border-b border-gray-700 py-4 cursor-pointer"
      w={{ base: "100%", md: "80%", lg: "1024px" }} // Responsive width
      p={{ base: "2", md: "4" }} // Responsive padding
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize={{ base: "sm", md: "md" }} color="gray.400">
          {formatDate(date)}
        </Text>
        <Icon as={FaClock} color="green.500" />
      </Flex>
      <Text fontSize={{ base: "md", md: "lg" }} fontWeight="semibold">
        {title}
      </Text>
      <Text fontSize={{ base: "sm", md: "md" }} color="gray.300">
        {content}
      </Text>
    </Box>
  );
};

const NotificationList = () => {
  return (
    <Box p={{ base: "2", md: "4" }} w="100%">
      <VStack spacing={{ base: 2, md: 4 }} align="stretch">
        {notifications.map((notification, index) => (
          <NotificationItem key={index} {...notification} />
        ))}
      </VStack>
    </Box>
  );
};

export function Notification() {
  return (
    <Box
      className="text-white flex items-center"
      flexDirection={{ base: "column", lg: "row" }} // Responsive layout
      justifyContent="center"
      alignItems="center"
      w="100%"
      maxH="100vh" // Ensure it does not exceed the viewport height
      overflow="hidden" // Hide overflow to prevent scrollbars
    >
      <NotificationList />
    </Box>
  );
}

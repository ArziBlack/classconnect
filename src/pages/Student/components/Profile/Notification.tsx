import { Box, Flex, Text, Icon, Image } from "@chakra-ui/react";
import { FaClock } from "react-icons/fa";
import { NOTIFICATION } from "../../../../constants/image";

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
    info: "You have been shortlisted to join our team with no further hesitations. please"
  },
  {
    date: new Date(Date.now() - 86400000).toISOString(), // Yesterday's date
    title: "Miss Favour Ogechi",
    content: "Please check your inbox for new updates...",
    info: "You have been shortlisted to join our team with no further hesitations. please"
  },
  {
    date: new Date(Date.now() - 2 * 86400000).toISOString(), // Day before yesterday's date
    title: "Miss Favour Ogechi",
    content: "Reminder: Update your information...",
    info: "You have been shortlisted to join our team with no further hesitations. please"
  },
  {
    date: new Date(Date.now() - 3 * 86400000).toISOString(), // Three days ago
    title: "Miss Favour Ogechi",
    content: "Your new account details are available.",
    info: "You have been shortlisted to join our team with no further hesitations. please"
  },
];

const NotificationItem = ({ title, date, content, info }) => {
  return (
    <Box
      className="gap-3 border-b border-gray-700 py-4 cursor-pointer text-sm hover:bg-[#B3F8DA]"
      w={{ base: "100%", md: "80%", lg: "100%" }} // Responsive width
      p={{ base: "2", md: "4" }} // Responsive padding
    >
      <Text fontSize={{ base: "sm", md: "md" }} fontWeight="semibold" paddingBottom={`5px`}>
        {title}
      </Text>
      <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="500" color="#B3F8DA">
        {info}
      </Text>
      <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="200" color="gray.300">
        {content}
      </Text>
      <Flex alignItems="center" justifyContent="space-between" paddingTop="5px">
        <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="100" color="gray.400">
          {formatDate(date)}
        </Text>
        <Icon as={FaClock} color="green.500" />
      </Flex>
    </Box>
  );
};

const NotificationList = () => {
  return (
    <div className="w-full grid grid-cols-2">
      <div className=" overflow-y-scroll h-[400px] no-scrollbar">
        {notifications.map((notification, index) => (
          <NotificationItem key={index} {...notification} />
        ))}
      </div>
        <Flex w="100%" h="400px">
          <Image src={NOTIFICATION} alt="notification image" className="w-full object-cover"  />
        </Flex>
    </div>
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

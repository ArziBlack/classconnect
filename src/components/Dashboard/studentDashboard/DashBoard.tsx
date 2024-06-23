import { Box, Text, SimpleGrid, Select } from "@chakra-ui/react";
import { Progress, Button, Image } from "@chakra-ui/react";
import LearningTimeCard from "./LearningTimeCard";

const Header = () => {
  return (
    <Box bg="green.500" color="white" p={4} borderRadius="md">
      <Text fontSize="2xl" fontWeight="bold">
        Hi Favour
      </Text>
      <Text>
        Welcome to our e-learning platform, where you can learn new things,
        improve your skills, and reach your goals at your own speed!
      </Text>
    </Box>
  );
};

const ActivityChart = () => {
  const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const activity = [80, 30, 50, 70, 60, 40, 90];

  return (
    <Box bg="white" p={4} shadow="md" borderRadius="md">
      <Text fontWeight="bold" mb={2}>
        My Activity
      </Text>
      {days.map((day, index) => (
        <Box key={index} display="flex" alignItems="center" mb={2}>
          <Text width="40px">{day}</Text>
          <Box
            bg="green.400"
            height="8px"
            borderRadius="full"
            width={`${activity[index]}%`}
          ></Box>
        </Box>
      ))}
    </Box>
  );
};

const CalendarWidget = () => {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <Box bg="white" p={4} shadow="md" borderRadius="md">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Select width="auto" defaultValue="June">
          <option value="June">June</option>
          <option value="July">July</option>
          {/* Add more months as needed */}
        </Select>
        <Text>2024</Text>
      </Box>
      <SimpleGrid columns={7} spacing={2}>
        {days.map((day) => (
          <Box
            key={day}
            textAlign="center"
            p={2}
            bg={day === 3 ? "green.100" : "white"}
            borderRadius="md"
          >
            {day}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

const CoursesOverview = () => {
  const courses = [
    {
      name: "Mathematics",
      progress: 90,
      image: "https://via.placeholder.com/50",
    },
    { name: "Physics", progress: 75, image: "https://via.placeholder.com/50" },
  ];

  return (
    <Box bg="white" p={4} shadow="md" borderRadius="md">
      <Text fontWeight="bold" mb={4}>
        My Courses
      </Text>
      {courses.map((course, index) => (
        <Box key={index} display="flex" alignItems="center" mb={4}>
          <Image
            src={course.image}
            alt={course.name}
            borderRadius="full"
            boxSize="50px"
            mr={4}
          />
          <Box flex="1">
            <Text>{course.name}</Text>
            <Progress
              value={course.progress}
              size="sm"
              colorScheme="green"
              mt={2}
            />
          </Box>
          <Button colorScheme="teal" size="sm" ml={4}>
            View Course
          </Button>
        </Box>
      ))}
    </Box>
  );
};

const PaymentHistory = () => {
  const payments = [
    { title: "Quadratic Equation", amount: "₦1200" },
    { title: "Linear Algebra", amount: "₦1500" },
  ];

  return (
    <Box bg="white" p={4} shadow="md" borderRadius="md">
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Text fontWeight="bold">Payment History</Text>
        <Text color="teal.500" cursor="pointer">
          See all
        </Text>
      </Box>
      {payments.map((payment, index) => (
        <Box key={index} display="flex" justifyContent="space-between" mb={2}>
          <Text>{payment.title}</Text>
          <Text>{payment.amount}</Text>
        </Box>
      ))}
    </Box>
  );
};


const DashBoard: React.FC = () => {
  return (
    <Box bg="gray.100" p={6} minH="100vh">
      {/* Header Section */}
      <Header />

      {/* Main Content Grid */}
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4} mt={6}>
        {/* Left Column: Learning Time Card and My Activity */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <Box>
            <LearningTimeCard />
          </Box>
          <Box>
            <ActivityChart />
          </Box>
        </SimpleGrid>

        {/* Right Column: Calendar and Payment History */}
        <Box>
          <CalendarWidget />
          <Box mt={4}>
            <PaymentHistory />
          </Box>
        </Box>
      </SimpleGrid>

      {/* Courses Overview */}
      <Box mt={6}>
        <CoursesOverview />
      </Box>
    </Box>
  );
};

export default DashBoard;

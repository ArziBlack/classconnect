import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  CircularProgress,
  CircularProgressLabel,
  Center,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

// Define the segments with their respective values and colors
const segments = [
  { value: 25, color: "green.400", label: "Reading" }, // 25%
  { value: 25, color: "green.500", label: "Video" }, // 25%
  { value: 25, color: "green.300", label: "Writing" }, // 25%
  { value: 25, color: "green.200", label: "Assignment" }, // 25%
];

// Time ranges and their corresponding display times
const timeRanges = {
  Today: "3h 25m",
  "This Week": "12h 40m",
  "This Month": "52h 15m",
};

const MotionBox = motion(Box);

const LearningTimeCard = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("Today");

  // Store the previous time range to trigger the rotation effect
  const [previousTimeRange, setPreviousTimeRange] = useState("Today");

  // Function to get the segment with the highest value
  const getMaxValueSegmentColor = () => {
    const maxSegment = segments.reduce((prev, curr) =>
      prev.value > curr.value ? prev : curr
    );
    return maxSegment.color;
  };

  // Function to render the segmented circular progress
  const renderSegments = () => {
    let rotationOffset = 0;

    return segments.map((segment, index) => {
      const segmentRotation = (segment.value / 100) * 360;
      const clipPath = `polygon(50% 50%, 100% 0%, 100% 100%, 50% 100%)`; // To create half circle

      const progress = (
        <CircularProgress
          key={index}
          value={100}
          size="140px"
          thickness="10px"
          color={segment.color}
          trackColor="transparent"
          position="absolute"
          style={{
            clipPath: clipPath,
            transform: `rotate(${rotationOffset}deg)`,
            transformOrigin: "center center",
          }}
        />
      );

      rotationOffset += segmentRotation; // Update rotation for next segment
      return progress;
    });
  };

  // Function to handle time range change
  const handleTimeRangeChange = (range) => {
    // Update the time range and store the previous one for rotation effect
    setPreviousTimeRange(selectedTimeRange);
    setSelectedTimeRange(range);
  };

  // Get the color for the circular progress based on the highest value segment
  const dynamicColor = getMaxValueSegmentColor();

  return (
    <Box
      bg="white"
      p={6}
      shadow="md"
      borderRadius="lg"
      position="relative"
      w="320px"
      textAlign="center"
    >
      {/* Title and Dropdown */}
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontWeight="bold" fontSize="lg">
          Learning time
        </Text>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<ChevronDownIcon />}
            variant="ghost"
            size="sm"
          >
            <Text fontSize="sm">{selectedTimeRange}</Text>
          </MenuButton>
          <MenuList>
            {Object.keys(timeRanges).map((range) => (
              <MenuItem
                key={range}
                onClick={() => handleTimeRangeChange(range)}
              >
                {range}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>

      {/* Circular Progress with Segments */}
      <Center mb={4} position="relative">
        <MotionBox
          position="relative"
          w="140px"
          h="140px"
          animate={{
            rotate: selectedTimeRange !== previousTimeRange ? 360 : 0,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        >
          {renderSegments()}
          <CircularProgressLabel
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            color={dynamicColor}
            fontWeight="bold"
            fontSize="lg"
            w="100%"
            textAlign="center"
          >
            {timeRanges[selectedTimeRange]}
          </CircularProgressLabel>
        </MotionBox>
      </Center>

      {/* Legends */}
      <Flex justify="center" mt={4} gap={2} flexWrap="wrap">
        {segments.map((segment, index) => (
          <Text key={index} color={segment.color} fontSize="sm" mr={3}>
            • {segment.label}
          </Text>
        ))}
      </Flex>
    </Box>
  );
};

export default LearningTimeCard;

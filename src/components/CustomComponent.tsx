import PropTypes from "prop-types";
import {
  Box,
  Img,
  Heading,
  Flex,
  IconButton,
  AspectRatio,
} from "@chakra-ui/react";
import {
  //  FaPlay,
  //  FaPause,
  FaStepForward,
  FaStepBackward,
} from "react-icons/fa";
import Pattern from "../assets/images/Pattern.png";

const YoutubeEmbed = ({ embedId }) => (
  <Box maxW="1024px" mx="auto" px={{ base: 4, md: 8 }} position="relative">
    <Box
      zIndex={1}
      position="absolute"
      right={{ base: -4, md: -12 }}
      top={{ base: -4, md: -12 }}
      width={{ base: "100px", md: "150px" }}
    >
      <Img src={Pattern} />
    </Box>
    <Heading as="h2" size="lg" fontWeight="bold" textAlign="center" mb={4}>
      How to apply to join as instructor
    </Heading>
    {/* <YouTube videoId={videoId} /> */}
    <iframe
      width="1024"
      height="515"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{ position: "relative" }}
      title="Embedded youtube"
    />
    <Box
      p={5}
      bg="white"
      borderRadius="22px"
      boxShadow="lg"
      position="relative"
      zIndex={2}
    >
      <Box borderRadius="22px" overflow="hidden">
        <AspectRatio ratio={16 / 9}>
          <div id="youtube-player" />
        </AspectRatio>
        <Flex
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          align="center"
          borderBottomRightRadius="22px"
          borderBottomLeftRadius="22px"
          justifyContent="center"
          bg="rgba(0, 0, 0, 0.5)"
          p={2}
        >
          <IconButton
            aria-label="Previous"
            icon={<FaStepBackward />}
            variant="ghost"
            color="white"
            // onClick={handlePrevious}
            sx={{ "&:hover": { bg: "transparent" } }}
          />
          <IconButton
            aria-label={`{isPlaying ? "Pause" : "Play"}`}
            // icon={`{isPlaying ? <FaPause /> : <FaPlay />}`}
            variant="ghost"
            color="white"
            // onClick={handlePlayPause}
            sx={{ "&:hover": { bg: "transparent" } }}
            mx={2}
          />
          <IconButton
            aria-label="Next"
            icon={<FaStepForward />}
            variant="ghost"
            color="white"
            // onClick={handleNext}
            sx={{ "&:hover": { bg: "transparent" } }}
          />
        </Flex>
      </Box>
    </Box>
  </Box>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

function CustomComponent() {
  return (
    <div>
      <YoutubeEmbed embedId="fBUfJFcxjiM" />
    </div>
  );
}

export default CustomComponent;

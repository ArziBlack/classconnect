import { useState, useRef } from "react";
import ApplyInstructor from "./ApplyInstructor";
import {
  Box,
  // Img,
  Heading,
  Flex,
  IconButton,
  AspectRatio,
} from "@chakra-ui/react";
import { FaStepForward, FaStepBackward, FaPlay, FaPause } from "react-icons/fa";

export const YoutubeEmbed = ({ initialEmbedId, videoList, title }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(
    videoList?.indexOf(initialEmbedId)
  );
  const [isPlaying, setIsPlaying] = useState(true);
  const iframeRef = useRef(null);

  const handlePlayPause = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      if (isPlaying) {
        iframe.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      } else {
        iframe.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*"
        );
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    if (currentVideoIndex < videoList.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
      setIsPlaying(true);
    }
  };

  const handlePrevious = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
      setIsPlaying(true);
    }
  };

  return (
    <Box
      mx="auto"
      px={{ base: 4, md: 8 }}
      mt={{ base: 4, md: 8 }}
      mb={{ base: 4, md: 8 }}
      position="relative"
    >
      <Heading
        color={"brand.text"}
        fontFamily={"Metropolis"}
        as="h2"
        size="lg"
        fontWeight="600"
        textAlign="center"
        mb={4}
      >
        {title}
      </Heading>
      <Box
        zIndex={2}
        boxShadow="lg"
        maxW={"800px"}
        borderRadius="22px"
        position="relative"
        margin={"0 auto"}
      >
        <Box borderRadius="22px" overflow="hidden">
          <AspectRatio ratio={16 / 9}>
            <iframe
              ref={iframeRef}
              src={`https://www.youtube.com/embed/${videoList?.[currentVideoIndex]}?enablejsapi=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded YouTube video"
            />
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
              onClick={handlePrevious}
              sx={{ "&:hover": { bg: "transparent" } }}
              isDisabled={currentVideoIndex === 0}
            />
            <IconButton
              aria-label={isPlaying ? "Pause" : "Play"}
              icon={isPlaying ? <FaPause /> : <FaPlay />}
              variant="ghost"
              color="white"
              onClick={handlePlayPause}
              sx={{ "&:hover": { bg: "transparent" } }}
              mx={2}
            />
            <IconButton
              aria-label="Next"
              icon={<FaStepForward />}
              variant="ghost"
              color="white"
              onClick={handleNext}
              sx={{ "&:hover": { bg: "transparent" } }}
              isDisabled={currentVideoIndex === videoList?.length - 1}
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

const CustomComponent = () => (
  <div>
    <ApplyInstructor />
    <YoutubeEmbed
      initialEmbedId="fBUfJFcxjiM"
      title={"How to apply to join as instructor"}
      videoList={["fBUfJFcxjiM", "3fumBcKC6RE", "eX2qFMC8cFo", "yzC4hFK5P3g"]}
    />
  </div>
);

export default CustomComponent;

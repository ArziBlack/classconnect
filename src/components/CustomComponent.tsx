import { useEffect, useRef, useState } from "react";
import {
  Box,
  Img,
  Heading,
  Flex,
  IconButton,
  AspectRatio,
} from "@chakra-ui/react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";
import Pattern from "../assets/images/Pattern.png";

const CustomComponent: React.FC = () => {
  const playerRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Load the IFrame Player API code asynchronously
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

    // Replace 'your-video-id' with the actual video ID
    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player("youtube-player", {
        videoId: "fBUfJFcxjiM", // Replace with your video URL
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };
  }, []);

  const onPlayerReady = (event: any) => {
    // Player is ready
  };

  const onPlayerStateChange = (event: any) => {
    if (event.data === (window as any).YT.PlayerState.PLAYING) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const handleNext = () => {
    const currentTime = playerRef.current.getCurrentTime();
    playerRef.current.seekTo(currentTime + 10);
  };

  const handlePrevious = () => {
    const currentTime = playerRef.current.getCurrentTime();
    playerRef.current.seekTo(currentTime - 10);
  };

  return (
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
              onClick={handlePrevious}
              sx={{ "&:hover": { bg: "transparent" } }}
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
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomComponent;

// import { useEffect, useRef, useState } from "react";
// import {
//   Box,
//   Img,
//   Heading,
//   Flex,
//   IconButton,
//   AspectRatio,
// } from "@chakra-ui/react";
// import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";
// import Pattern from "../assets/images/Pattern.png";

// type YTPlayer = {
//   playVideo: () => void;
//   pauseVideo: () => void;
//   getCurrentTime: () => number;
//   seekTo: (seconds: number, allowSeekAhead?: boolean) => void;
// };

// declare global {
//   interface Window {
//     YT: {
//       Player: new (elementId: string, options: YT.PlayerOptions) => YTPlayer;
//       PlayerState: {
//         PLAYING: number;
//       };
//     };
//     onYouTubeIframeAPIReady: () => void;
//   }
// }

// const CustomComponent: React.FC = () => {
//   const playerRef = useRef<YTPlayer | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     // Load the IFrame Player API code asynchronously
//     const tag = document.createElement("script");
//     tag.src = "https://www.youtube.com/iframe_api";
//     const firstScriptTag = document.getElementsByTagName("script")[0];
//     firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

//     // Replace 'your-video-id' with the actual video ID
//     window.onYouTubeIframeAPIReady = () => {
//       playerRef.current = new window.YT.Player("youtube-player", {
//         videoId: "fBUfJFcxjiM", // Replace with your video URL
//         events: {
//           onReady: onPlayerReady,
//           onStateChange: onPlayerStateChange,
//         },
//       });
//     };
//   }, []);

//   const onPlayerReady = () => {
//     // This function can be extended to handle player ready state
//   };

//   const onPlayerStateChange = (event: { data: number }) => {
//     if (event.data === window.YT.PlayerState.PLAYING) {
//       setIsPlaying(true);
//     } else {
//       setIsPlaying(false);
//     }
//   };

//   const handlePlayPause = () => {
//     if (isPlaying) {
//       playerRef.current?.pauseVideo();
//     } else {
//       playerRef.current?.playVideo();
//     }
//   };

//   const handleNext = () => {
//     const currentTime = playerRef.current?.getCurrentTime() ?? 0;
//     playerRef.current?.seekTo(currentTime + 10);
//   };

//   const handlePrevious = () => {
//     const currentTime = playerRef.current?.getCurrentTime() ?? 0;
//     playerRef.current?.seekTo(currentTime - 10);
//   };

//   return (
//     <Box maxW="1024px" mx="auto" px={{ base: 4, md: 8 }} position="relative">
//       <Box
//         zIndex={1}
//         position="absolute"
//         right={{ base: -4, md: -12 }}
//         top={{ base: -4, md: -12 }}
//         width={{ base: "100px", md: "150px" }}
//       >
//         <Img src={Pattern} />
//       </Box>
//       <Heading as="h2" size="lg" fontWeight="bold" textAlign="center" mb={4}>
//         How to apply to join as instructor
//       </Heading>
//       <Box
//         p={5}
//         bg="white"
//         borderRadius="22px"
//         boxShadow="lg"
//         position="relative"
//         zIndex={2}
//       >
//         <Box borderRadius="22px" overflow="hidden">
//           <AspectRatio ratio={16 / 9}>
//             <div id="youtube-player" />
//           </AspectRatio>
//           <Flex
//             position="absolute"
//             bottom={0}
//             left={0}
//             right={0}
//             align="center"
//             borderBottomRightRadius="22px"
//             borderBottomLeftRadius="22px"
//             justifyContent="center"
//             bg="rgba(0, 0, 0, 0.5)"
//             p={2}
//           >
//             <IconButton
//               aria-label="Previous"
//               icon={<FaStepBackward />}
//               variant="ghost"
//               color="white"
//               onClick={handlePrevious}
//               sx={{ "&:hover": { bg: "transparent" } }}
//             />
//             <IconButton
//               aria-label={isPlaying ? "Pause" : "Play"}
//               icon={isPlaying ? <FaPause /> : <FaPlay />}
//               variant="ghost"
//               color="white"
//               onClick={handlePlayPause}
//               sx={{ "&:hover": { bg: "transparent" } }}
//               mx={2}
//             />
//             <IconButton
//               aria-label="Next"
//               icon={<FaStepForward />}
//               variant="ghost"
//               color="white"
//               onClick={handleNext}
//               sx={{ "&:hover": { bg: "transparent" } }}
//             />
//           </Flex>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default CustomComponent;

import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div
    className="
  overflow-hidden;
  pb-56.25%;
  relative;
  height-0"
  >
    <iframe
      className="left-0
  top-0
  h-100%
  w-100%
  absolute"
      // width="853"
      // height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
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

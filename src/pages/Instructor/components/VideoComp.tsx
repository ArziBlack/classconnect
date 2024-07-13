import { Box } from "@chakra-ui/react";
import React from "react";

interface VideoEmbedProps {
  videoId: string;
  iframeHeight: number;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoId, iframeHeight }) => {
  return (
    <Box className="rounded-[20px]">
      <iframe
        id="video-iframe"
        src={`https://www.youtube.com/embed/${videoId}`}
        width={"100%"}
        height={iframeHeight}
        style={{
          borderRadius: "20px",
        }}
        frameBorder={0}
        allowFullScreen
        title="Embedded YouTube Video"
      />
    </Box>
  );
};

export default VideoEmbed;

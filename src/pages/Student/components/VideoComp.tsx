import React from 'react';

interface VideoEmbedProps {
  videoId: string; // YouTube video ID
  containerWidth: number;
  iframeHeight: number;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoId, containerWidth, iframeHeight  }) => {
  
  return (
    <div className='p-1 rounded-md'>
      <iframe
        id="video-iframe"
        src={`https://www.youtube.com/embed/${videoId}`}
        width={containerWidth}
        height={iframeHeight}
        frameBorder={0}
        allowFullScreen
        title="Embedded YouTube Video"
      />
    </div>
  );
};

export default VideoEmbed;

import { useEffect, useState } from "react";
import VideoEmbed from "../components/VideoComp";

export const Home = () => {
  const [containerWidth, setContainerWidth] = useState<number>(660);
  const iframeHeight = containerWidth * (215 / 560);

  useEffect(() => {
    const handleResize = () => {
      const width =
        document.getElementById("video-container")?.offsetWidth ?? 560;
      setContainerWidth(width);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const videoId = "yYXImqDuy-I?si=yEOannHhgq2uXG0j";
  return (
    <div className="w-full flex gap-6 text-white">
      <div className="w-2/3 flex flex-col justify-center items-center">
        <div>
          <h2 className="font-[700] text-3xl pb-3">Hi Favor</h2>
          <p className=" font-[100]">
            Welcome to our e-learning platform, where you can learn new things,
            improve your skills, and reach your goals at your own speed.
          </p>
        </div>
        <div id="video-container" style={{ width: '100%', maxWidth: '100%' }} className="pt-7">
          <VideoEmbed
            videoId={videoId}
            containerWidth={containerWidth}
            iframeHeight={iframeHeight}
          />
        </div>
        <div>
          <div>
            <h2>My Courses</h2>
            <h2>Status</h2>
            <h2>All Courses</h2>
          </div>
          <div></div>
        </div>
      </div>
      <div className="w-1/3 flex justify-center items-center"></div>
    </div>
  );
};

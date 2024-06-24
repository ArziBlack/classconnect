import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import VideoEmbed from "../components/VideoComp";

// Setup the localizer by providing the moment (or globalize) Object to the correct localizer.
const localizer = momentLocalizer(moment);

// Dummy events data
const events = [
  {
    title: "Meeting",
    start: new Date(2024, 5, 15, 10, 0), // Year, Month (0-based), Day, Hour, Minute
    end: new Date(2024, 5, 15, 12, 0),
  },
  {
    title: "Lunch",
    start: new Date(2024, 5, 20, 12, 0),
    end: new Date(2024, 5, 20, 13, 0),
  },
];

const homeCourses = [
  {
    course: "Pornography",
    image: "image",
    tutor: "Samuel",
    status: "completed",
  },
  {
    course: "Videography",
    image: "image",
    tutor: "Samuel",
    status: "completed",
  },
];

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
    <div className="w-full flex gap-6 text-white text-[14px]">
      <div className="w-2/3 flex flex-col justify-center items-center">
        <div>
          <h2 className="font-[700] text-3xl pb-3">Hi Favor</h2>
          <p className=" font-[100]">
            Welcome to our e-learning platform, where you can learn new things,
            improve your skills, and reach your goals at your own speed.
          </p>
        </div>
        <div
          id="video-container"
          style={{ width: "100%", maxWidth: "100%" }}
          className="pt-7 bg-black"
        >
          <VideoEmbed
            videoId={videoId}
            containerWidth={containerWidth}
            iframeHeight={iframeHeight}
          />
        </div>
        <div className="flex flex-col w-full mt-7 border border-gray-500 pt-4 pb-1 px-2 rounded bg-[#143543]">
          <div className="flex w-full py-1">
            <h2 className="w-2/4">My Courses</h2>
            <h2 className="w-1/4">Status</h2>
            <h2 className="w-1/4 text-right text-lime-500">All Courses</h2>
          </div>
          {homeCourses.map((item, id) => (
            <div
              className="flex w-full items-center my-2 border border-gray-400 p-1 rounded"
              key={id}
            >
              <div className="w-2/4 flex items-center">
                <div className="bg-red-400 rounded-full h-9 w-9 p-1"></div>
                <div className="flex flex-col h-full justify-between  ml-2">
                  <h2 className="text-xs">{item.course}</h2>
                  <h2 className="font-[100] text-xs">{item.tutor}</h2>
                </div>
              </div>
              <h2 className="w-1/4 font-[100] text-xs">{item.status}</h2>
              <button className="w-1/4 justify-end py-2 px-1 border border-lime-500 rounded text-lime-500">
                View Courses
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/3 flex justify-center items-center h-[500px] p-1 bg-[#143543] rounded mr-2">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ margin: "auto", color: "white", width:"100%" }}
        />
      </div>
    </div>
  );
};

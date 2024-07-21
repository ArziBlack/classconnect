import { useEffect, useState } from "react";
import VideoEmbed from "../components/VideoComp";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { FaCaretRight } from "react-icons/fa";
import { useAppSelector } from "../../../hooks/reactReduxHooks";
import { Link } from "react-router-dom";

const schedule = [
  { course: "Frontend Development", time: "2nd July 2024, Tuesday" },
  { course: "Cloud Engineering", time: "4th July 2024, Wednesday" },
  { course: "Backend Engineering", time: "6th July 2024, Tuesday" },
];

const highlightedDates = [
  new Date(2024, 6, 2),
  new Date(2024, 6, 4),
  new Date(2024, 6, 6),
];

const active = new Date();

const modifiers = {
  highlighted: highlightedDates,
  active: active,
};

const modifiersStyles = {
  active: {
    backgroundColor: "yellow",
    color: "black",
  },
  highlighted: {
    backgroundColor: "#00ff84",
    color: "#fff",
  },
};

export const Home = () => {
  const { data } = useAppSelector((state) => state.auth);
  const { myCoursesRes } = useAppSelector((state) => state.student);

  const name = data?.greeting.split(" ")[1];
  const [containerWidth, setContainerWidth] = useState<number>(660);
  const iframeHeight = containerWidth * (300 / 560);

  const truncateOverflow = (sentence: string) => {
    if (sentence.length > 13) {
      return sentence.substring(0, 13) + "...";
    } else {
      return sentence;
    }
  };

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

  const videoId = "pBv7igaxfQE-I?si=yEOannHhgq2uXG0j";
  return (
    <div className="w-full flex gap-6 text-white text-[14px]">
      <div className="w-2/3 flex flex-col justify-center items-center">
        <div className="mb-8">
          <h2 className="font-[600] text-3xl pb-3">Hi {name}</h2>
          <p className=" font-[400] text-[16px]">{data?.greeting}</p>
        </div>
        <div
          id="video-container"
          style={{ width: "100%", maxWidth: "100%" }}
          className="p-[0] rounded-[20px] bg-black border border-gray-500"
        >
          <VideoEmbed videoId={videoId} iframeHeight={iframeHeight} />
        </div>
        <div className="flex flex-col w-full justify-between h-full mt-5 border border-gray-500 pt-4 pb-1 px-2 rounded bg-[#143543]">
          <div className="flex w-full py-1">
            <h2 className="w-2/4">My Courses</h2>
            <h2 className="w-1/4">Status</h2>
            <Link to={`/student/courses/started`} className="w-1/4 text-right text-[#00ff84]">
              All Courses
            </Link>
          </div>
          {!myCoursesRes || myCoursesRes?.message?.length === 0 ? (<div className="text-center my-2 border border-gray-400 p-1 rounded">You Dont Have any Courses Yet...</div>) : myCoursesRes?.message?.slice(0, 2).map((item, id) => (
            <div
              className="flex w-full items-center my-1 border border-gray-400 p-1 rounded"
              key={id}
            >
              <div className="w-2/4 flex items-center">
                <div className="bg-red-400 rounded-full h-9 w-9 p-1 ml-1"></div>
                <div className="flex flex-col h-full justify-between  ml-2">
                  <h2 className="text-xs">{item?.title}</h2>
                  {/* <h2 className="font-[100] text-xs">{item?.tutor}</h2> */}
                </div>
              </div>
              <h2 className="w-1/4 font-[100] text-xs">Started</h2>
              <button className="w-1/4 justify-end py-2 px-1 text-xs rounded text-[#00ff84]">
                View Courses
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/3 flex flex-col justify-center items-center min-h-[500px] h-full border border-gray-500 p-2 rounded mr-2 mt-4 font-light mb-5 sticky top-8">
        <DayPicker
          fromYear={2010}
          toYear={2024}
          showOutsideDays
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
        />
        <div className="w-full border-b border-gray-500 my-2 mb-6 mx-4"></div>
        <div className="flex flex-col w-full px-4">
          <div className="flex items-center justify-between w-full">
            <h2 className="font-[700]">Upcoming classes</h2>
            <span className="font-light text-[#00ff84]">See All</span>
          </div>
          <div className="">
            {schedule.map((item, id) => (
              <div
                className="flex w-full items-center my-2 p-1 rounded justify-between bg-[#143543]"
                key={id}
              >
                <div className="w-2/4 flex items-center text-[9px]">
                  <div className="bg-black/50 rounded-md h-7 w-7 p-1"></div>
                  <div className="flex flex-col h-full justify-between  ml-2">
                    <h2 className="font-bold">{item.course}</h2>
                    <h2 className="font-[100]">
                      {truncateOverflow(item.time)}
                    </h2>
                  </div>
                </div>
                <FaCaretRight />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

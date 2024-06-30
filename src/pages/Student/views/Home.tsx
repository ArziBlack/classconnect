import { useEffect, useState } from "react";
import VideoEmbed from "../components/VideoComp";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { FaCaretRight } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../hooks/reactReduxHooks";
import { getApprovedTutors } from "../../../services/student/studentThunks";
import { CircularProgress } from "@chakra-ui/react";

const homeCourses = [
  {
    course: "Frontend Development",
    image: "image",
    tutor: "Samuel",
    status: "completed",
  },
  {
    course: "Cloud Engineering",
    image: "image",
    tutor: "Samuel",
    status: "completed",
  },
];

const schedule = [
  { course: "Fishery", time: "2nd July 2024, Tuesday" },
  { course: "Farming", time: "4nd July 2024, Wuesday" },
  { course: "Smoking", time: "4nd July 2024, Suesday" },
  // { course: "Smoking", time: "4nd July 2024, Suesday" },
];

const highlightedDates = [
  new Date(2024, 5, 20),
  new Date(2024, 5, 24),
  new Date(2024, 5, 1),
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
  const dispatch = useAppDispatch();
  const { isLoading, isError, error, approvedTutors } = useAppSelector(
    (state) => state.student
  );
  useEffect(() => {
    dispatch(getApprovedTutors());
  }, []);
  const { data } = useAppSelector((state) => state.auth);
  console.log(approvedTutors);
  console.log(isLoading);
  console.log(isError);
  console.log(error);
  const name = data?.greeting.split(" ")[1];
  const [containerWidth, setContainerWidth] = useState<number>(660);
  const iframeHeight = containerWidth * (215 / 560);

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

  const videoId = "yYXImqDuy-I?si=yEOannHhgq2uXG0j";
  return (
    <div className="w-full flex gap-6 text-white text-[14px]">
      <div className="w-2/3 flex flex-col justify-center items-center">
        <div>
          <h2 className="font-[700] text-3xl pb-3">Hi {name}</h2>
          <p className=" font-[100]">{data?.greeting}</p>
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
        <div className="flex flex-col w-full justify-between h-full mt-5 border border-gray-500 pt-4 pb-1 px-2 rounded bg-[#143543]">
          <div className="flex w-full py-1">
            <h2 className="w-2/4">My Courses</h2>
            <h2 className="w-1/4">Status</h2>
            <h2 className="w-1/4 text-right text-lime-500">All Courses</h2>
          </div>
          {homeCourses.map((item, id) => (
            <div
              className="flex w-full items-center my-1 border border-gray-400 p-1 rounded"
              key={id}
            >
              <div className="w-2/4 flex items-center">
                <div className="bg-red-400 rounded-full h-9 w-9 p-1 ml-1"></div>
                <div className="flex flex-col h-full justify-between  ml-2">
                  <h2 className="text-xs">{item.course}</h2>
                  <h2 className="font-[100] text-xs">{item.tutor}</h2>
                </div>
              </div>
              <h2 className="w-1/4 font-[100] text-xs">{item.status}</h2>
              <button className="w-1/4 justify-end py-2 px-1 border border-lime-500 rounded text-lime-500">
                {isLoading ? <CircularProgress /> : "View Courses"}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/3 flex flex-col justify-center items-center min-h-[500px] h-full border border-gray-500 p-2 rounded mr-2 font-light mb-5">
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
            <h2 className="font-[600]">Upcoming Task</h2>
            <span className="font-light text-lime-500">See All</span>
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

import { useEffect, useRef, useState } from "react";
import VideoEmbed from "../components/VideoComp";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { FaCaretRight } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../hooks/reactReduxHooks";
import { Link, useNavigate } from "react-router-dom";
import {
  getClassSchedule,
  getMyCourses,
} from "../../../services/student/studentThunks";
import moment from "moment";
import { truncateOverflow } from "../../../utils/utility";

const active = new Date();

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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.auth);
  const { myCoursesRes, mySchedule } = useAppSelector((state) => state.student);

  const hasFetchedSchedule = useRef(false);
  const [containerWidth, setContainerWidth] = useState<number>(660);
  const iframeHeight = containerWidth * (300 / 560);
  const class_time = mySchedule?.upcomingClass;
  const futureDate = moment(class_time);
  const formattedDate = futureDate.format("YYYY-MM-DD");

  const highlightedDates = [new Date(futureDate.toISOString())];

  const cells = {
    margin: "0.2rem",
  };

  const modifiers = {
    highlighted: highlightedDates,
    active: active,
  };

  useEffect(() => {
    if (!hasFetchedSchedule.current) {
      !mySchedule && dispatch(getClassSchedule());
      dispatch(getMyCourses());
      hasFetchedSchedule.current = true;
    }
  }, [mySchedule, dispatch]);

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

  const videoIdMatch = data.video.match(/v=([^&]+)/);
  const videoId = videoIdMatch ? videoIdMatch[1] : null;

  return (
    <div className="w-full justify-center md:justify-start p-3 items-center md:items-start md:p-0 flex md:flex-row flex-col gap-6 text-white text-[14px]">
      <div className="w-full md:w-2/3 flex flex-col justify-center ">
        <div className="mb-8">
          <h2 className="font-[600] text-2xl pb-3">Hi {data?.first_name}</h2>
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
          <div className="flex w-full p-2">
            <h2 className="w-2/4">My Courses</h2>
            <h2 className="w-1/4 hidden md:flex">Status</h2>
            <Link
              to={`/student/courses/available`}
              className="w-1/4 text-right text-[#00ff84]"
            >
              All Courses
            </Link>
          </div>
          {!myCoursesRes || myCoursesRes?.message?.length === 0 ? (
            <div className="text-center my-2 border border-gray-400 p-1 rounded">
              You Dont Have any Courses Yet...
            </div>
          ) : (
            myCoursesRes?.message?.slice(0, 2).map((item, id) => (
              <div
                className={`flex w-full items-center my-1 p-1 border-t border-gray-400`}
                key={id}
              >
                <div className="w-2/4 flex items-center">
                  <div className="bg-red-400 rounded-full h-9 w-9 p-1 ml-1"></div>
                  <div className="flex flex-col h-full justify-between  ml-2">
                    <h2 className="text-xs">{item?.title}</h2>
                    {/* <h2 className="font-[100] text-xs">{item?.tutor}</h2> */}
                  </div>
                </div>
                <h2 className="w-1/4 font-[100] text-xs hidden md:flex">
                  Started
                </h2>
                {/* <Link to={`student/courses/${item.id}`}> */}
                <button
                  className="w-1/4 justify-end text-end py-2 px-1 text-xs rounded underline"
                  onClick={() => navigate(`courses/${item?.courseId}`)}
                >
                  View Course
                </button>
                {/* </Link> */}
              </div>
            ))
          )}
        </div>
      </div>
      <div className="w-full md:w-1/3 flex flex-col self-center justify-center items-center max-h-[500px]  border border-gray-500 rounded-lg mr-2 font-light mb-5 mt-2 md:mt-16 py-8">
        <DayPicker
          fromYear={2010}
          toYear={2024}
          styles={{
            day: cells,
            months: {
              fontWeight: 200,
            },
          }}
          showOutsideDays
          modifiers={modifiers}
          className="custom-day-picker"
          modifiersStyles={modifiersStyles}
        />
        <div className="w-full border-b border-gray-500 my-2 mb-6 mx-4"></div>
        <div className="flex flex-col w-full px-4">
          <div className="flex items-center justify-between w-full">
            <h2 className="font-[700]">Upcoming classes</h2>
            <span className="font-light text-[#00ff84]">{/**See All*/}</span>
          </div>
          <div className="">
            <div className="flex w-full items-center my-2 p-1 rounded justify-between bg-[#143543]">
              <div className="w-2/4 flex items-center text-[9px]">
                <div className="bg-black/50 rounded-md h-7 w-7 p-1"></div>
                <div className="flex flex-col h-full justify-between  ml-2">
                  <h2 className="font-bold">
                    {mySchedule && truncateOverflow(mySchedule?.message)}
                  </h2>
                  <h2 className="font-[100]">{formattedDate}</h2>
                </div>
              </div>
              <FaCaretRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

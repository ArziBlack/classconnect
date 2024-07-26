import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import DashBoard from "../views/Dashboard";
import PDFicon from "../../../assets/icons/PDFicon.svg";
import { NOT_PROFILE } from "../../../constants/image";
import { useAppDispatch, useAppSelector } from "../../../hooks/reactReduxHooks";
import { useEffect } from "react";
import { getMyStudents } from "../../../services/tutor/tutorThunk";
import moment from "moment";

const homeCourses = [
  {
    course: "Write all you understand about design",
    image: <img src={NOT_PROFILE} />,
    tutor: "Download the file to do your assignment",
    download: <img src={PDFicon} />,
  },
];

const classSchedule = localStorage.getItem("nextclass");
const futureDate = moment(classSchedule);
const formattedDate = futureDate.format("YYYY-MM-DD");

const highlightedDates = [new Date(futureDate.toISOString())];

const active = new Date();

const cells = {
  margin: "0.2rem",
};

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
  const { myStudents } = useAppSelector((store) => store.tutor);

  useEffect(() => {
    !myStudents && dispatch(getMyStudents());
  }, [myStudents, dispatch]);

  const { data } = useAppSelector((store) => store.auth);
  return (
    <div className="w-full flex gap-6 text-white text-[14px] font-['Inter']">
      <div className="w-2/3 flex flex-col justify-center items-start">
        <div className="my-8">
          <h2 className="font-[600] text-3xl pb-3">Hi {data?.first_name} </h2>
          <p className=" font-[400] text-[16px]">{data?.greeting}</p>
        </div>
        <DashBoard />
        <div className="flex flex-col w-full justify-between h-full bg-[#023248] border border-gray-500 pt-4 pb-1 px-2 rounded-lg">
          <div className="flex w-full py-1 border-b border-[#5E7079] ">
            <h2 className="w-2/4">Assessment</h2>
            <h2 className="w-2/4 text-right text-[#00ff84]">View All</h2>
          </div>
          {!homeCourses ? (
            homeCourses.map((item, id) => (
              <div className="flex w-full items-center my-1 p-1 " key={id}>
                <div className="w-2/4 flex items-center">
                  <div className=" h-9 w-9 mb-11 ml-1">{item.image} </div>
                  <div className="flex flex-col h-full justify-between  ml-2">
                    <h2 className="text-md">{item.course}</h2>
                    <h2 className="font-[100] text-xs ">{item.tutor}</h2>
                    <div className="cursor-pointer h-9 w-9 p-1 ml-1">
                      {item.download}
                    </div>
                  </div>
                </div>
                <button className="w-2/4 justify-end -mt-10 py-2 px-1 text-xs text-right rounded text-[#00ff84]">
                  13/07/2024 <span>9:27pm</span>
                </button>
              </div>
            ))
          ) : (
            <div className="flex w-full items-center my-1 p-1 justify-center text-center">
              You Haven't Sent any Assessments yet.
            </div>
          )}
        </div>
      </div>
      <div className="w-1/3 flex flex-col justify-center items-center min-h-[500px] h-[calc(100vh-90px)] border border-gray-500 rounded-lg mr-2 font-light mb-5 sticky top-0">
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
            <h2 className="font-semibold">Upcoming classes</h2>
            <span className="font-light text-[#00ff84]">See All</span>
          </div>
          <div className="">
            {!formattedDate ? (
              <div className="flex w-full items-center my-2 p-1 rounded justify-between">
                <div className="w-2/4 flex items-center text-[9px]">
                  <div className="bg-black/50 rounded-md h-7 w-7 p-1"></div>
                  <div className="flex flex-col h-full justify-between  ml-2">
                    <h2 className="font-semibold">{/**item.course*/}</h2>
                    <h2 className="font-[100]">{/**item.time*/}</h2>
                    <h2 className="font-semibold">{formattedDate}</h2>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex w-full h-full items-center my-2 p-1 rounded justify-center">
                You Dont Have any Upcoming Classes
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

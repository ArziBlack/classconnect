import Vector from "../../../assets/icons/Vector.svg";
import checkbox from "../../../assets/icons/checkbok.svg";
import { ACADEMIC_LIGHT } from "../../../constants/icon";
import { useAppSelector } from "../../../hooks/reactReduxHooks";
import { truncateString } from "../../../utils/utility";

const HeaderComponent = () => {
  const { data } = useAppSelector(store => store.auth);
  return (
    <div className="flex justify-between gap-4 mb-4">
      <div
        className="flex flex-col items-start p-4 rounded-lg shadow-lg text-white w-full h-[104px] bg-[#023248]"
      >
        <div className="flex items-center justify-between w-full mb-2">
          <h2 className="text-sm font-medium">{"Classes"}</h2>
          <div><img src={checkbox} alt="Checkbox" /></div>
        </div>
        <span className="text-2xl font-bold">{"0"}</span>
      </div>
      <div
        className="flex flex-col items-start p-4 rounded-lg shadow-lg text-white w-full h-[104px] bg-[#023248]"
      >
        <div className="flex items-center justify-between w-full mb-2">
          <h2 className="text-sm font-medium">{"Courses"}</h2>
          <div><img src={Vector} alt="Book" /></div>
        </div>
        <span className="text-2xl font-bold">{"0"}</span>
      </div>
      <div
        className="flex flex-col items-start p-4 rounded-lg shadow-lg text-white w-full h-[104px] bg-[#023248]"
      >
        <div className="flex items-center justify-between w-full mb-2">
          <h2 className="text-sm font-medium">{"Students"}</h2>
          <div><img src={ACADEMIC_LIGHT} alt="Academic Cap" /></div>
        </div>
        <span className="text-2xl font-bold">{data?.student_count}</span>
      </div>
    </div>
  )
};

const getScoreColor = (score) => {
  if (score >= 50) return "bg-green-200 text-green-800";
  if (score >= 30) return "bg-yellow-400 text-yellow-800";
  return "bg-red-500 text-red-800";
};

const StudentPerformance = () => {
  const { myStudents } = useAppSelector(state => state.tutor);
  return (
  <div className="rounded-lg flex h-fit flex-col w-full bg-[#023248] border gap-[10px] border-[#5E7079] text-white ">
    <div className="flex justify-between items-center mt-3 w-full h-fit p-[10px] px-6">
      <span className="text-lg font-semibold">Students Performance</span>
      <a href="#" className="text-green-400">
        View all
      </a>
    </div>
    <div>
      {myStudents ? myStudents?.data?.map((student, index) => (
        <div
          key={student.name}
          className={`border-[#8e8f9058] ${index === 0 ? "border-t" : ""} ${index !== myStudents?.data?.length - 1 ? "border-b" : ""}`}
        >
          <div className={`flex justify-between items-center px-6 py-3`}>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full mr-3">
              <img src={student?.profileImage} /> 
              </div>
              <span className="text-white">{student?.name}</span>
            </div>
            <span
              className={`font-bold px-2 py-1 rounded ${getScoreColor(100)}`}
            >
              {100}%
            </span>
          </div>
        </div>
      )) : <div className={`border-[#8e8f9058] border-t flex w-full items-center justify-center my-3 p-3`}>You Have Not Been Assigned Any Students Yet?</div>}
    </div>
  </div>
)};

const TopCourses = () => {
  const { home } = useAppSelector((store) => store.other);
  return (
  <div className="rounded-lg flex h-fit flex-col w-full bg-[#023248] border gap-[10px] border-[#5E7079] text-white ">
    <div className="flex justify-between items-center mt-3 w-full h-fit p-[10px]  rounded-[8px, 0px] px-6">
      <h2 className="text-white text-lg font-semibold">Top Courses</h2>
      <span className="text-green-400">{/**View All*/}</span>
    </div>
    <div className="w-full h-full">
      {home?.courses?.map((course, index) => (
        <div
          key={course?.title}
          className={`border-[#8e8f9058] ${index === 0 ? "border-t" : ""} ${index !== home?.courses?.length - 1 ? "border-b" : ""}`}
        >
          <div className={`flex justify-between items-center px-6 py-3`}>
            <div className="flex items-center">
              <div className="bg-[#023248] shadow-lg pr-2 rounded mr-2">
                <img src={Vector} alt="Book" />
              </div>
              <div>
                <span className="text-white text-md ">{course?.title}</span>
                <br />
                <span className="text-gray-400 text-sm">
                  {truncateString(course?.description, 30)}
                </span>
              </div>
            </div>
            <span className="text-green-400 text-[14px] ">
              {""} {/**Students*/}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
)};

const Dashboard = () => (
  <div className="flex flex-col gap-4 w-full h-full mb-4">
    <HeaderComponent />
    <StudentPerformance />
    <TopCourses />
  </div>
);

export default Dashboard;

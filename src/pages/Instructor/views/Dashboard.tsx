import Vector from "../../../assets/icons/Vector.svg";
import checkbox from "../../../assets/icons/checkbok.svg";
import { ACADEMIC_LIGHT } from "../../../constants/icon";
import { NOT_PROFILE } from "../../../constants/image";

const HeaderProp = [
  {
    title: "Students",
    icon: <img src={ACADEMIC_LIGHT} alt="Academic Cap" />,
    text: "50",
  },
  {
    title: "Courses",
    icon: <img src={Vector} alt="Book" />,
    text: "4",
  },
  {
    title: "Classes",
    icon: <img src={checkbox} alt="Checkbox" />,
    text: "24",
  },
];

const HeaderComponent = () => (
  <div className="flex justify-between gap-4 mb-4">
    {HeaderProp.map((item, index) => (
      <div
        className="flex flex-col items-start p-4 rounded-lg shadow-lg text-white w-full h-[104px] bg-[#023248]"
        key={index}
      >
        <div className="flex items-center justify-between w-full mb-2">
          <h2 className="text-sm font-medium">{item.title}</h2>
          <div>{item.icon}</div>
        </div>
        <span className="text-2xl font-bold">{item.text}</span>
      </div>
    ))}
  </div>
);

const students = [
  {
    name: "Miss Favour Ogechi",
    score: 80,
    imageUrl: <img src={NOT_PROFILE} />,
  },
  { name: "Miss Theresa", score: 40, imageUrl: <img src={NOT_PROFILE} /> },
  { name: "Mr John", score: 80, imageUrl: <img src={NOT_PROFILE} /> },
  { name: "MisBrenda", score: 55, imageUrl: <img src={NOT_PROFILE} /> },
  { name: "Mr Godfrey", score: 20, imageUrl: <img src={NOT_PROFILE} /> },
];

const getScoreColor = (score) => {
  if (score >= 50) return "bg-green-200 text-green-800";
  if (score >= 30) return "bg-yellow-400 text-yellow-800";
  return "bg-red-500 text-red-800";
};

const StudentPerformance = () => (
  <div className="rounded-lg flex h-fit flex-col w-full bg-[#023248] border gap-[10px] border-[#5E7079] text-white ">
    <div className="flex justify-between items-center mt-3 w-full h-fit p-[10px]  rounded-[8px, 0px] px-6">
      <span className="text-lg font-semibold">Students Performance</span>
      <a href="#" className="text-green-400">
        View all
      </a>
    </div>
    <div>
      {students.map((student, index) => (
        <div
          key={student.name}
          className={`border-[#8e8f9058] ${index === 0 ? "border-t" : ""} ${index !== students.length - 1 ? "border-b" : ""}`}
        >
          <div className={`flex justify-between items-center px-6 py-3`}>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full mr-3">
                {student.imageUrl}
              </div>
              <span className="text-white">{student.name}</span>
            </div>
            <span
              className={`font-bold px-2 py-1 rounded ${getScoreColor(student.score)}`}
            >
              {student.score}%
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TopCourses = () => (
  <div className="rounded-lg flex h-fit flex-col w-full bg-[#023248] border gap-[10px] border-[#5E7079] text-white ">
    <div className="flex justify-between items-center mt-3 w-full h-fit p-[10px]  rounded-[8px, 0px] px-6">
      <h2 className="text-white text-lg font-semibold">Top Courses</h2>
      <span className="text-green-400">View all</span>
    </div>
    <div className="w-full h-full">
      {[
        { name: "UI/UX Design", students: 80, description: "General design" },
        { name: "Frontend", students: 70, description: "Computing" },
        { name: "Backend", students: 20, description: "Farming" },
        {
          name: "Cloud engineering",
          students: 10,
          description: "Scale of prefer",
        },
        { name: "Marketing", students: 5, description: "Strategy" },
      ].map((course, index) => (
        <div
          key={course.name}
          className={`border-[#8e8f9058] ${index === 0 ? "border-t" : ""} ${index !== students.length - 1 ? "border-b" : ""}`}
        >
          <div className={`flex justify-between items-center px-6 py-3`}>
            <div className="flex items-center">
              <div className="bg-[#023248] shadow-lg pr-2 rounded mr-2">
                <img src={Vector} alt="Book" />
              </div>
              <div>
                <span className="text-white text-md ">{course.name}</span>
                <br />
                <span className="text-gray-400 text-sm">
                  {course.description}
                </span>
              </div>
            </div>
            <span className="text-green-400 text-[14px] ">
              {course.students} Students
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Dashboard = () => (
  <div className="flex flex-col gap-4 w-full h-full mb-4">
    <HeaderComponent />
    <StudentPerformance />
    <TopCourses />
  </div>
);

export default Dashboard;

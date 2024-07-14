import Vector from "../../../assets/icons/Vector.svg";
import checkbok from "../../../assets/icons/checkbok.svg";
import academicCap from "../../../assets/icons/academic-cap.svg";

const HeaderProp = [
  {
    title: "Students",
    icon: <img src={academicCap} alt="Academic Cap" />,
    text: "50",
  },
  {
    title: "Courses",
    icon: <img src={Vector} alt="Book" />,
    text: "4",
  },
  {
    title: "Classes",
    icon: <img src={checkbok} alt="Checkbox" />,
    text: "24",
  },
];

const HeaderComponent = () => (
  <div className="flex justify-between gap-4 p-4">
    {HeaderProp.map((item, index) => (
      <div
        className="flex flex-col items-start p-4 rounded-lg shadow-lg text-white w-[200px] h-[104px] "
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
  { name: "Miss Favour Ogechi", score: 80, imageUrl: "path_to_image1" },
  { name: "Miss Theresa", score: 40, imageUrl: "path_to_image2" },
  { name: "Mr John", score: 80, imageUrl: "path_to_image3" },
  { name: "MisBrenda", score: 55, imageUrl: "path_to_image4" },
  { name: "Mr Godfrey", score: 20, imageUrl: "path_to_image5" },
];

const getScoreColor = (score) => {
  if (score >= 50) return "bg-green-200 text-green-800";
  if (score >= 30) return "bg-yellow-200 text-yellow-800";
  return "bg-red-500 text-red-800";
};

const StudentPerformance = () => (
  <div className="shadow-lg rounded-lg w-[350px] border gap-[24px] border-[#5E7079] h-[436px] text-white">
    <div className="flex justify-between items-center w-[350px] p-[16px] h-[59px] border-b border-[#5E7079] rounded-[8px, 0px] mb-4">
      <span className="text-lg font-semibold">Students Performance</span>
      <a href="#" className="text-teal-300 text-sm">
        View all
      </a>
    </div>
    <div>
      {students.map((student) => (
        <div
          key={student.name}
          className="flex justify-between items-center rounded mb-3 p-2"
        >
          <div className="flex items-center">
            <img
              src={student.imageUrl}
              alt={student.name}
              className="w-8 h-8 rounded-full mr-3"
            />
            <span className="text-white">{student.name}</span>
          </div>
          <span
            className={`font-bold px-2 py-1 rounded ${getScoreColor(student.score)}`}
          >
            {student.score}%
          </span>
        </div>
      ))}
    </div>
  </div>
);

const TopCourses = () => (
  <div className="mb-8 rounded-lg shadow-lg w-[300px] h-[436px] border gap-[38px] border-[#5E7079] ">
    <div className="flex justify-between items-center mb-4 w-[300px] p-[16px] h-[59px] border-b border-[#5E7079] rounded-[8px, 0px]">
      <h2 className="text-white text-lg font-bold">Top Courses</h2>
      <span className="text-green-400">No of students</span>
    </div>
    <div className="w-[334pxpx">
      {[
        { name: "UI/UX Design", students: 80, description: "General design" },
        { name: "Computing", students: 70, description: "Computing" },
        { name: "Agriculture", students: 20, description: "Farming" },
        { name: "Economics", students: 10, description: "Scale of prefer" },
        { name: "Marketing", students: 5, description: "Strategy" },
      ].map((course) => (
        <div
          key={course.name}
          className="flex justify-between items-center p-2 rounded mb-2"
        >
          <div className="flex items-center">
            <div className="bg-[#023248] shadow-lg p-2 rounded mr-2">
              <img src={Vector} alt="Book" />
            </div>
            <div>
              <span className="text-white text-md font-semibold">
                {course.name}
              </span>
              <br />
              <span className="text-gray-400 text-sm">
                {course.description}
              </span>
            </div>
          </div>
          <span className="text-green-400 text-[14px] font-semibold">
            {course.students} Students
          </span>
        </div>
      ))}
    </div>
  </div>
);

const Dashboard = () => (
  <div>
    <HeaderComponent />
    <div className="flex space-x-8 items-start mt-8">
      <div className="flex-1">
        <StudentPerformance />
      </div>
      <div className="flex-1">
        <TopCourses />
      </div>
    </div>
  </div>
);

export default Dashboard;

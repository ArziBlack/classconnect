import { Box, Text } from "@chakra-ui/react";
import { GrFormDown } from "react-icons/gr";
import { NOT_PROFILE } from "../../../../constants/image";

export const MyStudents = () => {
  const students = [
    {
      name: "Favour Ogechi",
      status: "Active",
      course: "Backend Development",
      age: 24,
      sex: "Male",
      nationality: "Nigeria",
      time: "Wednesday 5:00pm - 7:00pm WAT",
    },
    {
      name: "Favour Ogechi",
      status: "Inactive",
      course: "Backend Development",
      age: 24,
      sex: "Male",
      nationality: "Nigeria",
      time: "Wednesday 5:00pm - 7:00pm WAT",
    },
    {
      name: "Favour Ogechi",
      status: "Inactive",
      course: "Backend Development",
      age: 24,
      sex: "Male",
      nationality: "Nigeria",
      time: "Wednesday 5:00pm - 7:00pm WAT",
    },
    {
      name: "Favour Ogechi",
      status: "Inactive",
      course: "Backend Development",
      age: 24,
      sex: "Male",
      nationality: "Nigeria",
      time: "Wednesday 5:00pm - 7:00pm WAT",
    },
    {
      name: "Favour Ogechi",
      status: "Active",
      course: "Backend Development",
      age: 24,
      sex: "Male",
      nationality: "Nigeria",
      time: "Wednesday 5:00pm - 7:00pm WAT",
    },
    {
      name: "Favour Ogechi",
      status: "Inactive",
      course: "Backend Development",
      age: 24,
      sex: "Male",
      nationality: "Nigeria",
      time: "Wednesday 5:00pm - 7:00pm WAT",
    },
    {
      name: "Favour Ogechi",
      status: "Active",
      course: "Backend Development",
      age: 24,
      sex: "Male",
      nationality: "Nigeria",
      time: "Wednesday 5:00pm - 7:00pm WAT",
    },
  ];

  return (
    <Box className=" flex flex-col h-fit w-full justify-center rounded-lg bg-[#023248] border gap-[10px] border-[#5E7079] text-white ">
      {students?.length ? (
        <div className="text-white">
          <table className="w-full">
            <thead className="w-full h-20 gap-10">
              <tr className=" text-center py-5 text-lg font-semibold">
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Course</th>
                <th className="py-2 px-4">Age</th>
                <th className="py-2 px-4">Sex</th>
                <th className="py-2 px-4">Nationality</th>
                <th className="py-2 px-4">Time option</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr
                  key={index}
                  className={`justify-center text-center border-[#8e8f9058] ${index === 0 ? "border-t" : ""} ${index !== students.length - 1 ? "border-b" : ""}`}
                >
                  <td className="py-6 px-2 flex items-center">
                    <img
                      src={NOT_PROFILE}
                      alt="Avatar"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    {student.name}
                  </td>
                  <td>
                    <span
                      className={`flex justify-around px-2 py-2 rounded-full text-sm ${
                        student.status === "Active"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      <span className="w-4 h-4 flex py-2  px-2 justify-center items-center rounded-full bg-[#023248] shadow-lg"></span>
                      {student.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">{student.course}</td>
                  <td className="py-2 px-4">{student.age}</td>
                  <td className="py-2 px-4">{student.sex}</td>
                  <td className="py-2 px-4">{student.nationality}</td>
                  <td className="py-2 px-4 flex justify-between items-center">
                    {student.time}
                    <span className="ml-2">
                      <GrFormDown />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Box p={8}>
          <Text fontWeight="bold">You are yet to be assigned a student.</Text>
        </Box>
      )}
    </Box>
  );
};

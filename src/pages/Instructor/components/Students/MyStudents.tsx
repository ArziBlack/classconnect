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
    // Add more student objects as needed
  ];

  return (
    <Box className="text-white" textAlign="center">
      {students?.length ? (
        <div className="p-6  text-white min-h-screen">
          <table className="w-full table-auto border-collapse">
            <thead className="justify-center align">
              <tr className="text-left text-lg font-semibold">
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
                <tr key={index} className="">
                  <td className="py-2 px-4 flex items-center">
                    <img
                      src={NOT_PROFILE}
                      alt="Avatar"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    {student.name}
                  </td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-2 rounded-full text-sm ${
                        student.status === "Active"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      <span className="rounded-full bg-black shadow-lg border px-2"></span>
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

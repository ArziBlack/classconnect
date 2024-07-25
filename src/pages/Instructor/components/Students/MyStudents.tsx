import { Box, Spinner, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { students } from "../../../../mock/students";
import { useAppSelector } from "../../../../hooks/reactReduxHooks";

export const MyStudents = () => {
  const navigate = useNavigate();

  const { myStudents, isLoading, error } = useAppSelector(state => state.tutor);
  function handleClick(input: string) {
    navigate(input);
  }
  console.log("error", error);

  if (isLoading) {
    return (
      <div className="w-full flex h-full items-center justify-center bg-primary-dark">
        <Spinner size={`30px`} />
      </div>
    )
  }

  return (
    <Box className=" flex flex-col h-fit w-full justify-center rounded-lg bg-[#023248] border gap-[10px] border-[#5E7079] text-white ">
      {myStudents?.data?.length ? (
        <div className="text-white">
          <table className="w-full">
            <thead className="w-full h-20 gap-10">
              <tr className=" text-left py-5 text-lg font-semibold">
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
              {myStudents?.data?.map((student, index) => (
                <tr
                  key={index}
                  className={`justify-center  border-[#8e8f9058] ${index === 0 ? "border-t" : ""} ${index !== students.length - 1 ? "border-b" : ""}`}
                  onClick={() => handleClick(student.name.replace(" ", ""))}
                >
                  <td className="py-6 px-2 flex items-center hover:cursor-pointer">
                    <img
                      src={student?.profileImage}
                      alt="Avatar"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    {student?.name}
                  </td>
                  <td>
                    <span
                      className={`flex justify-around px-2 py-2 rounded-full text-sm ${student.status === "Active"
                          ? "bg-green-500"
                          : "bg-red-500"
                        }`}
                    >
                      <span className="w-4 h-4 flex py-2  px-2 justify-center items-center rounded-full bg-[#023248] shadow-lg"></span>
                      {student.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">{student?.courses[0]}</td>
                  <td className="py-2 px-4">{student?.Age}</td>
                  <td className="py-2 px-4">{student?.sex}</td>
                  <td className="py-2 px-4">{student?.country}</td>
                  <td className="py-2 px-4">{student?.country}</td>
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

import { Box, Spinner, Text, useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { students } from "../../../../mock/students";
import { useAppSelector } from "../../../../hooks/reactReduxHooks";

export const MyStudents = () => {
  const navigate = useNavigate();

  const { myStudents, isLoading } = useAppSelector((state) => state.tutor);
  function handleClick(input: string) {
    navigate(input);
  }

  const [isSmallerThan500] = useMediaQuery("(max-width: 500px)");

  if (isLoading) {
    return (
      <div className="w-full flex h-full items-center justify-center mt-10 bg-primary-dark">
        <Spinner color={"white"} w={`30px`} h={`30px`} />
      </div>
    );
  }

  return (
    <Box className=" flex flex-col h-fit w-full justify-center rounded-lg bg-[#023248] border gap-[10px] border-[#5E7079] text-white ">
      {myStudents?.data?.length ? (
        <div className="text-white">
          <table className="w-full">
            <thead className="w-full h-20 gap-10">
              <tr className=" text-left py-5 text-lg font-semibold">
                <th className="py-2 px-4">Name</th>
                {!isSmallerThan500 && <th className="py-2 px-4">Course</th>}
                <th className="py-2 px-4">Age</th>
                <th className="py-2 px-4">Sex</th>
                {!isSmallerThan500 && (
                  <th className="py-2 px-4">Nationality</th>
                )}
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

                  {!isSmallerThan500 && (
                    <td className="py-2 px-4">{student?.courses[0]}</td>
                  )}
                  <td className="py-2 px-4">{student?.Age}</td>
                  <td className="py-2 px-4">{student?.sex}</td>
                  {!isSmallerThan500 && (
                    <td className="py-2 px-4">{student?.country}</td>
                  )}
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

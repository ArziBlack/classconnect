import { useState } from "react";
import { Box, Flex, Text, Icon, Image, Skeleton } from "@chakra-ui/react";
import { FaClock } from "react-icons/fa";
import moment from "moment";
import { NOTIFICATION, NOT_PROFILE } from "../../../../constants/image";
import { useAppSelector } from "../../../../hooks/reactReduxHooks";

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  } else {
    return str;
  }
}

function formatRawDate(rawDate) {
  const formattedDate = moment(rawDate).format("M/D/YYYY h:mma");
  return formattedDate;
}

export const AssessmentItem = ({ type, date, isSelected }) => {
  const { myTutors } = useAppSelector(state => state.student);
  const tutorName = myTutors?.data[0]?.name;
  return (
    <Box
      className={`gap-3 border-b border-gray-700 py-4 cursor-pointer te1xt-sm hover:bg-[#B3F8DA]/25 ${isSelected ? "bg-[#B3F8DA]/50" : ""}`}
      w={{ base: "100%", md: "80%", lg: "100%" }} // Responsive width
      p={{ base: "2", md: "4" }}
      tabIndex={0}
    >
      <Text
        fontSize={{ base: "sm", md: "md" }}
        fontWeight="semibold"
        paddingBottom={`5px`}
      >
        {tutorName}
      </Text>
      <Text
        fontSize={{ base: "xs", md: "sm" }}
        fontWeight="500"
        color="#B3F8DA"
      >
        {truncateString(type, 45)}
      </Text>
      <Flex alignItems="center" justifyContent="space-between" paddingTop="5px">
        <Text
          fontSize={{ base: "xs", md: "sm" }}
          fontWeight="100"
          color="gray.400"
        >
          {formatRawDate(date)}
        </Text>
        <Icon as={FaClock} color="green.500" />
      </Flex>
    </Box>
  );
};

const AssessmentList = () => {
  const { generalAssessment, isLoading, error } = useAppSelector(
    (state) => state.student
  );
  const [selectedId, setSelectedId] = useState(null);

  const handleNotificationClick = (index) => {
    setSelectedId(index === selectedId ? null : index);
  };

  return (
    <div className="w-full grid grid-cols-2">
      {!error ? (
        <div className="overflow-y-scroll h-[400px] no-scrollbar">
          {generalAssessment?.data?.map((assess, index) => (
            <Skeleton borderRadius={20} isLoaded={!isLoading}>
              <div onClick={() => handleNotificationClick(index)} key={index}>
                <AssessmentItem
                  type={assess.type}
                  date={assess.Date}
                  isSelected={index === selectedId}
                />
              </div>
            </Skeleton>
          ))}
        </div>
      ) : (
        <Box p={8}>
          <Text fontWeight="bold">{error?.message?.split(".")[0]}</Text>
          <Text fontWeight="bold">{error?.message?.split(".")[1]}</Text>
          <Text fontWeight="bold">{error?.message?.split(".")[2]}</Text>
        </Box>
      )}
      <Flex w="100%" h="400px">
        {selectedId !== null ? (
          <div className="flex flex-col max-h-[400px] w-full overflow-y-scroll no-scrollbar px-10">
            <div className="flex flex-col py-[5px]">
              <h2 className="text-3xl font-[700] py-[10px]">
                Assessment {selectedId + 1}
              </h2>
              <div className="flex items-center py-[15px]">
                <img
                  src={NOT_PROFILE}
                  className="h-[25px] w-[25px] rounded-full"
                />
                <div className="flex flex-col text-xs pl-2">
                  <h4 className="font-[600]">{"Tutor"}</h4>
                  <span className="font-[200]">
                    {generalAssessment?.data[selectedId]?.Date}
                  </span>
                </div>
              </div>
              <span className="py-2 text-xs font-[100] text-white/25">
                <b>To:</b> Favourogechi2019@gmail.com
              </span>
              <p className="py-5 font-[300] text-justify text-sm leading-6">
                {generalAssessment?.data[selectedId]?.question}
              </p>
            </div>
          </div>
        ) : (
          <Image
            src={NOTIFICATION}
            alt="notification image"
            className="w-full object-cover"
          />
        )}
      </Flex>
    </div>
  );
};

export const GeneralAssessments = () => {
  return (
    <Box
      className="text-white flex items-center"
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent="center"
      alignItems="center"
      w="100%"
      maxH="100vh"
      overflow="hidden"
    >
      <AssessmentList />
    </Box>
  );
};

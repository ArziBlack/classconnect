import { Box } from "@chakra-ui/react";
import React from "react";
import { FaArrowDown, FaBook } from "react-icons/fa";

export const PaymentHistory = () => {
  const [paymentHis] = React.useState<boolean>(true);

  return (
    <Box color={"white"} maxW={"800px"} ml={{ base: 5, md: 0 }}>
      <div>
        {paymentHis ? (
          <div className="flex flex-col py-4">
            <div className="bg-[#255E78] rounded-md flex items-center justify-between p-2 my-2">
              <div className="flex flex-col text-sm font-[100]">
                <span className="py-1">21st June, 2024 at 11:30 PM</span>
                <div className="flex items-center py-1 font-[100] text-xs">
                  <div className="flex items-center pr-2">
                    <FaBook />
                    <span className="pl-2 capitalize">Quarterly</span>
                  </div>
                  <span className="text-[#1AEA8F] font-[600]">$190,000</span>
                </div>
              </div>
              <div className="p-2 rounded-md bg-[#2E799C]">
                <FaArrowDown />
              </div>
            </div>
            <div className="bg-[#255E78] rounded-md flex items-center justify-between p-2 my-2">
              <div className="flex flex-col text-sm font-[100]">
                <span className="py-1">21st June, 2024 at 11:30 PM</span>
                <div className="flex items-center py-1 font-[100] text-xs">
                  <div className="flex items-center pr-2">
                    <FaBook />
                    <span className="pl-2">Quarterly</span>
                  </div>
                  <span className="text-[#1AEA8F] font-[600]">$190,000</span>
                </div>
              </div>
              <div className="p-2 rounded-md bg-[#2E799C]">
                <FaArrowDown />
              </div>
            </div>
            <div className="bg-[#255E78] rounded-md flex items-center justify-between p-2 my-2">
              <div className="flex flex-col text-sm font-[100]">
                <span className="py-1">21st June, 2024 at 11:30 PM</span>
                <div className="flex items-center py-1 font-[100] text-xs">
                  <div className="flex items-center pr-2">
                    <FaBook />
                    <span className="pl-2">Quarterly</span>
                  </div>
                  <span className="text-[#1AEA8F] font-[600]">$190,000</span>
                </div>
              </div>
              <div className="p-2 rounded-md bg-[#2E799C]">
                <FaArrowDown />
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-[#023248] rounded-md flex flex-col h-full py-5 px-3 my-4 justify-between text-white">
            <h2 className="text-sm font-[100] py-2">
              Your Payments history will appear here...
            </h2>
          </div>
        )}
      </div>
    </Box>
  );
};

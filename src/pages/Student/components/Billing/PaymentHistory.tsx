import { Box } from "@chakra-ui/react";
import { FaArrowDown, FaBook } from "react-icons/fa";
import { useAppSelector } from "../../../../hooks/reactReduxHooks";

export const PaymentHistory = () => {
  const { paymentHistory } = useAppSelector((state) => state.student);
  console.log(paymentHistory);

  return (
    <Box color={"white"} maxW={"800px"}>
      <div>
        {paymentHistory?.length > 0 ? (
          <div className="flex flex-col py-4">
            {paymentHistory?.map((payment, idx) => (
              <div
                key={idx}
                className="bg-[#255E78] rounded-md flex items-center justify-between p-2 my-2"
              >
                <div className="flex flex-col text-sm font-[100]">
                  <span className="py-1">{payment.transactionDate}</span>
                  <div className="flex items-center py-1 font-[100] text-xs">
                    <span className="pr-2 capitalize">{payment.payer}</span>
                    <div className="flex items-center pr-2">
                      <FaBook />
                      <span className="pl-2 capitalize">{payment.type}</span>
                    </div>
                    <span className="text-[#1AEA8F] font-[600]">
                      {payment.amount}
                    </span>
                  </div>
                </div>
                <div className="p-2 rounded-md bg-[#2E799C]">
                  <FaArrowDown />
                </div>
              </div>
            ))}
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

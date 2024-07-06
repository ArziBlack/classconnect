import React from "react";
import CButton from "../../../components/Button";
import { FaArrowDown, FaBook } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../hooks/reactReduxHooks";
import { initiateTrx } from "../../../services/student/studentThunks";
import ChakraModal from "../../../components/ChakraModal";
import { Flex } from "@chakra-ui/layout";
import { Button, CircularProgress, Text } from "@chakra-ui/react";

export const Billing = () => {
  const diapatch = useAppDispatch();
  const { isLoading, trxResponse } = useAppSelector(app => app.student);
  const [confirmation, setConfirmation] = React.useState<boolean>(false);
  async function handlePayment() {
    await diapatch(initiateTrx())
  }
  React.useEffect(() => {
    diapatch(initiateTrx())
  }, [diapatch]);
  return (
    <div className="flex w-full items-start pr-5 gap-5 relative">
      <div className="w-2/3 bg-[#023248] rounded-md flex flex-col h-full p-5 min-h-[650px] justify-between">
        <h2 className="py-2 text-white text-lg font-[600]">Billing Details</h2>
        <div className="flex flex-col text-white py-2 text-sm">
          <div className="flex flex-col items-start py-1">
            <label className="py-1 font-light">First Name</label>
            <input type="text" placeholder="First Name....." className="px-2 my-1 py-3 flex w-full bg-[#255E78] border-none rounded-md" />
          </div>
          <div className="flex flex-col items-start py-1">
            <label className="py-1 font-light">Last Name</label>
            <input type="text" placeholder="Last Name....." className="px-2 my-1 py-3 flex w-full bg-[#255E78] border-none rounded-md" />
          </div>
          <div className="flex flex-col items-start py-1">
            <label className="py-1 font-light">Phone Number</label>
            <input type="number" placeholder="Phone....." className="px-2 my-1 py-3 flex w-full bg-[#255E78] border-none rounded-md" />
          </div>
          <div className="flex flex-col items-start py-1">
            <label className="py-1 font-light">Email</label>
            <input type="number" placeholder="Your Email....." className="px-2 my-1 py-3 flex w-full bg-[#255E78] border-none rounded-md" />
          </div>
        </div>
        <div className="bg-[#fff] w-full flex flex-col py-2 px-1 rounded-md font-light text-xs">
          <h3 className="py-1 text-sm">Secured By Paystack</h3>
          <div className="py-1 font-[600]">
            <span>Paystack</span>
          </div>
        </div>
        <CButton text="Pay Now" onClick={() => { setConfirmation(true); !trxResponse && handlePayment() }} />
      </div>
      <div className="w-1/3 flex flex-col h-full">
        <div className="flex flex-col p-3 bg-[#023248] rounded-md text-white">
          <h2 className="font-[600] py-3">Your Plan</h2>
          <div className="flex items-center justify-between w-full font-light text-sm py-3">
            <div className="flex items-center">
              <div className="h-[70px] w-[70px] bg-[#255E78]">
                <img alt="plan" />
              </div>
              <span className="ml-1">Yearly Plan</span>
            </div>
            <div className="flex">
              <span>$100,000/</span>
              <span>year</span>
            </div>
          </div>
          <div className="flex items-center justify-between py-4 border-t border-[#255E78] font-[600]">
            <span>Total</span>
            <span>N100,000</span>
          </div>
        </div>
        <div className="flex flex-col p-3"></div>
        <div className="bg-[#023248] rounded-md flex flex-col h-full py-5 px-3 my-4 justify-between text-white">
          <h2 className="text-sm py-2">Purchase History</h2>
          <div className="flex flex-col py-4">
            <div className="bg-[#255E78] rounded-md flex items-center justify-between p-2 my-2">
              <div className="flex flex-col text-sm font-[100]">
                <span className="py-1">21st June, 2024 at 11:30 PM</span>
                <div className="flex items-center py-1 font-[100] text-xs">
                  <div className="flex items-center pr-2">
                    <FaBook />
                    <span className="pl-2">Yearly Plan</span>
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
                    <span className="pl-2">Yearly Plan</span>
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
                    <span className="pl-2">Yearly Plan</span>
                  </div>
                  <span className="text-[#1AEA8F] font-[600]">$190,000</span>
                </div>
              </div>
              <div className="p-2 rounded-md bg-[#2E799C]">
                <FaArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChakraModal isOpen={confirmation} onClose={() => setConfirmation(false)}>
        <Flex
          bg={"#023248"}
          flexDirection={"column"}
          borderRadius={"12px"}
          padding={10}
        >{isLoading ? <CircularProgress /> : (<>
          <Text color={"white"}>{trxResponse ? "You will be redirected to another page to make your payment" : "Please re-initiate payment: An error occured"}</Text>
          <Flex gap={8} justify={"center"} mt={4}>
            {trxResponse && <Button>Redirect Me</Button>}
            <Button onClick={() => { setConfirmation(false); !trxResponse && handlePayment() }}>{trxResponse ? "Ok" : "No"}</Button>
          </Flex></>)}
        </Flex>
      </ChakraModal>
    </div>
  );
};

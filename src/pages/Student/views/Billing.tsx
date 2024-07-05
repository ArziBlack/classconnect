import React from "react";
import CButton from "../../../components/Button";

export const Billing = () => {
  return (
    <div className="flex w-full items-start pr-5 gap-5">
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
        <CButton text="Pay Now" />
      </div>
      <div className="w-1/3">
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
      </div>
      <div className="bg-[#023248] rounded-md flex flex-col h-full p-5 my-4 justify-between">
        <h2>Purchase History</h2>
      </div>
    </div>
  );
};

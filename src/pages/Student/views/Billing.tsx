import React from "react";

export const Billing = () => {
  return (
  <div className="flex w-full items-center pr-5 gap-5">
    <div className="w-2/3 bg-[#023248] rounded-md flex flex-col h-full p-3">
      <h2 className="py-2">Billing Details</h2>
      <div></div>
      <div className="flex flex-col items-start py-1">
        <label className="py-1">First Name</label>
        <input type="text" placeholder="First Name....." className="py-1 flex w-full bg-[#255E78] border-none"/>
      </div>
    </div>
    <div className="w-1/3 bg-[#255E78]"></div>
  </div>
  );
};

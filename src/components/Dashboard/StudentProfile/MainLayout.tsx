import React from "react";
import ProfileCard from "./ProfileCard";
import ProfileSettings from "./ProfileSettings";

const MainLayout = () => {
  return (
    <div className="flex space-x-8 p-9 bg-gray-100 pl-0 min-h-[400px]">
      <ProfileCard />
      <ProfileSettings />
    </div>
  );
};

export default MainLayout;

import React from "react";
import ProfileCard from "./ProfileCard";
import ProfileSettings from "./ProfileSettings";

const MainLayout = () => {
  return (
    <div className="flex space-x-8 p-9 bg-gray-100 min-h-screen">
      <ProfileCard />
      <ProfileSettings />
    </div>
  );
};

export default MainLayout;

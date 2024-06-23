import ProfileCard from "../../../components/Dashboard/StudentProfile/ProfileCard";
import ProfileSettings from "../../../components/Dashboard/StudentProfile/ProfileSettings";

export const Profile = () => {
  return (
    <div className="flex space-x-8 bg-gray-100 max-h-[600px] pb-8 pr-8">
      <ProfileCard />
      <ProfileSettings />
    </div>
  );
};

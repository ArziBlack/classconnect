import TROPY1 from "../../../assets/icons/Tropy1.png";
import TROPY2 from "../../../assets/icons/Tropy2.png";
import TROPY3 from "../../../assets/icons/Tropy3.png";
import TROPY4 from "../../../assets/icons/Tropy4.png";
import PROFILEICON from "../../../assets/icons/ProfileIcon.png";
import INVITEICON from "../../../assets/icons/InviteIcon.png";
import DELETEICON from "../../../assets/icons/DeleteIcon.png";
import PROFILEFOTO from "../../../assets/icons/ProfileFoto.png";
import { ViewCard } from "../../../pages/Student/components/ViewCard";

const ProfileCard = () => {
  return (
    <ViewCard className="flex-1">
      <img
        src={PROFILEFOTO}
        alt="Profile"
        className="w-24 h-24 rounded-full mb-4"
      />
      <h2 className="text-xl font-semibold mb-1">Favour Oge</h2>
      <p className="text-gray-500 text-sm">Student</p>
      <div className="flex space-x-10 mt-4 ">
        <div className="text-center">
          <div className="bg-green-100 text-green-600 rounded-lg py-1 px-3 text-3xl font-bold ">
            <span>10</span>
          </div>
          <p className="text-black text-sm mt-1">Course in progress</p>
        </div>
        <div className="text-center">
          <div className="bg-green-500 text-white rounded-lg py-1 px-3 text-3xl font-bold  ">
            <span>11</span>
          </div>
          <p className="text-black text-sm mt-1 ">Course Completed</p>
        </div>
      </div>
      <div className="mt-6 w-full">
        <h3 className="font-semibold text-gray-800 mb-2">Last Achievement</h3>
        <div className="flex justify-between mt-2 px-2">
          <img src={TROPY1} alt="trophy1" className="w-10 h-10" />
          <img src={TROPY2} alt="trophy2" className="w-10 h-10" />
          <img src={TROPY3} alt="trophy3" className="w-10 h-10" />
          <img src={TROPY4} alt="trophy4" className="w-10 h-10" />
        </div>
      </div>
      <div className="mt-6 w-full">
        <button className="flex items-center justify-start w-full text-left text-gray-600 hover:bg-gray-100 p-2 rounded-lg mb-2">
          <img src={PROFILEICON} alt="profile" className="w-5 h-5 mr-2" />
          <span className="text-sm">Become a Tutor</span>
        </button>
        <button className="flex items-center justify-start w-full text-left text-gray-600 hover:bg-gray-100 p-2 rounded-lg mb-2">
          <img src={INVITEICON} alt="invite" className="w-5 h-5 mr-2" />
          <span className="text-sm">Invite a friend</span>
        </button>
        <button className="flex items-center justify-start w-full text-left text-gray-600 hover:bg-gray-100 p-2 rounded-lg">
          <img src={DELETEICON} alt="deleteicon" className="w-5 h-5 mr-2" />
          <span className="text-sm">Delete account</span>
        </button>
      </div>
    </ViewCard>
  );
};

export default ProfileCard;

import { useState } from "react";
import { Input, Select } from "@chakra-ui/react";
import PROFILEFOTO from "../../../assets/icons/ProfileFoto.png"; // Ensure this path is correct

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState("Personal Details");

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Profile Setting</h2>

      {/* Tabs */}
      <div className="flex justify-between mb-6">
        {["Personal Details", "Notification", "Payment"].map((tab) => (
          <button
            key={tab}
            className={`pb-2 px-4 ${
              activeTab === tab
                ? "border-b-2 border-green-500 text-green-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Conditional Content */}
      {activeTab === "Personal Details" && (
        <div>
          {/* Profile Picture */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                src={PROFILEFOTO}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
              />
              <span className="absolute bottom-0 right-0 bg-green-500 rounded-full p-1 border-2 border-white">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m1.414-5.657a2.828 2.828 0 11-4 4L4 18.415V21h2.586L18.364 9.232a2.828 2.828 0 010-4z"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Full name</label>
                <Input placeholder="Enter name" />
              </div>
              <div>
                <label className="block text-gray-700">Email address</label>
                <Input placeholder="Enter email" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Address</label>
                <Input placeholder="Enter Home address" />
              </div>
              <div>
                <label className="block text-gray-700">City</label>
                <Input placeholder="Enter City" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700">Country</label>
                <Select placeholder="Select Country">
                  {/* Add country options here */}
                </Select>
              </div>
              <div>
                <label className="block text-gray-700">State/Province</label>
                <Input placeholder="Enter State/Province" />
              </div>
              <div>
                <label className="block text-gray-700">Zip Code</label>
                <Input placeholder="Enter Zip code" />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mt-6">
            <button className="flex justify-center items-center bg-green-500 text-white rounded-md w-full py-3 hover:bg-green-600 transition-colors">
              Save Profile
            </button>
            <button className="flex justify-center items-center border-2 border-green-500 text-green-500 rounded-md w-full py-3 hover:text-green-600 hover:border-green-600 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Notification Content */}
      {activeTab === "Notification" && (
        <div className="text-center text-gray-500">
          {/* Replace with the actual notification content */}
          <p>Notification settings content goes here.</p>
        </div>
      )}

      {/* Payment Content */}
      {activeTab === "Payment" && (
        <div className="text-center text-gray-500">
          {/* Replace with the actual payment content */}
          <p>Payment settings content goes here.</p>
        </div>
      )}
    </div>
  );
};

export default ProfileSettings;

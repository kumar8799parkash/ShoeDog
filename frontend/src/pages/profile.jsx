import React from "react";

const Profile = () => {

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="w-1/3 bg-white rounded-2xl shadow-xl p-8">

        {/* Profile Header */}
        <div className="flex flex-col items-center">

          <img
            className="h-32 w-32 rounded-full object-cover border-4 border-green-600"
            src="https://via.placeholder.com/150"
            alt="User Profile"
          />

          <div className="text-2xl font-semibold mt-4">
            John Doe
          </div>

          <div className="text-gray-500">
            johndoe@email.com
          </div>

        </div>

        {/* Divider */}
        <div className="border-t my-6"></div>

        {/* Profile Details */}
        <div className="space-y-4">

          <div className="flex justify-between">
            <span className="text-gray-600">Full Name</span>
            <span className="font-semibold">John Doe</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Email</span>
            <span className="font-semibold">johndoe@email.com</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Member Since</span>
            <span className="font-semibold">2024</span>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-8">

          <button className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Edit Profile
          </button>

          <button className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            Logout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Profile;
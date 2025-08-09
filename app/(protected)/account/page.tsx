// ProfilePage.tsx

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl flex overflow-hidden">
        {/* Sidebar */}
        <div className="bg-purple-800 text-white flex flex-col items-center p-8 w-1/3">
          <div className="w-32 h-32 rounded-full bg-yellow-300 flex items-center justify-center text-4xl font-bold text-purple-800 mb-4">
            U
          </div>
          <h2 className="text-lg font-semibold">Your Name</h2>
          <p className="text-sm">youremail@example.com</p>
        </div>

        {/* Form Section */}
        <div className="flex-1 p-10">
          <h2 className="text-2xl font-semibold text-purple-800 mb-6">Profile Settings</h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <Input placeholder="First Name" className="w-1/2" />
              <Input placeholder="Last Name" className="w-1/2" />
            </div>
            <Input placeholder="Phone Number" />
            <Input placeholder="Address Line 1" />
            <Input placeholder="Postcode" />
            <Input placeholder="State" />
            <Input placeholder="Area" />
            <Input placeholder="Email ID" type="email" />
            <Input placeholder="Education" />
            <div className="flex gap-4">
              <Input placeholder="Country" className="w-1/2" />
              <Input placeholder="State/Region" className="w-1/2" />
            </div>
            <Button className="bg-yellow-400 text-purple-900 font-semibold hover:bg-yellow-500">Save Profile</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

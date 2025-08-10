// ProfilePage.tsx

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-5xl flex overflow-hidden border border-purple-100">
        {/* Sidebar */}
        <div className="bg-[#432dd7] text-white flex flex-col items-center p-8 w-1/3 relative">
          {/* Avatar with camera icon */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-yellow-400 overflow-hidden bg-yellow-300 flex items-center justify-center text-4xl font-bold text-[#432dd7]">
              U
            </div>
            <button className="absolute bottom-2 right-2 bg-yellow-400 text-purple-900 p-2 rounded-full shadow hover:bg-yellow-500 transition-colors">
              <Camera size={16} />
            </button>
          </div>

          <h2 className="text-lg font-semibold mt-4">Your Name</h2>
          <p className="text-sm opacity-80">youremail@example.com</p>

          <div className="mt-6 w-full border-t border-purple-400/30 pt-4">
            <p className="text-xs uppercase tracking-wide text-purple-200">
              Member Since
            </p>
            <p className="text-sm font-medium">Jan 2023</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex-1 p-10 bg-white">
          <h2 className="text-2xl font-semibold text-[#432dd7] mb-6 border-b border-purple-100 pb-2">
            Profile Settings
          </h2>
          <form className="space-y-5">
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
            <div className="pt-4">
              <Button className="bg-yellow-400 text-purple-900 font-semibold hover:bg-yellow-500 w-full">
                Save Profile
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

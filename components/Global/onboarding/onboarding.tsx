"use client";
import { useState } from "react";
import Image from "next/image";
import { ShuffleIcon } from "lucide-react";

const Onboarding: React.FC = () => {
  const [avatarUrl, setAvatarUrl] = useState<string>("/authimg/pro.png");

  const handleRandomAvatar = () => {
    const index = Math.floor(Math.random() * 100) + 1;
    const avatar = `https://avatar.iran.liara.run/public/${index}.png`;
    setAvatarUrl(avatar);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-purple-100 p-6">
      <div className="bg-white w-full max-w-5xl rounded-xl shadow-xl p-8 flex flex-col md:flex-row gap-8 border-2 border-yellow-300 relative z-0">
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col justify-center items-center gap-6 text-center">
          <div>
            <h1 className="text-3xl font-bold text-purple-800">
              Welcome to Quizze!
            </h1>
            <p className="text-purple-600 mt-1 text-sm">
              Set up your profile to get personalized quizzes and affiliate
              rewards.
            </p>
          </div>

          <div className="relative h-32 w-32 rounded-full overflow-hidden bg-yellow-300 shadow-md">
            <Image
              src={avatarUrl}
              alt="Profile Avatar"
              fill
              className="object-cover"
            />
          </div>

          <button
            type="button"
            onClick={handleRandomAvatar}
            className="bg-purple-700 text-white rounded-md px-4 py-2 flex items-center hover:bg-purple-800 transition-colors"
          >
            <ShuffleIcon className="size-4 mr-2" />
            Generate Random Avatar
          </button>

          <div className="w-full px-6">
            <label className="block text-sm font-medium mb-1 text-purple-800 text-left">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded-md focus:outline-purple-500"
              placeholder="John Doe"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 space-y-4 relative z-10">
          {/*quiz type */}
          <div className="relative z-10">
            <label className="block text-sm font-medium mb-1 text-purple-800">
              Interested Quiz Types
            </label>
            <select
              className="border px-3 py-2 rounded-md w-full bg-white focus:outline-purple-500 appearance-none z-10"
              style={{
                backgroundImage: "none",
              }}
            >
              <option className="bg-purple-50 hover:bg-purple-100" value="">
                Select quiz type
              </option>
              <option className="bg-purple-50 hover:bg-purple-100" value="mcq">
                Multiple Choice
              </option>
              <option
                className="bg-purple-50 hover:bg-purple-100"
                value="personality"
              >
                Personality
              </option>
              <option
                className="bg-purple-50 hover:bg-purple-100"
                value="scored"
              >
                Scored
              </option>
              <option
                className="bg-purple-50 hover:bg-purple-100"
                value="polls"
              >
                Polls
              </option>
            </select>
          </div>

          <div className="flex items-center justify-between gap-4">
            {/* Gender */}
            <div className="relative z-10">
              <label className="block text-sm font-medium mb-1 text-purple-800">
                Gender
              </label>
              <select
                className="border px-3 py-2 rounded-md w-48 bg-white focus:outline-purple-500 appearance-none z-10"
                style={{
                  backgroundImage: "none",
                }}
              >
                <option className="bg-purple-50 hover:bg-purple-100" value="">
                  Select gender
                </option>
                <option
                  className="bg-purple-50 hover:bg-purple-100"
                  value="male"
                >
                  Male
                </option>
                <option
                  className="bg-purple-50 hover:bg-purple-100"
                  value="female"
                >
                  Female
                </option>
                <option
                  className="bg-purple-50 hover:bg-purple-100"
                  value="other"
                >
                  Other
                </option>
              </select>
            </div>

            {/* Age*/}
            <div>
              <label className="block text-sm font-medium mb-1 text-purple-800">
                Age
              </label>
              <input
                type="number"
                className="w-full border px-3 py-2 rounded-md focus:outline-purple-500"
                placeholder="18"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium mb-1 text-purple-800">
              Short Bio
            </label>
            <textarea
              className="w-full border px-3 py-2 rounded-md min-h-[44px] focus:outline-purple-500"
              placeholder="Why are you excited to take quizzes and earn rewards?"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium mb-1 text-purple-800">
              Location
            </label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded-md focus:outline-purple-500"
              placeholder="e.g., Mumbai, India"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-yellow-400 text-purple-900 w-full rounded-md py-3 font-semibold mt-2 hover:bg-yellow-500 transition"
          >
            Start Your Quiz Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;

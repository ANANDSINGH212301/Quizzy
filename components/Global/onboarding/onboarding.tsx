"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ShuffleIcon } from "lucide-react";
import Logo from "@/components/ui/logo";
import Link from "next/link";

const Onboarding: React.FC = () => {
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  const generateRandomAvatar = () => {
    const index = Math.floor(Math.random() * 100) + 1;
    return `https://avatar.iran.liara.run/public/${index}.png`;
  };

  useEffect(() => {
    setAvatarUrl(generateRandomAvatar());
  }, []);

  const handleRandomAvatar = () => {
    setAvatarUrl(generateRandomAvatar());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-10">
      <div className="w-full max-w-5xl rounded-xl shadow-lg border border-gray-200 bg-white p-8 flex flex-col md:flex-row gap-8">
        
        {/* Header */}
        <div className="absolute top-6 left-6 flex items-center">
          <Link href="/" className="flex items-center hover:opacity-80">
            <Logo />
            <span className="text-xl font-bold text-gray-800 ml-2">
              Quizzy
            </span>
          </Link>
        </div>

        {/* Left Column */}
        <div className="md:w-1/2 flex flex-col justify-center items-center gap-6 text-center">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">
              Welcome to <span className="text-indigo-600">Quizzy</span>
            </h1>
            <p className="text-gray-500 mt-1 text-sm">
              Let’s set up your profile so we can tailor quizzes just for you.
            </p>
          </div>

          <div className="relative h-32 w-32 rounded-full overflow-hidden bg-gray-200 shadow-md">
            {avatarUrl && (
              <Image
                src={avatarUrl}
                alt="Profile Avatar"
                fill
                className="object-cover"
              />
            )}
          </div>

          <button
            type="button"
            onClick={handleRandomAvatar}
            className="bg-indigo-600 text-white rounded-md px-4 py-2 flex items-center hover:bg-indigo-700 transition-colors"
          >
            <ShuffleIcon className="size-4 mr-2" />
            Randomize Avatar
          </button>

          <div className="w-full px-6">
            <label className="block text-sm font-medium mb-1 text-gray-700 text-left">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="John Doe"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 flex flex-col justify-center gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Interested Quiz Types
            </label>
            <select className="border border-gray-300 px-3 py-2 rounded-md w-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">Select quiz type</option>
              <option value="mcq">Multiple Choice</option>
              <option value="personality">Personality</option>
              <option value="scored">Scored</option>
              <option value="polls">Polls</option>
            </select>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Gender
              </label>
              <select className="border border-gray-300 px-3 py-2 rounded-md w-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Age
              </label>
              <input
                type="number"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="18"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Short Bio
            </label>
            <textarea
              className="w-full border border-gray-300 px-3 py-2 rounded-md min-h-[44px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Why are you excited to take quizzes?"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Location
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., Mumbai, India"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white w-full rounded-md py-3 font-semibold mt-2 hover:bg-indigo-700 transition"
          >
            Start Your Quiz Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;

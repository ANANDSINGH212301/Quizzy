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

  // Automatically generate avatar on page load
  useEffect(() => {
    setAvatarUrl(generateRandomAvatar());
  }, []);

  const handleRandomAvatar = () => {
    setAvatarUrl(generateRandomAvatar());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-purple-100 p-6">
      <div className="w-full max-w-5xl min-h-[600px] rounded-xl shadow-xl p-8 flex flex-col md:flex-row gap-8 border-2 border-purple-500 relative z-0 bg-gradient-to-br from-white via-purple-50 to-white">
        {/* Header Row */}
        <div className="mb-8 flex w-full items-center absolute">
          <Link href="/" className="flex items-center">
            <Logo />
            <span className="text-xl font-bold text-purple-800 ml-2">
              Quizzy
            </span>
          </Link>
          <h2 className="text-xl md:text-2xl font-extrabold absolute left-100 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            OnBoarding
          </h2>
        </div>

        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col justify-center items-center gap-6 text-center">
          <div>
            <h1 className="text-3xl font-bold text-purple-800">
              Welcome to <span className="text-yellow-500">Quizze!</span>
            </h1>
            <p className="text-purple-600 mt-1 text-sm">
              Set up your profile to get personalized quizzes and affiliate
              rewards.
            </p>
          </div>

          <div className="relative h-32 w-32 rounded-full overflow-hidden bg-yellow-300 shadow-md">
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
        <div className="md:w-1/2 flex flex-col justify-center gap-4 z-10">
          <div>
            <label className="block text-sm font-medium mb-1 text-purple-800">
              Interested Quiz Types
            </label>
            <select className="border px-3 py-2 rounded-md w-full bg-white focus:outline-purple-500 appearance-none">
              <option value="">Select quiz type</option>
              <option value="mcq">Multiple Choice</option>
              <option value="personality">Personality</option>
              <option value="scored">Scored</option>
              <option value="polls">Polls</option>
            </select>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-purple-800">
                Gender
              </label>
              <select className="border px-3 py-2 rounded-md w-48 bg-white focus:outline-purple-500 appearance-none">
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

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

          <div>
            <label className="block text-sm font-medium mb-1 text-purple-800">
              Short Bio
            </label>
            <textarea
              className="w-full border px-3 py-2 rounded-md min-h-[44px] focus:outline-purple-500"
              placeholder="Why are you excited to take quizzes and earn rewards?"
            />
          </div>

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

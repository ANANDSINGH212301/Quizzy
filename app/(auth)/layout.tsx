"use client"; // Add this at the very top

import Logo from "@/components/ui/logo";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  let imageSrc = "/authimg/pro.png";
  let welcomeText = "Welcome Back !";

  if (pathname === "/sign-in") {
    imageSrc = "/authimg/pro.png";
    welcomeText = "Welcome Back!";
  } else if (pathname === "/register") {
    imageSrc = "/authimg/register.png";
    welcomeText = "Create Your Account !";
  }

  return (
    <>
      {/* Logo and Navigation */}
      <div className="px-8 pt-8 ">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
          <span className="text-xl font-bold text-[#432dd7]">Quizzy</span>
        </Link>
      </div>
      <div className="min-h-[90vh] bg-white flex items-center justify-center">
        {/* Main Card Container */}
        <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl overflow-hidden">
          <div className="flex">
            {/* Left Section - Form Area */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12">
              {/* Form Content */}
              <div className="w-full">{children}</div>
            </div>
            {/* Right Side - Image */}
            <div className="relative flex-1 hidden lg:flex items-center justify-center p-4 rounded-md bg-gradient-to-tr from-blue-400 via-blue-500 to-blue-700">
              <div className="absolute top-12 text-white text-3xl font-bold">
                {welcomeText}
              </div>
              <Image
                src={imageSrc}
                alt="Auth Image"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

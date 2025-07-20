import Logo from "@/components/ui/logo";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      {/* Main Card Container */}
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl overflow-hidden">
        <div className="flex">
          {/* Left Section - Form Area */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12">
            {/* Logo and Navigation */}
            <div className="mb-8">
              <Link href="/" className="flex items-center space-x-2">
                <Logo />
                <span className="text-2xl font-bold text-gray-800">Quizzy</span>
              </Link>
            </div>
            
            {/* Form Content */}
            <div className="w-full">
              {children}
            </div>
          </div>

          {/* Right Section - Illustration Area */}
          <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-purple-600 to-purple-800 relative">
           hi
          </div>
        </div>
      </div>
    </div>
  );
}

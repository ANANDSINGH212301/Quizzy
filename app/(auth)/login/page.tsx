import Logo from "@/components/ui/logo";
import Link from "next/link";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 flex flex-col">
      {/* Nav */}
      <nav className="w-full flex items-center justify-start p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
          <span className="text-2xl font-bold text-yellow-300">Quizzy</span>
        </Link>
      </nav>

      {/* Login Form + Image */}
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Image Section */}
          <div className="hidden md:flex items-center justify-center w-1/2 bg-gradient-to-br from-[#6D28D9] to-[#9333EA]">
            <Image
              src="/authimg/signin.png"
              alt="Sign in illustration"
              width={400}
              height={400}
              className="object-contain"
              priority
            />
          </div>
          {/* Login Form Section */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
              Sign in to Quizzy
            </h2>
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-zinc-700 mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="********"
                  className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition text-sm"
              >
                Sign In
              </button>
            </form>
            <p className="mt-6 text-center text-sm text-zinc-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-yellow-400 hover:underline font-medium"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

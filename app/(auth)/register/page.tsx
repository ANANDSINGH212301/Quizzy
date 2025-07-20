import Logo from "@/components/ui/logo";

// Brand Name
const Name = () => (
  <span className="text-2xl font-bold text-[#FACC15] ml-3">Quizzy</span>
);

const SignupPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5FA]">
      {/* Nav */}
      <nav className="w-full flex items-center justify-start p-4">
        <Logo />
        <Name />
      </nav>

      {/* Signup Form */}
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-[#6C4AB6] mb-6 text-center">
            Create your Quizzy account
          </h2>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#6C4AB6] text-sm"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#6C4AB6] text-sm"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#6C4AB6] text-sm"
              required
            />
            <button
              type="submit"
              className="bg-[#6C4AB6] hover:bg-[#5A3BA0] text-white font-semibold py-3 rounded-lg transition text-sm"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-[#FACC15] hover:underline font-medium"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

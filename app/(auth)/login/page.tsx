import Logo from "@/components/ui/logo";

const Name = () => (
  <span className="text-2xl font-bold text-yellow-300 m-3">Quizzy</span>
);
const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 flex flex-col">
      <nav className="w-full flex items-center justify-start p-4">
        <Logo />
        <Name />
      </nav>
      <div className="flex flex-1 items-center justify-center px-2">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
            Sign in to Quizzy
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
              required
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition text-sm"
            >
              Sign In
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-purple-500">
            Do not have an account?{" "}
            <a
              href="/register"
              className="text-yellow-400 hover:underline font-medium"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

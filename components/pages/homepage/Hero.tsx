const Hero = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#6D28D9] to-[#9333EA]">
      <section className="w-full py-20 px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
          Welcome to{" "}
          <span className="text-amber-400 underline decoration-cyan-400 decoration-4 underline-offset-4">
            Quizzy
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl">
          Test your digital marketing knowledge with fun, interactive quizzes.
          Challenge yourself and climb the leaderboard!
        </p>
        <a
          href="/register"
          className="inline-block bg-amber-400 text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-md transition hover:bg-teal-400 hover:text-white"
        >
          Get Started
        </a>
      </section>
    </div>
  );
};

export default Hero;

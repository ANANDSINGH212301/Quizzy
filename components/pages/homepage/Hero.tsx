const Hero = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <section className="w-full max-w-5xl px-6 py-20 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Welcome to{" "}
          <span className="text-indigo-600 underline decoration-4 underline-offset-4 decoration-yellow-400">
            Quizzy
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Challenge your knowledge with fun, interactive quizzes. 
          Earn rewards, track your progress, and compete on the leaderboard.
        </p>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/register"
            className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition hover:bg-indigo-700"
          >
            Get Started
          </a>
          <a
            href="/quizz"
            className="bg-white text-indigo-600 border border-indigo-600 font-semibold px-8 py-3 rounded-lg shadow-md transition hover:bg-indigo-50"
          >
            Browse Quizzes
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700">
      <section className="w-full bg-gradient-to-br py-20 px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Welcome to <span className="text-yellow-300">Quizzy</span>
        </h1>
        <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-xl">
          Test your digital marketing knowledge with fun, interactive quizzes.
          Challenge yourself and climb the leaderboard!
        </p>
        <a
          href="#"
          className="inline-block bg-yellow-300 text-purple-800 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition"
        >
          Get Started
        </a>
      </section>
    </div>
  );
};

export default Hero;

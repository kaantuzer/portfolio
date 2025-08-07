function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
        Hi, I'm <span className="text-blue-500">Kaan</span>
      </h1>

      <p className="text-lg md:text-2xl text-gray-300 mb-6 max-w-xl">
        Front-End Developer | Back-End-Developer | AI & Data Science Enthusiast
      </p>

      <a
        href="#projects"
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg transition duration-300"
      >
        View My Work
      </a>
    </section>
  );
}

export default Hero;

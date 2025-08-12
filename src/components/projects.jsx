import { FaCode } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Tailwind CSS.",
      link: "https://github.com/kaantuzer/portfolio",
      language: "React",
      isLive: true,
      live: "https://www.kaantuzer.com/"
    },
    {
      title: "Food Ordering App",
      description: "A food ordering app using React, MockAPI, and Tailwind CSS.",
      link: "https://github.com/kaantuzer/react-project",
      language: "React",
      isLive: true,
      live: "https://react-project-zeta-gray.vercel.app/"
    },
    {
      title: "Task Manager",
      description: "A to-do app with React",
      link: "https://github.com/kaantuzer/react-todo-list",
      language: "React",
      isLive: false,
      live: "https://www.kaantuzer.com/"
    },
    {
      title: "Crypto Tracker",
      description: "Cryptocurrency trading simulator built with Python and ttkbootstrap.",
      link: "https://github.com/kaantuzer/TradeSim_KT",
      language: "Python, Python GUI",
      isLive: false,
      live: "https://www.kaantuzer.com/"
    },
    {
      title: " Web Site (GOT) ",
      description: "Game of Thrones fan site built with HTML, CSS, and JavaScript.",
      link: "https://github.com/kaantuzer/Front-End-Project1?tab=readme-ov-file",
      language: "HTML, CSS, JavaScript",
      isLive: true,
      live: "https://kaantuzer.github.io/Front-End-Project1/"
    },
    {
      title: " Crypto Prediction App - Graduation project",
      description: "Crypto price prediction app using historical data and machine learning(RL).",
      link: "https://github.com/kaantuzer/cryptoPrediction/tree/main",
      language: "Python,HTML,CSS,JavaScript,SQL,AI",
      isLive: false,
      live: "https://www.kaantuzer.com/"
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-100 via-white to-gray-100 px-4 min-h-screen flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-16">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl p-6 transition duration-300 hover:scale-[1.03] border border-indigo-100"
          >
            <div className="flex items-center gap-2 text-indigo-500 mb-3">
              <FaCode />
              <span className="font-medium text-sm tracking-wide">{project.language}</span>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
            <div className="flex justify-between items-center text-center">

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 hover:bg-fuchsia-500 text-white px-5 py-2 rounded-full text-sm font-medium transition "
              >
                View Code
              </a>
              {project.isLive && <a target="_blank" href={project.live} className="text-xs px-4 py-2 rounded-full border border-[#5850ec] text-[#5850ec] font-medium 
         hover:bg-[#5850ec] hover:text-white transition duration-200">Live Demo</a>}
            </div>

          </div>
        ))}
      </div>
    </section >
  );
}

export default Projects;

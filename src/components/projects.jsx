import { FaCode } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Tailwind CSS.",
      link: "https://github.com/kaan/portfolio",
      language: "JavaScript",
    },
    {
      title: "Weather App",
      description: "A weather forecast app using OpenWeather API and React.",
      link: "https://github.com/kaan/weather-app",
      language: "JavaScript",
    },
    {
      title: "Task Manager",
      description: "A to-do app with CRUD functionality using React Hooks.",
      link: "https://github.com/kaan/task-manager",
      language: "JavaScript",
    },
    {
      title: "Crypto Tracker",
      description: "Real-time crypto price tracker using CoinGecko API.",
      link: "https://github.com/kaan/crypto-tracker",
      language: "JavaScript",
    },
    {
      title: "Expense Tracker",
      description: "Track income and expenses with local storage support.",
      link: "https://github.com/kaan/expense-tracker",
      language: "Python",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-100 via-white to-gray-100 px-4 min-h-screen flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-16">
        🚀 My Projects
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

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 hover:bg-fuchsia-500 text-white px-5 py-2 rounded-full text-sm font-medium transition"
            >
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

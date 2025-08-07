import { FaSmileBeam, FaUsers, FaLightbulb } from "react-icons/fa";

function SocialExperience() {
  const experiences = [
    {
      title: "Team Lead – Hackathon 2024 🧠",
      description: "Led a team of 5 during a 48-hour hackathon. Built an AI-powered wellness app that placed in top 10.",
      icon: <FaLightbulb />,
    },
    {
      title: "TEDx Volunteer 🎤",
      description: "Organized speaker logistics, stage setup, and managed backstage operations during TEDx Istanbul.",
      icon: <FaUsers />,
    },
    {
      title: "Community Mentor 🌱",
      description: "Mentored high school students on tech careers and helped them build their first mini web apps.",
      icon: <FaSmileBeam />,
    },
  ];

  return (
    <section id="social" className="py-20 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-10">🎉 Social Experience</h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
          >
            <div className="text-4xl text-purple-500 mb-4">{exp.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{exp.title}</h3>
            <p className="text-gray-600">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SocialExperience;
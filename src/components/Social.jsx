import { FaSmileBeam, FaUsers, FaLightbulb } from "react-icons/fa";

function SocialExperience() {
  const experiences = [
    {
      title: "Cave Organizations, Founder",
      description: "I organized entertainment events, ensuring high attendee satisfaction and strong participation. I successfully managed logistics, marketing, and event execution, enhancing community engagement.",
      icon: <FaLightbulb />,
    },
    {
      title: "Bau Sports Club, Vice President",
      description: "I organized and managed events in BAU Sports Club, the most populous club at the university.I organized sports events, enhancing student engagement and promoting a healthy lifestyle.",
      icon: <FaUsers />,
    },
    {
      title: "Bau Team 22, Engineering Consultant",
      description: "I worked as an engineering consultant for prospective students. I provided guidance on engineering departments and career paths, helping students make informed decisions.",
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
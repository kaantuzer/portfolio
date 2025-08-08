import profile from "../assets/kaan3.jpeg";
import { FaCode, FaLaptopCode, FaUserGraduate } from "react-icons/fa";

function About() {
  const skills = [
    "React", "JavaScript", "Tailwind CSS", "Python", "HTML", "CSS",
    "ASP.Net", "SQL", "Excel", "Power Automate", "Power BI", "Git", "jQuery",
    "Machine Learning", "AI", "C#"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-100 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Profil Foto */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Kaan"
            className="w-60 h-60 rounded-full object-cover border-4 border-blue-500 shadow-lg hover:scale-105 transition duration-300"
          />
        </div>

        {/* Yazı + Skill */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4 flex items-center gap-2 justify-center md:justify-start">
            <FaUserGraduate className="text-blue-500" />
            About Me
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            I'm a passionate front-end developer who loves turning complex problems into simple and elegant solutions. With a strong background in software engineering, I enjoy learning new tools and pushing the limits of UI/UX.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm shadow-sm hover:bg-blue-200 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

import { FaBriefcase } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Halkbank",
      date: "Apr 2025 – Jul 2025",
      description1:
        "Software development for internet banking using JavaScript and .Net Core 9.0",
    }, {
      role: "AI Intern",
      company: "Orka Holding",
      date: "Feb 2025 – May 2025",
      description1:
        "Utilizing SQL to analyze and optimize sales data across multiple channels, contributing to meaningful insights for CRM and KPI improvements, and developing time series ML models",
      description2:
        "Developed Power BI dashboards for sales and customer data analysis, utilizing SQL queries ",
    },
    {
      role: "Business Solutions & IT Intern",
      company: "Red Bull Turkey",
      date: "Jul 2023 – Sep 2023",
      description1:
        "Provided support for workflows and IT processes, leveraging tools like Python.",
      description2:
        "Actively contributed to the project management processes of key initiatives.",
    },
    {
      role: "IT Intern",
      company: "Sunglass Hut",
      date: "Aug 2022 – Sep 2022",
      description1:
        "Automated routine business processes using Excel, Power Automate, and Basic Python",
      description2:
        "Gained hands-on experience with tools like Active Directory, Meraki, Magic Info, and ticket/inventory management systems, while developing a dashboard for inventory tracking and utilizing Basic VBA",
    },
    {
      role: "Front-End Developer Intern",
      company: "Veesk Studio",
      date: "Feb 2025 – May 2025",
      description1:
        "I played an active role in some parts of the sites built within the company. ",
    },

  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-white to-gray-100 px-6 min-h-screen flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold text-indigo-600 mb-12 text-center">
        💼 Work Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white border border-indigo-100 shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center gap-2 mb-2 text-indigo-500">
              <FaBriefcase />
              <h3 className="text-lg font-semibold">{exp.role}</h3>
            </div>
            <p className="text-sm text-gray-500 font-medium mb-1">{exp.company}</p>
            <p className="text-xs text-gray-400 mb-3">{exp.date}</p>
            <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
              <li>{exp.description1}</li>
              {exp.description2 && <li>{exp.description2}</li>}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

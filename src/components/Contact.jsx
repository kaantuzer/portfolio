import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-blue-50 to-white px-6 text-center"
    >
      <h2 className="text-4xl font-bold text-blue-700 mb-6">📬 Contact Me</h2>
      <p className="text-gray-700 text-lg mb-8 max-w-xl mx-auto">
        I'm currently open to new opportunities. Feel free to reach out for collaboration, freelance work, or just to say hi 👋
      </p>

      {/* Email Button */}
      <a
        href="mailto:kaan@example.com"
        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition duration-300 shadow-lg"
      >
        <FaEnvelope />
        Send Email
      </a>

      {/* Social Media Links */}
      <div className="mt-10 flex justify-center gap-6 text-3xl">
        <a
          href="https://github.com/kaan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/kaan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}

export default Contact;

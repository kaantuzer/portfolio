import cvFile from '../assets/kaancv2.pdf';
import { FaDownload, FaEye } from 'react-icons/fa';

function CV() {
  return (
    <section id='cv' className="p-20 flex flex-col items-center justify-center text-center bg-white px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">My CV</h1>

      <div className="flex gap-4">
        {/* Görüntüle */}
        <a
          href={cvFile}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          <FaEye />
          View CV
        </a>

        {/* İndir */}
        <a
          href={cvFile}
          download="kaan-cv.pdf"
          className="flex items-center gap-2 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
        >
          <FaDownload />
          Download
        </a>
      </div>
    </section>
  );
}

export default CV;
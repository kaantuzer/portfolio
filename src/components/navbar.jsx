
import '../App.css';
import '../index.css';
import logo from '../assets/KT.png';

function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-3xl font-bold text-dark-600">Kaan Tüzer</div>

          {/* Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-600 hover:text-indigo-300 font-medium">Home</a>
            <a href="#about" className="text-gray-600 hover:text-indigo-300 font-medium">About</a>
            <a href="#projects" className="text-gray-600 hover:text-indigo-300 font-medium">Projects</a>
            <a href="#experience" className="text-gray-600 hover:text-indigo-300 font-medium">Work Experience</a>
            <a href="#social" className="text-gray-600 hover:text-indigo-300 font-medium">Social Experience</a>

            <a href="#cv" className="text-gray-600 hover:text-indigo-300 font-medium">CV</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-300 font-medium">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
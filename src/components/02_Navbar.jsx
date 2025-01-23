import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-yellow-400 flex justify-between items-center px-4 py-4 relative">
      <div className="text-2xl text-black font-bold cursor-pointer">
        <Link to="home" smooth={true} duration={500}>EduMentis</Link>
      </div>

      {/* Desktop Menu */}
      <ul className="md:flex hidden font-bold text-black space-x-8">
        <li>
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">About Us</Link>
        </li>
        <li>
          <Link to="mentors" smooth={true} duration={500} className="cursor-pointer">Our Mentors</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact Us</Link>
        </li>
      </ul>

      {/* Desktop Login/SignUp Button */}
      <div className="hidden md:block px-4 py-2 bg-black text-yellow-400 rounded font-bold cursor-pointer">
        Login/SignUp
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <span className="text-4xl">&#8801;</span>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-yellow-300 font-bold shadow-md md:hidden flex flex-col items-center py-4 space-y-4 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ zIndex: 1000 }}
      >
        <Link to="home" smooth={true} duration={500} className="text-black text-lg" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className="text-black text-lg" onClick={() => setIsOpen(false)}>
          About Us
        </Link>
        <Link to="mentors" smooth={true} duration={500} className="text-black text-lg" onClick={() => setIsOpen(false)}>
          OurMentors
        </Link>
        <Link to="contact" smooth={true} duration={500} className="text-black text-lg" onClick={() => setIsOpen(false)}>
          Contact Us
        </Link>
        <button
          className="px-4 py-2 bg-yellow-400 text-black rounded font-bold"
          onClick={() => setIsOpen(false)}
        >
          Login/SignUp
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

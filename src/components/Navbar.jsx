import { useState } from 'react';
import logo from '../assets/logo.webp'; // ensure the logo is placed in the correct path

const Navbar = ({ onMenuClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sections = ["home", "menu", "contact", "book", "matches"];

  return (
    <div className="bg-black text-white fixed top-0 left-0 w-full z-100">
      <div className="flex justify-between items-center p-4">
        <img src={logo} alt="Bar Logo" className="h-20 md:h-24" /> {/* Logo with controlled height */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
        <div className={`${
          isOpen ? "flex" : "hidden"
        } absolute flex-col top-full left-0 w-full bg-black md:static md:w-auto md:flex md:flex-row`}>
          {sections.map((sec) => (
            <button key={sec} onClick={() => { onMenuClick(sec); setIsOpen(false); }} className="text-white px-3 py-2 rounded hover:underline block md:inline">
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

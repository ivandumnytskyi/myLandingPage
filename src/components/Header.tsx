import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#1e5b17] backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Ivan Dumnytskyi</h1>
        <button
          className="flex items-center cursor-pointer md:hidden transition hover:bg-white/5"
          aria-label="navigation menu"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            aria-label="navigation menu"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
          <nav
            className={`absolute top-[105%] right-0.5 w-full max-w-30 bg-[#1e5b17] backdrop-blur-md ${
              isMenuOpen ? "translate-x-0" : "translate-x-[130%]"
            } ${isMenuOpen ? "opacity-100" : "opacity-0"} transition-all duration-300`}
          >
            <ul className="flex flex-col md:flex-row justify-center items-center gap-4 p-4">
              <li>
                <a href="#hero" className="hover:text-green-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-green-400">
                  Projects
                </a>
              </li>
               <li>
                <a href="#services" className="hover:text-green-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-green-400">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-400">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        <nav
            className="hidden md:flex"
          >
            <ul className="flex flex-col md:flex-row justify-center items-center gap-4">
              <li>
                <a href="#hero" className="hover:text-green-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-green-400">
                  Projects
                </a>
              </li> 
              <li>
                <a href="#services" className="hover:text-green-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-green-400">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-400">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
      </div>
    </header>
  );
};

export default Header;

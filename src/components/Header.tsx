import Logo from "../assets/logo.svg";
import { useState } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const containerRef = useRef(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const handleNavClick = contextSafe(
    (
      e: React.MouseEvent<HTMLButtonElement>,
      targetId: string,
      mobile: boolean,
    ): void => {
      e.preventDefault();

      const element = document.querySelector<HTMLElement>(targetId);
      if (!element) return;

      const calculateOffset = () => {
        if (mobile) {
          return targetId === "#contact"
            ? window.innerHeight - element.offsetHeight
            : window.innerHeight - element.offsetHeight / 2;
        } else {
          return window.innerHeight / 2 - element.offsetHeight / 2;
        }
      };

      gsap.to(window, {
        duration: 1.2,
        ease: "power3.inOut",
        scrollTo: {
          y: targetId,
          offsetY: calculateOffset(),
          autoKill: mobile, 
        },
      });
    },
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#1e5b17] backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <img src={Logo} alt="logo" className="max-h-8" />
          IvanBuilds
        </h1>
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
          ref={containerRef}
          className={`md:hidden absolute top-[105%] right-0.5 w-full max-w-30 bg-[#1e5b17] backdrop-blur-md ${
            isMenuOpen ? "translate-x-0" : "translate-x-[130%]"
          } ${isMenuOpen ? "opacity-100" : "opacity-0"} transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row justify-center items-center gap-4 p-4">
            <li>
              <button
                className="hover:text-green-400"
                onClick={(e) => handleNavClick(e, "#hero", true)}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={(e) => handleNavClick(e, "#projects", true)}
                className="hover:text-green-400"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={(e) => handleNavClick(e, "#services", true)}
                className="hover:text-green-400"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={(e) => handleNavClick(e, "#skills", true)}
                className="hover:text-green-400"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={(e) => handleNavClick(e, "#contact", true)}
                className="hover:text-green-400"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
        <nav className="hidden md:flex">
          <ul className="flex flex-col md:flex-row justify-center items-center gap-4 p-4">
            <li>
              <button
                className="hover:text-green-400"
                onClick={(e) => handleNavClick(e, "#hero", false)}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={(e) => handleNavClick(e, "#projects", false)}
                className="hover:text-green-400"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={(e) => handleNavClick(e, "#services", false)}
                className="hover:text-green-400"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={(e) => handleNavClick(e, "#skills", false)}
                className="hover:text-green-400"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={(e) => handleNavClick(e, "#contact", false)}
                className="hover:text-green-400"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

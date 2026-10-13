import GameAdvicer from "../assets/gameadvicer.png";
import Ecom from "../assets/e-com.png";
import landingAi from "../assets/landingai.png";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website",
      stack: "Next.js · TypeScript · PostgreSQL · Prisma · Tailwind CSS",
      description:
        "A full-stack online store featuring product discovery, search, sorting, product details, and user authentication, backed by a relational database.",
      image: Ecom,
      git: 'https://github.com/ivandumnytskyi/e-com',
      live: 'https://e-com-tan-nine.vercel.app/'
    },
    {
      title: "Game Advicer",
      stack: "Next.js · React · TypeScript · OpenAI API",
      description:
        "An AI-powered web app that helps gamers discover games tailored to their preferences, favorite genres, platforms, and play styles.",
      image: GameAdvicer,
      git: 'https://github.com/ivandumnytskyi/GameAdvicer',
      live: 'https://game-advicer.vercel.app/'
    },
    {
      title: "SaaS landing page",
      stack: "Next.js · React · TypeScript · StyleX",
      description:
        "A modern, responsive SaaS landing page built with reusable components, consistent styling, and a clean, user-focused layout.",
      image: landingAi,
      git: 'https://github.com/ivandumnytskyi/landingPage_ai',
      live: 'https://landingpageai-ten.vercel.app/',
    },
  ];

  const scopeRef = useRef(null);
  useGSAP(
    () => {
      gsap.from(".project", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".project",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: scopeRef },
  );

  const [visible, setVisible] = useState<number | null>(null);

  return (
    <section id="projects" className="relative w-full max-w-7xl" ref={scopeRef}>
      <h2 className="project text-4xl font-bold text-center mb-4">Projects</h2>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 p-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project bg-[#1de00724] relative p-4 rounded-lg gap-8 lg:max-h-140 flex flex-col hover:bg-[#1de0074d] transition-colors duration-300"
            onClick={() =>
              setVisible((prev) => (prev === index ? null : index))
            }
          >
            <h3 className="text-xl font-bold">{project.title}</h3>

            <div
              className={`overflow-hidden md:max-h-92 lg:max-h-58 transition-[max-height] duration-500 rounded-lg
             ${visible === index ? "max-h-58" : "max-h-0"}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full mb-2 rounded-lg"
              />
            </div>

            <p className="text-gray-400">{project.stack}</p>
            <p>{project.description}</p>
            <span className="absolute top-4 right-1 text-gray-400 opacity-80 max-w-30 md:hidden">
              see screenshot
            </span>

            <div className="hero flex justify-between w-full">
          <a
            href={project.live}
            className="bg-[#0e0f0e] px-4 py-2 rounded-lg hover:bg-[#1f391c] transition-colors duration-300"
          >
            View Live Demo
          </a>
          <a
            href={project.git}
            className="bg-[#0e0f0e] px-4 py-2 rounded-lg hover:bg-[#1f391c] transition-colors duration-300"
          >
            View Git Repo
          </a>
        </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

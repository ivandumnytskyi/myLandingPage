import GameAdvicer from "../assets/GameAdvicer.png";
import Ecom from "../assets/E-com.png";
import landingAi from "../assets/Landingai.png";

import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website",
      stack:
        "Next.js · TypeScript · PostgreSQL · Prisma · Tailwind CSS",
      description:
        "A full-stack online store featuring product discovery, search, sorting, product details, and user authentication, backed by a relational database.",
      image: Ecom,
    },
    {
      title: "Game Advicer",
      stack: "Next.js · React · TypeScript · OpenAI API",
      description:
        "An AI-powered web app that helps gamers discover games tailored to their preferences, favorite genres, platforms, and play styles.",
      image: GameAdvicer,
    },
    {
      title: "SaaS landing page",
      stack: "Next.js · React · TypeScript · StyleX",
      description:
        "A modern, responsive SaaS landing page built with reusable components, consistent styling, and a clean, user-focused layout.",
      image: landingAi,
    },
  ];

  const [visible, setVisible] = useState<number | null>(null);;

  return (
    <section id="projects" className="relative w-full max-w-7xl">
      <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {projects.map((project, index) => (
          <div
          key={index}
          className="bg-[#1de00724] p-4 rounded-lg gap-8 lg:max-h-120 flex flex-col hover:bg-[#1de0074d] transition-colors duration-300"
          onClick={() => setVisible((prev) => prev === index ? null : index)}
        >
          <h3 className="text-xl font-bold">{project.title}</h3>

          <div
            className={`overflow-hidden md:max-h-58 transition-[max-height] duration-500 rounded-lg
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
        </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

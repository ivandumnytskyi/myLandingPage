import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Skills = () => {
  const scopeRef = useRef(null);
  useGSAP(
    () => {
      gsap.from(".skill", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skill",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: scopeRef },
  );
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Tailwind CSS",
      ],
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "GitHub", "Vite", "Vercel", "REST API"],
    },
    {
      title: "Full-Stack",
      skills: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "Auth basics"],
    },
  ];
  return (
    <section
      id="skills"
      ref={scopeRef}
      className="relative w-full flex flex-col md:flex-row items-center justify-center lg:gap-24 max-w-6xl"
    >
      <h2 className="skill text-4xl font-bold text-center mb-4 max-w-6xl">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 text-center">
        {skillGroups.map((group, index) => (
          <div
            key={index}
            className="skill p-4 rounded-lg flex flex-col justify-between"
          >
            <h3 className="text-xl font-bold mb-2">{group.title}</h3>
            <ul className="list-disc list-inside text-gray-400">
              {group.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

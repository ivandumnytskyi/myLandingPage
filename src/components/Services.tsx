import ToolsIcon from "../assets/tools.svg"
import PCIcon from "../assets/monitor.svg"
import PlugIcon from "../assets/plug.svg"
import AtomIcon from "../assets/atom.svg"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Services = () => {
  const services = [
    {
      icon: PCIcon,
      title: "Responsive Landing Pages",
      description:
        "Modern, mobile-friendly landing pages built with React, TypeScript, and Tailwind CSS.",
      features: [
        "Fully responsive layout",
        "Clean reusable components",
        "Fast deployment on Vercel",
      ],
    },
    {
      icon: AtomIcon,
      title: "React Web App Development",
      description:
        "Interactive single-page applications with clean component structure and TypeScript.",
      features: [
        "Dashboards and product UIs",
        "Reusable components",
        "State and form handling",
      ],
    },
    {
      icon: PlugIcon,
      title: "API Integration",
      description:
        "Connect your frontend to REST APIs with reliable data fetching and user-friendly states.",
      features: [
        "Fetch / Axios",
        "Loading and error states",
        "Forms and validation",
      ],
    },
    {
      icon: ToolsIcon,
      title: "Bug Fixes & UI Improvements",
      description:
        "Improve or fix an existing React frontend: layout issues, responsiveness, and small features.",
      features: ["Responsive fixes", "React refactoring", "New UI features"],
    },
  ];

  gsap.registerPlugin(ScrollTrigger);
  const scopeRef = useRef(null);
  useGSAP(() => {
    gsap.from(".service", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger:0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".service", 
        start: "top 85%",            
        toggleActions: "play none none none" 
      }
    });
  }, { scope: scopeRef })
  return (
    <section id="services" className="relative w-full flex flex-col items-center text-center" ref={scopeRef}>
      <h2 className="service text-4xl font-bold text-center mb-4">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4 p-4 max-w-7xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="service max-w-xl h-full p-4 rounded-lg flex flex-col justify-between"
          >
            <div className="w-full flex justify-center mb-8">
              <img src={service.icon} className="w-37.5" alt="tools" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 h-14">{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <ul className="mt-2 list-disc list-inside text-gray-400">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

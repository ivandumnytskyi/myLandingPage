const Services = () => {
  const services = [
    {
      icon: "🖥️",
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
      icon: "⚛️",
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
      icon: "🔌",
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
      icon: "🛠️",
      title: "Bug Fixes & UI Improvements",
      description:
        "Improve or fix an existing React frontend: layout issues, responsiveness, and small features.",
      features: ["Responsive fixes", "React refactoring", "New UI features"],
    },
  ];
  return (
    <section id="services" className="relative w-full flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center mb-4">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 p-4 max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#1de00724] max-w-xl p-4 rounded-lg flex flex-col justify-between"
          >
            <div>
              <span className="text-3xl">{service.icon}</span>
              <h3 className="text-xl font-bold">{service.title}</h3>
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

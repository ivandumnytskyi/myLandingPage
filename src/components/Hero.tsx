import { lazy, Suspense, useEffect, useState } from "react";

const HeroShader = lazy(() => import("./HeroShader"));

const Hero = () => {
  const [speed, setSpeed] = useState(0.8);
  const [shaderReady, setShaderReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed((prev) => {
        if (prev <= 0.1) return 0;
        return prev - 0.1;
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="hero" className="relative isolate w-full h-screen">
      <div
        aria-hidden="true"
        className={`absolute inset-0 transition-opacity duration-800 ${
          shaderReady ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0, 255, 80, 0.5) 0%, rgba(0, 255, 80, 0.25) 18%, transparent 42%)",
        }}
      />
      <Suspense fallback={null}>
        <HeroShader
          className="relative z-10 w-full h-full"
          speed={speed}
          onReady={() => setShaderReady(true)}
        />
      </Suspense>
      <div className="absolute top-[10%] md:top-[20%] flex flex-col h-[75%] left-[10%] justify-between items-center md:items-start max-w-[80%] lg:w-[80%] z-20">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h1 className="text-3xl font-bold text-[#25751c]">Ivan Dumnytskyi</h1>
          <p className="">FRONTEND & FULLSTACK DEVELOPER</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">
            Your{" "}
            <span className={`${shaderReady && 'text-[#2b2a2a] sm:text-white md:text-[#2b2a2a] lg:text-white'} transition-colors duration-800 `}>
              ideas, brought to life with code.
            </span>
          </h1>
          <p className={`${shaderReady &&'md:text-[#2b2a2a] md:text-2xl lg:text-white'}`}>
            <span className={`${shaderReady && 'text-[#2b2a2a] sm:text-white md:text-[#2b2a2a] lg:text-white'} transition-colors duration-800 `}>
              I develop modern landing pages 
            </span>{" "}
            and web{" "}
            <span className={`${shaderReady && 'text-[#2b2a2a] sm:text-white md:text-[#2b2a2a] lg:text-white'} transition-colors duration-800 `}>
              applications tailored to your 
            </span>
            {" "} needs.
          </p>
        </div>

        <div className="flex gap-4 w-full md:justify-end">
          <a
            href="#projects"
            className="bg-[#1e5b17] px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            View my Projects
          </a>
          <a
            href="#contact"
            className="border-2 border-[#1e5b17] px-4 py-2 rounded-lg hover:bg-[#1e5b17] transition-colors duration-300"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

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
    <section id="hero" className="relative isolate w-full h-[90vh]">
      <div
        aria-hidden="true"
        className={`absolute inset-0 transition-opacity duration-500 ${
          shaderReady ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0, 255, 80, 0.65) 0%, rgba(0, 255, 80, 0.16) 28%, transparent 68%), #050805",
        }}
      />
      <Suspense fallback={null}>
        <HeroShader
          className="relative z-10 w-full h-full"
          speed={speed}
          onReady={() => setShaderReady(true)}
        />
      </Suspense>

      <h1 className="absolute z-20 cursor-default top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
        Hello, World!
      </h1>
    </section>
  );
};

export default Hero;

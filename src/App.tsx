import { Shader, Blob, CursorRipples } from "shaders/react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [speed, setSpeed] = useState(0.8);

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
    <section className="relative w-full h-screen bg-linear-to-b from-[#0b0b0b] to-[#343303]">
      <Shader className="w-full h-full">
        <CursorRipples intensity={5} radius={0.3}>
          <Blob colorB="#00ff50" size={0.3} deformation={0.5} speed={speed} />
        </CursorRipples>
      </Shader>

      <h1 className="absolute cursor-default top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
        Hello, World!
      </h1>
    </section>
  );
}

export default App;

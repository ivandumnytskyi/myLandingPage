import { Shader, Blob, CursorRipples } from "shaders/react";

type HeroShaderProps = {
  className: string;
  speed: number;
  onReady: () => void;
};

const HeroShader = ({ className, speed, onReady }: HeroShaderProps) => (
  <Shader className={className} onReady={onReady}>
    <CursorRipples intensity={5} radius={0.3}>
      <Blob colorB="#00ff50" size={0.3} deformation={0.5} speed={speed} />
    </CursorRipples>
  </Shader>
);

export default HeroShader;

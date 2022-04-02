import { useState } from "react";
import Background from "../sketches/Background";
import colors from "nice-color-palettes/500";
import { ReactP5Wrapper } from "react-p5-wrapper";

function About() {
  const [cols, setCols] = useState(colors[380]);

  
  return (
    <>
      <div>
        <div className="fixed top-0 left-0 blur-3xl opacity-80 saturate-200 -z-20 bg-clip-text text-transparent">
          <ReactP5Wrapper
            sketch={Background}
            cols={cols}
            minSize={800}
            maxSize={1050}
            minSpeed={0.1}
            maxSpeed={2}
            maxAgents={20}
          />
        </div>
      </div>
    </>
  );
}

export default About;

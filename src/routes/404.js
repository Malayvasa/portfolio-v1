import { useState } from "react";
import Background from "../sketches/Background";
import colors from "nice-color-palettes/100";
import { ReactP5Wrapper } from "react-p5-wrapper";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Socials from "../components/Socials";

function E404() {
  const [cols, setCols] = useState(colors[62]);

  function handlePaletteChange() {
    let newPaletteNum = Math.floor(Math.random() * colors.length);
    let newCols = colors[newPaletteNum];
    setCols(newCols);
    console.log("handlePaletteChange");
  }

  return (
    <>
      <div className="h-screen flex content-center">
        <div className="fixed top-0 left-0 blur-3xl opacity-80 saturate-200 -z-20 bg-clip-text text-transparent">
          <ReactP5Wrapper
            sketch={Background}
            cols={cols}
            minSize={500}
            maxSize={750}
            minSpeed={0.1}
            maxSpeed={2}
            maxAgents={40}
          />
        </div>

        <div className="flex gap-y-4 flex-col w-full items-center my-auto content-center">
          <div className="text-bold text-white sm:text-9xl text-6xl text-center align-middle">
            Uh Oh!
          </div>
          <div className="text-sm text-white/40 text-center align-middle">
            The page you're looking for does not exist. <br />
            Go back to{" "}
            <Link className="text-white underline" to="/">
              Home
            </Link>
          </div>
          <div className="flex flex-row gap-x-6 mt-8">
            <Socials />
          </div>

          <Footer handlePaletteChange={handlePaletteChange} />
        </div>
      </div>
    </>
  );
}

export default E404;

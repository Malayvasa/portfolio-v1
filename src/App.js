import { ReactP5Wrapper } from "react-p5-wrapper";
import colors from "nice-color-palettes/100";
import { useState } from "react";
import Background from "./sketches/Background";
import profile from "./assets/img/profile.png";
//import Card from "./Card";
import Footer from "./Footer";
import Socials from "./Socials";

function App() {
  const [cols, setCols] = useState(colors[96]);
  function handlePaletteChange() {
    let newPaletteNum = Math.floor(Math.random() * colors.length);
    let newCols = colors[newPaletteNum];
    setCols(newCols);
    console.log("handlePaletteChange");
  }
  return (
    <div className="w-screen h-screen min-h-screen">
      <div className="fixed top-0 left-0 blur-3xl saturate-200 -z-10">
        <ReactP5Wrapper sketch={Background} cols={cols} />
      </div>

      <div className="bg-slate-900 bg-opacity-5 w-full h-full px-8 md:px-32 py-8 md:pb-32 md:pt-24">
        <div className="flex flex-col h-full gap-y-2 md:gap-y-8 md:w-[450px]">
          <div className="text-3xl md:text-6xl  text-white text-opacity-60">
            <span className="text-white font-medium text-opacity-100">
              Malay Vasa
            </span>
          </div>
          <div className="text-2xl mt-2 text-white text-opacity-60">
            UI/UX Designer with <br /> Frontend Superpowers
          </div>
          <div className="flex-0 md:flex-grow h-auto md:h-full text-md mt-4 md:mt-0 md:text-lg text-white text-opacity-60">
            I study Human Centered Design at{" "}
            <span className="text-opacity-100 text-white underline">
              <a href="http://srishtimanipalinstitute.in/">SMI,</a>
            </span>{" "}
            Bengaluru. I'm currently working as a Product Designer at{" "}
            <span className="text-opacity-100 text-white underline">
              <a href="https://www.modfy.video/">Modfy</a>
            </span>{" "}
            and as a Freelance Designer + Developer at{" "}
            <span className="text-opacity-100 text-white underline">
              <a href="https://www.coinocracy.finance/">Coinocracy</a>
            </span>{" "}
            &{" "}
            <span className="text-opacity-100 text-white underline">
              <a href="https://kernel.community/en/">Kernel</a>
            </span>
          </div>
          <div className="flex flex-row items-center gap-x-12">
            <img
              src={profile}
              alt="profile"
              className="w-24 hidden md:block rounded-full h-auto"
            />
            <div className="flex flex-row gap-x-6 mt-8 md:mt-0">
              <Socials />
            </div>
          </div>
        </div>
      </div>

      <Footer handlePaletteChange={handlePaletteChange} />
    </div>
  );
}

export default App;

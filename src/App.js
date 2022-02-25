import { ReactP5Wrapper } from "react-p5-wrapper";
import colors from "nice-color-palettes/100";
import { useState } from "react";
import Background from "./sketches/Background";
// import profile from "./assets/img/profile.png";
// import Card from "./Card";
import Footer from "./Footer";

function App() {
  const [cols, setCols] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );
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

      <div className="bg-slate-900 bg-opacity-5 w-full h-full px-8 md:px-16 py-16 tracking-tighter">
        <div className="flex flex-col gap-y-2 md:gap-y-8 w-full md:w-1/3">
          <div className="text-3xl md:text-6xl  text-white text-opacity-60">
            <span className="text-white font-medium text-opacity-100">
              Malay Vasa
            </span>
          </div>
          <div className="text-2xl text-white text-opacity-60 leading-6">
            UI/UX Designer with <br /> Frontend Superpowers
          </div>
          <div className="text-md mt-4 md:pt-0 md:text-xl text-white text-opacity-60 leading-5">
            I study 📚 Human Centered Design at{" "}
            <span className="text-opacity-100 text-white underline">
              <a href="http://srishtimanipalinstitute.in/">SMI,</a>
            </span>{" "}
            Bengaluru. I'm currently working as a ⚡️ product designer at{" "}
            <span className="text-opacity-100 text-white underline">
              <a href="https://www.modfy.video/">Modfy.</a>
            </span>{" "}
            I also freelance as a Designer + Developer at{" "}
            <span className="text-opacity-100 text-white underline">
              <a href="https://www.coinocracy.finance/">Coinocracy</a>
            </span>{" "}
            &{" "}
            <span className="text-opacity-100 text-white underline">
              <a href="https://kernel.community/en/">Kernel</a>
            </span>
          </div>
        </div>
      </div>

      <Footer handlePaletteChange={handlePaletteChange} />
    </div>
  );
}

export default App;

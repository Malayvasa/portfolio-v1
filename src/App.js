import { ReactP5Wrapper } from "react-p5-wrapper";
import colors from "nice-color-palettes/100";
import { useState } from "react";
import Background from "./sketches/Background";

//import Card from "./Card";

import Intro from "./Intro";
import ProjectCard from "./ProjectCard";

function App() {
  const [cols, setCols] = useState(colors[28]);
  function handlePaletteChange() {
    let newPaletteNum = Math.floor(Math.random() * colors.length);
    let newCols = colors[newPaletteNum];
    setCols(newCols);
    console.log("handlePaletteChange");
  }
  return (
    <div className="h-screen">
      <div className="fixed top-0 left-0 h-screen w-screen bg-opacity-40  bg-slate-900  saturate-200 -z-10"></div>
      <div className="fixed top-0 left-0 opacity-40 blur-xl sm:blur-md  saturate-200 -z-20">
        <ReactP5Wrapper sketch={Background} cols={cols} />
      </div>

      <div className="h-full  my-auto flex flex-col">
        <div className=" md:h-5/6 flex flex-col md:flex-row pb-8 sm:pb-0 md:gap-x-8 w-full px-8 lg:px-16 xl:px-8 2xl:px-44 my-auto scroll-overflow">
          <div className="">
            <Intro handlePaletteChange={handlePaletteChange} />
          </div>

          <div className="w-full sm:w-[550px] xl:w-[750px] ml-auto mr-0">
            <div className="flex flex-col pt-16 md:pt-0 items-start">
              <div className="text-lg pb-4 text-white text-opacity-40">
                UI/UX Projects
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-end h-max gap-y-6 gap-4">
                <ProjectCard
                  Title={"Two Tired"}
                  Description={
                    "Mindfulness focused ride tracker app, designed to address the failure of personal informatics in bringing an impactful change on the user."
                  }
                  url={
                    "https://www.behance.net/gallery/115777195/Two-Tired-Mindfulness-focused-Ride-Tracker-App"
                  }
                />
              </div>
            </div>

            <div className="flex flex-col pt-16 items-start">
              <div className="text-lg pb-4 text-white text-opacity-40">
                Landing Pages
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-end h-max gap-y-6 gap-4">
                <ProjectCard
                  Title={"Modfy"}
                  Description={
                    "Modfy is an early stage startup building the future of video editing backed by Pioneer & OnDeck(ODX)."
                  }
                  url={"https://modfy.video"}
                />
                <ProjectCard
                  Title={"Coinocracy"}
                  Description={
                    "Coinocracy aims to provide the ultimate DAO-VC toolkit to begin to bridge the venture capital and DAO worlds."
                  }
                  url={"https://coinocracy.finance"}
                />
              </div>
            </div>

            <div className="flex flex-col pt-16 items-start">
              <div className="text-lg pb-4 text-white text-opacity-40">
                Creative Coding Projects
              </div>
              <div className="flex flex-col md:flex-row items-start h-full gap-y-6 gap-4">
                <ProjectCard
                  Title={"Generative Identity"}
                  Description={
                    "Generating unique abstract symbols using Individual names as seeds."
                  }
                  url={
                    "https://www.behance.net/gallery/89701531/Generative-Identity-Abstract-Symbols-From-Names"
                  }
                />
                <ProjectCard
                  Title={"Genre Gender"}
                  Description={
                    "A dataviz experience that introduces gender fluidity through music genres."
                  }
                  url={"https://www.genregender.com/"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

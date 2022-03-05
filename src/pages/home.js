import { ReactP5Wrapper } from "react-p5-wrapper";
import colors from "nice-color-palettes/100";
import { useState } from "react";
import Background from "../sketches/Background";

import "../index.css";

//import Card from "./Card";

import Intro from "../components/Intro";
import ProjectCard from "../components/ProjectCard";

function Home() {
  const [playHover, setPlayHover] = useState(false);
  const [cols, setCols] = useState(colors[40]);

  function handlePlayHover() {
    setPlayHover(!playHover);
  }

  function handlePaletteChange() {
    let newPaletteNum = Math.floor(Math.random() * colors.length);
    let newCols = colors[newPaletteNum];
    setCols(newCols);
    console.log("handlePaletteChange");
  }
  return (
    <div className="h-screen z-10">
      <div className="fixed top-0 left-0 blur-3xl opacity-80 saturate-200 -z-20">
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
      {
        <div
          className={
            playHover
              ? "fadeIn fixed top-0 left-0 opacity-50 saturate-200 -z-20"
              : "fadeOut fixed top-0 left-0 opacity-50 saturate-200 -z-20"
          }
        >
          <ReactP5Wrapper
            sketch={Background}
            cols={cols}
            minSize={5}
            maxSize={18}
            minSpeed={1}
            maxSpeed={5}
            maxAgents={50}
          />
        </div>
      }

      <div className="h-full  my-auto flex flex-col">
        <div className=" md:h-5/6 flex flex-col md:flex-row pb-32 sm:pb-8 md:gap-x-8 w-full px-8 lg:px-16 xl:px-16 2xl:px-44 my-auto scroll-overflow">
          <div className="">
            <Intro
              handlePaletteChange={handlePaletteChange}
              handlePlayHover={handlePlayHover}
            />
          </div>

          <div className="w-full sm:w-[550px] xl:w-[750px] ml-auto mr-0 ">
            <div className="flex flex-col pt-16 md:pt-0 items-start">
              <div className="text-2xl pb-4 text-white text-opacity-80">
                Featured Projects
              </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

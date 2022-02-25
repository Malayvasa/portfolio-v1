import { ReactP5Wrapper } from "react-p5-wrapper";
import colors from "nice-color-palettes/100";
import { useState } from "react";
import Background from "./sketches/Background";
import profile from "./assets/img/profile.png";
//import Card from "./Card";
import Footer from "./Footer";
import Socials from "./Socials";
import Intro from "./Intro";
import ProjectCard from "./ProjectCard";

function App() {
  const [cols, setCols] = useState(colors[100]);
  function handlePaletteChange() {
    let newPaletteNum = Math.floor(Math.random() * colors.length);
    let newCols = colors[newPaletteNum];
    setCols(newCols);
    console.log("handlePaletteChange");
  }
  return (
    <div className="">
      <div className="fixed top-0 left-0 blur-3xl saturate-200 -z-10">
        <ReactP5Wrapper sketch={Background} cols={cols} />
      </div>

      <div className="h-screen flex flex-col">
        <div className="flex-grow flex flex-col md:gap-x-8 w-4/5 justify-between md:flex-row py-16 mx-auto scroll-overflow">
          <div className="w-full md:w-[450px]">
            <Intro />

            <div className="md:mt-32 flex flex-row items-center gap-x-12">
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

          <div className="w-full md:w-[750px]">
            <div className="flex flex-col pt-16 md:pt-0 items-start md:items-end">
              <div className="text-2xl pb-4 text-white text-opacity-60">
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

            <div className="flex flex-col pt-16 items-start md:items-end">
              <div className="text-2xl pb-4 text-white text-opacity-60">
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

        <div className=" justify-self-end">
          <Footer handlePaletteChange={handlePaletteChange} />
        </div>
      </div>
    </div>
  );
}

export default App;

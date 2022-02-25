import { ReactP5Wrapper } from "react-p5-wrapper";
import colors from "nice-color-palettes/100";
import { useState } from "react";
import Background from "./sketches/Background";
import profile from "./assets/img/profile.png";
//import Card from "./Card";
import Footer from "./Footer";
import Socials from "./Socials";
import Intro from "./Intro";

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

      <div className="flex flex-col overflow-scroll md:flex-row h-full px-8 md:px-32 py-8 md:pb-32 md:pt-24">
        <div className="flex flex-auto md:flex-none flex-col h-full gap-y-2 md:gap-y-8 md:w-[450px]">
          <Intro />

          <div className="flex -mb-32 flex-row items-center gap-x-12">
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

        <div className="flex flex-col mb-64 md:mb-0 pt-32 md:pt-0 m-0 md:ml-8 items-start md:items-end">
          <div className="text-2xl pb-4 text-white text-opacity-60">
            UI/UX Projects
          </div>
          <div className="  flex flex-col items-start md:items-end h-max gap-y-6">
            <div className="bg-slate-100 p-8 bg-opacity-20 border-transparent border cursor-pointer hover:shadow-2xl hover:border-white transition ease-in-out md:w-2/4 rounded-sm shadow-lg">
              <a href="https://www.behance.net/gallery/115777195/Two-Tired-Mindfulness-focused-Ride-Tracker-App">
                <div className="text-2xl text-white font-medium">Two Tired</div>
                <div className="text-white text-opacity-60 pt-4">
                  Mindfulness focused ride tracker app, designed to address the
                  failure of personal informatics in bringing about an impactful
                  change on the user.
                </div>
              </a>
            </div>
          </div>

          <div className="text-2xl pt-12 pb-4 text-white text-opacity-60">
            Web Design Projects
          </div>
          <div className="  flex flex-col items-start md:items-end h-max gap-y-6">
            <div className="bg-slate-100 p-8 bg-opacity-20 border-transparent border cursor-pointer hover:shadow-2xl hover:border-white transition ease-in-out md:w-2/4 rounded-sm shadow-lg">
              <a href="https://modfy.video">
                <div className="text-2xl text-white font-medium">
                  Modfy - Landing Page
                </div>
                <div className="text-white text-opacity-60 pt-4">
                  Modfy is an early stage startup building the future of video
                  editing backed by Pioneer & OnDeck(ODX). The landing page
                  showcases the features present in the early access version of
                  the editor.
                </div>
              </a>
            </div>
            <div className="bg-slate-100 p-8 bg-opacity-20 border-transparent border cursor-pointer hover:shadow-2xl hover:border-white transition ease-in-out  md:w-2/4 rounded-sm shadow-lg">
              <a href="https://coinocracy.finance">
                <div className="text-2xl text-white font-medium">
                  Coinocracy - Landing Page
                </div>
                <div className="text-white text-opacity-60 pt-4">
                  Coinocracy aims to provide the ultimate DAO-VC toolkit to
                  begin to bridge the venture capital and DAO worlds.{" "}
                </div>
              </a>
            </div>
          </div>
          <div className="  flex flex-col items-start md:items-end h-max gap-y-6">
            <div className="bg-slate-100 p-8 bg-opacity-20 border-transparent border cursor-pointer hover:shadow-2xl hover:border-white transition ease-in-out md:w-2/4 rounded-sm shadow-lg">
              <a href="https://modfy.video">
                <div className="text-2xl text-white font-medium">
                  Modfy - Landing Page
                </div>
                <div className="text-white text-opacity-60 pt-4">
                  Modfy is an early stage startup building the future of video
                  editing backed by Pioneer & OnDeck(ODX). The landing page
                  showcases the features present in the early access version of
                  the editor.
                </div>
              </a>
            </div>
            <div className="bg-slate-100 p-8 bg-opacity-20 border-transparent border cursor-pointer hover:shadow-2xl hover:border-white transition ease-in-out  md:w-2/4 rounded-sm shadow-lg">
              <a href="https://coinocracy.finance">
                <div className="text-2xl text-white font-medium">
                  Coinocracy - Landing Page
                </div>
                <div className="text-white text-opacity-60 pt-4">
                  Coinocracy aims to provide the ultimate DAO-VC toolkit to
                  begin to bridge the venture capital and DAO worlds.{" "}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer handlePaletteChange={handlePaletteChange} />
    </div>
  );
}

export default App;

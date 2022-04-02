import { useState } from "react";
import Background from "../sketches/Background";
import colors from "nice-color-palettes/500";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { Link } from "react-router-dom";

import logo from "../assets/images/two-tired/logo.png";
import onboarding from "../assets/images/two-tired/onboarding.png";
import information_architecture from "../assets/images/two-tired/information_architecture.png";
import signin from "../assets/images/two-tired/signin.png";
import newride1 from "../assets/images/two-tired/newride-1.png";
import newride2 from "../assets/images/two-tired/newride-2.png";
import journal from "../assets/images/two-tired/journal.png";
import friends from "../assets/images/two-tired/friends.png";
import otherscreens from "../assets/images/two-tired/otherscreens.png";
import darkmode from "../assets/images/two-tired/darkmode.png";
import Footer from "./Footer";
import Socials from "./Socials";

function PageTemplate() {
  const [cols, setCols] = useState(colors[480]);

  function handlePaletteChange() {
    let newPaletteNum = Math.floor(Math.random() * colors.length);
    let newCols = colors[newPaletteNum];
    setCols(newCols);
    console.log("handlePaletteChange");
  }

  return (
    <>
      <div className="bg-white min-h-screen bg-opacity-5">
        <div className="fixed top-0 left-0 blur-3xl opacity-80 saturate-200 -z-20 bg-clip-text text-transparent">
          <ReactP5Wrapper
            sketch={Background}
            cols={cols}
            minSize={800}
            maxSize={1050}
            minSpeed={0.1}
            maxSpeed={5}
            maxAgents={40}
          />
        </div>
        <div className="flex flex-col w-full items-center px-0 sm:px-8 xl:px-16">
          <div className="py-12 sm:pb-18 flex flex-col gap-y-4 text-center">
            <div className="text-white/80 tracking-normal text-3xl sm:text-6xl">
              Two Tired
            </div>
            <div className="text-white/40 tracking-normal text-lg sm:text-xl">
              Mindfulness focused ride tracking app.
            </div>
            <div className="sm:mt-4 flex flex-row gap-x-2 justify-center items-center">
              <div className="bg-white/10 text-white/60 text-xs w-max p-2 rounded-md">
                UI/UX Design
              </div>
              <div className="bg-white/10 text-white/60 text-xs w-max p-2 rounded-md">
                Personal Informatics
              </div>
            </div>
          </div>
          {/* Content Start */}
          <div className="bg-white/95 flex flex-col gap-y-12 w-full xl:pt-32 tracking-tight py-12 px-8 lg:px-32 2xl:px-80 shadow-xl">
            <div className="flex flex-col gap-4 sm:gap-x-12 xl:flex-row mx-auto h-max">
              <div className="flex-none xl:w-48 text-2xl lg:text-3xl">
                The Challenge
              </div>
              <div className="text-black/60 space-y-2 text-sm sm:text-lg">
                <p>
                  Most Personal Informatics technologies today are based on
                  frameworks borrowed from behavior change theories, resulting
                  in a focus shift from the self to the behavior to be changed.
                </p>
                <p>
                  The "self" that these instruments quantify thus is reduced to
                  the single behavior/parameter tracked, and the self-knowledge
                  that they actually provide is mere information about how the
                  user behaved in the past.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-x-12 xl:flex-row mx-auto h-max">
              <div className="flex-none text-2xl xl:w-48 lg:text-3xl">
                The Solution
              </div>
              <div className="text-black/60 space-y-2 text-sm sm:text-lg">
                <p>
                  Personal Informatics should reverse the point of view through
                  which it looks at its constitutive elements, by providing
                  subjective meanings instead of supposedly objective
                  information.
                </p>
                <p>
                  Creation of closed spaces of intimacy where users can share
                  the data they gathered and the experiences connected with
                  them. This becomes essential for self-understanding.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-12 xl:flex-row mx-auto h-max lg:pt-16">
              <div className="flex-none text-xl xl:w-48 lg:text-3xl">
                Information Architecture
              </div>
              <div className="space-y-2 w-4/5 mx-auto">
                <img src={information_architecture} alt="Two Tired IA" />
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-12 mx-auto h-max lg:pt-16">
              <div className="flex-none text-xl xl:w-48 lg:text-3xl">
                Onboarding
              </div>
              <div className="space-y-2 mx-auto">
                <img src={onboarding} alt="Two Tired Onboarding" className="" />
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:pt-16 sm:gap-x-12 xl:flex-row mx-auto h-max">
              <div className="flex-none text-2xl xl:w-48 lg:text-3xl">
                Why Cycling? 🚴‍♂️
              </div>
              <div className="text-black/60 space-y-2 text-sm sm:text-lg">
                <p>
                  Have you ever been out for a ride, lost yourself in the
                  moment, then come home and felt like your mind has been
                  cleansed? Like you’ve figured out the answers to all your
                  problems?
                </p>
                <p>
                  You are withdrawing your senses when you hop on a bike. You’re
                  instantly locked into a particular attitude – a physical
                  attitude and also a mental attitude. That helps train the mind
                  into a particular groove which is also helped by just riding
                  down a quiet backroad or single- track. These are aesthetic
                  elements that all come together to help.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-x-12 xl:flex-row mx-auto h-max">
              <div className="flex-none">
                <img
                  src={signin}
                  alt="Sign In Screen"
                  className="w-[392px] mx-auto"
                />
              </div>
              <div className="flex flex-col gap-y-4 h-full my-auto">
                <div className="flex-none text-2xl xl:w-48 lg:text-3xl">
                  Sign In
                </div>
                <div className="text-black/60 space-y-2 text-sm sm:text-lg">
                  <p>
                    Two Tired stores all your ride data on your device inside
                    Apple’s Secure Enclave. You can also choose to skip the
                    profile details and make your profile anonymous.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-x-12 xl:flex-row mx-auto h-max">
              <div className="flex-none">
                <img
                  src={newride1}
                  alt="Sign In Screen"
                  className="w-[392px] mx-auto"
                />
              </div>
              <div className="flex flex-col pt-12 lg:pt-0 gap-y-4 h-full my-auto">
                <div className="flex-none text-2xl xl:w-3/4 xl:mx-auto lg:text-3xl">
                  New Ride
                </div>
                <div className="text-black/60 space-y-8 xl:w-3/4 mx-auto text-sm sm:text-lg">
                  <div>
                    <div className="text-4xl font-bold">☀️</div>
                    The app shows you the current weather conditions and
                    encourages you to go for a mindful ride.
                  </div>
                  <div>
                    <div className="text-4xl font-bold">✍️</div>
                    Every ride starts with a prompt, intended to give you a
                    topic to think about while you ride.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-x-12 xl:flex-row mx-auto h-max">
              <div className="flex flex-col xl:pb-12 gap-y-4 h-full my-auto">
                <div className="text-black/60 space-y-8 xl:w-3/4 mx-auto text-sm sm:text-lg">
                  <div>
                    <div className="text-4xl font-bold">📍</div>
                    The app tracks you real-time, showing your path as you move.
                  </div>
                  <div>
                    <div className="text-4xl font-bold">⏳</div>
                    Upon completion, the final stats are displayed along with
                    the complete path of your ride.
                  </div>
                </div>
              </div>
              <div className="flex-none">
                <img
                  src={newride2}
                  alt="Sign In Screen"
                  className="w-[392px] mx-auto"
                />
              </div>
            </div>
            <div className="flex flex-col mt-8 gap-4 sm:gap-x-12 xl:flex-row mx-auto h-max">
              <div className="flex-none text-2xl xl:w-48 lg:text-3xl">
                Journal
              </div>
              <div className="text-black/60 space-y-2 text-sm sm:text-lg">
                <p>
                  The journal let’s you note down your thoughts and insights
                  after each ride. <br /> To do so, you can simply type or
                  choose to draw/record.
                </p>
              </div>
            </div>
            <div>
              <img
                src={journal}
                alt="Two Tired Onboarding"
                className="mx-auto mt-8 "
              />
            </div>
            <div className="flex flex-col mt-8 gap-4 sm:gap-x-12 xl:flex-row mx-auto h-max">
              <div className="flex-none text-2xl xl:w-48 lg:text-3xl">
                What is Mindfulness?
              </div>
              <div className="text-black/60 space-y-2 text-sm sm:text-lg">
                <p>
                  Mindfulness is at the interface between personality and
                  cognition and represents a preferred way of thinking.
                </p>
                <p>
                  The practitioner of mindfulness meditation practices being
                  receptive to all stimulation that may arise. The greater sense
                  of autonomy arising from mindfulness practice comes not so
                  much from a need to control thoughts, sensations and emotions,
                  but rather from the experience of not having to be controlled
                  by them.
                </p>
              </div>
            </div>

            <div className="flex flex-col mt-8 gap-4 sm:gap-x-12 xl:flex-row mx-auto h-max">
              <div className="flex-none text-2xl xl:w-48 lg:text-3xl">
                Social Rides
              </div>
              <div className="text-black/60 space-y-2 text-sm sm:text-lg">
                <p>
                  Exchanging perspectives on your own rides with others is
                  essential to improve self-understanding.
                </p>
                <p>
                  Two Tired supports the creation of closed spaces of intimacy
                  where you can share your rides and the experiences connected
                  with them.
                </p>
                <div> Nudge your friends to go on more mindful rides.</div>
              </div>
            </div>
            <div className="flex-none space-y-8">
              <img
                src={friends}
                alt="Sign In Screen"
                className="w-[256px] md:w-[392px] mx-auto"
              />
            </div>
          </div>
          {/* Footer Start */}
          <div className="w-full flex py-12 justify-between items-center">
            <div className="justify-self-start">
              <Footer handlePaletteChange={handlePaletteChange} />
            </div>
            <div className="text-white justify-self-center">
              <Link to="/">Malay Vasa - Portfolio 2022</Link>
            </div>
            <div className="flex gap-x-8 justify-self-end">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageTemplate;

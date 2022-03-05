import Footer from "./Footer";
import Socials from "./Socials";
//import profile from "./assets/img/profile.png";

function Intro({ handlePaletteChange, handlePlayHover }) {
  return (
    <div className="flex flex-col md:fixed gap-y-2 sm:gap-y-8 mt-8 sm:mt-0 flex-1 sm:max-w-[300px] md:max-w-[450px]">
      <div className="flex-none text-3xl md:text-4xl  text-white text-opacity-60">
        <span className="text-white font-medium text-opacity-100">
          Malay Vasa
        </span>
      </div>
      <div className="flex-none text-xl sm:text-2xl text-white text-opacity-60">
        UI/UX Designer with <br /> Frontend{" "}
        <span className="text-white">Superpowers</span>
      </div>
      <div className="grow md:max-w-[300px] xl:max-w-full text-md mt-4 md:mt-0 md:text-lg text-white text-opacity-60">
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
        <div className="my-4">
          Currently looking for Remote Summer 2022 Internship Opportunities.
          Here's my{" "}
          <span className="text-white text-opacity-100 underline">
            <a
              href={require("../assets/MalayVasa-Resume-2022.pdf")}
              download="Malay-Vasa-Resume.pdf"
            >
              resume.
            </a>
          </span>
        </div>
        {/* <div className="my-4">
          This portfolio is still under construction, please visit my{" "}
          <span className="text-white underline">
            <a href="https://www.behance.net/malayvasa">Behance</a>
          </span>{" "}
          page to see samples of my work.
        </div> */}
      </div>
      {/* <div className="hidden sm:block mt-4 mb-12 sm:space-y-8 flex-col align-middle">
        <div className="py-4 hover:border-l-8 bg-slate-50 hover:backdrop-blur-sm bg-opacity-0 hover:bg-opacity-20 hover:shadow-xl transition-all ease-in-out text-xl pl-4 text-white border-l-2">
          Work
        </div>
        <div
          className="py-4 hover:border-l-8 bg-slate-50 hover:backdrop-blur-sm bg-opacity-0 hover:bg-opacity-20 hover:shadow-xl transition-all ease-in-out text-xl pl-4 text-white border-l-2"
          onMouseEnter={handlePlayHover}
          onMouseLeave={handlePlayHover}
        >
          Play
        </div>
        <div className="py-4 hover:border-l-8 bg-slate-50 hover:backdrop-blur-sm bg-opacity-0 hover:bg-opacity-20 hover:shadow-xl transition-all ease-in-out text-xl pl-4 text-white border-l-2">
          About
        </div>
      </div> */}
      <div className="flex-none flex flex-row items-center ">
        <div className="flex flex-row gap-x-6 mt-8 md:mt-0">
          <Socials />
        </div>
      </div>
      <div className="flex-none">
        <Footer
          handlePaletteChange={handlePaletteChange}
          handlePlayHover={handlePlayHover}
        />
      </div>
    </div>
  );
}

export default Intro;

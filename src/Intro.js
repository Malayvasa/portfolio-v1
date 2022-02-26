import Footer from "./Footer";
import Socials from "./Socials";
//import profile from "./assets/img/profile.png";

function Intro({ handlePaletteChange }) {
  return (
    <div className="flex flex-col md:fixed gap-y-2 sm:gap-y-8 mt-8 sm:mt-0 sm:max-w-[300px] md:max-w-[450px]">
      <div className="flex-none text-3xl md:text-4xl  text-white text-opacity-60">
        <span className="text-white font-medium text-opacity-100">
          Malay Vasa
        </span>
      </div>
      <div className="flex-none text-xl sm:text-2xl text-white text-opacity-60">
        UI/UX Designer with <br /> Frontend{" "}
        <span className="text-white">Superpowers</span>
      </div>
      <div className="grow max-w-[300px] xl:max-w-full text-md mt-4 md:mt-0 md:text-lg text-white text-opacity-60">
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
          This portfolio is still under construction, please visit my{" "}
          <span className="text-white underline">
            <a href="https://www.behance.net/malayvasa">Behance</a>
          </span>{" "}
          page to see samples of my work.
        </div>
      </div>
      <div className="flex-none flex flex-row items-center ">
        <div className="flex flex-row gap-x-6 mt-8 md:mt-0">
          <Socials />
        </div>
      </div>
      <div className="flex-none">
        <Footer handlePaletteChange={handlePaletteChange} />
      </div>
    </div>
  );
}

export default Intro;

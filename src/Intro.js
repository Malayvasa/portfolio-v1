function Intro() {
  return (
    <div className="flex flex-auto md:flex-none flex-col gap-y-2 md:gap-y-8">
      <div className="text-3xl md:text-6xl  text-white text-opacity-60">
        <span className="text-white font-medium text-opacity-100">
          Malay Vasa
        </span>
      </div>
      <div className="text-2xl mt-2 text-white text-opacity-60">
        UI/UX Designer with <br /> Frontend Superpowers
      </div>
      <div className=" text-md mt-4 md:mt-0 md:text-lg text-white text-opacity-60">
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
        <div className="mt-4">
          This portfolio is still under construction, please visit my{" "}
          <span className="text-white underline">
            <a href="https://www.behance.net/malayvasa">Behance</a>
          </span>{" "}
          page to see samples of my work.
        </div>
      </div>
    </div>
  );
}

export default Intro;

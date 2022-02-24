function Navbar() {
  return (
    <>
      <div className="text-white w-full sticky top-0 px-8 py-4 flex flex-row items-center">
        <div className="flex-grow text-lg text-center md:text-left md:text-2xl m-auto md:ml-12">
          Malay Vasa
        </div>
        <div className="md:flex flex-row hidden md:visible text-sm md:text-xl space-x-8 m-0 md:mr-12 items-center">
          <div>Work</div>
          <div>Play</div>
          <div>About</div>
          <div className="bg-white text-slate-900 px-4 py-2">Contact</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

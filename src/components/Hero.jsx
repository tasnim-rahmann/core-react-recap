const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto bg-black rounded-md py-16 relative overflow-hidden">
      <img
        src="/bg-shadow.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative z-10">
        <img src="/banner-main.png" alt="Cricket" className="mx-auto" />
        <div className="flex flex-col items-center text-center px-4 space-y-1">
          <h1 className="text-white font-semibold leading-tight text-[40px] mt-4">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-[#FFFFFFB2] text-2xl">
            Beyond Boundaries Beyond Limits
          </p>
          <span className="border-[#E7FE29] border-2 p-1 mt-3 rounded-2xl">
            <button className="bg-[#E7FE29] px-4 py-3 rounded-xl">
              Claim Free Credit
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;

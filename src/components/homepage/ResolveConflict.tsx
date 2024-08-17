import React from "react";

const ResolveConflict: React.FC = () => {
  return (
    <div className="relative mt-20">
      <div
        className="bg-cover bg-center bg-no-repeat px-5 py-20 flex justify-center items-center md:hidden"
        style={{ backgroundImage: "url('/images/mobile-background.svg')" }}
      >
        <div className="flex flex-col items-center justify-center gap-7 text-center">
          <p className="font-montserrat text-sm font-bold leading-6 text-[#23A6F0]">
            Designing Better Experience
          </p>

          <h1 className="font-montserrat text-4xl font-bold leading-[50px] text-[#252B42]">
            Problems trying to resolve the conflict between
          </h1>

          <p className="font-montserrat text-sm font-normal leading-5 text-[#737373]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </p>

          <h2 className="font-montserrat text-2xl font-bold leading-8 text-[#23856D]">
            $16.48
          </h2>

          <button className="px-6 py-3 bg-[#23A6F0] text-white font-montserrat text-sm font-bold rounded">
            ADD YOUR CALL TO ACTION
          </button>
        </div>
      </div>

      <div
        className="hidden md:flex bg-cover bg-center bg-no-repeat py-20 justify-center items-center"
        style={{ backgroundImage: "url('/images/background.svg')" }}
      >
        <div className="flex flex-col items-center justify-center gap-7 text-center">
          <p className="font-montserrat text-sm font-bold leading-6 text-[#23A6F0]">
            Designing Better Experience
          </p>

          <h1 className="font-montserrat text-4xl font-bold leading-[50px] text-[#252B42]">
            Problems trying to resolve the conflict between
          </h1>

          <p className="font-montserrat text-sm font-normal leading-5 text-[#737373]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </p>

          <h2 className="font-montserrat text-2xl font-bold leading-8 text-[#23856D]">
            $16.48
          </h2>

          <button className="px-10 py-4 bg-[#23A6F0] text-white font-montserrat text-sm font-bold rounded">
            ADD YOUR CALL TO ACTION
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResolveConflict;

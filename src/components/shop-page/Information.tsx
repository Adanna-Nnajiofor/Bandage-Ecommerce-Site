import React from "react";
import Image from "next/image";

const Information: React.FC = () => {
  return (
    <div className="hidden md:flex flex-col gap-[30px] bg-white mx-auto p-6 md:px-24 md:py-12 w-full h-auto">
      <div className="flex flex-row justify-center items-center gap-[20px]  border-b border-[#ECECEC] py-5">
        <div className="text-center">
          <p className="font-montserrat text-[14px] font-semibold leading-[24px] text-[#737373]">
            Description
          </p>
        </div>
        <div className="text-center">
          <p className="font-montserrat text-[14px] font-bold leading-[24px] text-[#737373]">
            Additional Information
          </p>
        </div>
        <div className="text-center">
          <p className="font-montserrat text-[14px] font-bold leading-[24px] text-[#737373]">
            Reviews <span className="text-[#23856D]">(0)</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-[30px] py-6">
        <div className="flex flex-col gap-[30px] w-full md:w-1/2">
          <div>
            <h2 className="font-montserrat text-[24px] font-bold leading-[32px] text-left text-[#252B42]">
              The quick fox jumps over
            </h2>
          </div>
          <div>
            <p className="font-montserrat text-[14px] font-normal leading-[20px] text-left text-[#737373]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className="flex flex-row gap-[24px]">
            <div className="border-l-[3px] border-[#23856D]"></div>
            <div>
              <p className="font-montserrat text-[14px] font-normal leading-[20px] text-left text-[#737373]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
          </div>
          <div>
            <p className="font-montserrat text-[14px] font-normal leading-[20px] text-left text-[#737373]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="border-[3px] border-[#C4C4C433] rounded-[9px] overflow-hidden w-full">
            <Image
              src="/images/information.png"
              alt="Information Right"
              width={1000}
              height={1000}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;

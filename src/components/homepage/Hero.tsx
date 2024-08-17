import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <>
      <div className="hidden md:flex flex-wrap w-full  h-screen  mx-auto  p-6 md:px-24 md:py-12">
        <div className="bg-[url('/images/media-bg-1.svg')] bg-cover bg-center bg-no-repeat  w-full md:w-1/2 lg:w-1/3">
          <div className="p-8">
            <p className="text-[#2DC071] text-[14px] font-bold leading-6">
              5 Items
            </p>
            <h2 className="text-[24px] font-bold leading-10 text-[#252B42]">
              FURNITURE
            </h2>
            <p className="text-[14px] text-[#252B42] font-bold">Read More</p>
          </div>
        </div>

        <div className="flex flex-wrap w-full md:w-1/2 lg:w-2/3">
          <div className="bg-[url('/images/media-bg-2.svg')] bg-cover bg-center bg-no-repeat w-full ml-[10px]">
            <div className="p-8">
              <p className="text-[#2DC071] text-[14px] font-bold leading-6">
                5 Items
              </p>
              <h2 className="text-[20px] font-bold leading-10 text-[#252B42]">
                FURNITURE
              </h2>
              <p className="text-[14px] text-[#252B42] font-bold">Read More</p>
            </div>
          </div>
          <div className="flex w-full flex-col md:flex-row mt-[10px] ml-[10px]">
            <div className=" flex-1 bg-[url('/images/media-bg-3.svg')] bg-cover bg-center bg-no-repeat w-1/2 ">
              <div className="text-center pt-8 lg:p-8 lg:text-start">
                <p className="text-[#2DC071] text-[14px] font-bold leading-6">
                  5 Items
                </p>
                <h2 className="text-[16px] font-bold leading-10 text-[#252B42]">
                  FURNITURE
                </h2>
                <p className="text-[14px] text-[#252B42] font-bold">
                  Read More
                </p>
              </div>
            </div>
            <div className="bg-[url('/images/media-bg-4.svg')] bg-cover bg-center bg-no-repeat w-1/2 ml-[10px]">
              <div className="text-center pt-8 lg:p-8 lg:text-start">
                <p className="text-[#2DC071] text-[14px] font-bold leading-6">
                  5 Items
                </p>
                <h2 className="text-[16px] font-bold leading-10 text-[#252B42]">
                  FURNITURE
                </h2>
                <p className="text-[14px] text-[#252B42] font-bold">
                  Read More
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden w-full px-[10px]">
        <div className="bg-[url('/images/media-bg-1.svg')] bg-cover bg-center bg-no-repeat p-8 max-w-[600px] h-[300px] my-4 m-auto">
          <p className="text-[#2DC071] text-[14px] font-bold leading-6">
            5 Items
          </p>
          <h2 className="text-[20px] font-bold leading-10 text-[#252B42]">
            FURNITURE
          </h2>
          <p className="text-[14px] text-[#252B42] font-bold">Read More</p>
        </div>

        <div className="w-full">
          <div className="bg-[url('/images/media-bg-2.svg')] bg-cover bg-center bg-no-repeat p-8 max-w-[600px] h-[300px] my-4 m-auto">
            <p className="text-[#2DC071] text-[14px] font-bold leading-6">
              5 Items
            </p>
            <h2 className="text-[20px] font-bold leading-10 text-[#252B42]">
              FURNITURE
            </h2>
            <p className="text-[14px] text-[#252B42] font-bold">Read More</p>
          </div>
          <div className="w-full">
            <div className=" flex-1 bg-[url('/images/media-bg-3.svg')] bg-cover bg-center bg-no-repeat p-8 max-w-[600px] h-[300px] my-4 m-auto">
              <p className="text-[#2DC071] text-[14px] font-bold leading-6">
                5 Items
              </p>
              <h2 className="text-[20px] font-bold leading-10 text-[#252B42]">
                FURNITURE
              </h2>
              <p className="text-[14px] text-[#252B42] font-bold">Read More</p>
            </div>
            <div className="bg-[url('/images/media-bg-4.svg')] bg-cover bg-center bg-no-repeat p-8 max-w-[600px] h-[300px] my-4 m-auto">
              <p className="text-[#2DC071] text-[14px] font-bold leading-6">
                5 Items
              </p>
              <h2 className="text-[20px] font-bold leading-10 text-[#252B42]">
                FURNITURE
              </h2>
              <p className="text-[14px] text-[#252B42] font-bold">Read More</p>
            </div>
          </div>
        </div>
      </div>
           
    </>
  );
};

export default Hero;

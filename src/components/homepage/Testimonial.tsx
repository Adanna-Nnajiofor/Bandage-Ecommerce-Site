import React from "react";
import Image from "next/image";
import { MdStar } from "react-icons/md";
import { MdStarOutline } from "react-icons/md";

const Testimonial: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-6 md:px-24 md:py-12 gap-10">
      <div className="flex flex-col gap-7 md:w-1/2 py-10 justify-center">
        <h2 className="font-montserrat text-2xl font-bold leading-8 text-center text-[#252B42]">
          What they say about us
        </h2>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className="flex justify-center">
              <Image
                src="/images/user.png"
                alt="user"
                height={90}
                width={90}
                className="w-[90px] h-[90px] border border-[#BDBDBD] rounded-full"
              />
            </div>

            <div className="flex justify-center gap-1">
              <MdStar size={18} color="#F3CD03" />
              <MdStar size={18} color="#F3CD03" />
              <MdStar size={18} color="#F3CD03" />
              <MdStar size={18} color="#F3CD03" />
              <MdStarOutline size={18} color="#F3CD03" />
            </div>

            <p className="font-montserrat text-sm font-bold leading-6 text-center text-[#737373]">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <div className="gap-2 flex flex-col">
              <p className="font-montserrat text-sm font-bold leading-6 text-center text-[#23A6F0]">
                Regina Miles
              </p>

              <p className="font-montserrat text-sm font-bold leading-6 text-center text-[#252B42]">
                Designer
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 md:w-1/2 md:py-10">
        <Image
          src="/images/testimonial-1.png"
          alt="Testimonial 1"
          height={142}
          width={142}
          className="w-full h-full object-cover"
        />
        <Image
          src="/images/testimonial-2.png"
          alt="Testimonial 2"
          height={142}
          width={142}
          className="w-full h-full object-cover"
        />
        <Image
          src="/images/testimonial-3.png"
          alt="Testimonial 3"
          height={142}
          width={142}
          className="w-full h-full object-cover"
        />
        <Image
          src="/images/testimonial-4.png"
          alt="Testimonial 4"
          height={142}
          width={142}
          className="w-full h-full object-cover"
        />
        <Image
          src="/images/testimonial-5.png"
          alt="Testimonial 5"
          height={142}
          width={142}
          className="w-full h-full object-cover"
        />
        <Image
          src="/images/testimonial-6.png"
          alt="Testimonial 6"
          height={142}
          width={142}
          className="w-full h-full object-cover"
        />
        <Image
          src="/images/testimonial-7.png"
          alt="Testimonial 7"
          height={142}
          width={142}
          className="w-full h-full object-cover"
        />
        <Image
          src="/images/testimonial-8.png"
          alt="Testimonial 8"
          height={142}
          width={142}
          className="w-full h-full object-cover"
        />
        <Image
          src="/images/testimonial-9.png"
          alt="Testimonial 9"
          height={142}
          width={142}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Testimonial;

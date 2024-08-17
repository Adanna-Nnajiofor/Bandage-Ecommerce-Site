import React from "react";
import Image from "next/image";

const ImageLogos: React.FC = () => {
  return (
    <div className="flex flex-col gap-[60px] bg-[#FAFAFA] md:flex-row mx-auto px-6 py-16 md:px-24 md:py-12 w-full h-auto justify-between items-center">
      <div className="w-full h-auto  flex ">
        <Image
          src="/images/logo-1.png"
          alt="Information Right"
          width={150}
          height={30}
          className="object-cover"
        />
      </div>
      <div className="w-full h-auto  flex ">
        <Image
          src="/images/logo-2.png"
          alt="Information Right"
          width={150}
          height={30}
          className="object-cover"
        />
      </div>
      <div className="w-full h-auto  flex ">
        <Image
          src="/images/logo-3.png"
          alt="Information Right"
          width={150}
          height={30}
          className="object-cover"
        />
      </div>
      <div className="w-full h-auto  flex ">
        <Image
          src="/images/logo-4.png"
          alt="Information Right"
          width={150}
          height={30}
          className="object-cover"
        />
      </div>
      <div className="w-full h-auto flex ">
        <Image
          src="/images/logo-5.png"
          alt="Information Right"
          width={150}
          height={30}
          className="object-cover"
        />
      </div>
      <div className="w-full h-auto  flex ">
        <Image
          src="/images/logo-6.png"
          alt="Information Right"
          width={150}
          height={30}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ImageLogos;

"use client";
import React from "react";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Footer: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isProductOrCartPage = ["/products", "/cart"].includes(pathname);

  const footerClassNames = isHomePage
    ? "bg-[#FAFAFA] py-5 px-6 md:px-24"
    : "bg-[#FFFFFF] py-5 px-6 md:px-24 border-b border-[#E6E6E6]";

  const footerInfoData = [
    {
      title: "Company Info",
      items: ["About Us", "Career", "We are hiring", "Blog"],
    },
    {
      title: "Legal",
      items: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
    },
    {
      title: "Features",
      items: [
        "Business Marketing",
        "User Analytics",
        "Live Chat",
        "Unlimited Support",
      ],
    },
    {
      title: "Resources",
      items: ["iOS & Android", "Watch a Demo", "Customers", "API"],
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <div
        className={`flex flex-col md:flex-row justify-between ${footerClassNames}`}
      >
        <div className="flex items-center w-auto h-auto">
          <Image
            src="/images/navbar-brand.png"
            alt="Brand Logo"
            height={58}
            width={187}
            className="w-[187px] h-[58px]"
          />
        </div>

        <div className="flex gap-5 items-center mt-5 md:mt-0">
          <FaFacebook size={24} color="#23A6F0" />
          <FaInstagram size={24} color="#23A6F0" />
          <FaTwitter size={24} color="#23A6F0" />
        </div>
      </div>

      <div className="bg-[#FFFFFF] flex flex-col md:flex-row justify-between py-8 px-6 md:px-24 gap-[30px]">
        {footerInfoData.map((section, index) => (
          <div key={index} className="flex flex-col gap-5">
            <p className="font-montserrat text-lg font-bold leading-6 text-[#252B42]">
              {section.title}
            </p>
            <div className="flex flex-col gap-2">
              {section.items.map((item, itemIndex) => (
                <p
                  key={itemIndex}
                  className="font-montserrat text-sm font-bold leading-6 text-[#737373]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-5">
          <p className="font-montserrat text-lg font-bold leading-6 text-[#252B42]">
            Get In Touch
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="bg-[#F9F9F9] p-4 rounded-l-md border border-[#E6E6E6] w-full font-montserrat text-sm font-normal leading-7 text-[#737373]"
                />
              </div>

              <button className="w-2/4 px-2 bg-[#23A6F0] text-white rounded-r-md border border-[#E6E6E6] font-montserrat text-sm font-bold leading-7">
                Subscribe
              </button>
            </div>
            <p className="font-montserrat text-xs font-normal leading-7 text-[#737373]">
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] py-5 flex justify-center md:justify-start px-6 md:px-24">
        <p className="font-montserrat text-sm font-bold leading-6 text-[#737373] text-center md:text-start">
          Made With Love By Finland All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

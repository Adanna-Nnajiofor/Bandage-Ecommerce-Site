import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MdFavoriteBorder } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaUser,
  FaAngleDown,
} from "react-icons/fa";
import { useCartFavorites } from "../contexts/CartFavoritesContext";

const DesktopNav: React.FC = () => {
  const { cartCount, favoriteCount } = useCartFavorites();
  return (
    <div className="hidden md:flex  w-full h-auto bg-white flex-col ">
      <div className="bg-[#23856D] w-auto h-auto text-white flex justify-between py-[10px] px-[30px] ">
        <div className="flex gap-[15px]  ">
          <div className="flex items-center gap-[5px] ">
            <FaPhone size={16} color="white" />
            <p className="font-montserrat text-[14px] font-bold  text-white">
              (225) 555-0118
            </p>
          </div>

          <div className="flex items-center gap-[5px]">
            <FaEnvelope size={16} color="white" />
            <p className="font-montserrat text-[14px] font-bold  text-white">
              michelle.rivera@example.com
            </p>
          </div>
        </div>

        <div className="flex  items-center">
          <p className="font-montserrat text-[14px] font-bold  text-white">
            Follow Us and get a chance to win 80% off
          </p>
        </div>

        <div className="flex gap-[15px]  items-center ">
          <p className="font-montserrat text-[14px] font-bold leading-[24px] text-white">
            Follow Us:
          </p>
          <FaInstagram size={16} />
          <FaYoutube size={16} />
          <FaFacebook size={16} />
          <FaTwitter size={16} />
        </div>
      </div>

      <div className="flex justify-between py-[10px] px-[30px] w-auto h-auto">
        <div className="w-auto h-auto">
          <Image
            src="/images/navbar-brand.png"
            alt="Logo"
            width={180}
            height={50}
            className="w-[187px] h-[58px]"
          />
        </div>

        <div className="flex gap-[15px] items-center">
          <div className="text-center">
            <Link
              href="/"
              className="font-montserrat text-[14px] font-bold leading-[24px] text-[#737373] hover:text-green-500"
            >
              Home
            </Link>
          </div>
          <div className="flex items-center gap-[5px]">
            <Link
              href="/shop-page"
              className="font-montserrat text-[14px] font-semibold leading-[24px] text-[#252B42] hover:text-green-500"
            >
              Shop
            </Link>
            <FaAngleDown size={16} color="#252B42" />
          </div>
          <div className="text-center">
            <Link
              href="/about"
              className="font-montserrat text-[14px] font-bold leading-[24px] text-[#737373] hover:text-green-500"
            >
              About
            </Link>
          </div>
          <div className="text-center">
            <Link
              href="/blog"
              className="font-montserrat text-[14px] font-bold leading-[24px] text-[#737373] hover:text-green-500"
            >
              Blog
            </Link>
          </div>
          <div className="text-center">
            <Link
              href="/contact"
              className="font-montserrat text-[14px] font-bold leading-[24px] text-[#737373] hover:text-green-500"
            >
              Contact
            </Link>
          </div>
          <div className="text-center">
            <Link
              href="/pages"
              className="font-montserrat text-[14px] font-bold leading-[24px] text-[#737373] hover:text-green-500"
            >
              Pages
            </Link>
          </div>
        </div>

        <div className="flex gap-[15px] items-center">
          <div className="flex items-center gap-[5px]">
            <FaUser size={12} color="#23A6F0" />
            <Link
              href="/login"
              className="font-montserrat text-[14px] font-bold leading-[24px] text-[#23A6F0] hover:text-blue-500"
            >
              Login
            </Link>
            <p className="font-montserrat text-[14px] font-bold leading-[24px] text-[#23A6F0]">
              /
            </p>
            <Link
              href="/register"
              className="font-montserrat text-[14px] font-bold leading-[24px] text-[#23A6F0] hover:text-blue-500"
            >
              Register
            </Link>
          </div>
          <BsSearch size={16} color="#23A6F0" />
          <div className=" flex items-center gap-2">
            <Link
              href="/cart-page"
              className="text-[#23A6F0] hover:text-blue-700"
            >
              <BsCart size={16} color="#23A6F0" />
            </Link>

            <p className=" font-montserrat text-[12px] font-normal leading-[16px] text-center text-[#23A6F0]">
              {cartCount}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/wishlist-page">
              <MdFavoriteBorder size={16} color="#23A6F0" />
            </Link>
            <p className="font-montserrat text-[12px] font-normal leading-[16px] text-center text-[#23A6F0]">
              {favoriteCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;

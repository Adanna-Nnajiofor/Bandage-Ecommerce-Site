// components/DesktopNav.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { MdFavoriteBorder } from "react-icons/md";
import { BsCart, BsSearch } from "react-icons/bs";
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
  const router = useRouter();
  const { cartCount, favoriteCount } = useCartFavorites();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setShowSearchInput(false);
    }
  };

  return (
    <div className="hidden md:flex w-full h-auto bg-white flex-col">
      <div className="bg-[#23856D] w-auto h-auto text-white flex justify-between py-2 px-6">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <FaPhone size={16} color="white" />
            <p className="font-montserrat text-sm font-bold text-white">
              (225) 555-0118
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope size={16} color="white" />
            <p className="font-montserrat text-sm font-bold text-white">
              michelle.rivera@example.com
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="font-montserrat text-sm font-bold text-white">
            Follow Us and get a chance to win 80% off
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <p className="font-montserrat text-sm font-bold text-white">
            Follow Us:
          </p>
          <FaInstagram size={16} />
          <FaYoutube size={16} />
          <FaFacebook size={16} />
          <FaTwitter size={16} />
        </div>
      </div>

      <div className="flex justify-between items-center py-4 px-6 w-full h-auto">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/navbar-brand.png"
              alt="Logo"
              width={187}
              height={58}
              className="cursor-pointer w-auto h-auto"
            />
          </Link>
        </div>

        <div className="flex gap-6 items-center">
          <Link
            href="/"
            className="font-montserrat text-sm font-bold text-[#737373] hover:text-green-500"
          >
            Home
          </Link>
          <div className="relative group">
            <Link
              href="/shop-page"
              className="font-montserrat text-sm font-semibold text-[#252B42] hover:text-green-500 flex items-center gap-1"
            >
              Shop
              <FaAngleDown size={12} color="#252B42" />
            </Link>
          </div>
          <Link
            href="/about"
            className="font-montserrat text-sm font-bold text-[#737373] hover:text-green-500"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="font-montserrat text-sm font-bold text-[#737373] hover:text-green-500"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="font-montserrat text-sm font-bold text-[#737373] hover:text-green-500"
          >
            Contact
          </Link>
          <Link
            href="/pages"
            className="font-montserrat text-sm font-bold text-[#737373] hover:text-green-500"
          >
            Pages
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative">
            <BsSearch
              size={20}
              color="#23A6F0"
              onClick={() => setShowSearchInput(!showSearchInput)}
              className="cursor-pointer"
            />
            {showSearchInput && (
              <form
                onSubmit={handleSearchSubmit}
                className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg flex items-center"
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-2 py-1 text-sm font-montserrat focus:outline-none"
                  placeholder="Search products..."
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-3 py-1 bg-green-500 text-white rounded-r hover:bg-green-600"
                >
                  Search
                </button>
              </form>
            )}
          </div>

          <div className="flex items-center gap-2">
            <FaUser size={16} color="#23A6F0" />
            <Link
              href="/login"
              className="font-montserrat text-sm font-bold text-[#23A6F0] hover:text-blue-500"
            >
              Login
            </Link>
            <span className="font-montserrat text-sm font-bold text-[#23A6F0]">
              /
            </span>
            <Link
              href="/register"
              className="font-montserrat text-sm font-bold text-[#23A6F0] hover:text-blue-500"
            >
              Register
            </Link>
          </div>

          <div className=" flex">
            <Link
              href="/cart-page"
              className="text-[#23A6F0] hover:text-blue-700"
            >
              <BsCart size={20} color="#23A6F0" />
            </Link>
            {cartCount > 0 && (
              <span className="text-[#23A6F0] text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          <div className="flex">
            <Link href="/wishlist-page">
              <MdFavoriteBorder size={20} color="#23A6F0" />
            </Link>
            {favoriteCount > 0 && (
              <span className="text-[#23A6F0] text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {favoriteCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;

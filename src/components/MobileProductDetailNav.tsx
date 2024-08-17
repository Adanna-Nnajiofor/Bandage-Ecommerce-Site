import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";
import { IoIosSearch, IoIosHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import Image from "next/image";
import { FiBarChart } from "react-icons/fi";
import { useCartFavorites } from "../contexts/CartFavoritesContext";

const MobileProductDetailNav = ({ isMenuOpen, toggleMenu }: any) => {
  const { cartCount, favoriteCount } = useCartFavorites();
  return (
    <nav className="md:hidden">
      <div className="flex justify-between items-start px-[32px] py-[24px]">
        <div>
          <Link href="/">
            <Image
              src={"/images/Bandage.png"}
              height={32}
              width={108}
              alt="logo"
              className="max-w-[70px] md:max-w-full"
            />
          </Link>
        </div>
        <div className="flex items-center gap-[15px]">
          <button onClick={toggleMenu}>
            <FiBarChart
              height={24}
              width={24}
              className="transform -rotate-90"
            />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="w-full bg-[#FFFFFF] flex flex-col items-center space-y-4 text-[#737373] text-[20px] font-normal py-4">
          <ul className="flex-1 flex flex-col items-center gap-[20px]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop-page">Shop</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/pages">Pages</Link>
            </li>
          </ul>
          <ul className="flex flex-col items-center text-[#23A6F0] text-[20px] space-y-4 pt-4 gap-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <FaRegUser className="mr-1" />
                <li>
                  <Link href="/login">Login</Link>
                </li>
              </div>
              /
              <li>
                <Link href="/register">Register</Link>
              </li>
            </div>
            <li>
              <IoIosSearch height={24} width={24} className="m-auto" />
            </li>
            <li className="flex items-center justify-center gap-1">
              <Link href="/cart-page">
                <BsCart height={24} width={24} className="m-auto" />
              </Link>
              <span className="text-[12px]"> {cartCount}</span>
            </li>
            <li className="flex items-center justify-center gap-1">
              <Link href="/wishlist-page">
                <IoIosHeartEmpty height={24} width={24} />
              </Link>
              <span className="text-[12px]">{favoriteCount}</span>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileProductDetailNav;

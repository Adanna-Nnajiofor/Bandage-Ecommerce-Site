"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { FiTrash } from "react-icons/fi";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";

const ShoppingCart = () => {
  const pathname = usePathname();
  const isShopActive = pathname === "/shop-page";
  const isShopCartActive = pathname === "/cart-page";
  const [rating, setRating] = useState<number>(0);
  const [reviewCount, setReviewCount] = useState<number>(0);

  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const router = useRouter();
  const { isLoggedIn } = useAuth();

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleIncreaseQuantity = (id: number) => {
    increaseQuantity(id);
  };

  const handleDecreaseQuantity = (id: number) => {
    decreaseQuantity(id);
  };

  const handleRatingClick = (star: number) => {
    setRating(star);

    setReviewCount(reviewCount + 1);
  };

  const handleRemoveFromCart = (id: number) => {
    removeFromCart(id);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const getSubtotalPrice = () => {
    return cartItems.reduce(
      (total, item) =>
        total + parseFloat(item.price.replace(/[$,]/g, "")) * item.quantity,
      0
    );
  };

  const getTotalPrice = () => {
    // Assuming there are no additional fees or discounts for now
    return getSubtotalPrice();
  };

  const handleClick = () => {
    if (isLoggedIn) {
      router.push("/checkout-page");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="bg-[#FAFAFA] flex flex-col p-6 md:px-24 md:py-12 w-full h-auto">
      <div className="flex flex-row bg-[#FAFAFA] gap-4 justify-center md:justify-start items-center">
        <div className="font-montserrat text-[14px] font-bold leading-[24px] text-center text-[#252B42]">
          <Link href="/">Home</Link>
        </div>
        <div className="flex flex-row items-center gap-2">
          <RiArrowRightSLine
            size={20}
            className={`font-montserrat text-[14px] font-bold leading-[24px] text-center ${
              isShopActive ? "text-[#BDBDBD]" : "text-[#252B42]"
            }`}
          />
          <Link
            href="/shop-page"
            className={`font-montserrat text-[14px] font-bold leading-[24px] text-center ${
              isShopActive ? "text-[#BDBDBD]" : "text-[#252B42]"
            }`}
          >
            Shop
          </Link>
        </div>
        <div className="flex flex-row items-center gap-2">
          <RiArrowRightSLine
            size={20}
            className={`font-montserrat text-[14px] font-bold leading-[24px] text-center ${
              isShopCartActive ? "text-[#BDBDBD]" : "text-[#252B42]"
            }`}
          />
          <Link
            href="/cart-page"
            className={`font-montserrat text-[14px] font-bold leading-[24px] text-center ${
              isShopCartActive ? "text-[#BDBDBD]" : "text-[#252B42]"
            }`}
          >
            Shoping Cart
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  gap-8 bg-[#FAFAFA] py-8 w-full">
        <div className="hidden md:flex flex-col bg-white rounded-lg p-8 gap-8 w-auto lg:w-3/5">
          <h1 className="font-montserrat text-2xl font-semibold leading-[33.6px] text-left text-[#121517]">
            Shopping Cart
          </h1>

          <div className="w-full flex flex-col gap-8">
            {/* Shopping Cart Desktop */}
            <div className="flex justify-between bg-[#3B4148] shadow-lg rounded-lg p-4">
              <h2 className="font-montserrat text-sm font-semibold text-left text-white">
                Items Details
              </h2>
              <h2 className="font-montserrat text-sm font-semibold text-left text-white">
                Quantity
              </h2>
              <h2 className="font-montserrat text-sm font-semibold text-left text-white">
                Price
              </h2>
            </div>

            <div className="flex flex-col">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-8 border-b border-[#DCDCDC] py-6"
                  >
                    <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 w-full">
                      <div className="w-full md:w-auto flex gap-4 md:gap-2">
                        <div className="max-w-[100px] h-[75px] bg-gray-200 shrink-0">
                          <Image
                            src={
                              Array.isArray(item.imageSrc)
                                ? item.imageSrc[0]
                                : item.imageSrc
                            }
                            alt={item.title}
                            width={150}
                            height={75}
                            layout="responsive"
                            className="object-cover"
                          />
                        </div>

                        <div className="flex flex-col gap-2 shrink w-auto">
                          <h2 className="font-montserrat text-xs font-medium leading-[14.63px] text-left text-[#2B2B2B]">
                            {item.title}
                          </h2>
                          <p className="font-montserrat text-[10px] font-normal leading-[14px] text-left text-[#2BA501]">
                            In Stock
                          </p>

                          <div className="flex flex-col">
                            <div className="flex flex-row gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <div
                                  key={star}
                                  onClick={() => handleRatingClick(star)}
                                  className={`cursor-pointer ${
                                    star <= rating
                                      ? "text-[#F3CD03]"
                                      : "text-[#BDBDBD]"
                                  }`}
                                >
                                  {star <= rating ? (
                                    <FaStar size={20} />
                                  ) : (
                                    <FaRegStar size={20} />
                                  )}
                                </div>
                              ))}
                            </div>
                            <div>
                              <p className="font-montserrat text-[14px] font-bold leading-[24px] text-left text-[#737373]">
                                {reviewCount} Reviews
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full md:w-auto flex gap-2 items-center shrink">
                        <div
                          className="max-w-[28px] max-h-[28px] p-2 bg-[#E8EAEC] rounded-full flex items-center justify-center text-black"
                          onClick={() => handleDecreaseQuantity(item.id)}
                        >
                          -
                        </div>
                        <div className="max-w-[64px] max-h-[32px] py-1 px-4 flex items-center justify-center border border-[#3A3C3E] rounded text-[#121517]">
                          {item.quantity}
                        </div>
                        <div
                          className="max-w-[28px] max-h-[28px] p-2 bg-[#23A6F0] rounded-full flex items-center justify-center text-white"
                          onClick={() => handleIncreaseQuantity(item.id)}
                        >
                          +
                        </div>
                      </div>

                      <div className="w-full md:w-auto flex flex-col justify-center">
                        <h2 className="font-montserrat text-lg font-medium leading-[22.4px] text-left text-[#121517]">
                          $
                          {parseFloat(item.price.replace(/[$,]/g, "")).toFixed(
                            2
                          )}
                        </h2>
                        <p className="font-montserrat text-xs leading-[14.35px] text-[#6C6C6C]">
                          ${parseFloat(item.price.replace(/[$,]/g, ""))} x{" "}
                          {item.quantity} item
                          {item.quantity > 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>

                    {/* Remove Button Below the border */}
                    <div className="flex flex-col">
                      <div
                        className="flex gap-2 mt-6 w-1/2"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        <FiTrash className="text-[#23A6F0]" />
                        <p className="font-montserrat text-[12px] font-bold leading-[14px] text-left text-[#23A6F0]">
                          Remove
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center font-montserrat text-lg text-[#737373]">
                  Your cart is empty.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Shopping Cart Mobile */}
        <div className="flex md:hidden flex-col bg-white rounded-lg px-4 py-8 gap-8 w-full">
          <h1 className="font-montserrat text-2xl font-semibold leading-[33.6px] text-left text-[#121517]">
            Shopping Cart
          </h1>

          <div className="w-full flex flex-col gap-8">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 border-b border-[#DCDCDC] pb-4 w-full "
                >
                  <div className="flex flex-row  items-center w-full">
                    <div className="flex items-center gap-4 justify-between w-full">
                      <div className="h-auto bg-gray-200 shrink-0 w-2/5">
                        <Image
                          src={
                            Array.isArray(item.imageSrc)
                              ? item.imageSrc[0]
                              : item.imageSrc
                          }
                          alt={item.title}
                          width={75}
                          height={50}
                          layout="responsive"
                          className="object-cover w-auto h-auto"
                        />
                      </div>
                      <div className="flex flex-col gap-1 w-3/5">
                        <h2 className="font-montserrat text-xs font-medium leading-[14.63px] text-left text-[#2B2B2B]">
                          {item.title}
                        </h2>
                        <div className="flex items-center gap-4">
                          <h2 className="font-montserrat text-lg font-medium text-[#121517]">
                            $
                            {parseFloat(
                              item.price.replace(/[$,]/g, "")
                            ).toFixed(2)}
                          </h2>
                          <p className="font-montserrat text-xs font-medium text-[#737373]">
                            ${parseFloat(item.price.replace(/[$,]/g, ""))} x{" "}
                            {item.quantity} item
                            {item.quantity > 1 ? "s" : ""}
                          </p>
                        </div>
                        <p className="font-montserrat text-[10px] font-normal leading-[14px] text-left text-[#2BA501]">
                          In Stock
                        </p>
                        <div className="flex flex-row gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <div
                              key={star}
                              onClick={() => handleRatingClick(star)}
                              className={`cursor-pointer ${
                                star <= rating
                                  ? "text-[#F3CD03]"
                                  : "text-[#BDBDBD]"
                              }`}
                            >
                              {star <= rating ? (
                                <FaStar size={20} />
                              ) : (
                                <FaRegStar size={20} />
                              )}
                            </div>
                          ))}
                        </div>
                        <div>
                          <p className="font-montserrat text-[14px] font-bold leading-[24px] text-left text-[#737373]">
                            {reviewCount} Reviews
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-4 w-full">
                    <div
                      className="flex gap-2 mt-6 w-1/2"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      <FiTrash className="text-[#23A6F0]" />
                      <p className="font-montserrat text-[12px] font-bold leading-[14px] text-left text-[#23A6F0]">
                        Remove
                      </p>
                    </div>
                    <div className="  flex gap-2 items-center w-auto">
                      <div
                        className="max-w-[28px] max-h-[28px] p-2 bg-[#E8EAEC] rounded-full flex items-center justify-center text-black"
                        onClick={() => handleDecreaseQuantity(item.id)}
                      >
                        -
                      </div>
                      <div className="max-w-[64px] max-h-[32px] py-1 px-4 flex items-center justify-center border border-[#3A3C3E] rounded text-[#121517]">
                        {item.quantity}
                      </div>
                      <div
                        className="max-w-[28px] max-h-[28px] p-2 bg-[#23A6F0] rounded-full flex items-center justify-center text-white"
                        onClick={() => handleIncreaseQuantity(item.id)}
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center font-montserrat text-lg text-[#737373]">
                Your cart is empty.
              </p>
            )}
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="flex flex-col bg-white rounded-lg px-4 py-8 md:p-8 gap-8 w-auto lg:w-2/5 lg:sticky h-auto lg:h-[50%] lg:top-0 lg:bottom-0">
          <div className="flex justify-between">
            <h2 className="font-montserrat text-xl font-bold text-left text-[#121517]">
              Order Summary
            </h2>
            <p className="font-montserrat text-lg font-normal text-left text-[#121517]">
              Items ({itemCount})
            </p>
          </div>

          <div className="flex justify-between border-b border-[#DCDCDC] py-2 items-center">
            <h2 className="font-montserrat text-lg font-medium text-left text-[#3A3C3E]">
              Delivery Charges
            </h2>
            <p className="font-montserrat text-xs font-medium text-right text-[#F56666]">
              Add your delivery <br />
              address to checkout <br />
              to see delivery charges.
            </p>
          </div>

          <div className="flex justify-between border-b border-[#DCDCDC] py-2 items-center">
            <h2 className="font-montserrat text-lg font-medium text-left text-[#3A3C3E]">
              Subtotal
            </h2>
            <p className="font-montserrat text-[15.74px] font-normal text-left text-[#3A3C3E]">
              ${getSubtotalPrice().toFixed(2)}
            </p>
          </div>

          <div className="flex justify-between border-b  border-[#DCDCDC] py-2">
            <h2 className="font-montserrat text-xl font-medium text-left text-[#121517]">
              Total
            </h2>
            <p className="font-montserrat text-xl font-medium text-left text-[#121517]">
              ${getTotalPrice().toFixed(2)}
            </p>
          </div>

          <p className="font-montserrat text-xs font-medium text-right text-[#F56666]">
            Excluding Delivery Charges
          </p>

          <div className="w-full flex justify-center">
            <button
              onClick={handleClick}
              className="bg-[#23A6F0] w-full text-white font-montserrat font-bold py-4 px-6 rounded-lg"
            >
              Proceed to Checkout
            </button>
          </div>

          <div className="flex justify-between border-t border-[#DCDCDC] pt-4">
            <div className="flex gap-4">
              <div className="w-[62px] h-[12px] bg-gray-200">
                <Image
                  src="/images/Paystack.png"
                  alt="Information Right"
                  width={150}
                  height={30}
                  className="object-cover"
                />
              </div>
              <div className="w-[19px] h-[12px] bg-gray-200">
                <Image
                  src="/images/Mastercard.png"
                  alt="Information Right"
                  width={150}
                  height={30}
                  className="object-cover"
                />
              </div>
              <div className="w-[38px] h-[12px] bg-gray-200">
                <Image
                  src="/images/Visa.png"
                  alt="Information Right"
                  width={150}
                  height={30}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

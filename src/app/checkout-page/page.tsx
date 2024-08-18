"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../../contexts/CartContext";
import Image from "next/image";

const CheckoutPage: React.FC = () => {
  const { cartItems } = useCart();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    paymentMethod: "creditCard",
  });

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Order submitted", formData);

    router.push("/confirmation-page");
  };

  return (
    <div className="w-full bg-gray-50">
      <h1 className="text-3xl font-extrabold text-center pt-10 text-gray-900">
        Checkout
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto p-10">
        {/* Shipping Information Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Shipping Information
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                required
              />
            </div>

            {/* Address Input */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                required
              />
            </div>

            {/* City Input */}
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                required
              />
            </div>

            {/* State Input */}
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                required
              />
            </div>

            {/* ZIP Code Input */}
            <div>
              <label
                htmlFor="zip"
                className="block text-sm font-medium text-gray-700"
              >
                ZIP Code
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                required
              />
            </div>

            {/* Payment Method Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              >
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Order Summary
          </h2>
          {/* Cart Items */}
          <div className="flex flex-col">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col border-b border-gray-200 py-6"
                >
                  <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 w-full">
                    <div className="flex gap-4 md:gap-2">
                      <div className="max-w-[100px] h-auto bg-gray-200 shrink-0">
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

                      <div className="flex flex-col gap-2">
                        <h2 className="text-xs font-medium text-gray-800">
                          {item.title}
                        </h2>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <span className="text-sm text-gray-600">
                        {item.quantity}
                      </span>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <p className="text-sm font-semibold text-gray-800">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm font-semibold text-center text-gray-600">
                Your cart is empty
              </p>
            )}
          </div>

          {/* Summary */}
          <div className="mt-8">
            <div className="flex justify-between font-semibold text-gray-700">
              <span>Subtotal</span>
              <span>${getSubtotalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-700 mt-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-700 mt-2">
              <span>Total</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

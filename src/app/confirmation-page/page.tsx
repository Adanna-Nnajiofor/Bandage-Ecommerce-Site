"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { AiOutlineCheckCircle } from "react-icons/ai";

const ConfirmationPage: React.FC = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full text-center">
        <AiOutlineCheckCircle className="text-green-500 text-4xl mb-4 mx-auto" />
        <h1 className="text-2xl font-semibold mb-2">Order Confirmed!</h1>
        <p className="text-gray-600 mb-4">
          Thank you for your purchase. Your order has been successfully
          processed.
        </p>
        <p className="text-gray-600 mb-4">
          A confirmation email has been sent to your email address.
        </p>
        <button
          onClick={handleBackToHome}
          className="bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;

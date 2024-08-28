"use client";

import React from "react";
import { useWishlist } from "../contexts/WishlistContext";
import Image from "next/image";

const Wishlist = () => {
  const { wishlist, dispatch } = useWishlist();

  const handleRemove = (productId: number) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: productId });
  };

  return (
    <div className="grid grid-cols-1 gap-6">
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlist.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-white p-4 rounded-lg shadow"
          >
            <Image
              src={item.imageSrc[0]}
              alt={item.title}
              width={100}
              height={100}
              className="rounded-lg"
            />
            <div className="ml-4 flex-1">
              <h2 className="text-xl font-bold">{item.title}</h2>

              <p className="text-gray-600">
                ${parseFloat(item.newPrice || item.oldPrice).toFixed(2)}
              </p>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500 mt-2"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;

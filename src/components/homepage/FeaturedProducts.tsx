"use client";
import React, { useState } from "react";
import { ProductsData } from "../../data/Products";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FeaturedProducts: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(10);
  const [isShowingMore, setIsShowingMore] = useState(false);
  const router = useRouter();

  const visibleProductsData = ProductsData.slice(0, visibleProducts);

  const handleProductSelect = (productId: number) => {
    setShowNotification(true);
    router.push(`/shop-page?id=${productId}`);

    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  const handleLoadMore = () => {
    if (isShowingMore) {
      setVisibleProducts(10);
      setIsShowingMore(false);
    } else {
      setVisibleProducts(ProductsData.length);
      setIsShowingMore(true);
    }
  };

  return (
    <div className="w-full flex flex-col gap-6 md:gap-10 p-6 md:px-24 md:py-12">
      {showNotification && (
        <div className="fixed top-28 left-0 w-full bg-green-500 text-white text-center py-4 font-montserrat justify-center items-center">
          <p>Product selected successfully! Proceed to the shop.</p>
        </div>
      )}
      <div className="flex flex-col gap-3 text-center">
        <h2 className="font-montserrat text-xl font-normal leading-7 text-gray-500">
          Featured Products
        </h2>
        <h2 className="font-montserrat text-2xl font-bold leading-8 text-gray-900">
          BESTSELLER PRODUCTS
        </h2>
        <p className="font-montserrat text-sm font-normal leading-5 text-gray-500">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 ">
        {visibleProductsData.map((product) => (
          <div
            key={product.id}
            className="w-full flex flex-col gap-3 mt-6 cursor-pointer border border-white hover:border-2 hover:border-gray-300 "
            onClick={() => handleProductSelect(product.id)}
          >
            <Image
              src={product.imageSrc[0]}
              alt={product.title}
              width={150}
              height={150}
              className="w-full h-auto object-cover mx-auto"
            />
            <p className="font-montserrat text-lg font-bold leading-6 text-gray-900 text-center">
              {product.title}
            </p>
            <p className="font-montserrat text-sm font-bold leading-6 text-gray-500 text-center">
              {product.department}
            </p>
            <div className="flex gap-2 justify-center">
              <div className="font-montserrat text-lg font-bold leading-6 text-gray-400">
                {product.oldPrice}
              </div>
              <div className="font-montserrat text-lg font-bold leading-6 text-teal-600">
                {product.newPrice}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-6">
        <button
          onClick={handleLoadMore}
          className="rounded-md px-4 py-2 md:px-6 md:py-3 border border-[#23A6F0] text-[#23A6F0] font-bold text-sm"
        >
          {isShowingMore ? "LOAD LESS PRODUCTS" : "LOAD MORE PRODUCTS"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;

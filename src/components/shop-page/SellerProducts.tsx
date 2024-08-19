import React from "react";
import { ProductsData } from "../../data/Products";
import Link from "next/link";

interface Product {
  id: number;
  imageSrc: string | string[];
  title: string;
  department: string;
  oldPrice: string;
  newPrice: string;
}

const SellerProducts: React.FC = () => {
  const secondHalfProducts = ProductsData.slice(10, 18);
  return (
    <div className="w-full hidden md:flex flex-col gap-6 md:gap-10 p-6 md:px-28 md:py-12 bg-[#FAFAFA]">
      <div className="flex flex-col gap-3 text-start border-b-2 border-[#ECECEC] py-4">
        <h2 className="font-montserrat text-2xl font-bold leading-8 text-gray-900">
          BESTSELLER PRODUCTS
        </h2>
      </div>

      <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 ">
        {secondHalfProducts.map((product) => (
          <Link
            key={product.id}
            href={`/shop-page?id=${product.id}`}
            passHref
            className="w-full flex flex-col gap-3 mt-4 bg-[#FFFFFF] hover:border-2 hover:border-gray-300"
          >
            <img
              src={
                Array.isArray(product.imageSrc)
                  ? product.imageSrc[0]
                  : product.imageSrc
              }
              alt={product.title}
              className=" w-full h-auto object-cover mx-auto"
            />
            <p className="font-montserrat text-lg font-bold leading-6 text-gray-900 text-start ml-4 mt-4">
              {product.title}
            </p>
            <p className="font-montserrat text-sm font-bold leading-6 text-gray-500  text-start ml-4">
              {product.department}
            </p>
            <div className="flex gap-2 justify-start ml-4 mb-8">
              <div className="font-montserrat text-lg font-bold leading-6 text-gray-400">
                {product.oldPrice}
              </div>
              <div className="font-montserrat text-lg font-bold leading-6 text-teal-600">
                {product.newPrice}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SellerProducts;

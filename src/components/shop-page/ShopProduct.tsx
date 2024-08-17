"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaStar, FaRegStar } from "react-icons/fa";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoEye } from "react-icons/io5";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { ProductsData } from "../../data/Products";
import { useCartFavorites } from "../../contexts/CartFavoritesContext";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";
import Notification from "../../components/Notification";

interface Product {
  id: number;
  imageSrc: string[];
  title: string;
  department: string;
  oldPrice: string;
  newPrice: string;
}

const ShopProduct: React.FC = () => {
  const pathname = usePathname();
  const isShopActive = pathname === "/shop-page";
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);
  const [reviewCount, setReviewCount] = useState<number>(0);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const productId = parseInt(id as string, 10);
      const product = ProductsData.find((p) => p.id === productId);
      if (product) {
        setSelectedProduct(product);
        setCurrentImageIndex(0);
      }
    }
  }, [id]);

  if (!selectedProduct)
    return <div className="ml-20">Select a product to view details</div>;

  const productImages: string[] = Array.isArray(selectedProduct.imageSrc)
    ? selectedProduct.imageSrc
    : [selectedProduct.imageSrc];

  const handleNextImage = () => {
    if (productImages.length > 0) {
      const nextIndex = (currentImageIndex + 1) % productImages.length;
      setCurrentImageIndex(nextIndex);
      // router.push(`/products?id=${selectedProduct.id}&image=${nextIndex}`);
    }
  };

  const handlePrevImage = () => {
    if (productImages.length > 0) {
      const prevIndex =
        (currentImageIndex - 1 + productImages.length) % productImages.length;
      setCurrentImageIndex(prevIndex);
      // router.push(`/products?id=${selectedProduct.id}&image=${prevIndex}`);
    }
  };

  const { incrementCart, incrementFavorite } = useCartFavorites();

  const { addToCart } = useCart();

  const { addToWishlist } = useWishlist();

  const handleAddToCart = () => {
    incrementCart();
    if (selectedProduct) {
      addToCart({
        ...selectedProduct,
        quantity: 1,
        price: selectedProduct.newPrice,
      });
      setNotification("Product added to cart");
      // router.push("/cart-page");
    }
  };

  const handleAddToFavorite = () => {
    incrementFavorite();
    if (selectedProduct) {
      addToWishlist(selectedProduct);
      setNotification("Product added to wishlist");
      // router.push("/wishlist-page");
    }
  };

  const handleSelectOptions = () => {
    incrementCart();
    handleAddToCart();
    router.push("/cart-page");
  };

  const handleRatingClick = (star: number) => {
    setRating(star);
    setReviewCount(reviewCount + 1);
  };

  return (
    <div className="bg-[#FAFAFA] flex flex-col p-6 md:px-24 md:py-12 w-full h-auto">
      {/* Notification component */}
      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}
      <div className="flex flex-row bg-[#FAFAFA] gap-4 justify-center md:justify-start">
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
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-12 md:mt-8 h-auto">
        <div className="flex flex-col gap-1 w-full h-auto md:w-1/2">
          <div className="relative w-full md:w-auto h-[70vh] md:h-[75vh]">
            <Image
              src={productImages[currentImageIndex]}
              alt={selectedProduct.title}
              layout="fill"
              objectFit="cover"
              className="w-full h-full "
            />
            <RiArrowLeftSLine
              size={40}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white cursor-pointer"
              onClick={handlePrevImage}
            />
            <RiArrowRightSLine
              size={40}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white cursor-pointer"
              onClick={handleNextImage}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:gap-6 mt-8 md:mt-0 justify-center w-full h-auto md:w-1/2">
          <div className="flex flex-col gap-1">
            <p className="font-montserrat text-[20px] font-normal leading-[30px] text-left text-[#252B42]">
              {selectedProduct.title}
            </p>
            <div className="flex flex-row gap-1 items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  onClick={() => handleRatingClick(star)}
                  className={`cursor-pointer ${
                    star <= rating ? "text-[#F3CD03]" : "text-[#BDBDBD]"
                  }`}
                >
                  {star <= rating ? (
                    <FaStar size={20} />
                  ) : (
                    <FaRegStar size={20} />
                  )}
                </div>
              ))}
              <p className="font-montserrat text-[14px] font-bold leading-[24px] text-left text-[#737373]">
                {reviewCount} Reviews
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="font-montserrat text-[24px] font-bold leading-[32px] text-start text-[#252B42]">
              {selectedProduct.newPrice}
            </h2>
            <p className="font-montserrat text-[14px] font-bold leading-[24px] text-left text-[#737373]">
              Availability: <span className="text-[#23A6F0]">In stock</span>
            </p>
          </div>

          <div className="font-montserrat text-[14px] font-normal leading-[20px] text-left text-[#858585]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </div>

          <div className="border-t border-[#BDBDBD] my-4"></div>

          <div className="flex flex-row gap-2">
            <div className="w-[30px] h-[30px] rounded-full bg-[#23A6F0]"></div>
            <div className="w-[30px] h-[30px] rounded-full bg-[#2DC071]"></div>
            <div className="w-[30px] h-[30px] rounded-full bg-[#E77C40]"></div>
            <div className="w-[30px] h-[30px] rounded-full bg-[#252B42]"></div>
          </div>

          <div className="flex flex-row gap-2 mt-4">
            <button
              className="px-4 py-2 rounded bg-[#23A6F0] text-white cursor-pointer hover:bg-blue-300 "
              onClick={handleSelectOptions}
            >
              Select options
            </button>
            <div
              className="w-[40px] h-[40px] p-2 rounded-full border border-[#E8E8E8] flex items-center justify-center hover:bg-blue-100 cursor-pointer"
              onClick={handleAddToFavorite}
            >
              <MdOutlineFavoriteBorder size={20} className="text-[#252B42]" />
            </div>
            <div
              className="w-[40px] h-[40px] p-2 rounded-full border border-[#E8E8E8] flex items-center justify-center hover:bg-blue-100 cursor-pointer"
              onClick={handleAddToCart}
            >
              <AiOutlineShoppingCart size={20} className="text-[#252B42]" />
            </div>
            <div className="w-[40px] h-[40px] p-2 rounded-full border border-[#E8E8E8] flex items-center justify-center hover:bg-blue-100 cursor-pointer">
              <IoEye size={20} className="text-[#252B42] " />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 w-[25%] h-auto md:h-[15vh] md:w-[10%] relative">
        <Image
          src={productImages[currentImageIndex]}
          alt={selectedProduct.title}
          width={50}
          height={50}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ShopProduct;

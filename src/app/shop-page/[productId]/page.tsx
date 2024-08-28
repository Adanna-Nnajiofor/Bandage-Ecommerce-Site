"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "../../../contexts/CartContext";
import Modal from "../../../components/Modal";
import { useProduct } from "../../../contexts/ProductContext";
import { ProductsData } from "../../../data/Products";
import { useCartFavorites } from "../../../contexts/CartFavoritesContext";
import { useWishlist } from "../../../contexts/WishlistContext";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const ProductDetailPage: React.FC = () => {
  const searchParams = useSearchParams();
  const { addToCart } = useCart();
  const {
    currentImageIndex,
    setCurrentImageIndex,
    selectedProduct,
    setSelectedProduct,
  } = useProduct();

  const { incrementCart, incrementFavorite } = useCartFavorites();
  const { wishlist, dispatch } = useWishlist();
  const [notification, setNotification] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const productId = searchParams.get("productId");

  useEffect(() => {
    if (productId) {
      const fetchedProduct = ProductsData.find(
        (p) => p.id === parseInt(productId)
      );
      setSelectedProduct(fetchedProduct || null);
    }
  }, [productId, setSelectedProduct]);

  if (!selectedProduct) return <p>Loading...</p>;

  const handleAddToCart = () => {
    incrementCart();
    if (selectedProduct) {
      addToCart({
        ...selectedProduct,
        quantity: 1,
        price: selectedProduct.newPrice,
      });
      setNotification("Product added to cart");
    }
  };

  const handleNextImage = () => {
    if (selectedProduct.imageSrc.length > 0) {
      const nextIndex =
        (currentImageIndex + 1) % selectedProduct.imageSrc.length;
      setCurrentImageIndex(nextIndex);
    }
  };

  const handlePrevImage = () => {
    if (selectedProduct.imageSrc.length > 0) {
      const prevIndex =
        (currentImageIndex - 1 + selectedProduct.imageSrc.length) %
        selectedProduct.imageSrc.length;
      setCurrentImageIndex(prevIndex);
    }
  };

  const handleAddToFavorite = () => {
    incrementFavorite();
    if (selectedProduct) {
      if (!wishlist.find((item) => item.id === selectedProduct.id)) {
        dispatch({ type: "ADD_TO_WISHLIST", payload: selectedProduct });
        setNotification("Product added to wishlist");
      } else {
        setNotification("Product is already in the wishlist");
      }
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="py-10 px-20">
      <button
        onClick={() => window.history.back()}
        className="text-blue-500 mb-4"
      >
        Back to Shop
      </button>
      <div className="flex">
        <div className="w-1/2">
          <img
            src={selectedProduct.imageSrc[currentImageIndex]}
            alt={selectedProduct.title}
            className="w-full h-80 object-cover cursor-pointer"
            onClick={openModal}
          />
          <div className="flex justify-between mt-2">
            <button
              onClick={handlePrevImage}
              disabled={currentImageIndex === 0}
            >
              Previous
            </button>
            <button
              onClick={handleNextImage}
              disabled={
                currentImageIndex === selectedProduct.imageSrc.length - 1
              }
            >
              Next
            </button>
          </div>
        </div>
        <div className="w-1/2 pl-4">
          <h1 className="text-3xl font-bold">{selectedProduct.title}</h1>
          <p className="text-lg mt-2">{selectedProduct.newPrice}</p>
          {/* <p className="mt-4">{selectedProduct.description}</p> */}
          <button
            className="w-[40px] h-[40px] p-2 rounded-full border border-[#E8E8E8] flex items-center justify-center hover:bg-blue-100 cursor-pointer"
            onClick={handleAddToFavorite}
          >
            <MdOutlineFavoriteBorder size={20} className="text-[#252B42]" />
          </button>
          <button
            className="mt-4 bg-green-500 text-white px-4 py-2"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          imageSrc={selectedProduct.imageSrc[currentImageIndex]}
          altText={selectedProduct.title}
          onClose={closeModal}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}
      {notification && (
        <div className="fixed bottom-4 right-4 p-4 bg-gray-800 text-white rounded">
          {notification}
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;

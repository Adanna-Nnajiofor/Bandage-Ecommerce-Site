"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "../../../contexts/CartContext";
import Modal from "../../../components/Modal";
import { ProductsData } from "../../../data/Products";

const ProductDetailPage: React.FC = () => {
  const searchParams = useSearchParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productId = searchParams.get("productId");

  useEffect(() => {
    if (productId) {
      const fetchedProduct = ProductsData.find(
        (p) => p.id === parseInt(productId)
      );
      setProduct(fetchedProduct);
    }
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      Math.min(prevIndex + 1, product.imageSrc.length - 1)
    );
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
            src={product.imageSrc[currentImageIndex]}
            alt={product.title}
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
              disabled={currentImageIndex === product.imageSrc.length - 1}
            >
              Next
            </button>
          </div>
        </div>
        <div className="w-1/2 pl-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-lg mt-2">{product.newPrice}</p>
          <p className="mt-4">{product.description}</p>
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
          imageSrc={product.imageSrc[currentImageIndex]}
          altText={product.title}
          onClose={closeModal}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}
    </div>
  );
};

export default ProductDetailPage;

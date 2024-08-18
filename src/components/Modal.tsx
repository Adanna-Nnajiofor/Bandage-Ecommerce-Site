import React from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  altText: string;
  onNext: () => void;
  onPrev: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  altText,
  onNext,
  onPrev,
}) => {
  if (!isOpen) return null;

  // Close the modal when clicking outside of it
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
      onClick={handleOverlayClick}
    >
      <div className="relative bg-white p-4 rounded-lg max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-white text-2xl border bg-black z-10"
        >
          <IoClose />
        </button>
        <div className="flex items-center justify-center relative">
          <img src={imageSrc} alt={altText} className="w-full h-auto" />
          <button
            onClick={onPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-gray-800 p-2 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={onNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-gray-800 p-2 rounded-full"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

"use client";
import React, { useEffect } from "react";

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-4 right-4 z-50 transform transition-all duration-500 ease-out translate-x-[100%] opacity-0 animate-slide-in">
      <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg flex items-center space-x-4 transition-all transform duration-300 ease-out animate-fade-in">
        <span className="font-semibold">{message}</span>
        <button
          className="ml-2 text-lg font-bold cursor-pointer focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Notification;

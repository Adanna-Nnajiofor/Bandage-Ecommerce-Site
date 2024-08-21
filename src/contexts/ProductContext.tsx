"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "../types/Products";

interface ProductContextType {
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  products: Product[];
  setProducts: (products: Product[]) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <ProductContext.Provider
      value={{
        currentImageIndex,
        setCurrentImageIndex,
        selectedProduct,
        setSelectedProduct,
        products,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};

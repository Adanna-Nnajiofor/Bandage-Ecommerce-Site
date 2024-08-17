// "use client";
// import React, {
//   createContext,
//   useContext,
//   useState,
//   ReactNode,
//   useMemo,
// } from "react";

// interface Product {
//   id: number;
//   imageSrc: string[];
//   title: string;
//   department: string;
//   oldPrice: string;
//   newPrice: string;
// }

// interface ProductContextType {
//   selectedProduct: Product | null;
//   setSelectedProduct: (product: Product) => void;
//   currentImageIndex: number;
//   setCurrentImageIndex: (index: number) => void;
// }

// const ProductContext = createContext<ProductContextType | undefined>(undefined);

// export const ProductProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const value = useMemo(
//     () => ({
//       selectedProduct,
//       setSelectedProduct,
//       currentImageIndex,
//       setCurrentImageIndex,
//     }),
//     [selectedProduct, currentImageIndex]
//   );

//   return (
//     <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
//   );
// };

// export const useProduct = (): ProductContextType => {
//   const context = useContext(ProductContext);
//   if (context === undefined) {
//     throw new Error("useProduct must be used within a ProductProvider");
//   }
//   return context;
// };

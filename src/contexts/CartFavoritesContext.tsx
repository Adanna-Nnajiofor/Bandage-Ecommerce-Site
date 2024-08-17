"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartFavoritesContextType {
  cartCount: number;
  favoriteCount: number;
  incrementCart: () => void;
  incrementFavorite: () => void;
}

const CartFavoritesContext = createContext<
  CartFavoritesContextType | undefined
>(undefined);

export const CartFavoritesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartCount, setCartCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);

  const incrementCart = () => setCartCount(cartCount + 1);
  const incrementFavorite = () => setFavoriteCount(favoriteCount + 1);

  return (
    <CartFavoritesContext.Provider
      value={{ cartCount, favoriteCount, incrementCart, incrementFavorite }}
    >
      {children}
    </CartFavoritesContext.Provider>
  );
};

export const useCartFavorites = () => {
  const context = useContext(CartFavoritesContext);
  if (context === undefined) {
    throw new Error(
      "useCartFavorites must be used within a CartFavoritesProvider"
    );
  }
  return context;
};

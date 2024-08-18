"use client";
import React, { createContext, useReducer, ReactNode } from "react";

interface WishlistItem {
  id: number;
  imageSrc: string[];
  title: string;
  department: string;
  oldPrice: string;
  newPrice: string;
}

interface WishlistState {
  wishlist: WishlistItem[];
}

type Action =
  | { type: "ADD_TO_WISHLIST"; payload: WishlistItem }
  | { type: "REMOVE_FROM_WISHLIST"; payload: number };

interface WishlistContextType {
  wishlist: WishlistItem[];
  dispatch: React.Dispatch<Action>;
}

const initialState: WishlistState = {
  wishlist: [],
};

const WishlistReducer = (
  state: WishlistState,
  action: Action
): WishlistState => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(WishlistReducer, initialState);

  return (
    <WishlistContext.Provider value={{ wishlist: state.wishlist, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = React.useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};

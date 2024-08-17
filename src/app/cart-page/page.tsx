import RelatedCartItems from "@/components/cart-page/RelatedCartItems";
import ShoppingCart from "@/components/cart-page/ShoppingCart";
import React from "react";

const CartPage = () => {
  return (
    <div>
      <ShoppingCart />
      <RelatedCartItems />
    </div>
  );
};

export default CartPage;

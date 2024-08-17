import ImageLogos from "@/components/shop-page/ImageLogos";
import Information from "@/components/shop-page/Information";
import SellerProducts from "@/components/shop-page/SellerProducts";
import ShopProduct from "@/components/shop-page/ShopProduct";
import React from "react";

const ShopPage = () => {
  return (
    <div>
      <ShopProduct />
      <Information />
      <SellerProducts />
      <ImageLogos />
    </div>
  );
};

export default ShopPage;

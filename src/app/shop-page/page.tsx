import React, { Suspense } from "react";
import ShopProduct from "@/components/shop-page/ShopProduct";
import Information from "@/components/shop-page/Information";
import SellerProducts from "@/components/shop-page/SellerProducts";
import ImageLogos from "@/components/shop-page/ImageLogos";

const ShopPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <ShopProduct />
        <Information />
        <SellerProducts />
        <ImageLogos />
      </div>
    </Suspense>
  );
};

export default ShopPage;

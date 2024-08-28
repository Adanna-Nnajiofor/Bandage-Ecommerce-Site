"use client";
import Link from "next/link";
import { useWishlist } from "../../contexts/WishlistContext";
import { useCart } from "../../contexts/CartContext";
import { useRouter } from "next/navigation";

const WishlistPage: React.FC = () => {
  const { wishlist, dispatch: wishlistDispatch } = useWishlist();
  const { addToCart } = useCart();
  const router = useRouter();

  const handleRemove = (productId: number) => {
    wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: productId });
  };

  const handleAddToCart = (product: any) => {
    addToCart({
      ...product,
      quantity: 1,
      price: product.newPrice,
    });
  };

  const handleProductClick = (productId: number) => {
    router.push(`/shop-page/${productId}`);
  };

  return (
    <div className="py-10 px-20">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="border p-4 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <img
                src={product.imageSrc[0]}
                alt={product.title}
                className="w-full h-40 object-cover"
              />
              <h2 className="text-lg font-bold mt-2">{product.title}</h2>
              <p>{product.newPrice}</p>
              <button
                className="text-red-500 mt-2"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(product.id);
                }}
              >
                Remove from wishlist
              </button>
              <button
                className="text-green-500 mt-2 ml-4"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      )}
      <Link href="/shop-page" className="text-blue-500 mt-4 block">
        Back to Shop
      </Link>
    </div>
  );
};

export default WishlistPage;

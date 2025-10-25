import React, { useState, useEffect } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "../../context/CartContext";
import "./AddToCartButton.css";

export default function AddToCartButton({ product }) {
  const { addToCart, cart } = useCart();
  const [added, setAdded] = useState(false);

  const isInCart = cart.some((item) => item.id === product.id);

  useEffect(() => {
    if (isInCart) setAdded(true);
  }, [isInCart]);

  const handleAdd = () => {
    addToCart({
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
    });
    toast.success(`${product.name} fue agregado al carrito 🛒`);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // vuelve al carrito luego de 2s
  };

  return (
    <button
      onClick={handleAdd}
      disabled={added}
      className={`
        cart-button flex items-center justify-center gap-2 
        ${added ? "bg-green-600" : "bg-neutral-800 hover:bg-neutral-900 active:bg-neutral-900"}
        text-white font-semibold px-5 py-5 rounded-full transition-all duration-300
      `}
    >
      {added ? (
        <Check size={32} className="animate-scale" />
      ) : (
        <ShoppingCart size={32} />
      )}
    </button>
  );
}

import React from "react";
import ProductCard from "../ProductCard/ProductCard";

/**
 * Props:
 * - products: array con { name, image, price }
 * - onAddToCart: callback para agregar producto al carrito
 */
export default function ProductGrid({ products = [], onAddToCart }) {
  if (!products.length) {
    return (
      <div className="w-full py-12 text-center text-gray-500 dark:text-gray-400">
        No se encontraron productos.
      </div>
    );
  }

  return (
    <div
      className="
        grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
        gap-3 sm:gap-6
      "
    >
      {products.map((p, i) => (
        <ProductCard
          key={i}
          id={p.id}
          image={p.image}
          name={p.name}
          price={p.price}
          display="grid"
        />
      ))}
    </div>
  );
}

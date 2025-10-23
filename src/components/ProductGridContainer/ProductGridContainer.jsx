import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function ProductGridContainer() {
  const { categoryId } = useParams(); // <-- leemos el parámetro de la URL
  const [filteredProducts, setFilteredProducts] = useState([]);

  const products = [
    { name: "Heladera No Frost 300L", image: "https://placehold.co/600x400", price: "18.990", category: "electrodomésticos" },
    { name: "Smart TV 50'' 4K UHD", image: "https://placehold.co/600x400", price: "22.490", category: "tecnología" },
    { name: "Microondas Digital 30L", image: "https://placehold.co/600x400", price: "7.990", category: "electrodomésticos" },
    { name: "Lavarropas Automático", image: "https://placehold.co/600x400", price: "19.500", category: "electrodomésticos" },
    { name: "Cafetera Espresso", image: "https://placehold.co/600x400", price: "8.290", category: "electrodomésticos" },
  ];

  useEffect(() => {
    if (categoryId) {
      // filtramos por categoría si existe en la URL
      setFilteredProducts(
        products.filter(
          (p) => p.category.toLowerCase() === categoryId.toLowerCase()
        )
      );
    } else {
      // si no hay categoría, mostramos todos
      setFilteredProducts(products);
    }
  }, [categoryId]);

  const handleAddToCart = (product) => {
    console.log("Agregado al carrito:", product);
  };

  // Capitalizamos el nombre de la categoría (opcional)
  const formattedCategory = categoryId
    ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1)
    : null;

  return (
    <section className="px-4 py-6 min-h-[100vh]">
      <h2 className="text-lg font-semibold mb-4">
        {categoryId ? formattedCategory : "Todos los productos"}
      </h2>

      <ProductGrid
        products={filteredProducts}
        onAddToCart={handleAddToCart}
      />
    </section>
  );
}

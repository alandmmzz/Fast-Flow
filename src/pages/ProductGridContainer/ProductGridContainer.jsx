import React from "react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

export default function ProductGridContainer() {
    const products = [
        {
            name: "Heladera No Frost 300L",
            image: "/imgs/products/fridge1.jpg",
            price: "18.990",
        },
        {
            name: "Smart TV 50'' 4K UHD",
            image: "/imgs/products/tv1.jpg",
            price: "22.490",
        },
        {
            name: "Microondas Digital 30L",
            image: "/imgs/products/microwave.jpg",
            price: "7.990",
        },
        {
            name: "Lavarropas Automático",
            image: "/imgs/products/wash.jpg",
            price: "19.500",
        },
        {
            name: "Cafetera Espresso",
            image: "/imgs/products/coffee.jpg",
            price: "8.290",
        },
    ];

    const handleAddToCart = (product) => {
        console.log("Agregado al carrito:", product);
    };

    return (
        <section className="px-4 py-6">
            <h1 className="text-lg font-semibold mb-4">Todos los productos</h1>
            <ProductGrid products={products} onAddToCart={handleAddToCart} />
        </section>
    );
}

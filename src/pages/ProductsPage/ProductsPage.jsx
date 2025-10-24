import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

export default function ProductsPage() {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await fetch("/data/products.json");
            const data = await res.json();
            setProducts(data);

            // 🔹 Filtro actualizado para soportar múltiples categorías
            if (categoryId) {
            const filtered = data.filter(
                (p) =>
                Array.isArray(p.categories) &&
                p.categories.some(
                    (cat) => cat.toLowerCase() === categoryId.toLowerCase()
                )
            );
            setFilteredProducts(filtered);
            } else {
            setFilteredProducts(data);
            }
        } catch (err) {
            console.error("Error cargando productos:", err);
        } finally {
            setLoading(false);
        }
        };

        fetchData();
    }, [categoryId]);

    if (loading) {
        return (
        <div className="p-6 text-center text-gray-500 dark:text-gray-400">
            Cargando productos...
        </div>
        );
    }

    // Capitalizar el título (por estética)
    const formattedTitle = categoryId
        ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1)
        : "Todos los productos";

    return (
        <section className="px-4 py-6">
        <BackButton fallback="/categories" label="Volver" />

        <h2 className="text-xl font-semibold mb-4 capitalize">
            {formattedTitle}
        </h2>

        <ProductGrid
            products={filteredProducts}
            onAddToCart={(p) => console.log("Agregado al carrito:", p)}
        />
        </section>
    );
}

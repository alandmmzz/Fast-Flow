import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

export default function ProductsPage() {
    const { categoryId } = useParams();
    const location = useLocation();

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // 🔹 Extraer el parámetro de búsqueda
    const query = new URLSearchParams(location.search).get("search");

    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await fetch("/data/products.json");
            const data = await res.json();
            setProducts(data);

            let filtered = data;

            // 🔍 Si hay un término de búsqueda, filtra por nombre o marca
            if (query) {
            const searchTerm = query.toLowerCase();
            filtered = data.filter(
                (p) =>
                p.name.toLowerCase().includes(searchTerm) ||
                p.marca.toLowerCase().includes(searchTerm)
            );
            }

            // 🏷️ Si hay categoría (y no hay búsqueda), filtra por categoría
            else if (categoryId) {
            filtered = data.filter(
                (p) =>
                Array.isArray(p.categories) &&
                p.categories.some(
                    (cat) => cat.toLowerCase() === categoryId.toLowerCase()
                )
            );
            }

            // 💾 Guardar los resultados finales
            setFilteredProducts(filtered);
        } catch (err) {
            console.error("Error cargando productos:", err);
        } finally {
            setLoading(false);
        }
        };

        fetchData();
    }, [categoryId, query]);

    if (loading) {
        return (
        <div className="p-6 text-center text-gray-500 dark:text-gray-400">
            Cargando productos...
        </div>
        );
    }

    // 📌 Título dinámico
    let title = "Todos los productos";
    if (query) {
        title = `Resultados para "${query}"`;
    } else if (categoryId) {
        title = categoryId.charAt(0).toUpperCase() + categoryId.slice(1);
    }

    return (
        <section className="px-4 py-6">
        <BackButton fallback="/categories" label="Volver" />

        <h2 className="text-xl font-semibold mb-4 capitalize">{title}</h2>

        <ProductGrid
            products={filteredProducts}
            onAddToCart={(p) => console.log("Agregado al carrito:", p)}
        />
        </section>
    );
}

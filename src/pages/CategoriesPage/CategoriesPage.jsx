import React, { useEffect, useState } from "react";
import BackButton from "../../components/BackButton/BackButton";
import CategoriesGrid from "../../components/CategoriesGrid/CategoriesGrid"; // si el container solo renderiza esto

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/data/categories.json");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Error cargando categorías:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500 dark:text-gray-400">
        Cargando categorías...
      </div>
    );
  }

  return (
    <>
      <BackButton fallback="/" label="Volver atrás" />
      <section className="px-4 py-6">
        <h2 className="text-xl font-semibold mb-4">Categorías</h2>
        <CategoriesGrid categories={categories} />
      </section>
    </>
  );
}

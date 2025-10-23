import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

export default function CategoriesGrid({ categories = [] }) {
  return (
    <div
      className="
        grid gap-4
        grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
        w-full
      "
    >
      {categories.map((cat, i) => (
        <CategoryCard key={i} name={cat.name} image={cat.image} />
      ))}
    </div>
  );
}

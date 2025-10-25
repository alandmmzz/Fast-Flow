import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard({ name, image }) {
  return (
    <Link to={`/products/${name?.toLowerCase()}`} className="flex-shrink-0">
      <div
        className="
          shrink-0 snap-start w-[120px] sm:w-[140px]
          flex flex-col items-center text-center
          bg-white dark:bg-gray-900 rounded-xl
          border border-gray-100 dark:border-gray-700
          shadow-sm hover:shadow-md
          transition-all duration-200 active:scale-95
        "
      >
        <div className="w-full h-[100px] sm:h-[120px] relative overflow-hidden rounded-t-xl">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
        <p className="py-2 text-sm font-medium text-gray-800 dark:text-gray-100">
          {name}
        </p>
      </div>
    </Link>
  );
}

import { useNavigate } from "react-router-dom";

export default function CategoriesGrid({ categories = [] }) {
  const navigate = useNavigate();

  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full">
      {categories.map((cat, i) => (
        <button
          key={i}
          onClick={() => navigate(`/products/${cat.title.toLowerCase()}`)}
          className="group relative w-full rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
        >
          <img src={cat.image} alt={cat.title} className="w-full h-36 object-cover" />
          <p className="absolute bottom-0 w-full bg-black/50 text-white text-sm font-medium p-2">
            {cat.title}
          </p>
        </button>
      ))}
    </div>
  );
}

import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaStore } from "react-icons/fa";
import { useCart } from "../../context/CartContext"; // 🔹 importa tu contexto

export default function BottomNav({ onSearchToggle }) {
  const { cart } = useCart(); // obtenés el carrito
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); // cantidad total

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 shadow-md flex justify-around items-center p-2 z-50">
      {/* Tienda */}
      <Link
        to="/"
        className="flex flex-col items-center text-neutral-400 hover:text-white active:scale-90 transition-transform"
      >
        <FaStore size={20} />
        <span className="text-xs">Tienda</span>
      </Link>

      {/* Buscar */}
      <button
        onClick={onSearchToggle}
        className="flex flex-col items-center text-neutral-400 hover:text-white active:scale-90 transition-transform"
      >
        <FaSearch size={20} />
        <span className="text-xs">Buscar</span>
      </button>

      {/* Carrito */}
      <Link
        to="/cart"
        className="relative flex flex-col items-center text-neutral-400 hover:text-white active:scale-90 transition-transform"
      >
        <FaShoppingCart size={20} />
        {totalItems > 0 && (
          <span
            className="
              absolute -top-1 -right-2
              bg-red-600 text-white text-[10px] font-bold
              rounded-full px-1.5 py-0.5
              min-w-[16px] text-center
            "
          >
            {totalItems}
          </span>
        )}
        <span className="text-xs">Carrito</span>
      </Link>
    </nav>
  );
}

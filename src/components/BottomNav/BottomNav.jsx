import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaStore } from "react-icons/fa";

export default function BottomNav({ onSearchToggle }) {
    return (
        <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 shadow-md flex justify-around items-center p-2 z-50">
        <Link
            to="/"
            className="flex flex-col items-center text-neutral-400 hover:text-white active:scale-90 transition-transform"
        >
            <FaStore size={20} />
            <span className="text-xs">Tienda</span>
        </Link>

        <button
            onClick={onSearchToggle}
            className="flex flex-col items-center text-neutral-400 hover:text-white active:scale-90 transition-transform"
        >
            <FaSearch size={20} />
            <span className="text-xs">Buscar</span>
        </button>

        <Link
            to="/cart"
            className="flex flex-col items-center text-neutral-400 hover:text-white active:scale-90 transition-transform"
        >
            <FaShoppingCart size={20} />
            <span className="text-xs">Carrito</span>
        </Link>
        </nav>
    );
}

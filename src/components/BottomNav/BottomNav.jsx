// src/components/BottomNav.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaStore } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function BottomNav() {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md flex justify-around items-center p-2 z-50">
            {/* Tienda */}
            <Link
                to="/"
                className="flex flex-col items-center ttext-neutral-400 hover:text-neutral-50 active:scale-90 transition-transform"
            >
                <FaStore size={20} />
                <span className="text-xs">Tienda</span>
            </Link>

            {/* Búsqueda */}
            <div className="flex flex-col items-center relative">
                <button
                    onClick={() => setShowSearch(!showSearch)}
                    className="text-neutral-400 hover:text-neutral-50 active:scale-90 transition-transform"
                >
                    <FaSearch size={20} />
                </button>
                <span className="text-xs">Buscar</span>

                <AnimatePresence>
                    {showSearch && (
                        <motion.input
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: -10 }}
                            exit={{ opacity: 0, y: 20 }}
                            type="text"
                            placeholder="Buscar..."
                            className="absolute bottom-10 w-40 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    )}
                </AnimatePresence>
            </div>

            {/* Carrito */}
            <Link
                to="/cart"
                className="flex flex-col items-center text-neutral-400 hover:text-neutral-50 active:scale-90 transition-transform"
            >
                <FaShoppingCart size={20} />
                <span className="text-xs">Carrito</span>
            </Link>
        </nav>
    );
}

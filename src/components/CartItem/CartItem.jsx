import { motion, useAnimation } from "framer-motion";
import { Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();
  const controls = useAnimation();

  const handleDragEnd = (event, info) => {
    // si se arrastra más de 100px a la izquierda → eliminar
    if (info.offset.x < -100) {
      controls.start({ x: "-100%", opacity: 0 });
      if (navigator.vibrate) navigator.vibrate(30);
      setTimeout(() => removeFromCart(item.id), 200);
    } else {
      controls.start({ x: 0 });
    }
  };

  return (
    <motion.div
      className="relative bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      animate={controls}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Fondo de eliminar */}
      <div className="absolute inset-0 bg-red-600 flex items-center justify-end pr-6">
        <Trash2 className="text-white w-6 h-6" />
      </div>

      {/* Contenido del producto */}
      <div className="relative flex gap-4 p-3 z-10">
        {/* Imagen */}
        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info principal */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <p className="font-medium text-gray-800 dark:text-gray-100 text-sm line-clamp-2">
              {item.name}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              ${item.price}
            </p>
          </div>

          {/* Controles de cantidad */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  updateQuantity(item.id, Math.max(1, item.quantity - 1))
                }
                className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md active:scale-95"
              >
                -
              </button>
              <span className="text-sm">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md active:scale-95"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import { useCart } from "../../context/CartContext";
import BackButton from "../../components/BackButton/BackButton";
import CartItem from "../../components/CartItem/CartItem";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, total, clearCart } = useCart();

  // Calcular IVA incluido (ejemplo Uruguay 22%)
  const ivaRate = 0.22;
  const ivaIncluido = total - total / (1 + ivaRate);

  return (
    <>
      <BackButton fallback="/" label="Volver atrás" />

      <section className="p-6 pb-36 ">
        <h2 className="text-2xl font-bold mb-4">Tu carrito</h2>

        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <>
            <div className="flex flex-col gap-3 mb-6">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </>
        )}
      </section>

      {/* Barra fija inferior */}
      {cart.length > 0 && (
        <div className="fixed bottom-12 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-4 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
          <div className="flex justify-between items-center mb-1">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Precio total
            </p>
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              ${total.toLocaleString()}
            </p>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
            IVA incluido (${ivaIncluido.toFixed(0)})
          </p>

          <div className="flex gap-3">
            <button
              onClick={clearCart}
              className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full py-2 font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-all active:scale-95"
            >
              Vaciar
            </button>
            <Link
              to="/checkout"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full py-2 font-semibold text-center transition-all active:scale-95"
            >
              Finalizar compra
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

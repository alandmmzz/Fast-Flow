import { useCart } from "../../context/CartContext";
import BackButton from "../../components/BackButton/BackButton";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, total, clearCart } = useCart();

  return (
    <>
        <BackButton fallback="/" label="Volver atrás" />
        <section className="p-6 min-h-[100vh]">
            <h2 className="text-2xl font-bold mb-4">Tu carrito</h2>

            {cart.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <>
                {cart.map((item) => (
                    <div key={item.id} className="flex justify-between mb-3">
                    <div>
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="w-12 border text-center"
                        />
                        <button onClick={() => removeFromCart(item.id)}>🗑️</button>
                    </div>
                    </div>
                ))}
                <hr className="my-4" />
                <p className="text-xl font-semibold">Total: ${total}</p>

                <button
                    onClick={clearCart}
                    className="bg-red-600 text-white rounded-md px-4 py-2 mt-4"
                >
                    Vaciar carrito
                </button>
                </>
            )}
        </section>
    </> 
  );
}

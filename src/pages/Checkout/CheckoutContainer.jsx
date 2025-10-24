import React from "react";
import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";
import CheckoutShipping from "../../components/CheckoutShipping/CheckoutShipping";
import CheckoutPayment from "../../components/CheckoutPayment/CheckoutPayment";
import { useCart } from "../../context/CartContext";
import BackButton from "../../components/BackButton/BackButton";

export default function CheckoutContainer() {
    const { cart, total } = useCart();

    return (
        <section className="px-4 py-6 pb-32 min-h-[100vh] text-gray-800 dark:text-gray-100">
        <BackButton fallback="/cart" label="Volver al carrito" />
        <h2 className="text-2xl font-bold mb-6">Finalizar compra</h2>

        <div className="flex flex-col gap-6 mb-35">
            <CheckoutSummary cart={cart} total={total} />
            <CheckoutShipping />
            <CheckoutPayment total={total} />
        </div>

        {/* Barra inferior fija con botón de confirmar */}
        <div className="fixed bottom-12 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-4 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
            <div className="flex justify-between items-center mb-3">
            <p className="text-gray-600 dark:text-gray-400 text-sm">Total</p>
            <p className="text-lg font-semibold">${total.toLocaleString()}</p>
            </div>
            <button
            onClick={() => console.log("Ir a pasarela de pago")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3 font-semibold text-center transition-all active:scale-95"
            >
            Confirmar y pagar
            </button>
        </div>
        </section>
    );
}

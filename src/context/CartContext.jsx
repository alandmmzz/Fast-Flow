import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        // Recuperar desde localStorage
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    });

    // Persistir cambios
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // 🔹 Agregar producto
    const addToCart = (product) => {
        setCart((prev) => {
        const existing = prev.find((item) => item.id === product.id);
        if (existing) {
            // ya existe → aumentamos cantidad
            return prev.map((item) =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + 1, subtotal: (item.quantity + 1) * item.price }
                : item
            );
        }
        // nuevo producto
        return [...prev, { ...product, quantity: 1, subtotal: product.price }];
        });
    };

    // 🔹 Eliminar producto
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    // 🔹 Cambiar cantidad
    const updateQuantity = (id, newQty) => {
        setCart((prev) =>
        prev.map((item) =>
            item.id === id
            ? { ...item, quantity: newQty, subtotal: newQty * item.price }
            : item
        )
        );
    };

    // 🔹 Vaciar carrito
    const clearCart = () => setCart([]);

    // 🔹 Calcular total
    const total = cart.reduce((sum, item) => sum + item.subtotal, 0);

    return (
        <CartContext.Provider
        value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, total }}
        >
        {children}
        </CartContext.Provider>
    );
}

// Hook personalizado para consumir el contexto
export const useCart = () => useContext(CartContext);

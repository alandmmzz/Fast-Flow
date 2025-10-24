import React from "react";

export default function CheckoutSummary({ cart, total }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4">
      <h3 className="font-semibold mb-3">Resumen del carrito</h3>
      <div className="flex flex-col gap-3">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-md object-cover"
              />
              <p className="text-sm line-clamp-1">{item.name}</p>
            </div>
            <p className="text-sm font-medium">${item.price}</p>
          </div>
        ))}
      </div>
      <hr className="my-3 border-gray-300 dark:border-gray-700" />
      <div className="flex justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">Total</p>
        <p className="text-base font-semibold">${total.toLocaleString()}</p>
      </div>
    </div>
  );
}
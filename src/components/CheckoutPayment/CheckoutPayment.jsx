import React, { useState } from "react";

export default function CheckoutPayment({ total }) {
  const [method, setMethod] = useState("mercadopago");

  return (
    <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4">
      <h3 className="font-semibold mb-3">Método de pago</h3>

      <div className="flex flex-col gap-3">
        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
            value="mercadopago"
            checked={method === "mercadopago"}
            onChange={() => setMethod("mercadopago")}
          />
          <span>Mercado Pago</span>
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
            value="tarjeta"
            checked={method === "tarjeta"}
            onChange={() => setMethod("tarjeta")}
          />
          <span>Tarjeta de crédito / débito</span>
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
            value="efectivo"
            checked={method === "efectivo"}
            onChange={() => setMethod("efectivo")}
          />
          <span>Efectivo al recibir</span>
        </label>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        Total a pagar: ${total.toLocaleString()}
      </p>
    </div>
  );
}

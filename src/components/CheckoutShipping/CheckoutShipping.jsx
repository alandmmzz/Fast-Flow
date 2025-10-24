import React, { useState } from "react";

export default function CheckoutShipping() {
  const [shipping, setShipping] = useState({
    name: "",
    address: "",
    city: "",
    postal: "",
    phone: "",
  });

  const handleChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4">
      <h3 className="font-semibold mb-3">Datos de envío</h3>

      <div className="flex flex-col gap-3">
        <input
          name="name"
          value={shipping.name}
          onChange={handleChange}
          placeholder="Nombre completo"
          className="p-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
        />
        <input
          name="address"
          value={shipping.address}
          onChange={handleChange}
          placeholder="Dirección"
          className="p-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
        />
        <input
          name="city"
          value={shipping.city}
          onChange={handleChange}
          placeholder="Ciudad"
          className="p-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
        />
        <input
          name="postal"
          value={shipping.postal}
          onChange={handleChange}
          placeholder="Código postal"
          className="p-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
        />
        <input
          name="phone"
          value={shipping.phone}
          onChange={handleChange}
          placeholder="Teléfono"
          className="p-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
        />
      </div>
    </div>
  );
}
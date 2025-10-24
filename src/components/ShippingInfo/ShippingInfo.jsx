import { Truck } from "lucide-react";

export default function ShippingInfo() {
  return (
    <section className="px-6 py-12 bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
      <div className="max-w-md mx-auto flex flex-col items-start gap-4">
        <div className="flex items-center gap-3 mb-3">
          <Truck className="w-6 h-6 text-orange-500" />
          <h2 className="text-2xl font-semibold tracking-tight">
            Envíos a todo el país
          </h2>
        </div>

        <div>
          <h3 className="text-3xl font-light leading-tight mb-3">
            <span className="text-white font-semibold">No importa</span>{" "}
            donde estés.<br />
            <span className="text-white font-semibold">Te llega.</span>
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            Realizamos envíos rápidos y seguros a todo Uruguay, para que tus productos
            lleguen en tiempo y forma, sin importar dónde estés. Seguimiento en todo
            momento y atención personalizada para tu tranquilidad.
          </p>
        </div>

        <a
          href="/envios"
          className="mt-4 text-orange-500 font-medium text-sm flex items-center gap-1 hover:underline"
        >
          Saber más →
        </a>
      </div>
    </section>
  );
}

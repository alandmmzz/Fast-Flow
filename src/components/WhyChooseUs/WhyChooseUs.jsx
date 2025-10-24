import { ShieldCheck, Tag, Box } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
      title: "Productos de calidad",
      description:
        "Seleccionamos cuidadosamente cada electrodoméstico para garantizarte rendimiento, durabilidad y confianza en cada compra.",
    },
    {
      icon: <Tag className="w-6 h-6 text-orange-500" />,
      title: "Los mejores precios",
      description:
        "Aprovechá nuestras ofertas permanentes y encontrá la mejor relación entre calidad y precio del mercado.",
    },
    {
      icon: <Box className="w-6 h-6 text-orange-500" />,
      title: "Las mejores marcas",
      description:
        "Contamos con una amplia variedad de marcas, tamaños y estilos para que encuentres el producto perfecto para tu hogar.",
    },
  ];

  return (
    <section className="px-4 py-10 text-gray-100 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          ¿Por qué elegirnos?
        </h2>

        <div className="flex flex-col gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-gray-900/60 border border-gray-800 rounded-2xl p-4 hover:bg-gray-900/80 transition-all"
            >
              <div className="flex-shrink-0">{f.icon}</div>
              <div>
                <h3 className="text-orange-500 font-semibold mb-1 text-base">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-6">
          <a
            href="/about"
            className="text-orange-500 text-sm font-medium flex items-center gap-1 hover:underline"
          >
            Saber más →
          </a>
        </div>
      </div>
    </section>
  );
}

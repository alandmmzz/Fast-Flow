import { useState } from "react";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) return;
    setStatus("loading");

    try {
      // 🔹 Simulación de envío (acá iría tu API o Mailchimp)
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100 py-10 px-6 text-center">
      <div className="max-w-md mx-auto">
        <Mail className="mx-auto mb-3 w-8 h-8 text-orange-500" />
        <h2 className="text-2xl font-semibold mb-2">Suscribite a nuestras novedades</h2>
        <p className="text-gray-400 text-sm mb-6">
          Recibí ofertas exclusivas, lanzamientos y noticias de Fast&Flow directo en tu correo.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 bg-gray-800 rounded-full overflow-hidden p-1"
        >
          <input
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent px-4 py-2 text-sm outline-none text-gray-100 placeholder-gray-500"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all"
          >
            {status === "loading" ? "Enviando..." : "Suscribirme"}
          </button>
        </form>

        {status === "success" && (
          <p className="text-green-400 text-sm mt-3">
            ¡Listo! Te suscribiste correctamente 🎉
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm mt-3">
            Ocurrió un error. Intentá de nuevo.
          </p>
        )}
      </div>
    </section>
  );
}

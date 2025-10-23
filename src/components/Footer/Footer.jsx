import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-300 text-gray-700 dark:text-gray-700 text-sm border-t border-gray-200 dark:border-gray-800 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Logo y descripción */}
        <div className="flex flex-col items-start mb-8">
          <img
            src="/assets/logos/blanco.png"
            alt="Fast & Flow"
            className="h-8 mb-3"
          />
          <p>Llegamos para darle flow a tu hogar.</p>
          <p className="text-gray-500 dark:text-gray-700">
            Ofertas líderes en tecnología y electrodomésticos
          </p>
        </div>

        {/* Enlaces */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-8">
          <div>
            <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-800">
              Servicios
            </h4>
            <ul className="space-y-1">
              <li>
                <Link to="/about" className="hover:underline">
                  ¿Quiénes somos?
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:underline">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/envios" className="hover:underline">
                  Envíos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-800">
              Tienda
            </h4>
            <ul className="space-y-1">
              <li>
                <Link to="/products/tecnologia" className="hover:underline">
                  Tecnología
                </Link>
              </li>
              <li>
                <Link to="/products/electrodomesticos" className="hover:underline">
                  Electrodomésticos
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:underline">
                  Todos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-800">
              Seguinos
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Facebook size={16} />
                <a href="#" className="hover:underline">Facebook</a>
              </li>
              <li className="flex items-center gap-2">
                <Twitter size={16} />
                <a href="#" className="hover:underline">Twitter</a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={16} />
                <a href="#" className="hover:underline">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-gray-300 dark:border-gray-400 pt-4 flex flex-col items-center gap-2 text-gray-500 dark:text-gray-500 text-xs">
          <p>Copyright © 2025</p>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
            <Link to="/terminos" className="hover:underline">
              Términos & Condiciones
            </Link>
            <Link to="/privacidad" className="hover:underline">
              Política de privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

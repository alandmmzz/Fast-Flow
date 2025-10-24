import React, { useEffect, useState } from "react";
import "./Home.css";
import Banners from "../../components/Banners/Banners";
import Contact from "../../components/Contact/Contact";
import CategorySlider from "../../components/CategorySlider/CategorySlider";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import ShippingInfo from "../../components/ShippingInfo/ShippingInfo";
import Hero from "../../components/Hero/Hero";


export default function HomeContainer() {
    // 🧩 Estados para productos y categorías
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    // 🧠 Simulamos fetch desde /public/data/
    useEffect(() => {
        const fetchData = async () => {
        try {
            const resProducts = await fetch("/data/products.json");
            const resCategories = await fetch("/data/categories.json");

            const products = await resProducts.json();
            const categories = await resCategories.json();

            setProducts(products);
            setCategories(categories);
        } catch (error) {
            console.error("Error cargando datos:", error);
        }
        };

        fetchData();
    }, []);

  // Featured
    const featured = products.filter(p =>
        p.categories.includes("Featured")
    );

    // Best offers
    const offers = products.filter(p =>
        p.categories.includes("Best Offers")
    );

  return (
    <>
        <Banners />
        <Hero />

        {/* ✅ Solo renderizamos si hay categorías */}
        {categories.length > 0 && (
            <CategorySlider categories={categories} />
        )}

        {/* ✅ Solo renderizamos si hay productos */}
        {products.length > 0 && (
            <ProductSlider
            title="Productos Destacados"
            products={featured.slice(0, 6)}
            onAddToCart={(product) => console.log("Agregar", product)}
            />
        )}

        {/* ✅ Solo renderizamos si hay ofertas */}
        {offers.length > 0 && (
            <ProductSlider
            title="Ofertas Especiales"
            products={offers.slice(0, 6)}
            onAddToCart={(product) => console.log("Agregar", product)}
            />
        )}

        <WhyChooseUs />
        <ShippingInfo />
    </>
  );
}

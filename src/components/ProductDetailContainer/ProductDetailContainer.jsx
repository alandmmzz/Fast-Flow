import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductSlider from "../ProductSlider/ProductSlider";

export default function ProductDetailContainer() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const res = await fetch("/data/products.json");
        const data = await res.json();

        const current = data.find((p) => p.id === parseInt(productId));
        setProduct(current);

        if (current) {
            const ignored = ["Featured", "Best Offers"];
            const related = data.filter(
            (p) =>
                p.id !== current.id &&
                p.categories.some(
                (cat) =>
                    current.categories.includes(cat) &&
                    !ignored.includes(cat)
                )
            );
            setRelatedProducts(related.slice(0, 6));
        }
        };

        fetchData();
    }, [productId]);

    if (!product)
        return <div className="p-6 text-center">Cargando producto...</div>;

    return (
        <>
        <ProductDetail product={product} />

        {relatedProducts.length > 0 && (
            <ProductSlider
            title="También te podrían interesar"
            products={relatedProducts}
            onAddToCart={(p) => console.log("Agregar", p)}
            />
        )}
        </>
    );
}

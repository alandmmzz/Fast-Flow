import React from 'react';
import './Home.css';
import Banners from '../../components/Banners/Banners';
import Contact from '../../components/Contact/Contact';
import CategorySlider from '../../components/CategorySlider/CategorySlider';
import ProductSlider from '../../components/ProductSlider/ProductSlider';

import products from "../../data/products.json";
import categories from "../../data/categories.json";

export default function HomeContainer() {
    const featuredProducts = products.filter(product => product.featured);
    const discountedProducts = products.filter(product => product.discounted);

    return (
        <>
            <Banners />
            <CategorySlider
                categories={categories}
            />
            <ProductSlider
                products={featuredProducts}
                onAddToCart={(product) => console.log("Agregar", product)}
            />
        </>
    )
}
import React from 'react';
import './Home.css';
import Banners from '../../components/Banners/Banners';
import Contact from '../../components/Contact/Contact';
import CategorySlider from '../../components/CategorySlider/CategorySlider';
import ProductSlider from '../../components/ProductSlider/ProductSlider';

export default function HomeContainer() {

    return (
        <>
            <Banners />
            <CategorySlider
                categories={[
                    { title: "Heladeras", image: "https://placehold.co/600x400" },
                    { title: "Televisores", image: "https://placehold.co/600x400" },
                    { title: "Audio", image: "https://placehold.co/600x400" },
                    { title: "Cocina", image: "https://placehold.co/600x400" },
                ]}
            />
            <ProductSlider
                products={[
                    { name: "Heladera No Frost", image: "https://placehold.co/600x400", price: "18.990" },
                    { name: "Smart TV 50'' 4K", image: "https://placehold.co/600x400", price: "22.490" },
                    { name: "Smart TV 50'' 4K", image: "https://placehold.co/600x400", price: "22.490" },
                    { name: "Smart TV 50'' 4K", image: "https://placehold.co/600x400", price: "22.490" },
                    { name: "Smart TV 50'' 4K", image: "https://placehold.co/600x400", price: "22.490" },
                    { name: "Smart TV 50'' 4K", image: "https://placehold.co/600x400", price: "22.490" },
                    { name: "Smart TV 50'' 4K", image: "https://placehold.co/600x400", price: "22.490" },
                ]}
                onAddToCart={(product) => console.log("Agregar", product)}
            />
            <Contact />
        </>
    )
}
import React from 'react';
import { Link } from "react-router-dom";
import MobileCarousel from '../MobileCarousel/MobileCarousel';
import './Banners.css';

export default function Banners() {

    return (
        <>
            <section id="banners" className="banners-section">
                <MobileCarousel
                    images={[
                    "https://placehold.co/600x400",
                    "https://placehold.co/600x400",
                    "https://placehold.co/600x400",
                    ]}
                    className="rounded-2xl overflow-hidden shadow-md"
                />
            </section>
        </>
    )
}
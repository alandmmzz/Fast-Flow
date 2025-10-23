import React from 'react';
import Banners from '../../components/Banners/Banners';
import Contact from '../../components/Contact/Contact';

export default function HomeContainer() {

    return (
        <>
            <BackButton fallback="/" label="Volver atrás" />
            <Banners />
        </>
    )
}
import React from 'react';
import './Home.css';
import Banners from '../../components/Banners/Banners';
import Contact from '../../components/Contact/Contact';

export default function HomeContainer() {

    return (
        <>
            <Banners />
            <Contact />
        </>
    )
}
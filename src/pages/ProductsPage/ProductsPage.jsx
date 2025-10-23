import React from 'react';
import BackButton from '../../components/BackButton/BackButton';
import ProductGridContainer from '../../components/ProductGridContainer/ProductGridContainer';

export default function ProductsPage() {

    return (
        <>
            <BackButton fallback="/" label="Volver atrás" />
            <ProductGridContainer />    
        </>
    )
}
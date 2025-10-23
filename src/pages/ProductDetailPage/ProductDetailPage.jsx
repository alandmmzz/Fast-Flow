import React from 'react';
import BackButton from '../../components/BackButton/BackButton';
import ProductDetailContainer from '../../components/ProductDetailContainer/ProductDetailContainer';

export default function ProductDetailPage() {

    return (
        <>
            <BackButton fallback="/" label="Volver atrás" />
            <ProductDetailContainer />    
        </>
    )
}
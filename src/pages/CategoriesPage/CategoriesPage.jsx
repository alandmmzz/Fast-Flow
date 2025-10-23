import React from 'react';
import BackButton from '../../components/BackButton/BackButton';
import CategoriesGridContainer from '../../components/CategoriesGridContainer/CategoriesGridContainer';

export default function CategoriesPage() {

    return (
        <>
            <BackButton fallback="/" label="Volver atrás" />
            <CategoriesGridContainer />    
        </>
    )
}
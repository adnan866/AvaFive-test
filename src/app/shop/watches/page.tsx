
"use client";
import React from 'react'
import Breadcrumb from '../../Components/breadcrumb';
import ProductSection from '../../Components/Home/productSection';

export default function watches() {
    return (
        <>
            <Breadcrumb aftHome="Shop" secHref="/shop" prodLabels="Watches"/>
            <div className='mx-5 mt-5 mb-10'>
                <ProductSection pageAdd='shop' apiReq='/search?q=watch' />
            </div>
        </>
    )
}
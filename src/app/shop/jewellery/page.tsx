
"use client";
import React from 'react'
import Breadcrumb from '../../Components/breadcrumb';
import ProductSection from '../../Components/Home/productSection';

export default function jewellery() {
    return (
        <>
            <Breadcrumb aftHome="Shop" secHref="/shop" prodLabels="Jewellery"/>
            <div className='mx-5 mt-5 mb-10'>
                <ProductSection pageAdd='shop' apiReq='/category/womens-jewellery' />
            </div>
        </>
    )
}
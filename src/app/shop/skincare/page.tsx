
"use client";
import React from 'react'
import Breadcrumb from '../../Components/breadcrumb';
import ProductSection from '../../Components/Home/productSection';

export default function skincare() {
    return (
        <>
            <Breadcrumb aftHome="Shop" secHref="/shop" prodLabels="SkinCare"/>
            <div className='mx-5 mt-5 mb-10'>
                <ProductSection pageAdd='shop' apiReq='/category/skincare' />
            </div>
        </>
    )
}
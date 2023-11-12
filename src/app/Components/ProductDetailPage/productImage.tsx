
'use client';
import React, { useState } from "react";
import Image from 'next/image';
import Slider from "react-slick";

export default function productImage() {

  const settings = {
    dots: false,
    infinite: false,
    margin: 20,
    padding: 50,
    speed: 500,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <div className='block'>
      <div className=''>
        <img src="/pinkbag.jpg" alt="Product-Image" width='100' height='100' className="relative w-[100%] max-h-[560px] rounded-xl object-cover"  />
      </div>
      <div className="imageSlider mx-auto w-8/12 mt-7">
        <Slider {...settings} >
          <img src="/pinkbag.jpg" alt="Product-Image" className="relative object-cover w-14 h-14"  />
          {/* <Image src="/pinkbag.jpg" alt="Product-Image" width={60} height={60} objectFit="cover" className="relative" quality={100} />
          <Image src="/pinkbag.jpg" alt="Product-Image" width={60} height={60} objectFit="cover" className="relative" quality={100} />
          <Image src="/pinkbag.jpg" alt="Product-Image" width={60} height={60} objectFit="cover" className="relative" quality={100} />
          <Image src="/pinkbag.jpg" alt="Product-Image" width={60} height={60} objectFit="cover" className="relative" quality={100} />
          <Image src="/pinkbag.jpg" alt="Product-Image" width={60} height={60} objectFit="cover" className="relative" quality={100} />
          <Image src="/pinkbag.jpg" alt="Product-Image" width={60} height={60} objectFit="cover" className="relative" quality={100} /> */}
        </Slider>
      </div>
    </div>
  )
}

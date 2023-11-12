"use client";
// import React from 'react'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';
// interface Product {
//   id: number;
//   title: string;
//   description:string;
//   price: number;
// }

type ProductSection ={
  updateProducts: string;
  Component: React.FC<{}>;
}[];
const arr= [
      {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
      }
    ]
    
    // export const getStaticProps= async() => {
    //   const [products, setProducts] = useState(arr);
    //   const res = await fetch(`https://dummyjson.com/products`)
    //   const data = await res.json()
    //   setProducts(data.products)
    //   return {
    //     props: {
    //       products,
    //     },
    //   }
    // };
    // interface Product {
    //   id: number;
    //   title: string;
    //   description: string;
    //   price: number;
    //   thumbnail: string;
    // }
    // interface ProductSectionProps {
    //   products: Product[];
    //   pageAdd: string;
    //   apiReq: string;
    // }


    // const ProductSection: React.FC<ProductSectionProps> = ({ products, pageAdd, apiReq }) => {
      const ProductSection = (props:{apiReq:string;pageAdd:string}) =>{
  const [products, setProducts] = useState(arr);
  var apiURL = `https://dummyjson.com/products${props.apiReq}`;

  useEffect(() => {
    // Use the useEffect hook to fetch data when the component mounts
    fetch(apiURL)
      .then((response) => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.log(error, "Error fetching data:"));
      
  }, []); 


  let updatedProducts;
  if(props.pageAdd==="home"){
     updatedProducts = products.slice(0,4);
  }else{
    updatedProducts =products;
  }

  return (
    <section>
      <div className='grid grid-cols-4 mt-5 gap-5'>
        {updatedProducts.map((prod) => ( 
          <Link href={`/shop/${prod.id}`} key={prod.id}>
            <div>
              <img src={prod.thumbnail} className="relative rounded-xl w-full object-cover h-[340px]" alt="" />
            </div>
            <div className='flex justify-between items-center mt-2'>
              <p className='font-semibold text-black'>{prod.title}</p>
              <FontAwesomeIcon icon={faHeart}  className="relative object-contain w-6 h-6"/>
            </div>
            <h6 className='text-footerGray my-3'>{prod.description}</h6>
            <p className='font-semibold mt-2 text-black'>${prod.price} </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
export default ProductSection;

// export async function getStaticProps() {
//   const res = await fetch(`https://dummyjson.com/products${props.apiReq}`)
//   const products = await res.json()
//   return {
//     props: {
//       products,
//     },
//   }
// }
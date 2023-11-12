// import React from "react"
'use client';
import React, {useState, useEffect} from "react"

import Breadcrumb from "../Components/breadcrumb"
import ProductDetails from "../Components/ProductDetailPage/productDetails"
import ProductImage from "../Components/ProductDetailPage/productImage"
import Tabs from "../Components/ProductDetailPage/tabs"
import { useParams } from "next/navigation";

import DescriptioTab from "../Components/ProductDetailPage/Tabs/descriptionTab"
import RelatedProductTab from "../Components/ProductDetailPage/Tabs/relatedProductTab"
import ReviewTab from "../Components/ProductDetailPage/Tabs/reviewsTab"

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];


// Tabs Array
const tabs: TabsType = [
  {
    label: "Product Description",
    index: 1,
    Component: DescriptioTab
  },
  {
    label: "Related Products",
    index: 2,
    Component: RelatedProductTab
  },
  {
    label: "Ratings & Reviews",
    index: 3,
    Component: ReviewTab
  }
];


// const apiURL = "https://dummyjson.com/products";


export default function detail() {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
  const {id} = useParams();
  console.log('Product ID =', id)
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   // Use the useEffect hook to fetch data when the component mounts
  //   fetch(apiURL)
  //     .then((response) => response.json())
  //     .then(data => setProducts(data.products))
  //     .catch(error => console.log(error, "Error fetching data:"));
      
  // }, []); 
  // console.log(products);


  return (
    <>
    <Breadcrumb aftHome="Shop" secHref="/shop" prodLabels="" /> 
    <section className=" grid grid-cols-1 lg:grid-cols-2 gap-7 px-5">
      <ProductImage/>
      <ProductDetails/>
    </section>
    <div className="mt-10 mb-14 px-5">
    <Tabs  selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
    </div>
    </>
  )
}
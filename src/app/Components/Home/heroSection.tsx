import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function hero() {
  return (
    <section className="">
    <div className=" relative bg-heroSEction py-10">
        <Image src="/heroBG.jpg" alt="Hero Bg image" fill className="absolute rounded-2xl w-full h-auto -z-10 object-cover" quality={100} priority/>

      <div className="w-[40%] bg-gray-200/80 p-10 ml-auto rounded-l-2xl ">
        <h1 className="text-themeBlue">Carry your Funk</h1>
        <h4 className="text-themeBlue mt-4 mb-8 ">Trendy handbags collection for your party animal</h4>
        <Link href="../../shop/handbag" className="bg-themeBlue px-7 py-2 rounded-lg text-white">&#8594; <span className="ml-2">See more</span></Link>
      </div>
      
    </div>
    </section>
  )
}

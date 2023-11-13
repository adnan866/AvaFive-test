

"use Client";
import Link from 'next/link';
import HeroSection from './Components/Home/heroSection'
import ProductSection from './Components/Home/productSection'
import Heading from './Components/heading'

export default function Home() {
  return (
    <> 
      <p className='bg-themeGray text-sm text-center p-4'>We are currently experiencing local customs clearance delays. For the latest updates, please check your order status here</p>
      <main className='m-4 mb-16'>
        <HeroSection />
        <div className='mt-10 flex justify-between items-center'>
          {/* <h3 className=' text-darkBlue mb-5'>New Articles</h3> */}
          <Heading title='New Articles'/>
          <Link href="/shop" className='text-base text-themeBlue font-medium'>View all <span className=' text-3xl'>&#x203A;</span></Link>
        </div>
        <ProductSection  apiReq="/" pageAdd="home"/>
      </main>
    </>
  )
  }
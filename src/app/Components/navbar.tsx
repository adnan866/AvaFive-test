import { faSearch, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'


export default function navbar() {
  return (
    <nav className='flex justify-between items-center px-5 py-6 bg-white'>
    <div className='flex '>
      <Link href="/"> <img src="/logo.svg" alt="Logo" className=' w-[108px]' /> </Link>
      <ul className=' text-themeBlue text-base font-semibold space-x-5 cursor-auto flex ml-7'>
        <li><Link href="/shop/handbag">Hand Bags</Link></li>
        <li><Link href="/shop/watches">Watches</Link></li>
        <li><Link href="/shop/skincare">Skincare</Link></li>
        <li><Link href="/shop/jewellery">Jewellery</Link></li>
        <li><Link href="/shop/apparels">Apparels</Link></li>
      </ul>
    </div>
    <div className='flex gap-4 items-center'>
      <div className="relative">
        <FontAwesomeIcon icon={faSearch} className='absolute inset-y-0 left-0 top-2 flex items-center pl-2 pointer-events-none text-xl text-themeBlue w-7'/>
        <input type="search" id="default-search" className="block w-full px-4 py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-themeGray focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required></input>
      </div>
      <FontAwesomeIcon icon={faHeart}  className="relative cursor-pointer object-contain w-6 h-6 text-themeBlue hover:fill-black" />
      <FontAwesomeIcon icon={faUser}  className="relative cursor-pointer object-contain w-6 h-6 text-themeBlue" />
      <FontAwesomeIcon icon={faSuitcase}  className="relative cursor-pointer object-contain w-6 h-6 text-themeBlue"/>

    </div>
  </nav>
  )
}


import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function footer() {
  return (
    <footer className='backg bg-themeBlue'>
          <div className=" gap-10 md:px-16 px-8 pt-8 md:pb-20 pb-10 grid lg:grid-cols-6 md:grid-cols-5 grid-cols-1">
            <div>
              <h4 className='capitalize text-base text-white mb-3'>Shop by Category</h4>
              <ul className=' text-footerGray space-y-1.5 cursor-auto'>
                <li><a href="#">Skincare</a></li>
                <li><a href="#">Personal Care</a></li>
                <li><a href="#">Hand Bags</a></li>
                <li><a href="#">Apparels</a></li>
                <li><a href="#">Watches</a></li>
                <li><a href="#">Eye Wear</a></li>
                <li><a href="#">Jewellery</a></li>
              </ul>
            </div>
            <div>
              <h4 className='capitalize text-base text-white mb-3'>About</h4>
              <ul className=' text-footerGray space-y-1.5 cursor-auto'>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className='capitalize text-base text-white mb-3'>Policy</h4>
              <ul className=' text-footerGray space-y-1.5 cursor-auto'>
                <li><a href="#">Return Policy</a></li>
                <li><a href="#">Terms of use</a></li>
                <li><a href="#">Site Map</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">EPR Compliance</a></li>
              </ul>
            </div>
            <div className="footerColums lg:col-span-3 md:text-right text-left block md:col-span-2 col-span-1">
              <div className=' text-footerGray gap-3 space-y-1.5 cursor-auto flex items-end md:justify-end justify-start'>
                <Link href="#" className='rounded-full bg-themeGray hover:bg-footerGray w-9 h-9 flex justify-center items-center'> 
                  <FontAwesomeIcon icon={faFacebookF} className="dark:inver m-auto text-themeBlue text-xl"/>
                </Link>
                <Link href="#" className='rounded-full bg-themeGray hover:bg-footerGray w-9 h-9 flex justify-center items-center'> 
                  <FontAwesomeIcon icon={faInstagram} className="dark:inver m-auto text-themeBlue text-xl"/>
                </Link>
                <Link href="#" className='rounded-full bg-themeGray hover:bg-footerGray w-9 h-9 flex justify-center items-center'> 
                  <FontAwesomeIcon icon={faTwitter} className="dark:inver m-auto text-themeBlue text-xl"/>
                </Link>
                <Link href="#" className='rounded-full bg-themeGray hover:bg-footerGray w-9 h-9 flex justify-center items-center'> 
                  <FontAwesomeIcon icon={faYoutube} className="dark:inver m-auto text-themeBlue text-xl" />
                </Link>
              </div> 
              <div className='flex  items-center md:justify-end justify-start gap-2 my-5'>
                 <FontAwesomeIcon icon={faLocationDot} className="dark:inver w-[20px] object-contain text-white"/>
                <p className=' text-footerGray text-base'>United States</p>
              </div>
              <p className=' text-footerGray text-base'>© 2021 | Cora Leviene All Rights Reserved</p>
            </div>
          </div>
        </footer>
  )
}

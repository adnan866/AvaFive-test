
"use Client";
import Rating from '../rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import React, {useState,useEffect}  from 'react';

export default function productDetails() {




    // for Quantity Values
    const [cartCount, setCartCount] = useState<number>(1);
    const increaseCartCount = () => {
      setCartCount(cartCount + 1);
    };
    const decreaseCartCount = () => {
      if (cartCount > 1) {
        setCartCount(cartCount - 1);
      }
    };

  return (
    <div className=''>
        <h3 className=' text-darkBlue mb-1'>Coach</h3>
        <h5 className='text-gray-400'>Leather Coach Bag with adjustable starps.</h5>
        <div className='ratingStar flex gap-3 my-4'>
        <Rating/>
        <p className=' text-gray-400'> (<span>250</span>) Ratings </p>
        </div>
        <div className=' flex items-center gap-3 mb-4'>
            <h2 className=' text-black'>$<span>54.96</span></h2>
            <h2 className=' text-footerGray line-through'>$<span>78.66</span></h2>
            <h4 className=' text-red-600'>50%OFF</h4>
        </div>
        <hr className='mb-3 h-{1px} bg-footerGray'/>
        <div className='flex items-center gap-3 mt-5'>
            <div className=' w-2/5'>
                <h5 className=' text-black mb-2'>Delivery Detail</h5>
                <p className='text-footerGray'>Check estimated delivery date/pickup option.</p>
            </div>
            <div className='flex relative w-3/5'>
                <input className=' p-3 bg-themeGray text-gray-500 rounded-md w-full' type="text" title='text' placeholder='Apply Valid Pincode' />
                <input className='absolute top-3 right-3 cursor-pointer text-themeBlue' type="button" title='Submit' value='Check' />
            </div>
        </div>
        <div className='flex items-center gap-3 mt-5 mb-9'>
            <h5>Qunatity:</h5>
            <div className='flex items-center gap-4 border border-themeBlue rounded-md py-1 px-2 w-fit'>
                <span className='text-2xl cursor-pointer' onClick={decreaseCartCount}>&#8722;</span>
                <span className='text-xl' >{cartCount}</span>
                <span className='text-2xl cursor-pointer' onClick={increaseCartCount}>+</span>
            </div>

        </div>
        <div className='flex items-center gap-4 p-3 border border-themeBlue rounded-lg w-[400px]'>
            <div>
                <p className=' text-black font-semibold'>Get upto 30% Off on order value above $100</p>
                <h6 className=' text-themeBlue font-semibold'><a href="#">Terms & Conditions</a></h6>
            </div>
            <div className=' bg-themeGray p-3 rounded-md text-center'>
                <h6 className=' text-footerGray'>Use Code</h6>
                <p className=' text-black font-semibold'>ORDER100</p>
            </div>
        </div>
        <div className='flex item-center gap-4 mt-10'>
            <a href="#" className='flex gap-2 p-3 text-center text-sm font-semibold items-center justify-center text-white rounded-lg bg-themeBlue w-[60%]'>
                <FontAwesomeIcon icon={faSuitcase}  className="relative text-8 object-cover text-white"/> Add to Bag
            </a>
            <a href="#" className='flex gap-2 p-3 text-sm font-semibold text-themeBlue items-center justify-center rounded-lg border-themeBlue w-[40%] border-2'>
                <FontAwesomeIcon icon={faHeart} className="relative text-8 object-cover text-themeBlue" />
                 Add to Wishlist
            </a>
        </div>

    </div>
  )
}

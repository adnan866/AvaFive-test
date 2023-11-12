import Link from 'next/link'
import React from 'react'

export default function breadcrumb(props:{aftHome:string; secHref:string; prodLabels:string}) {
  return (
      <div className=' breadcrumb flex items-center gap-4 py-4 px-5'>
          <p className=' text-themeBlue'><Link href="/"> Home </Link></p>
          <span>&#x203A;</span>
          <p className='text-themeBlue'><Link href={props.secHref}> {props.aftHome} </Link>
          </p>
          <span style={{display: (props.prodLabels==="") ? 'none':'block'}}>&#x203A;</span>
          <p className= 'text-gray-500'><Link href=""> {props.prodLabels} </Link></p>
      </div>
  )
}
 
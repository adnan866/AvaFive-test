import { title } from 'process';
import React from 'react'

export default function heading(props:{title:string;}) {

  return (
    <div><h3 className=' text-darkBlue mb-5'>{props.title}</h3></div>
  )
}

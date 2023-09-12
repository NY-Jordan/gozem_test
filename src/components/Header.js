import React from 'react'
import badge from './../assets/images/a-badge [1] [rare].png'
import frame from './../assets/images/Frame 8.png'
 
export default function Header() {
  return (
    <div className='flex flex-col justify-between space-y-8 justify-center items-center mt-10'>
      <div><img src={badge} width={80} height={80}/></div>
      <div className='flex flex-rows items-center space-x-4'>
        <h3 className='text-4xl text-green-600 font-bold'>Testimonials I've left</h3>
        <div className=' border-solid border border-gray-200 text-gray-600 rounded-full h-8  pt-1 px-2 w-auto ' >
            47
        </div>
      </div>
      <div><img src={frame} width={60} height={60} /></div>
    </div>
  )
}

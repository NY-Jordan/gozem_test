import React from 'react'

export default function NavItem({ icon, title }) {
  return (
    <>
      <li className='flex  flex-row items-center'>
            <a href='#' className='py-0 pr-0 hover:bg-white'>
                <img src={icon} className='color-green' width={25} height={25}/>
            </a>
            <div className='flex justify-center hover:bg-white '>
                <div className='hover:text-green text-base font-normal'>{title}</div>
            </div>
        </li>
    </>
  )
}

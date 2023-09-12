import React, { Children } from 'react'

export default function Dropdown({icon, title, children}) {
  return (
    <>
        <li tabIndex={0} className='flex  flex-row '>
            <a href='#' className='py-0 pr-0 hover:bg-white justify-center items-center'>
                <img src={icon} className='py-2' />
            </a>
            <details >
            <summary className='hover:bg-white'> 
                <div className='hover:text-green text-base font-normal'>{title}</div>
            </summary>
            <ul className="p-2 active:bg-white-700">
               {children}
            </ul>
            </details>
        </li>
    </>
  )
}

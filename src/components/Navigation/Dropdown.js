import React, { Children } from 'react'

export default function Dropdown({icon, title, children}) {
  return (
    <>
        <li tabIndex={0} className='flex  flex-row  '>
            <a href='#' className='py-0 pr-0 hover:bg-white justify-center items-center '>
                <img src={icon} className='py-2' />
            </a>
            <details >
            <summary className='active:bg-white'> 
                <div className='text-base font-bold hover:text-green-600 focus:bg-white'>{title}</div>
            </summary>
            <ul className="p-2 active:bg-white-700 h-40 overflow-y-scroll	">
               {children}
            </ul>
            </details>
        </li>
    </>
  )
}

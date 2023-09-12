import React from 'react'

export default function DropdownItem({icon, title}) {
  return (
   
        <li>
            <div className='flex flex-row justify-between  items-center w-64 pr-2 hover:bg-slate-200	'>
                <div className='flex flex-row  items-center space-x-4'>
                    <input type="radio" name='language'  class="d-block block  w-4 h-4 border-green-600 bg-green-600" />
                    <img src={icon} className='color-green' width={30} height={30}/>
                    <div className=''>{title}</div>
                </div>
                <div className=' border-solid border border-green-600 rounded-full h-8  pt-1 px-2 w-auto ' >
                    900
                </div>
            </div>
        </li>
  )
}

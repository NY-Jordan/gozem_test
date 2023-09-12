import React, { useState } from 'react'
import logo from './../assets/images/logo.png'

import dashboard_image from './../assets/images/m-trackIconBG [active].png'
import railroad from './../assets/images/railroad.png'
import conversation from './../assets/images/conversation-chat-1.png'
import contribute from './../assets/images/toys-lego.png'
import language1 from './../assets/images/m-languageIcon [exercism].png'
import groupIcon from './../assets/images/icon/mood-happy.png'
import redIcon from './../assets/images/icon/a-icon [red-dot].png'
import redIcon2 from './../assets/images/icon/Frame 160.png'
import BageIndicator from './../assets/images/icon/a-icon [badge-indicator] [common].png'
import NotifIcon from './../assets/images/icon/alarm-bell.png'
import BadgeIcon from './../assets/images/icon/badge-1.png'
import ProfileIcon from './../assets/images/icon/m-profileBit.png'
import verticalMenu from './../assets/images/icon/navigation-menu-vertical.png'

import NavItem from './NavItem'
import Dropdown from './Dropdown'
import DropdownItem from './DropdownItem'

export default function Navbar() {
    
  const [MessageState, setMessageState] = useState('group_active') // active with setMessageState('group_active')
  const [BadgeState, setBadgeState] = useState('group_active') // active with setMessageState('group_active')
  const [Badge_oneState, setBadge_oneState] = useState('badge1_active') // active with setMessageState('group_active')
  return (
    <nav className="navbar bg-base-100 shadow pl-10 pr-0 py-0 flex items-center w-1000">
        
        <a href='#'  >
            <img src={logo} />
        </a>
        <div className="navbar-start hidden lg:flex  lg:flex space-x-20 ml-12  w-3/5" >
            <ul className="menu menu-horizontal px-1 py-0  w-full ">
                <NavItem icon={dashboard_image}  title={"Dashboard"}/>
                <Dropdown  icon={railroad} title={"Language"} >
                    <DropdownItem icon={language1}  title={"React"}/>
                    <DropdownItem  icon={language1}  title={"Angular"} />
                </Dropdown>
                <NavItem icon={conversation}  title={"Mentoring"}/>
                <NavItem icon={contribute}  title={"Contribute"}/>
            </ul>

        </div>
        <div className='lg:w-2/5 md:w-full sm:w-full justify-center'>
            <ul className='flex space-x-10 items-center '>
                <a href='#'>
                    <li className="mt-4" >
                        <img src={groupIcon} width={25} height={25} />
                        <img src={redIcon} className={MessageState}  />
                    </li>
                </a>
                <a href='#'>
                    <li className="mt-4" >
                        <img src={BageIndicator} width={22} height={22} />
                        <img src={redIcon} className={BadgeState}  />
                    </li>
                </a>
               <a href='#'>  
                <li>
                        <div className='bg-notif_color rounded-xl px-4 py-2 shadow-lg mt-4'>
                            <img src={NotifIcon} width={18} height={18} />
                        </div>
                        <div className='bg-red-500 rounded-full flex justify-center items-center notif_active text-xs font-bold text-white h-6 w-6 px-2 py-2'>2</div>
                    </li>
               </a>
               <a href='#'>
                    <li>
                        <div className='bg-green-600 items-center mt-4  space-x-4 px-2 justify-between flex flex-rows w-150 rounded-3xl'> 
                            <img src={BadgeIcon} width={40} height={40} />
                            <h4 className='font-bold text-white'>300k</h4>
                        </div> 
                        <img src={redIcon2} className={Badge_oneState} width={20} height={20}  />
                    </li>
                </a>
                <a href='#'>
                    <li>
                        <img src={ProfileIcon} width={40} height={40} />
                    </li>
                </a>
                <a href='#'>
                    <li>
                        <img src={verticalMenu} width={15} height={15} />
                    </li>
                </a>
                
                
                
               
            </ul>
        </div>
        <div className="navbar-end lg:hidden xl:hidden w-1/5 ">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <NavItem icon={dashboard_image}  title={"Dashboard"}/>
                    <Dropdown  icon={railroad} title={"Language"} >
                        <DropdownItem icon={language1}  title={"React"}/>
                        <DropdownItem  icon={language1}  title={"Angular"} />
                    </Dropdown>
                    <NavItem icon={conversation}  title={"Mentoring"}/>
                    <NavItem icon={contribute}  title={"Contribute"}/>
                </ul>
            </div>
        </div>
        
    </nav>
  )
}

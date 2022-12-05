import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useResponsive from '../Hooks/useResponsive';


function Header() {
   const {show,close,menu,display,closedisplay} = useResponsive()
  return (
    <div className='sticky z-30 top-0 bg-white flex items-center p-3'>
       <div className='flex-1'>
          <h3 className='text-2xl'>Danaz</h3>
       </div>
       <div className='hidden items-center md:flex'>
          <ul className='flex items-center space-x-2 cursor-pointer'>
             <li className='space-x-4 ml-4 mr-4'><a href="/">Home</a></li>
             <li className='space-x-4 ml-4 mr-4'><a href="/about">About Us</a></li>
             <li className='space-x-4 ml-4 mr-4'><a href="/service">Service</a></li>
             <li className='space-x-4 ml-4 mr-4'><a href="/ourTeam">Our Teams</a></li>
          </ul>
          <ul className='bg-blue-900 p-2 ml-4 mr-2 text-white cursor-pointer'>
            <li className=''><a href="/contact-us">Contact Us</a></li>
          </ul>
       </div>
            {
                    menu 
                     &&
                <div className="flex md:hidden" onClick={display}>
                    <MenuIcon/>
                </div>
                }
                 {
                    close &&
                    <div onClick={closedisplay}>
                        <CloseIcon/>
                    </div>
                 }
       {
         show && <div  class=" absolute top-14  list-none  right-2  divide-gray-100 shadow">
                    <div class="w-48 text-sm font-medium text-gray-900 bg-white  ">
                        <a href="/"
                            class="block py-2 px-4 w-full  rounded-t-lg border-b border-gray-200 cursor-pointer  hover:text-blue-700 ">
                            Home
                        </a>
                        <a href="/about"
                            class="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 ">
                            About Us
                        </a>
                        <a href="/service"
                            class="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 ">
                           Service
                        </a>
                        <a href="/ourTeam"
                            class="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 ">
                           Our Teams
                        </a>
                        <a href="/contact-us"
                            class="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 ">
                           Contact Us
                        </a>
                    </div>
                </div>
       }
       
    </div>
  )
}

export default Header
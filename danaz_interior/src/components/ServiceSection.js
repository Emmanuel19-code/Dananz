import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image3 from "../images/Image3.png"

function ServiceSection() {
  return (
    <div className='mt-10  p-3 relative '>
                <div className='md:flex md:justify-center mt-10 '>
                    <img src={Image3} alt=''/>
                </div> 
              <div className='md:w-auto md:absolute md:top-0 mt-5 bg-white p-4'>
                  <div className='flex items-center '>
                    <h1 className=' font-bold mr-2 '>
                        SERVICE
                        </h1>
                        <hr className='md:w-96 bg-black '/>
                </div>
                <h2 className='font-bold text-2xl'>attractive furniture with the best quality.</h2>
                <p className='text-sm text-[#9c9c9c] md:w-96 mt-4'>Customize your interior design into a dream place with 
                  the best designers and quality furniture. 
                  We try our best to fulfill your expectations.
                  </p>
                  <div className='mt-5'>
                     <ul>
                         <li className=' flex items-center mb-4'>
                            <span class="mr-4 md:text-md font-bold">01</span>
                            <div className='flex-1'>
                                <h3 className='font-bold text-xl'>Vintage</h3>
                            </div>
                            <span><ArrowForwardIcon className=''/></span>
                        </li>
                        <li className=' flex items-center mb-4'>
                            <span class="mr-4 md:text-md font-bold">02</span>
                            <div className='flex-1'>
                                <h3 className='font-bold text-xl '>Minimalist</h3>
                            </div>
                            <span><ArrowForwardIcon className=''/></span>
                        </li>
                    </ul>
                  </div>
              </div>
            </div>
  )
}

export default ServiceSection
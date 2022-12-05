import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function ProductSection() {
  return (
    <div className='mt-10'>
                <div className='flex items-center md:w-96'>
                    <h1 className=' font-bold mr-2'>
                        PRODUCT
                        </h1>
                     <hr className='w-96 bg-black '/>
                </div>
                <div className='md:flex items-center mb-4'>
                    <h3 className='flex-1 text-black text-xl font-bold'>
                        Choose your product themes .
                    </h3>
                    <p className='md:w-96'>
                        Find the theme you want. If our choice of theme is not
                        what you want,you can customize it as you want 
                    </p>
                </div>
                <div className='mt-3'>
                    <ul>
                         <li className='mb-10 flex items-center'>
                            <span class="mr-4 text-md font-bold">01</span>
                            <div className='flex-1'>
                                <h3 className='font-bold text-xl mb-4'>Vintage</h3>
                                <p className='text-md md:w-96 text-gray-400'>
                                    the use of simple and limited elements to get the best effect or impression
                                </p>
                            </div>
                            <span><ArrowForwardIcon className=''/></span>
                        </li>
                        <li className='mb-10 flex items-center'>
                            <span class="mr-4 text-md font-bold">02</span>
                            <div className='flex-1'>
                                <h3 className='font-bold text-xl mb-4'>Minimalist</h3>
                                <p className='text-md md:w-96 text-gray-400'>
                                    the use of simple and limited elements to get the best effect or impression
                                </p>
                            </div>
                            <span><ArrowForwardIcon className=''/></span>
                        </li>
                        <li className='mb-10 flex items-center'>
                            <span class="mr-4 text-md font-bold">02</span>
                            <div className='flex-1'>
                                <h3 className='font-bold text-xl mb-4'>Modern</h3>
                                <p className='text-md md:w-96 text-gray-400'>
                                    the use of simple and limited elements to get the best effect or impression
                                </p>
                            </div>
                            <span><ArrowForwardIcon className=''/></span>
                        </li>
                        <li className='mb-10 flex items-center'>
                            <span class="mr-4 text-md font-bold">04</span>
                            <div className='flex-1'>
                                <h3 className='font-bold text-xl mb-4'>transitional</h3>
                                <p className='text-md md:w-96 text-gray-400'>
                                    the use of simple and limited elements to get the best effect or impression
                                </p>
                            </div>
                            <span><ArrowForwardIcon className=''/></span>
                        </li>
                    </ul>
                </div>
            </div>
  )
}

export default ProductSection
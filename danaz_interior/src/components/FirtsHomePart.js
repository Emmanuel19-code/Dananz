import React from 'react'
import ServiceSection from './ServiceSection';
import AboutSection from './AboutSection';
import ProductSection from './ProductSection';
import MaterialSection from './MaterialSection';
import FooterSection from './FooterSection';
import Image1 from "../images/Image1.png"

function FirtsHomePart() {
  return (
<div>
    <div className='mt-10 flex flex-col p-5'>
        <div className='flex items-center flex-1 relative'>
            <h1 className='text-4xl font-bold mr-3'>
                Design your <br/> interior with high <br/> Quality .
            </h1>
            <hr className='flex-1 bg-black -mt-20'/>
        </div>
        <div className='md:flex md:flex-col hidden absolute right-4 mt-7'>
            <h4 className=' '>2020</h4>
            <p className=''>ALL RIGHT RESERVED</p>
        </div>
        <div className='relative'>
        <div className='flex justify-center mt-10'>
            <img src={Image1} alt=""/>
        </div>
        <div className='hidden absolute top-0 md:right-52 bg-blue-900 p-5 text-white space-y-12 md:flex md:flex-col '>
            <div className='space-y-2'>
                <h2 className='font-bold flex flex-col text-center'>
                    350+
                </h2>
                <p className='text-xs'>Projects Completed</p>
            </div>
            <div className='mt-5 space-y-2'>
                <h2 className='font-bold flex flex-col text-center'>
                    23+
                </h2>
                <p className='text-xs'>Professional Teams</p>
            </div>
            <div className='mt-5 space-y-2'>
                <h2 className='font-bold flex flex-col text-center'>
                    15+
                </h2>
                <p className='text-xs'>Years Experienced</p>
            </div>
        </div>
        </div>
        {/*About Section*/}
        <AboutSection/>
         {/*Service Section */}
            <ServiceSection/>
            {/*Product section */}
            <ProductSection/>
            {/*MATERIALS*/}
            <MaterialSection/>
    </div>
     <FooterSection/>
</div>
  )
}

export default FirtsHomePart
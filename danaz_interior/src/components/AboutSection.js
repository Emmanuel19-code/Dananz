import React from 'react'
import Image2 from "../images/Image2.png"
import {LazyLoadImage} from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css'

function AboutSection() {
  return (
    <div>
         <div className='mt-10 flex items-center justify-center'>
             <hr className='w-96 bg-black '/>
            <h1 className=' font-bold mr-3 ml-3'>
               ABOUT
            </h1>
            <hr className='w-96 bg-black '/>
        </div>
         <div className='text-center'>
            <p className='text-2xl font-semibold'>
                " We're one of the best furniture agency. Priotizing Customers <br/>
                and making purchases easy are the hallmarks of the agency. "
            </p>
         </div>
           <div className='mt-10 md:flex md:items-center justify-center'>
             <LazyLoadImage
              alt=""
              effect="blur"
              src={Image2}
             />
                {/*<img src={Image2} alt="" className='mr-10'/>*/}
                <div className=''>
                    <p className='md:w-36 mt-4 text-slate-300'>
                        Online learning with us
                        does not interfere with 
                        your daily life because learnig can
                        be done anytime and anywhere
                    </p>
                    <button className='bg-blue-900 p-2 mt-2 text-white cursor-pointer'>Learn More</button>
                </div>
            </div>
    </div>
  )
}

export default AboutSection
import React from 'react'
import FooterSection from '../components/FooterSection'
import Image16 from "../images/Image16.png"
import Image17 from "../images/Image17.png"
import Image18 from "../images/Image18.png"
import Image4 from "../images/Image4.png"
import ProductSection from "../components/ProductSection"


function Service() {
  return (
    <div>
            <div className='p-10'>
                  <div className='flex flex-col items-center'>
                      <h2 className='font-bold text-2xl'>About</h2>
                      <p className='md:w-96 text-center mt-5 mb-5'>
                        It is a long established fact that a reader will be distracted by the readable 
                        content of a page when looking at its layout.
                      </p> 
                  </div>
                    <div className='flex justify-center mt-4'>
                        <img src={Image16} alt=""/>
                    </div>
                        <div className=' flex items-center mb-5 mt-5'>
                            <h1 className=' font-bold mr-3 '>
                               ACHIEVEMENT
                            </h1>
                            <hr className='md:w-96 font-bold bg-black'/>
                        </div>
                        <div className='md:flex items-center mt-10'>
                            <img src={Image17} alt='' className='mr-10'/>
                            <div className=''>
                                <h4 className='font-bold mt-3'>Interior Design</h4>
                                <p className='md:w-64 text-slate-400 mt-5'>Customize your interior design into a dream place with 
                                    the best designers and quality furniture. 
                                    We try our best to fulfill your expectations.
                                </p>
                            </div>
                        </div>
                         <div className='md:flex items-center mt-10'>
                            <img src={Image18} alt='' className='mr-10'/>
                            <div className=''>
                                <h4 className='font-bold mt-3'>Consultant</h4>
                                <p className='md:w-64 text-slate-400 mt-5'>Customize your interior design into a dream place with 
                                    the best designers and quality furniture. 
                                    We try our best to fulfill your expectations.
                                </p>
                            </div>
                        </div>
                        <div className='md:flex items-center mt-10'>
                            <img src={Image4} alt='' className='mr-10'/>
                            <div className=''>
                                <h4 className='font-bold mt-3'>Construction Consultant</h4>
                                <p className='md:w-64 text-slate-400 mt-5'>Customize your interior design into a dream place with 
                                    the best designers and quality furniture. 
                                    We try our best to fulfill your expectations.
                                </p>
                            </div>
                        </div>
                      <ProductSection/>
             </div>
        <FooterSection/>
    </div>
  )
}

export default Service
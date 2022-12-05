import React from 'react'
import FooterSection from '../components/FooterSection'
import Image5 from "../images/Image5.png"
import Image6 from "../images/Image6.png"
import Image7 from "../images/Image7.png"
import Image8 from "../images/Image8.png"
import Image9 from "../images/Image9.png"
import Image10 from "../images/Image10.png"
import Image13 from "../images/Image13.png"




function OurTeams() {
  return (
    <div>
        <div className='text-center flex items-center flex-col'>
            <h1 className='font-bold text-2xl'>Our Teams</h1>
             <p className='md:w-96  mt-5 mb-5'>
                It is a long established fact that a reader will be distracted 
                by the readable content of a page when looking at its layout.
            </p>
            <div className='flex w-4/5 justify-center '>
                <img src={Image7} alt=""/>
            </div>
        </div>
        <div className='p-10'>
            <div className='mt-10 flex items-center'>
                <h1 className=' font-bold mr-3  text-sm'>
                 Designer
                </h1>
                <hr className='w-96 bg-black '/>
            </div>
            <div>
                <h1 className='font-bold mt-3'>Creative Person</h1>
                <p className='md:w-96 mt-4 text-slate-400'>
                    Customize your interior design into a dream place with the best 
                    designers and quality furniture. 
                    We try our best to fulfill your expectations.
                </p>
            </div>
            {/*Profile */}
            <div className='md:grid md:grid-cols-4  mt-10 gap-2'>
                <div className=' relative mb-2 justify-center'>
                    <img src={Image5} alt='' className='bg-blue-900 '/>
                    <p className='absolute bg-white px-4 bottom-2 left-1 flex flex-col'>
                        Shoo Phar Dhie
                        <span>CEO</span>
                    </p>
                </div>
                  <div className=' relative mb-2 '>
                    <img src={Image6} alt='' className='bg-blue-900 '/>
                    <p className='absolute bg-white px-4 bottom-1 left-1 flex flex-col'>
                        Shoo Phar Dhie
                        <span>CEO</span>
                    </p>
                </div>
                 <div className=' relative mb-2 '>
                    <img src={Image8} alt='' className='bg-blue-900 '/>
                    <p className='absolute bg-white px-4 bottom-1 left-1 flex flex-col'>
                        Shoo Phar Dhie
                        <span>CEO</span>
                    </p>
                </div>
                <div className=' relative mb-2 '>
                    <img src={Image9} alt='' className='bg-blue-900 '/>
                    <p className='absolute bg-white px-4 bottom-1 left-1 flex flex-col'>
                        Shoo Phar Dhie
                        <span>CEO</span>
                    </p>
                </div>
                 <div className=' relative mb-2 '>
                    <img src={Image10} alt='' className='bg-blue-900 '/>
                    <p className='absolute bg-white px-4 bottom-1 left-1 flex flex-col'>
                        Shoo Phar Dhie
                        <span>CEO</span>
                    </p>
                </div>
                  <div className=' relative mb-2 '>
                    <img src={Image5} alt='' className='bg-blue-900 '/>
                    <p className='absolute bg-white px-4 bottom-1 left-1 flex flex-col'>
                        Shoo Phar Dhie
                        <span>CEO</span>
                    </p>
                </div>
                 <div className=' relative mb-2 '>
                    <img src={Image5} alt='' className='bg-blue-900 '/>
                    <p className='absolute bg-white px-4 bottom-1 left-1 flex flex-col'>
                        Shoo Phar Dhie
                        <span>CEO</span>
                    </p>
                </div>
                  <div className=' relative mb-2 '>
                    <img src={Image13} alt='' className='bg-blue-900 '/>
                    <p className='absolute bg-white px-4 bottom-1 left-1 flex flex-col'>
                        Shoo Phar Dhie
                        <span>CEO</span>
                    </p>
                </div>
            </div>
        </div>
        <div className='p-10'>
            <div className='mt-10 flex items-center'>
                <h1 className=' font-bold mr-3  text-sm'>
                 SERVICE
                </h1>
                <hr className='w-96 bg-black '/>
            </div>
            <div>
                <h1 className='font-bold mt-3'>Why Choose Us</h1>
                <p className='md:w-96 mt-4 text-slate-400'>
                    Customize your interior design into a dream place with the best 
                    designers and quality furniture. 
                    We try our best to fulfill your expectations.
                </p>
            </div>
            <div className='md:grid md:grid-cols-3 md:place-items-center mt-5'>
                <div className='md:w-72  text-center   mt-4 '>
                    <h1 className='font-bold mt-3'>High Quality</h1>
                    <p className='md:w-64 mt-4 mb-1 text-slate-400'>
                    Customize your interior design into a dream place with the best 
                    designers and quality furniture. 
                    We try our best to fulfill your expectations.
                </p>
                </div>
                <div className='md:w-72  text-center  mt-4'>
                    <h1 className='font-bold mt-3'>Professional Designer</h1>
                    <p className='md:w-64 mt-4 mb-1 text-slate-400'>
                    Customize your interior design into a dream place with the best 
                    designers and quality furniture. 
                    We try our best to fulfill your expectations.
                </p>
                </div>
                <div className='md:w-72  text-center mt-4'>
                    <h1 className='font-bold mt-3'>The Best Services</h1>
                    <p className='md:w-64 mt-4 mb-1 text-slate-400'>
                    Customize your interior design into a dream place with the best 
                    designers and quality furniture. 
                    We try our best to fulfill your expectations.
                </p>
                </div>
            </div>
        </div>
        <FooterSection/>
     </div>
  )
}

export default OurTeams
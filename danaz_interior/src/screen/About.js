import React from 'react'
import FooterSection from '../components/FooterSection'
import Image14 from "../images/Image14.png"
import Image15 from "../images/Image15.png"


function About() {
  return (
    <div>
         <div className='p-4'>
        <div className='flex flex-col items-center'>
            <h2 className='font-bold text-2xl'>About</h2>
            <p className='md:w-96 text-center mt-5 mb-5'>
              It is a long established fact that a reader will be distracted by the readable 
              content of a page when looking at its layout.
            </p> 
        </div>
        <div className='flex justify-center mt-4'>
            <img src={Image14} alt=""/>
        </div>
        <div className='mt-20'>
            <div className=' flex items-center mb-5'>
            <h1 className=' font-bold mr-3 '>
               ACHIEVEMENT
            </h1>
            <hr className='md:w-96 font-bold bg-black'/>
            </div>
            <h1 className='md:w-96 font-bold text-xl space-y-4'>
                interior customization with Danaanz, best quality with professional workers
            </h1>
            <div className='md:flex justify-center mt-10'>
                <img src={Image15} className="mr-5" alt=""/>
        <div className='bg-blue-900 p-5 flex flex-col justify-between text-white mt-10'>
            <div className='space-y-2 flex flex-col items-center'>
                <h2 className='font-bold  text-center'>
                    350+
                </h2>
                <p className='text-xs'>Projects Completed</p>
            </div>
            <div className='mt-5 space-y-2 flex flex-col items-center'>
                <h2 className='font-bold  text-center'>
                    23+
                </h2>
                <p className='text-xs'>Professional Teams</p>
            </div>
            <div className='mt-5 space-y-2 flex flex-col items-center'>
                <h2 className='font-bold  text-center'>
                    15+
                </h2>
                <p className='text-xs'>Years Experienced</p>
            </div>
        </div>
            </div>
        </div>
        <div className=' flex items-center mt-10'>
            <h1 className=' font-bold mr-3 '>
               SERVICE
            </h1>
            <hr className='md:w-96 font-bold bg-black'/>
         </div>
         <h1 className='font-bold text-3xl mt-4'>Why Choose Us</h1>
         <p className='md:w-96 mt-4 text-gray-400'>Customize your interior design into a dream place with the best designers and quality furniture. 
            We try our best to fulfill your expectations.
            </p>
            <div className='md:flex items-center justify-center mt-5'>
                <div className='flex items-center flex-col mr-4 border border-gray-200 m-2 p-3'>
                    <span className='bg-gray-400 p-4 rounded-full'></span>
                    <h4>High Quality</h4>
                    <p className='md:w-72 text-center'>
                        Customize your interior design into a dream place with the best designers and quality furniture.
                         We try our best to fulfill your expectations.
                    </p>
                </div>
                 <div className='flex items-center flex-col mr-4 border m-2 border-gray-200 p-3'>
                    <span className='bg-gray-400 p-4 rounded-full'></span>
                    <h4>Professional Designer</h4>
                    <p className='md:w-72 text-center'>
                        Customize your interior design into a dream place with the best designers and quality furniture.
                         We try our best to fulfill your expectations.
                    </p>
                </div>
                 <div className='flex items-center flex-col border m-2 mr-4 border-gray-200 p-3'>
                    <span className='bg-gray-400 p-4 rounded-full'></span>
                    <h4>The Best Services</h4>
                    <p className='md:w-72 text-center'>
                        Customize your interior design into a dream place with the best designers and quality furniture.
                         We try our best to fulfill your expectations.
                    </p>
                </div>
            </div>
           
    </div>
     <FooterSection/>
    </div>
  )
}

export default About
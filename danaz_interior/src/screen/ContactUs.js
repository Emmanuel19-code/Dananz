import React, { useState } from 'react'
import FooterSection from '../components/FooterSection'
import axios from "../axios"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


function ContactUs() {
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState();
    const [message,setMessage] = useState("");
    const [success,setSuccess] = useState(false)
    const [error,setError] = useState(false)

    const sendMessage = () =>{
        axios.post("/contactUs-Message",{
            firstname:firstname,
            lastname:lastname,
            email:email,
            phone:phone,
            message:message
        })
        .then((res)=>{
            setFirstname("")
            setLastname("")
            setEmail("")
            setPhone("")
            setMessage("")
            setSuccess(true)
             setTimeout(()=>{
                setSuccess(false)
            },5000)
        }).catch((error)=>{
            setError(true)
            setTimeout(()=>{
                setError(false)
            },5000)
        })
    }

  return (
    <div>
       <div className=' flex flex-col  items-center mb-10'>
            <h2 className='font-bold text-2xl'>Contact Us</h2>
            <p className='md:w-96 text-center mt-5 mb-5'>
                It is a long established fact that a reader will be distracted 
                by the readable content of a page when looking at its layout.
            </p> 
            <div className='flex flex-col m-1'>
                <label>First Name</label>
                    <input type="text" 
                    className='border border-gray-300 outline-none p-1 ' 
                    placeholder='First Name'
                    value={firstname}
                    onChange={(e)=>setFirstname(e.target.value)}
                    />
                    <label>Last Name</label>
                    <input type="text" 
                    className='border border-gray-300 outline-none p-1 ' 
                     placeholder='Last Name'
                     value={lastname}
                    onChange={(e)=>setLastname(e.target.value)}
                     />
                <label>Email</label>
                <input type="text" 
                className='border border-gray-300 outline-none p-1 mb-1 ' 
                placeholder='Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <label>Phone Number</label>
                 <PhoneInput
                 country={'gh'}
                 value={phone}
                 onChange={setPhone}
                />
                <label>Message</label>
                <input type="textarea" 
                className='border border-gray-300 outline-none mb-1 p-1 ' 
                placeholder='Message'
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                />
            </div>
            <div>
                <button 
                className='bg-blue-900 py-1 px-4 text-white mt-2'
                onClick={sendMessage} 
                >
                    Send Message
                </button>
            </div>
            {
                success && 
            <div className='mt-3 text-white'>
                <p className='bg-green-400 p-2 rounded'>Your message has been sent successfully</p>
            </div>
            }
            {
                error 
                &&
                <div className='mt-3  text-white'>
                    <p className='bg-red-400 rounded p-2'>Your message was not sent please resend the message</p>
                </div>
            }
        </div>
        <div className='p-5'>
            <div className='mt-5 flex items-center'>
                    <h1 className=' font-bold mr-3  text-sm'>
                     Location
                    </h1>
                    <hr className='w-96 bg-black '/>
            </div>
            <div className='md:flex md:items-center'>
                <div className='md:flex-1 mb-10'>
                    <h1 className='mb-3 mt-3 font-bold text-xl'>Visit Our Stores</h1>
                    <p className='text-gray-400 text-sm'>
                        Find us at these locations.
                    </p>
                    <h1 className='mb-3 mt-3 font-bold text-sm'>
                        Email
                    </h1>
                    <p className='text-gray-400 text-sm'>
                        dananz@gmail.com
                    </p>
                    <h1 className='mb-3 mt-3 font-bold text-sm'>
                        Phone
                    </h1>
                    <p className='text-gray-400 text-sm'>
                        +62 815 002 1000
                    </p>
                </div>
                <div className='md:grid md:grid-cols-2 md:gap-x-4'>
                   <div>
                     <h1 className='mb-3 mt-3 font-bold '>Jakarta</h1>
                    <p className='text-gray-400 text-sm w-64'>
                        Customize your interior design into a dream place 
                        with the best designers and quality furniture. 
                        We try our best to fulfill your expectations.
                    </p>
                   </div>
                   <div>
                     <h1 className='mb-3 mt-3 font-bold '>Surakarta</h1>
                    <p className='text-gray-400 text-sm w-64'>
                        Customize your interior design into a dream place 
                        with the best designers and quality furniture. 
                        We try our best to fulfill your expectations.
                    </p>
                   </div>
                  <div>
                     <h1 className='mb-3 mt-3 font-bold '>Yogyakarta</h1>
                    <p className='text-gray-400 text-sm w-64'>
                        Customize your interior design into a dream place 
                        with the best designers and quality furniture. 
                        We try our best to fulfill your expectations.
                    </p>
                   </div>
                   <div>
                     <h1 className='mb-3 mt-3 font-bold '>Bandung</h1>
                    <p className='text-gray-400 text-sm w-64'>
                        Customize your interior design into a dream place 
                        with the best designers and quality furniture. 
                        We try our best to fulfill your expectations.
                    </p>
                   </div>
                </div>
            </div>
        </div>
        <FooterSection/>
    </div>
  )
}

export default ContactUs
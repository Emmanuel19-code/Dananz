import React,{useState} from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendIcon from '@mui/icons-material/Send';
import axios from '../axios';

function FooterSection() {
    const [email,setEmail] = useState("")
    const Subscribe =async () =>{
      await axios.post("/subscribe",{email:email})
      .then((res)=>{
        setEmail("")
        alert(res.data.msg)
      })
    }

  return (
    <div className=''>
         <div className='mt-5 bg-blue-900 p-5 mb-4 md:flex  items-center'>
            <h3 className='text-white text-2xl md:w-96 flex-1'>
                Let's discuss making your interior like a dream place!
            </h3>
        <div>
            <p className='text-white p-2'>
                contact us below to work together to build your amazing interior
            </p>
          <ul className='font-bold text-center cursor-pointer'>
            <li className='bg-white w-32 py-2'><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>
    </div>
    <div className='p-10 md:flex items-center mb-10'>
         <div className='flex-1'>
            <h3 className='font-bold text-xl mb-2'>Dananz</h3>
            <h3 className='font-bold text-2xl w-42'>One of the best furniture Agency</h3>
         </div>
         <div className='relative mt-5'>
             <p>Enter your email to get the latest news</p>
             <div className='flex items-center'>
                <input type="email" 
                className="mr-1 py-2.5 outline-none w-full text-sm text-gray-900  border-0 border-b-2 border-gray-300 " 
                placeholder="Email Address" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <SendIcon onClick={Subscribe}/>
             </div>
             <div className='absolute right-3 mb-2'>
                <h3 className='mt-3'>Follow us On</h3>
                    <FacebookIcon className='bg-gray-300 rounded m-1 p-1'/>
                    <InstagramIcon className='bg-gray-300 rounded m-1 p-1'/>
                    <TwitterIcon className='bg-gray-300 rounded m-1 p-1'/>
             </div>
         </div>
    </div>
    </div>
  )
}

export default FooterSection
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
const Header = () => {
  return (
    <header >
        <div className='flex justify-between p-[12px] pl-[62px] pr-[64px]  bg-gray-100 space-x-4'>
         <div> <span>Phone Number: 956 742 455 678 </span> <span>|</span><span className='px-2'>Emil: info@ddsgnr.com</span></div>
          <div className='flex space-x-4 '>
    <Link href="https://facebook.com" target="_blank" rel="nooper noreferrer" className='text-gray-900 text-xl hover:text-blue-500 transition'><FaFacebook /></Link>
    <Link href="https://instagram.com" target="_blank" rel="nooper noreferrer" className='text-gray-900 text-xl hover:text-pink-500 transition '><FaInstagram /></Link> 
    <Link href="https://twitter.com" target="_blank" rel="nooper noreferrer" className='text-gray-900 text-xl hover:text-blue-400 transition'><FaTwitter /></Link>
    <Link href="https://linkedin.com" target="_blank" rel="nooper noreferrer" className='text-gray-900 text-xl hover:text-blue-700 transition'><FaLinkedin /></Link>  
          </div>
       </div>
      <nav className='flex mx-auto px-4 sm:px-6 lg:px-8 justify-between items-center h-[72px] pr-[64px] pl-[64px] bg-white shadow-md'>
      <div className='flex relative w-[130.6px] h-[41px]'>
  <div className='absolute w-[32.58px] h-[30.38px] top-0 left-8 z-10'>
    <Image 
      src="/img/logo.png" 
      alt="Logo" 
      layout="fixed" 
      width={32.58} 
      height={30.38} 
    />
  </div>
  <h1 className='font-extrabold text-[25.07px] pl-24'>Ddsgnr</h1>
</div>
          <ul className='flex space-x-4'>
          <li> <Link href="/" className="text-gray-700">Home</Link></li> 
            <li><Link href="/courses" target="_blank" className="text-gray-700">Courses</Link></li>
            <li> <Link href="/services" target="_blank" className="text-gray-700">Services</Link></li>
            <li><Link href="/achievement" target="_blank" className="text-gray-700">Achievement</Link></li>
            <li><Link href="/contactUs" target="_blank" className="text-gray-700">Contact Us</Link></li>
            <li><Link href="/testimonial" target="_blank" className="text-gray-700">Testimonial</Link></li>
          </ul>
          <div className='flex space-x-2'>
            <button className='py-2 px-4  border border-solid border-black rounded-md'>Login</button>
            <button className='py-2 px-4 bg-[#000000] text-white rounded-md'>Sign Up</button>
          </div>
        </nav>
      </header>
  )
}

export default Header

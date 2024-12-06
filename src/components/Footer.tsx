import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className='bg-gray-100 text-black p-16'>
        <div className=' container max-auto px-4'>
            <div className='flex flex-col md:flex-row justify-between items-center '>
                <div className='mb-6 md:mb-0'>
                <h3 className='text-[16px] font-semibold leading-[24px]'>Subscribe to our newsletter</h3>
                <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                 <div className='mb-6 md:mb-0'>
                <input type="email" placeholder="Enter your email" className='border border-gray-300 p-2 rounded-l-md ' />
                <button className='p-2 bg-white text-black rounded-r-md'>Subscribe</button>
                <p className='text-black '> By subscribing you agree to with our privacy policy</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8 mt-8'>
            <div className='flex items-center mb-6 md:mb-0 md:mr-10'>
  <Image 
    src="/img/logo.png" 
    alt="logo" 
    width={32} 
    height={32} 
    className='mr-2'
  />
  <span className='font-extrabold text-[25px]'>Ddsgnr</span>
</div>
                    <div className='mb-6 md:mb-0 md:mr-10'>
                    <h3 className='text-lg font-semibold'>Courses</h3>
                    <ul>
                    <li> <Link href="#" className='text-black hover:text-gray-600'>Business</Link></li>
                    <li> <Link href="#" className='text-black hover:text-gray-600'>Development</Link></li>
                    <li> <Link href="#" className='text-black hover:text-gray-600'>Technology</Link></li>
                    <li> <Link href="#" className='text-black hover:text-gray-600'>Design</Link></li>
                    <li> <Link href="#" className='text-black hover:text-gray-600'>Programming</Link></li>
                    </ul>
                    </div>
                    <div className='mb-6 md:mb-0 md:mr-8'>
                    <h3 className='text-lg font-semibold'>Resources</h3>
                    <ul>
                    <li> <Link href="#" className='text-black hover:text-gray-600'>Career</Link></li> 
                    <li> <Link href="#" className='text-black hover:text-gray-600'>Resume</Link></li>
                    <li> <Link href="#" className='text-black hover:text-gray-600'>Learning</Link></li>
                    <li> <Link href="#" className='text-black hover:text-gray-600'>Interview Preparation</Link></li>
                    <li> <Link href="#" className='text-black hover:text-gray-600'>Jobs</Link></li> 
                    </ul>
                    </div>
                    <div className='mb-6 md:mb-0'>
                    <h3 className='text-lg font-semibold'>About Us</h3>
                    <ul>
                    <li> <Link href="#" className='text-black hover:text-gray-600'>Contact</Link></li> 
                    <li> <Link href="#" className='text-black hover:text-gray-600'>Help/Support</Link></li>
                    <li> <Link href="#" className='text-black hover:text-gray-600'>FAQ</Link></li>
                    <li> <Link href="#" className='text-black hover:text-gray-600'>Terms and Conditions</Link></li>
                    <li> <Link href="#" className='text-black hover:text-gray-600'>Partners</Link></li> 
                    </ul>
            </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center mt-8 border-t pt-4 border-black'>
                <p className='text-black'>&copy; 2023 Ddsgnr. All rights reserved</p>
                <ul className='flex items-center space-x-4'>
                <li> <Link href="#" className='text-black hover:text-gray-600'>Privacy Policy</Link></li>
                <li> <Link href="#" className='text-black hover:text-gray-600'>Terms of Service</Link></li>
                <li> <Link href="#" className='text-black hover:text-gray-600'>Cookies Settings</Link></li>
                </ul>
                <div className='flex items-center mt-4 md:mt-0'>
                    <Link href="#" className='text-black hover:text-gray-600 mr-4'><FaFacebookF /></Link>
                   <Link href="#" className='text-black hover:text-gray-600 mr-4'><FaInstagram /></Link>
                   <Link href="#" className='text-black hover:text-gray-600 mr-4'><FaTwitter /></Link>
                   <Link href="#" className='text-black hover:text-gray-600 mr-4'><FaLinkedinIn/></Link>
                </div>
             </div>
         </div>
    </footer>
  )
}

export default Footer

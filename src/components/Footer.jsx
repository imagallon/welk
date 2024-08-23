import React from 'react'
import footerLogo from '/gdlogo.webp';
import {FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkedAlt, FaPhoneAlt} from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='py-12 bg-gray-300 px-8'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8'>
            <div className='space-y-6 mr-14'>
                <div className='flex items-center space-x-2'>
                    <img src={footerLogo} alt="footer logo" className='w-32 h-auto'/>
                </div>
                <p className='text-para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, necessitatibus dolorem 
                </p>
                <div className='flex space-x-4'>
                    <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                        <FaFacebookF className='text-xl'/>
                    </a>
                    <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                        <FaInstagram className='text-xl'/>
                    </a>
                    <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                        <FaLinkedin className='text-xl'/>
                    </a>
                    <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                        <FaFacebookF className='text-xl'/>
                    </a>
                </div>
            </div>

            <div className='space-y-6'>
                <h3 className='text-xl font font-semibold mb-4'>Quick Links</h3>
                <ul className='space-y-3'>
                    <li>
                        <a href="#hero" className='hover:underline text-gray-700'>Home</a>                                          
                    </li>
                    <li>
                        <a href="#about" className='hover:underline text-gray-700'>About Us</a>
                    </li>
                    <li>
                        <a href="#services" className='hover:underline text-gray-700'>Services</a>
                    </li>
                    <li>
                        <a href="#contact" className='hover:underline text-gray-700'>Contact</a>
                    </li>
                </ul>
            </div>
            <div className='space-y-6'>
                <h3 className='text-xl font font-semibold mb-4'>Supports</h3>
                <ul className='space-y-3'>
                    <li>
                        <a href="#" className='hover:underline text-gray-700'>FAQ</a>                                          
                    </li>
                    <li>
                        <a href="#" className='hover:underline text-gray-700'>Terms of Services</a>
                    </li>
                    <li>
                        <a href="#" className='hover:underline text-gray-700'>Private Policy</a>
                    </li>
                    <li>
                        <a href="#contact" className='hover:underline text-gray-700'>Contact</a>
                    </li>
                </ul>
            </div>
            <div className='space-y-6'>
                <h3 className='text-xl font font-semibold mb-4'>Contact Info</h3>
                <ul className='space-y-3'>
                    <li>
                        <FaMapMarkedAlt className='text-primary'/>
                        <p className='text-gray-700'>123 street, City, Country</p>
                    </li>
                    <li>
                        <FaPhoneAlt className='text-primary'/>
                        <p className='text-gray-700'>+123 456 7890</p>
                    </li>
                    <li>
                        <FaEnvelope className='text-primary'/>
                        <p className='text-gray-700'>info@example.com</p>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
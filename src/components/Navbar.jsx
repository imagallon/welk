import React, { useState } from 'react'

const Navbar = () => {
        const [isOpen, setIsOpen] = useState(false);
        const [activeSection, setActiveSection] = useState('home');
        const navLinks = (
            <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4'>
                <li>
                    <a href="#home"
                    className={`text-white ${activeSection ==='home' ? 'isActive' : ''}`}>Home</a>
                </li>
                <li>
                    <a href="#services"
                    className={`text-white ${activeSection ==='services' ? 'isActive' : ''}`}>Services</a>
                </li>
                <li>
                    <a href="#about"
                    className={`text-white ${activeSection ==='about' ? 'isActive' : ''}`}>About Us</a>
                </li>
                <li>
                    <a href="#gallery"
                    className={`text-white ${activeSection ==='gallery' ? 'isActive' : ''}`}>Gallery</a>
                </li>
                <li>
                    <a href="#testimonial"
                    className={`text-white ${activeSection ==='testimonial' ? 'isActive' : ''}`}>Testimonial</a>
                </li>
            </ul>
        )
           

        
  return (
    <header className='bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10'>
        <div className='container mx-auto flex justify-between items-center h-full'>
            {/* logo */}
            <div>
                <a href='/'>
                <img src='/gdlogo.webp' alt='gulp design logo' className='max-h-14'></img>
                </a>
            </div>
            {/* navitems */}
            <div className='hidden md:flex flex-grow justify-center'>
                <nav>
                 {navLinks}         
                </nav>
            </div>
            {/* button */}
        </div>
    </header>
  )
}

export default Navbar
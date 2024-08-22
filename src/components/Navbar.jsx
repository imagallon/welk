import React, { useEffect, useState } from 'react'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
        const [isOpen, setIsOpen] = useState(false);
        const [activeSection, setActiveSection] = useState('hero');
        const handleToggle = () => {
            setIsOpen(!isOpen)
        }
        
        const handleCloseMenu = () => {
            setIsOpen(false)
        }

        const handleScroll = () => {
            const sections = ['hero', 'services', 'about', 'gallery', 'testimonial'];
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const element = document.getElementById(section);
                if(element){
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;
                    if(scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        setActiveSection(section)
                    }
                }
            })
        }

        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        const handleScrollTo = (targetId) => {
            const targetElement = document.getElementById(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                })
            }
        }

        const navLinks = (
            <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0'>
                <li>
                    <motion.a
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    onClick={(e) => {
                        e.preventDefault();
                        handleCloseMenu();
                        handleScrollTo('hero')
                    }}
                    href="#hero"
                    className={`text-white ${activeSection ==='hero' ? 'isActive' : ''}`}>Home</motion.a>
                </li>
                <li>
                    <motion.a href="#services"
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.9}}
                      onClick={(e) => {
                          e.preventDefault();
                          handleCloseMenu();
                          handleScrollTo('services')
                      }}
                    className={`text-white ${activeSection ==='services' ? 'isActive' : ''}`}>Services</motion.a>
                </li>
                <li>
                    <motion.a href="#about"
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.9}}
                      onClick={(e) => {
                          e.preventDefault();
                          handleCloseMenu();
                          handleScrollTo('about')
                      }}
                    className={`text-white ${activeSection ==='about' ? 'isActive' : ''}`}>About Us</motion.a>
                </li>
                <li>
                    <motion.a href="#gallery"
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.9}}
                      onClick={(e) => {
                          e.preventDefault();
                          handleCloseMenu();
                          handleScrollTo('gallery')
                      }}
                    className={`text-white ${activeSection ==='gallery' ? 'isActive' : ''}`}>Gallery</motion.a>
                </li>
                <li>
                    <motion.a href="#testimonial"
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.9}}
                      onClick={(e) => {
                          e.preventDefault();
                          handleCloseMenu();
                          handleScrollTo('testimonial')
                      }}
                    className={`text-white ${activeSection ==='testimonial' ? 'isActive' : ''}`}>Testimonial</motion.a>
                </li>
            </ul>
        )
           

        
  return (
    <header className='bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10'>
        <div className='container mx-auto flex justify-between items-center h-full'>
            {/* logo */}
            <div>
                <motion.a href='/'>
                <img src='/gdlogo.webp' alt='gulp design logo' className='max-h-14'>
                
                </img>
                </motion.a>
            </div>
            {/* navitems */}
            <div className='hidden md:flex flex-grow justify-center'>
                <nav>
                 {navLinks}         
                </nav>
            </div>
            {/* button */}
            <div className='hidden md:block'>
                <a 
                onClick={e => {
                    e.preventDefault();
                    handleScrollTo('contact')
                }}
                href="#contact" className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded'>
                    Contact Us
                </a>
            </div>

            {/* hamburger menu */}
            <div className='block md:hidden'>
                <button 
                onClick={handleToggle}
                className={`text-white focus:outline-none ${isOpen ? 'border border-white' : ''}`}>
                    <HiOutlineMenuAlt3 className='size-6' />
                </button>
            </div>
        </div>

        {/* mobile nav items */}
        {
            isOpen && (
                <nav className='absolute top-full left-0 w-full bg-heroBg z-20 md:hidden'>
                    <ul className='flex flex-col p-4 space-y-3'>
                        {navLinks.props.children}
                    <li className='py-2'>
                        <a href="#contact"
                        className='text-white bg-primary hover:bg-primary/90 px-4 py-4 rounded'
                        onClick={(e) => {
                            e.preventDefault();
                            handleCloseMenu();
                            handleScrollTo('contact');
                        }}
                        >
                            Contact Us
                        </a>
                    </li>
                    </ul>
                </nav>
            )
        }
    </header>
  )
}

export default Navbar
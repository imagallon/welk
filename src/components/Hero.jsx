import React from 'react'
import heroImg from '../assets/hero.webp'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import {motion} from 'framer-motion'
import { fadeIn } from '../utils/animationVariants';

const Hero = () => {
  return (
    <section id='hero' className='bg-heroBg text-white flex items-center pt-28 md:h-screen'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-10 overflow-y-hidden gap-12 h-full'>
        {/* left side */}
        <motion.div
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:true, amount: 0.7}}
        className='md:w-1/2'>
            <h1 className='text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug'>Start Your Design Journey</h1>
            <p className='text-lg mb-12 md:pr-8'>Elevate your brand with our expert design solutions, from stunning digital experiences to high-quality printed goods like apparel and promotional products. We craft creative strategies that resonate and drive results—let's bring your vision to life with design that inspires.</p>
            <button className='bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90'>
              <a href="#contact" className='flex gap-1 items-center'>
                <span>Get Started</span>
                <FaRegArrowAltCircleRight />
              </a>
            </button>
        </motion.div>
        {/* right side */}
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:true, amount: 0.7}}
        className='md:w-1/2 h-full'>
            <img src={heroImg} alt="hero image" className='w-full object-cover mt-12 pt-7' />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
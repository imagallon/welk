import React, { useState } from 'react';
import thumbnailImg from '../assets/sM.webp';
import { CgPlayButtonO } from "react-icons/cg";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  }

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  }

  return (
    <div id='about' className='bg-[#f7f8fc] pb-16 pt-20'>
      <div className='container mx-auto'>
        <div className='py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8'>
          {/* Left side */}
          <div className='md:w-1/2 w-full mb-8 md:mb-0'>
            {
              !isVideoPlaying ? (
                <div className='relative'>
                  <img 
                    src={thumbnailImg} 
                    alt="video thumbnail" 
                    className='w-full md:w-[446px] h-auto rounded-lg object-cover' 
                  />
                  <button 
                    onClick={handleVideoPlay} 
                    className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer'>
                    <CgPlayButtonO className='text-6xl text-white' />
                  </button>
                </div>
              ) : (null)
            }
          </div>
          {/* Right side */}
          <div className='md:w-1/2 w-full'>
            {/* Your right side content goes here */}
            <h1 className='text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug'>Behind the Scenes</h1>
            <p className='text-lg mb-12 md:pr-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellendus obcaecati soluta molestias animi laboriosam delectus modi ullam, est asperiores amet ducimus cupiditate error esse iure hic eaque officiis ex.</p>
            <button className='bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90'>
              <a href="#contact" className='flex gap-1 items-center'>
                <span>Get Started</span>
                <FaRegArrowAltCircleRight />
              </a>
            </button>
          </div>
        </div>

        {
          isVideoPlaying && (
            <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
              <div className='relative w-full h-full flex items-center justify-center z-50'>
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/ftbZCGIuxTM?autoplay=1&controls=1" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen>
                </iframe>
                <button 
                  onClick={handleCloseVideo} 
                  className='absolute top-4 right-4 text-white text-4xl cursor-pointer'>Close
                  &times;
                </button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default About;

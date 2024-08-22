import React from 'react';

const Gallery = () => {
  return (
    <div id='gallery' style={{ paddingTop: '80px', paddingBottom: '80px'}} className='z-0'>

        <div id="custom-controls-gallery" className="relative w-full z-0" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {/* Item 1 */}
            <div className="hidden duration-1000 ease-in-out" data-carousel-item>
            <img 
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" 
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
                alt="Gallery image 1" 
            />
            </div>
            {/* Item 2 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item-active>
            <img 
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" 
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
                alt="Gallery image 2" 
            />
            </div>
            {/* Item 3 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img 
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" 
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
                alt="Gallery image 3" 
            />
            </div>
            {/* Item 4 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img 
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" 
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
                alt="Gallery image 4" 
            />
            </div>
            {/* Item 5 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img 
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" 
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
                alt="Gallery image 5" 
            />
            </div>
        </div>
        {/* Controls */}
        <div className="flex justify-center items-center pt-4">
            <button 
            type="button" 
            className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none" 
            data-carousel-prev
            >
            <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                <svg 
                className="rtl:rotate-180 w-5 h-5" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 14 10"
                >
                <path 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M13 5H1m0 0 4 4M1 5l4-4"
                />
                </svg>
                <span className="sr-only">Previous</span>
            </span>
            </button>
            <button 
            type="button" 
            className="flex justify-center items-center h-full cursor-pointer group focus:outline-none" 
            data-carousel-next
            >
            <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                <svg 
                className="rtl:rotate-180 w-5 h-5" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 14 10"
                >
                <path 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                />
                </svg>
                <span className="sr-only">Next</span>
            </span>
            </button>
        </div>
        </div>
    </div>
  );
}

export default Gallery;

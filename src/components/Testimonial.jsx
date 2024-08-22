import React from 'react'
import { BsChatLeftQuote } from "react-icons/bs";
import review1 from '../assets/review1.webp';
import review2 from '../assets/review2.webp';


const testimonials =
[
  {
    name: "Maria R.",
    location: "New York, NY",
    testimonial: "Working with [Your Name] was a game-changer for our brand. Their attention to detail and creativity brought our vision to life in a way we never imagined. We couldn’t be happier with the results!",
    image: review1,
  },
  {
    "name": "James L.",
    "location": "Los Angeles, CA",
    "testimonial": "The level of professionalism and dedication from [Your Name] exceeded our expectations. They delivered a stunning website that perfectly represents our company. Highly recommend!",
    image: review2,
  }
]


const Testimonial = () => {
  return (
    <div className='bg-[#f7f8fc] py-12' id='testimonial'>
        <div className=' container mx-auto'>
            <div className='text-center mb-12'>
                <h2 className='text-4xl font-bold font-secondary mb-3'>
                    What our clients say
                </h2>
                <p className='text-lg mb-12 md:w-1/2 mx-auto'>
                Discover the difference we make through the voices of those who’ve partnered with us.
                </p>
            </div>

            <div className='flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8'>

              {
                testimonials.map((testimonial, index) =>(
                  <div key={index} className='relative bg-white rounded-lg p-6 flex-1'>
                    <div className='absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2'>
                    <BsChatLeftQuote className='size-12 text-primary'/>
                    </div>
                    <div className='flex flex-col space-y-3 mb-4'>
                      <p className='text-lg mb-2'>{testimonial.testimonial}</p>
                      <div className='flex gap-1'>
                        <img src={testimonial.image} alt="reviewer image" className='size-16 rounded-full object-cover mr-4' />
                      </div>
                      <div>
                        <p className='font-semibold'>{testimonial.name}</p>
                        <p className='text-gray-600'>{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default Testimonial
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import serviceImg1 from '../assets/webd.jpeg.jpg';
import serviceImg2 from '../assets/web2.jpg';
import serviceImg3 from '../assets/web3.jpg';
import serviceImg4 from '../assets/web4.jpg';
import {motion} from 'framer-motion';
import { fadeIn } from '../utils/animationVariants';


const Services = () => {
  return (
    <div className='bg-[#f7f8fc]' id='services'>
      <div className='pt-28 px-4 container mx-auto'>
        <motion.div
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:true, amount: 0.7}}
        className='text-center space-y-5'>
          <h2 className='text-4xl font-bold font-secondary text-heroBg'>What we offer</h2>
          <p className='md:w-1/2 mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod accusantium, ratione veniam tempora consequatur facere explicabo labore vero perferendis, ipsa aperiam saepe quidem repellendus delectus. Earum quaerat quae consequuntur assumenda!</p>
        </motion.div>
        {/* service category */}
        <div className='py-12 md:h-4/5 mx-auto'>
        <Tabs>
          <motion.TabList
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:true, amount: 0.7}}
          className='flex flex-wrap justify-between items-center md:gap-8 gap-4'>
            <Tab>Web Development</Tab>
            <Tab>Branding</Tab>
            <Tab>Photograpy</Tab>
            {/* <Tab>Promotional Product</Tab> */}
          </motion.TabList>

          <TabPanel>            
           <motion.div 
           variants={fadeIn('down', 0.2)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:true, amount: 0.7}}
           className='flex flex-col md:flex-row gap-8 mt-8'>
           <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
              <h3 className='text-3xl font-semibold text-primary mb-4'>Web Development</h3>
              <p className='mb-8'>Transform your online presence with our cutting-edge web development services. We build responsive, user-friendly websites that not only look great but also perform seamlessly across all devices.</p>
              <h4 className='text-xl font-medium text-black mb-4'>Offerings</h4>
              <ul className='list-disc list-inside space-y-3'>
                <li>Front-End Development</li>
                <li>Back-End Development</li>
                <li>Full-Stack Development</li>
              </ul>
            </div>
            <div className='md:w-1/2'>
              <img src={serviceImg1} alt="image of a coding IDE" className='w-full h-auto rounded-2xl object-cover max-h-80' />
            </div>
           </motion.div>

          </TabPanel>
          <TabPanel>
            
            <motion.div
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:true, amount: 0.7}}
            className='flex flex-col md:flex-row gap-8 mt-8'>
            <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
               <h3 className='text-3xl font-semibold text-primary mb-4'>Branding</h3>
               <p className='mb-8'>Your brand is more than just a logo—it's the story that sets you apart. We craft compelling brand identities that resonate with your audience and leave a lasting impression.</p>
               <h4 className='text-xl font-medium text-black mb-4'>Offerings</h4>
               <ul className='list-disc list-inside space-y-3'>
                 <li>Logo Design</li>
                 <li>Apparel</li>
                 <li>Digitital Branding</li>
               </ul>
             </div>
             <div className='md:w-1/2'>
               <img src={serviceImg2} alt="image of a coding IDE" className='w-full h-full rounded-2xl object-cover max-h-80' />
             </div>
            </motion.div>
 
           </TabPanel>
           <TabPanel>
            
            <motion.div
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:true, amount: 0.7}}
            className='flex flex-col md:flex-row gap-8 mt-8'>
            <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
               <h3 className='text-3xl font-semibold text-primary mb-4'>Photography</h3>
               <p className='mb-8'>Capture your brand’s essence with professional photography that tells your story in every shot. We create compelling visuals that resonate with your audience and elevate your marketing campaigns</p>
               <h4 className='text-xl font-medium text-black mb-4'>Offerings</h4>
               <ul className='list-disc list-inside space-y-3'>
                 <li>Product Photography</li>
                 <li>Event Photography</li>
                 <li>Portrait Photography</li>
               </ul>
             </div>
             <div className='md:w-1/2'>
               <img src={serviceImg3} alt="image of a coding IDE" className='w-full h-auto rounded-2xl object-cover max-h-80' />
             </div>
            </motion.div>
 
           </TabPanel>
           {/* <TabPanel>
            
            <div className='flex flex-col md:flex-row gap-8 mt-8'>
            <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
               <h3 className='text-3xl font-semibold text-primary mb-4'>Promotional Product</h3>
               <p className='mb-8'>Transform your online presence with our cutting-edge web development services. We build responsive, user-friendly websites that not only look great but also perform seamlessly across all devices.</p>
               <h4 className='text-xl font-medium text-black mb-4'>Offerings</h4>
               <ul className='list-disc list-inside space-y-3'>
                 <li>Front-End Development</li>
                 <li>Back-End Development</li>
                 <li>Full-Stack Development</li>
               </ul>
             </div>
             <div className='md:w-1/2'>
               <img src={serviceImg1} alt="image of a coding IDE" className='w-full h-auto rounded-2xl object-cover' />
             </div>
            </div>
 
           </TabPanel> */}
          
          
        </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Services
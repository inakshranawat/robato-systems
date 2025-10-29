import React from 'react'
import TechSpecsSection from '../../components/TechSpecsSection'
import UseCases from '../../components/UseCases'
import SwiperBlogs from '../../components/SwiperBlogs'
import {motion} from 'framer-motion'
import KeyFeatures from '../../components/KeyFeatures'
import BenefitProduction from '../../components/BenefitProduction'
import { ProductionCounterimg, timeCounterimg } from '../../assets/assets'
import { Helmet } from '@dr.pogodin/react-helmet'
import { useAppContext } from '../../context/useContext'

const ProductionCounterDisplay = () => {

  const {setDemoOpen}= useAppContext() 

  return (
    <>
       <Helmet>
  <title>Manufacturing Output Tracking | Digital Production Counting | Industrial Counting Solutions</title>
  <meta 
    name="description" 
    content="Enhance production visibility with digital counters. Track output accurately and improve manufacturing efficiency with real-time industrial counting solutions." 
  />
  <script type="application/ld+json">
    {JSON.stringify( {
          "@context": "https://schema.org/",
          "@type": "Article",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${import.meta.env.VITE_BASE_URL}/production-counter-display`
          },
          "headline": "Optimize Production with LED Counter Display Boards | Digital Production Counters",
          "description": "Explore Andon Board Displays by MachinoX pro. Streamline communication, enhance visibility, and boost productivity with our cutting-edge solutions.",
          "image": {
            "@type": "ImageObject",
            "url": `${import.meta.env.VITE_BASE_URL}/images/production-counter-display.png`,
            "width": "900",
            "height": "485"
          },
          "author": {
            "@type": "Organization",
            "name": "Robato Systems Pvt. Ltd."
          },
          "publisher": {
            "@type": "Organization",
            "name": "Robato Systems Pvt. Ltd.",
            "logo": {
              "@type": "ImageObject",
              "url": `${import.meta.env.VITE_BASE_URL}/logo.png`,
              "width": "350",
              "height": "60"
            }
          },
          "datePublished": "2025-10-28",
          "dateModified": "2025-10-28"
        })}
  </script>
</Helmet>


    <div className='bg-gray-50'>
       {/* First Section */}
       <div className='flex flex-col lg:flex-row items-center gap-6 lg:gap-10 px-4 sm:px-6 md:px-10 lg:px-15 py-10 sm:py-16 lg:py-20'>
         <div className='flex-1 mt-6 lg:mt-10 w-full'>
           <h1 className='font-bold tracking-tighter text-3xl sm:text-4xl lg:text-5xl w-full max-w-[750px] uppercase'>
             optimize your <span className='text-indigo-900'>operations</span> with production counter displays
           </h1>
           <p className='text-base sm:text-lg lg:text-xl mt-4 lg:mt-5 w-full max-w-[600px]'>
             In the competitive world of manufacturing, staying on top of production metrics is crucial for maintaining efficiency and meeting targets. Our Production Counter Displays are designed to provide real-time tracking and visibility into your production processes. Whether you need LED Counter Display Boards or Digital Production Counters, our high-quality solutions ensure you stay informed and in control.
           </p>
         </div>
         <div className='w-full lg:w-auto flex justify-center'>
           <motion.img 
             className='w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[500px] filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.6)] lg:drop-shadow-[0_25px_30px_rgba(0,0,0,0.8)]'
             initial={{opacity:0, x:50}}
             whileInView={{opacity:1, x:0}}
             transition={{duration:1}}
             viewport={{once: true}}
             src={timeCounterimg} 
             alt="Time Counter Display" 
           />
         </div>
       </div>

       {/* Second Section */}
       <div className='flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-20 px-4 sm:px-6 md:px-10 lg:px-15 py-10 sm:py-16 lg:py-20 mt-6 lg:mt-10'>
         <div className='w-full lg:w-auto flex justify-center order-2 lg:order-1'>
           <motion.img 
             className='w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[500px] filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.6)] lg:drop-shadow-[0_25px_30px_rgba(0,0,0,0.8)]'
             initial={{opacity:0, x:-50}}
             whileInView={{opacity:1, x:0}}
             transition={{duration:1}}
             viewport={{once: true}}
             src={ProductionCounterimg} 
             alt="Production Counter Display" 
           />
         </div>
         <div className='flex-1 w-full order-1 lg:order-2'>
           <h1 className='font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl w-full max-w-[600px] uppercase'>
             What is a <span className='text-indigo-900'>Production Counter Display?</span>
           </h1>
           <p className='text-base sm:text-lg lg:text-xl mt-4 lg:mt-5 w-full max-w-[600px]'>
             In the competitive world of manufacturing, staying on top of production metrics is crucial for maintaining efficiency and meeting targets. Our Production Counter Displays are designed to provide real-time tracking and visibility into your production processes. Whether you need LED Counter Display Boards or Digital Production Counters, our high-quality solutions ensure you stay informed and in control.
           </p>
         </div>
       </div>
       
       <BenefitProduction/>
       <KeyFeatures/>
       <TechSpecsSection/>
       <UseCases/>      
       <SwiperBlogs/>
    </div>
    </>
  )
}

export default ProductionCounterDisplay
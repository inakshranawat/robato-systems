

import { useNavigate } from 'react-router-dom'
import { useAppContext } from "../../context/useContext";

import SwiperBlogs from '../../components/SwiperBlogs'
import React, { useState } from 'react';
import { automotiveQuestion } from '../../assets/assets.js';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { 
  alertmobiletiltimg, 
  automotive_bgimg, 
  cncdashbordtiltimg, 
  cnctabletimg, 
  compantytablettiltimg, 
  companybgimg, 
  companylaptoptiltimg, 
  companymanimg, 
  integration_laptopimg,
  tablet_alarmimg
} from '../../assets/assets';

import IndustrySolution from '../../components/IndustrySolutions';
import IndustrySolutions from '../../components/IndustrySolutions';
import MachinoxProApplication from '../../components/MachinoxProApplication';
import ShopFloor from '../../components/ShopFloor';
import { Helmet } from '@dr.pogodin/react-helmet'
const Automotive = () => {
  const navigate = useNavigate();
  const { setDemoOpen } = useAppContext();
    const [hoverIndex, setHoverIndex] = useState(null);
  

  return (
    <>
     <Helmet>
  <title>Automotive Production Monitoring | Automotive manufacturing solutions</title>
  <meta 
    name="description" 
    content="Optimize automotive production with digital twin technology. Enhance predictive maintenance and streamline operations for maximum efficiency" 
  />
  <script type="application/ld+json">
    {JSON.stringify( {
          "@context": "https://schema.org/",
          "@type": "Article",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${import.meta.env.VITE_BASE_URL}/automotive`
          },
          "headline": "MachinoX Pro - Automotive Manufacturing Solutions",
          "description": "Optimize precision and efficiency in automotive manufacturing with MachinoX pro. Explore cutting-edge machine metric solutions for automation excellence",
          "image": {
            "@type": "ImageObject",
            "url":  `${import.meta.env.VITE_BASE_URL}/images/mm20-laptop_0003_Extensibility-Integrations-44_dropshadow.png`,
            "width": "1260",
            "height": "815"
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

  <script type="application/ld+json">
    {JSON.stringify( {
      "@context": "https://schema.org/",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is machine monitoring, and why is it important in automotive manufacturing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Machine monitoring involves real-time tracking and analysis of machines and equipment on the production floor. It is crucial in automotive manufacturing to ensure optimal production efficiency, reduce downtime, and maintain product quality."
          }
        },
        {
          "@type": "Question",
          "name": "How can machine monitoring benefit my automotive manufacturing business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Machine monitoring can help you improve overall equipment effectiveness (OEE), reduce maintenance costs, prevent unplanned downtime, enhance product quality, and increase production output."
          }
        },
        {
          "@type": "Question",
          "name": "What types of machines and equipment can be monitored using your service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our machine monitoring service is versatile and can monitor a wide range of machines used in automotive manufacturing, including CNC machines, robotic assembly lines, injection molding machines, and more."
          }
        },
        {
          "@type": "Question",
          "name": "Is your machine monitoring system compatible with existing manufacturing equipment and systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our system is designed to integrate seamlessly with your existing equipment and manufacturing software, making it easy to implement without major disruptions."
          }
        },
        {
          "@type": "Question",
          "name": "How do I access real-time data from the monitored machines?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can access real-time data through our user-friendly web interface or mobile app. Our system provides live dashboards and reports to keep you informed at all times."
          }
        },
        {
          "@type": "Question",
          "name": "Can your system predict machine failures or maintenance needs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our advanced analytics and machine learning algorithms can predict potential machine failures and maintenance needs, allowing you to schedule maintenance proactively and avoid costly downtime."
          }
        },
        {
          "@type": "Question",
          "name": "Is data security a concern with machine monitoring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We prioritize data security and use industry-standard encryption and authentication protocols to protect your data. Our system is designed to comply with data privacy regulations."
          }
        },
        {
          "@type": "Question",
          "name": "What kind of technical support and training do you offer to users of your machine monitoring service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide comprehensive training to help you get started with our system, and our technical support team is available to assist with any questions or issues you may encounter."
          }
        },
        {
          "@type": "Question",
          "name": "Can I customize the alerts and notifications I receive from the machine monitoring system?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can customize alerts and notifications based on your specific preferences and production goals. You can choose to receive alerts for various events, such as machine downtime, production deviations, or maintenance reminders."
          }
        },
        {
          "@type": "Question",
          "name": "How can I get started with your machine monitoring service for my automotive manufacturing facility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Getting started is easy. Contact our sales team, and we will schedule a consultation to understand your needs and provide a tailored solution to optimize your automotive manufacturing processes using machine monitoring."
          }
        }
      ]
    })}
  </script>
</Helmet>

      {/* Hero Section */}
      <div className="bg-center bg-cover w-full py-20 px-6 md:px-20 lg:px-30" style={{ backgroundImage: `url(${automotive_bgimg})` }}>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold max-w-[1100px]"
        >
          REVOLUTIONIZING AUTOMOTIVE <br /> MANUFACTURING THROUGH <br/>PRECISION
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 md:mt-10 text-base sm:text-lg md:text-xl text-white max-w-[800px]"
        >
          Automotive manufacturers are expected to make more for less. Unleash your machines' data to help you make better, faster, smarter decisions in real time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 md:gap-5 mt-6 md:mt-8"
        >
          <button  onClick={() => (window.location.href = "tel:+61 478 251 187")} className="text-white hover:bg-gray-600 hover:text-black bg-purple-900 px-8 md:px-16 lg:px-20 py-3">
            CALL NOW 
          </button>
          <button onClick={()=> setDemoOpen(true)} className="bg-white px-8 md:px-16 lg:px-20 py-3 hover:bg-transparent border hover:text-white text-purple-900">
            BOOK FREE TRAIL
          </button>
        </motion.div>
      </div>

      
{/**  Accelerate value realization*/}

      <div className="px-6 md:px-20 lg:px-30 py-10 md:py-20">
        

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full sm:w-[400px] md:w-[500px]"
            src={integration_laptopimg}
            alt=""
          />

          <div>
            <h1 className="text-3xl uppercase md:text-4xl lg:text-4xl text-[#444444] font-bold mt-5 lg:mt-0">
              Accelerate value realization
            </h1>
            <div className="mt-5 text-base sm:text-lg md:text-xl max-w-[700px]">
              
             <ul className='list-disc pl-10 mt-5'>
               <li className='mt-3'>Harness machine data to optimize your shop floor operations for increased efficiency.</li>
               <li className='mt-3'>Utilize production analytics to measure and enhance operator productivity.</li>
               <li className='mt-3'>Improve overall process effectiveness through real-time machine monitoring capabilities.</li>
               <li>Achieve higher throughput while reducing production costs.</li>
               <li>Anticipate and prevent downtime proactively</li>
               <li>Empower operators to consistently meet their daily production targets.</li>
             
             </ul>
            </div>
            

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button onClick={()=> setDemoOpen(true)} className="text-white hover:bg-gray-600 hover:text-black bg-purple-900 px-6 md:px-10 py-3">
                GET A QUOTE
              </button>
              <button  onClick={() => (window.location.href = "tel:+61 478 251 187")} className="bg-purple-900 px-6 md:px-10 py-3 hover:text-black border text-white hover:bg-gray-600">
                CALL NOW
              </button>
            </motion.div>
          </div>
        </div>
      </div>

{/** Uncover concealed production potential */}
   
   <div className="px-6 md:px-20 lg:px-30 py-10 md:py-20">
      
        <div className="flex flex-col lg:flex-row items-center gap-10">

          <div>
            <h1 className="text-3xl uppercase md:text-4xl lg:text-4xl text-[#444444] font-bold mt-5 lg:mt-0">
              Uncover concealed production potential
            </h1>
            <div className="mt-5 text-base sm:text-lg md:text-xl max-w-[700px]">
              
             <ul className='list-disc pl-10 mt-5'>
               <li className='mt-3'>Instantly pinpoint underperforming machines for real-time issue resolution.</li>
               <li className='mt-3'>Calculate precise machine utilization to optimize capacity forecasting.</li>
               <li className='mt-3'>Swiftly detect, identify, and rectify defects in the production process.</li>
               <li className='mt-3'>Remove bottlenecks and minimize machine downtime for uninterrupted workflow.</li>
               <li className='mt-3'>Enhance production margins and reduce time-to-market.</li>
             </ul>
            </div>
            

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button onClick={()=> setDemoOpen(true)} className="text-white hover:bg-gray-600 hover:text-black bg-purple-900 px-6 md:px-10 py-3">
                GET A QUOTE
              </button>
              <button  onClick={() => (window.location.href = "tel:+61 478 251 187")} className="bg-purple-900 px-6 md:px-10 py-3 hover:text-black border text-white hover:bg-gray-600">
                CALL NOW
              </button>
            </motion.div>
          </div>
              <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full sm:w-[400px] md:w-[500px]"
            src={tablet_alarmimg}
            alt=""
          />
        </div>
      </div>



{/** MACHINOX PRO APPLICATIONS*/}
      
      <MachinoxProApplication/>


{/**WE LET OUR RESULTS DO THE TALKING FOR US */}
<div className="bg-[#F8F8F8] px-5 md:px-10 lg:px-20 py-16">
      {/* Heading */}
      <motion.h1
        className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#444444] text-center md:text-left mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        WE LET OUR RESULTS DO THE TALKING
      </motion.h1>

      {/* Container */}
      <motion.div
        className="bg-white shadow-[0_25px_60px_rgba(0,0,0,0.25)] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{once:true}}
      >
        {/* Left Text */}
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#444444] text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{once:true}}
        >
          INDUSTRY 4.0 AND <br /> THE STATE OF <br/> AUTOMOTIVE <br/> MANUFACTURING
        </motion.h1>

        {/* Right Content */}
        <motion.div
          className="max-w-lg text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{once:true}}
        >
          <p className="text-sm md:text-base text-[#444444]">
            Industry 4.0 and the State of Automotive Manufacturing" explores priorities and new challenges for automotive manufacturers, as well as discuss new concepts and technologies driving the next generation of automotive manufacturing, such as the IIoT, Digital Twins and Predictive Maintanance.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row gap-5">
            <motion.button
            onClick={()=> navigate('/contact-us')}
              className="bg-purple-950 text-white px-8 py-2 hover:bg-gray-600 hover:text-black rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTACT US
            </motion.button>
            
          </div>
        </motion.div>
      </motion.div>
    </div>

{/**industry solutions */}

      <IndustrySolutions/>
      
      <div className='py-20'>

       <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      {/* Heading */}
      <h1 className='font-bold text-[#444444] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase'>
        Frequently Asked Questions
      </h1>

      {/* Accordion */}
      <div className="mt-6 sm:mt-8 md:mt-10 flex-1 overflow-y-auto h-[400px] sm:h-[500px] md:h-[600px] pr-1 sm:pr-2">
        {automotiveQuestion.map((item, index) => (
          <div
            key={index}
            className="mb-4 sm:mb-5 md:mb-6 select-none transition-all duration-300"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {/* Accordion Title */}
            <div
              className={`flex items-center justify-between uppercase cursor-pointer p-3 sm:p-4 transition-all duration-300 relative rounded-md ${
                hoverIndex === index
                  ? "bg-indigo-100 text-indigo-900 shadow-md"
                  : "hover:bg-gray-100"
              }`}
            >
              <h2
                className={`text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300 ${
                  hoverIndex === index ? "text-indigo-900" : "text-zinc-700"
                }`}
              >
                {item.title}
              </h2>

              {/* Rotating arrow icon */}
              <motion.div
                animate={{ rotate: hoverIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-purple-700 flex-shrink-0"
              >
                <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>

              {/* Bottom border */}
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-zinc-500 opacity-50 rounded-full"></span>
            </div>

            {/* Accordion Content on Hover */}
            <AnimatePresence>
              {hoverIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="mt-2 bg-white text-gray-700 rounded-b-md pl-3 sm:pl-4 pr-2 text-sm sm:text-base shadow-sm"
                >
                  {Array.isArray(item.description) ? (
                    item.description.map((block, i) =>
                      typeof block === "string" ? (
                        <p key={i} className="mb-1">{block}</p>
                      ) : block.type === "list" ? (
                        <ul key={i} className="list-disc pl-4 sm:pl-6 mb-2">
                          {block.items.map((li, idx) => (
                            <li key={idx}>{li}</li>
                          ))}
                        </ul>
                      ) : null
                    )
                  ) : (
                    <p>{item.description}</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
      </div>

      <SwiperBlogs/>

      <ShopFloor/>
      
    </>
  )
}

export default Automotive

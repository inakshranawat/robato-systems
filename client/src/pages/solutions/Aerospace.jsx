

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useAppContext } from "../../context/useContext";
import SwiperBlogs from '../../components/SwiperBlogs'
import { aerospaceQuestion } from '../../assets/assets.js';
import { ChevronDown } from 'lucide-react';
import {  AnimatePresence } from "framer-motion";
import { 
  aerospace_bgimg,
  aerospace_laptopimg,
  alertmobiletiltimg, 
  cncdashbordtiltimg, 
  cnctabletimg, 
  compantytablettiltimg, 
  companybgimg, 
  companylaptoptiltimg, 
  companymanimg 
} from '../../assets/assets';
import { motion } from 'framer-motion'
import IndustrySolutions from '../../components/IndustrySolutions';
import MachinoxProApplication from '../../components/MachinoxProApplication';
import ShopFloor from '../../components/ShopFloor';
import { Helmet } from '@dr.pogodin/react-helmet'

const Aerospace = () => {
  const navigate = useNavigate();
  const { setDemoOpen } = useAppContext();
  
  
    const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <>
    <Helmet>
  <title>Aerospace Defense Manufacturing | Downtime Monitoring Solutions | Real-Time Production Tracking</title>
  <meta 
    name="description" 
    content="Improve aerospace manufacturing with precision monitoring and digital display solutions. Ensure compliance and boost production efficiency." 
  />
    <script type="application/ld+json">
    {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Article",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${import.meta.env.VITE_BASE_URL}/aerospace-defense`
          },
          "headline": "MachinoX pro for Aerospace Defense Monitoring",
          "description": "Explore aerospace defense monitoring at MachinoX pro. Elevate operational efficiency with cutting-edge technology and expert services.",
          "image": {
            "@type": "ImageObject",
            "url": `${import.meta.env.VITE_BASE_URL}/images/MM20_Tablet_opdash_tab_part-count.png`,
            "width": "2370",
            "height": "1614"
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
        }
            )}
  </script>

  
    <script type="application/ld+json">
    {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is Robato Systems, and what services do you offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Robato Systems is a leading provider of machine monitoring services tailored to the aerospace, defense, and manufacturing sectors. We offer real-time monitoring, data analytics, and predictive maintenance solutions to optimize machine performance and minimize downtime."
              }
            },
            {
              "@type": "Question",
              "name": "How can machine monitoring benefit my aerospace, defense, or manufacturing business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Machine monitoring provides crucial insights into equipment health, efficiency, and production quality. By leveraging our services, you can enhance operational efficiency, reduce unplanned downtime, and improve overall productivity."
              }
            },
            {
              "@type": "Question",
              "name": "What types of machines can Robato Systems monitor?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We can monitor a wide range of machines and equipment commonly found in aerospace, defense, and manufacturing settings. This includes CNC machines, robotics, 3D printers, milling machines, and more."
              }
            },
            {
              "@type": "Question",
              "name": "Is your monitoring system compatible with existing equipment and systems in my facility?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our monitoring systems are designed to integrate seamlessly with your existing machinery and systems. We can adapt to various communication protocols and equipment types to ensure a smooth integration process."
              }
            },
            {
              "@type": "Question",
              "name": "How does real-time monitoring work, and what data can I access in real time?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Real-time monitoring involves continuous data collection from your machines. You can access live information about machine status, performance metrics, production rates, and any anomalies or issues as they occur."
              }
            },
            {
              "@type": "Question",
              "name": "Can Robato Systems predict maintenance needs and prevent unexpected breakdowns?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our advanced analytics and machine learning algorithms enable us to predict maintenance requirements. By identifying potential issues early, we help you schedule maintenance proactively, reducing costly unplanned downtime."
              }
            },
            {
              "@type": "Question",
              "name": "Is data security a concern with Robato Systems' monitoring services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We take data security seriously. Our systems are designed with robust security measures to protect your data. We use encryption, access controls, and industry best practices to ensure the confidentiality and integrity of your data."
              }
            },
            {
              "@type": "Question",
              "name": "How can I access and analyze the data collected by Robato Systems' monitoring solutions?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can access and analyze the data through our user-friendly web-based dashboard and mobile app. Our platform provides customizable reports and visualizations to help you make informed decisions."
              }
            },
            {
              "@type": "Question",
              "name": "What level of technical support and training does Robato Systems provide?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer comprehensive technical support and training to ensure you get the most out of our services. Our team will assist with setup, provide training for your staff, and offer ongoing support to address any questions or issues."
              }
            },
            {
              "@type": "Question",
              "name": "How can I get started with Robato Systems' machine monitoring services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "To get started, simply contact our sales team through our website. We'll arrange a consultation to assess your needs and customize a solution that fits your aerospace, defense, or manufacturing business."
              }
            }
          ]
        }
            )}
  </script>
</Helmet>

      {/* Hero Section */}
      <div className="bg-center bg-cover w-full py-20 px-6 md:px-20 lg:px-30" style={{ backgroundImage: `url(${aerospace_bgimg})` }}>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl text-depth md:text-5xl lg:text-6xl text-white font-extrabold max-w-[1100px]"
        >
          TRANSFORM AEROSPACE <br /> DEFENCE MONITORING
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 md:mt-10 text-base sm:text-lg md:text-xl text-white max-w-[800px]"
        >
          Make higher quality parts in less time with apps for real-time machine monitoring, tooling optimization, and process control for aerospace part production.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 md:gap-5 mt-6 md:mt-8"
        >
          <button onClick={() => setDemoOpen(true)} className="text-white hover:bg-gray-600 hover:text-black bg-purple-900 px-8 md:px-16 lg:px-20 py-3">
            BOOK FREE TRIAL
          </button>
          <button  onClick={() => (window.location.href = "tel:+61 478 251 187")} className="bg-white px-8 md:px-16 lg:px-20 py-3 hover:bg-transparent border hover:text-white text-purple-900">
            CALL NOW
          </button>
        </motion.div>
      </div>

      
{/**  ELEVATE SECURITY AND EFFICIENCY WITH OUR... */}

      <div className="px-6 md:px-20 lg:px-30 py-10 md:py-20">
        

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.img
          loading='lazy'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full sm:w-[400px] md:w-[500px]"
            src={cnctabletimg}
            alt=""
          />

          <div>
            <h1 className="text-3xl md:text-4xl lg:text-4xl text-[#444444] font-bold mt-5 lg:mt-0">
              Elevate Security and Efficiency with Our State-of-the-Art Machineo X pro Solutions
            </h1>
            <div className="mt-5 text-base sm:text-lg md:text-xl max-w-[700px]">
             <p>Aerospace and Defense manufacturers can achieve significant enhancements in production quality, efficiency, and cost reduction through the utilization of machine data.</p> 
             <ul className='list-disc pl-10 mt-5'>
               <li className='mt-3'>Enhance production efficiency by gaining real-time visibility into machine utilization and capacity analysis.</li>
               <li className='mt-3'>Reduce cycle times and boost yield through user-friendly reporting and analytics tools.</li>
               <li className='mt-3'>Streamline setups and changeovers with operator-focused applications that empower the achievement of production goals.</li>
             </ul>
            </div>
            

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button onClick={()=> navigate('/contact-us')} className="text-white hover:bg-gray-600 hover:text-black bg-purple-900 px-6 md:px-10 py-3">
                GET A QUOTE
              </button>
              <button  onClick={() => (window.location.href = "tel:+61 478 251 187")} className="bg-purple-900 px-6 md:px-10 py-3 hover:text-black border text-white hover:bg-gray-600">
                CALL NOW
              </button>
            </motion.div>
          </div>
        </div>
      </div>

{/** MINIMIZE TOOLS BREAKAGES AND THE GENERATION OF THE.. */}
   
   <div className="px-6 md:px-20 lg:px-30 py-10 md:py-20">
      
        <div className="flex flex-col lg:flex-row items-center gap-10">

          <div>
            <h1 className="text-3xl md:text-4xl lg:text-4xl text-[#444444] font-bold mt-5 lg:mt-0">
              MINIMIZE TOOLING BREAKAGES AND THE GENERATION OF SCRAPPED PARTS
            </h1>
            <div className="mt-5 text-base sm:text-lg md:text-xl max-w-[700px]">
              
             <ul className='list-disc pl-10 mt-5'>
               <li className='mt-3'>Machine failures no longer need to result in extensive downtime and production losses.</li>
               <li className='mt-3'>Enable your machines to provide real-time insights for improved production and business decision-making.</li>
               <li className='mt-3'>Utilize high-frequency data analysis to pinpoint patterns in tool wear.</li>
               <li className='mt-3'>Receive alerts when a machine shows signs of potential drift that could lead to out-of-spec parts.</li>
               <li className='mt-3'>Predict tooling breakages before they occur, preventing both downtime and quality problems.</li>
             </ul>
            </div>
            

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button onClick={()=> navigate('/contact-us')} className="text-white hover:bg-gray-600 hover:text-black bg-purple-900 px-6 md:px-10 py-3">
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
            src={aerospace_laptopimg}
            alt=""
          />
        </div>
      </div>



{/** MACHINOX PRO APPLICATIONS*/}
      
      <MachinoxProApplication/>


{/**REQUEST YOUR FREE TRIAL */}
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
          REQUEST YOUR <br /> FREE TRIAL
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
            In their own words, learn about all of the fantastic gains one aerospace manufacturing CEO and his team were able to see after implementing MachinoX Pro. Their investment in MachinoX Pro paid for itself in just 5 days!
          </p>

          <div className="mt-5 flex flex-col sm:flex-row gap-5">
            <motion.button
              onClick={()=> setDemoOpen(true)}
              className="bg-purple-950 text-white px-8 py-2 hover:bg-gray-600 hover:text-black rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET A QUOTE
            </motion.button>
            <motion.button
             onClick={() => (window.location.href = "tel:+61 478 251 187")}
              className="bg-transparent text-purple-950 border border-purple-950 px-9 py-2 hover:bg-purple-950 hover:text-white rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CALL NOW
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>

{/**industry solutions */}

      <IndustrySolutions/>
      
{/**frequently asked questions */}      
      <div className='py-20'>

      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      {/* Heading */}
      <h1 className='font-bold text-[#444444] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase'>
        Frequently Asked Questions
      </h1>

      {/* Accordion */}
      <div className="mt-6 sm:mt-8 md:mt-10 flex-1 overflow-y-auto h-[400px] sm:h-[500px] md:h-[600px] pr-1 sm:pr-2">
        {aerospaceQuestion.map((item, index) => (
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

export default Aerospace

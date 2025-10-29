

import React, { useState } from 'react';
import { oilGasQuestion } from '../../assets/assets.js';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom'
import { useAppContext } from "../../context/useContext";

import SwiperBlogs from '../../components/SwiperBlogs'
import { 
 
  brotherlaptopimg, 
  cncdashboardimg,  
  oil_gas_bgimg,

} from '../../assets/assets';

import IndustrySolutions from '../../components/IndustrySolutions';
import MachinoxProApplication from '../../components/MachinoxProApplication';
import ShopFloor from '../../components/ShopFloor';
import { Helmet } from '@dr.pogodin/react-helmet'

const OilGas = () => {
  const navigate = useNavigate();
  const { setDemoOpen } = useAppContext();
    const [hoverIndex, setHoverIndex] = useState(null);
  

  return (
    <>
    <Helmet>
          <title>Oil & Gas Manufacturing | Production Monitoring & Andon Solutions | Downtime Tracking</title>
          <meta 
            name="description" 
            content="Optimize oil & gas manufacturing with real-time production monitoring, downtime tracking, and smart Andon display systems. Improve efficiency with IIoT-powered production management software for refinery automation." 
          />
          <script type="application/ld+json">
    {JSON.stringify( {
          "@context": "https://schema.org/",
          "@type": "Article",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${import.meta.env.VITE_BASE_URL}/oil-gas`
          },
          "headline": "MachinoX Pro: Precision for Oil & Gas Manufacturing",
          "description": "Experience unparalleled MachinoX pro excellence in oil and gas manufacturing. Optimize efficiency and performance with our advanced technologies.",
          "image": {
            "@type": "ImageObject",
            "url": `${import.meta.env.VITE_BASE_URL}/images/MM20-LCD-Dash_drop_shadow.png`,
            "width": "2500",
            "height": "1385"
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
          "name": "What is machine monitoring, and why is it essential for the oil, gas, and manufacturing sectors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Machine monitoring is the process of continuously tracking the performance and condition of industrial machinery. It is vital for these industries because it helps prevent costly downtime, enhances operational efficiency, and ensures workplace safety."
          }
        },
        {
          "@type": "Question",
          "name": "What types of equipment can be monitored with your services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our machine monitoring services can be applied to a wide range of equipment, including pumps, compressors, turbines, generators, CNC machines, and more."
          }
        },
        {
          "@type": "Question",
          "name": "How does your machine monitoring system work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We utilize a combination of sensors, data collection devices, and advanced analytics software to gather real-time data from your machines. This data is then analyzed to detect anomalies and predict potential issues."
          }
        },
        {
          "@type": "Question",
          "name": "What benefits can I expect from using your machine monitoring services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "By using our services, you can expect reduced downtime, increased equipment lifespan, improved maintenance planning, and enhanced overall operational efficiency, leading to cost savings and higher profitability."
          }
        },
        {
          "@type": "Question",
          "name": "Is your machine monitoring system compatible with existing industrial control systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "By using our services, you can expect reduced downtime, increased equipment lifespan, improved maintenance planning, and enhanced overall operational efficiency, leading to cost savings and higher profitability.  Yes, our system is designed to be compatible with a wide range of industrial control systems and can be seamlessly integrated into your existing infrastructure."
          }
        },
        {
          "@type": "Question",
          "name": "How secure is the data collected through your machine monitoring system?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Data security is a top priority for us. We employ industry-standard encryption and security measures to protect your data from unauthorized access or cyber threats."
          }
        },
        {
          "@type": "Question",
          "name": "Can your system provide remote monitoring capabilities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our machine monitoring system offers remote monitoring, allowing you to access real-time data and receive alerts from anywhere with an internet connection."
          }
        },
        {
          "@type": "Question",
          "name": "How does predictive maintenance work, and how can it benefit my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our machine monitoring system offers remote monitoring, allowing you to access real-time data and receive alerts from anywhere with an internet connection. Predictive maintenance uses data analytics to predict when equipment is likely to fail, enabling you to schedule maintenance proactively, avoid unexpected breakdowns, and reduce maintenance costs."
          }
        },
        {
          "@type": "Question",
          "name": "What kind of support and training do you provide to your clients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer comprehensive training and support to ensure that your team can effectively use our machine monitoring system. Our experts are available to assist with setup, troubleshooting, and data interpretation."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started with your machine monitoring services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer comprehensive training and support to ensure that your team can effectively use our machine monitoring system. Our experts are available to assist with setup, troubleshooting, and data interpretation. To get started, simply reach out to our team, and we will schedule a consultation to discuss your specific needs and tailor a solution that best fits your organization's requirements."
          }
        }
      ]
    })}
  </script>
        </Helmet>
      {/* Hero Section */}
      <div className="bg-center bg-cover w-full py-20 px-6 md:px-20 lg:px-30" style={{ backgroundImage: `url(${oil_gas_bgimg})` }}>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold max-w-[1100px]"
        >
          REVOLUTIONIZE YOUR <br /> OPERATIONS WITH <br/> INDUSTRY 4.0  
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 md:mt-10 text-base sm:text-lg md:text-xl text-white max-w-[800px]"
        >
          Oil & gas equipment manufacturers need every edge they can to stay ahead in an ever-more competitive landscape. Don't worry, we have your back.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 md:gap-5 mt-6 md:mt-8"
        >
          <button onClick={() => (window.location.href = "tel:+61 478 251 187")} className="text-white hover:bg-gray-600 hover:text-black bg-purple-900 px-8 md:px-16 lg:px-20 py-3">
            CALL NOW
          </button>
          <button onClick={()=> setDemoOpen(true)} className="bg-white px-8 md:px-16 lg:px-20 py-3 hover:bg-transparent border hover:text-white text-purple-900">
            BOOK FREE TRIAL
          </button>
        </motion.div>
      </div>

      
{/**  Expert Services for Optimizing Oil and Gas Processes*/}

      <div className="px-6 md:px-20 lg:px-30 py-10 md:py-20">
        

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full sm:w-[400px] md:w-[500px]"
            src={cncdashboardimg}
            alt=""
          />

          <div>
            <h1 className="text-3xl uppercase md:text-4xl lg:text-4xl text-[#444444] font-bold mt-5 lg:mt-0">
             Expert Services for Optimizing Oil and Gas Processes
            </h1>
            <div className="mt-5 text-base sm:text-lg md:text-xl max-w-[700px]">
              
             <ul className='list-disc pl-10 mt-5'>
               <li className='mt-3'>Foster continuous improvement by leveraging real-time analytics and monitoring of machine performance.</li>
               <li className='mt-3'>Fine-tune job standards, scheduling, and part costs for optimal efficiency.</li>
               <li className='mt-3'>Attain real-time visibility into both operational and asset performance.</li>
                <li className='mt-3'>Facilitate knowledge sharing and collaboration through a unified, data-driven single source of truth.</li>                
             
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
              <button onClick={() => (window.location.href = "tel:+61 478 251 187")} className="bg-purple-900 px-6 md:px-10 py-3 hover:text-black border text-white hover:bg-gray-600">
                CALL NOW
              </button>
            </motion.div>
          </div>
        </div>
      </div>

{/** Minimize equipment downtime and enhance maintenance efficiency */}
   
   <div className="px-6 md:px-20 lg:px-30 py-10 md:py-20">
      
        <div className="flex flex-col lg:flex-row items-center gap-10">

          <div>
            <h1 className="text-3xl uppercase md:text-4xl lg:text-4xl text-[#444444] font-bold mt-5 lg:mt-0">
             Minimize equipment downtime and enhance maintenance efficiency
            </h1>
            <div className="mt-5 text-base sm:text-lg md:text-xl max-w-[700px]">
              
             <ul className='list-disc pl-10 mt-5'>
               <li className='mt-3'>Utilize control and sensor data monitoring to refine preventative maintenance schedules and procedures</li>
               <li className='mt-3'>Perform remote diagnostics using PMC (Predictive Maintenance Control) and diagnostic control data, implementing predictive algorithms to preemptively notify of impending issues</li>
               <li className='mt-3'>Identify the alarms responsible for the most downtime and establish monitoring systems to alert maintenance personnel when specific alarms occur.</li>
               
               
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
              <button onClick={() => (window.location.href = "tel:+61 478 251 187")} className="bg-purple-900 px-6 md:px-10 py-3 hover:text-black border text-white hover:bg-gray-600">
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
            src={brotherlaptopimg}
            alt=""
          />
        </div>
      </div>



{/** MACHINOX PRO APPLICATIONS*/}
      
      <MachinoxProApplication/>


{/**THE NUMBERS SPEAK FOR THEMSELVES.*/}
<div className="bg-[#F8F8F8] px-5 md:px-10 lg:px-20 py-16">
      {/* Heading */}
      <motion.h1
        className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#444444] text-center md:text-left mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        THE NUMBERS SPEAK FOR THEMSELVES.
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
          CASE STUDY:NOV<br /> BUYS BACK <br/> CAPACITY  
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
            By gaining access to and being able to visualize data from its machines, NOV was able to get information to the correct individuals faster and more efficiently all with greater accuracy. The results? An increase in machine utilization by 20% in just three months.

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
        {oilGasQuestion.map((item, index) => (
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

export default OilGas

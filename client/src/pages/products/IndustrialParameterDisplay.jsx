import React, { useState } from "react";
import {AnimatePresence, motion}  from "framer-motion"
import {  bgimg,  downtimelaptopimg,  Connectivityimg,  Oeeimg, customizable_alert_icon,  user_friendly_icon, retail_icon, food_industry_icon, Manufacturingimg, warehouses_icon, assembly_lines_icon, packaging_facilites_icon, automotive_icon, oee_report_laptopimg, efficiency_report_laptopimg, timeCounterimg, Compatibilityimg, Scalabilityimg, historical_analysis_icon, planning_icon, quality_controls_icon, supplie_icon, tracking_icon, customization_icon, cloud_based_icon, api_support_icon, comprehensive_reporting_icon, security_icon, optimize_icon } from '../../assets/assets'
import SwiperBlogs from '../../components/SwiperBlogs'
import { Helmet } from '@dr.pogodin/react-helmet'
import {useAppContext} from "../../context/useContext"

const IndustrialParameterDisplay = () => {

const [activeImage, setActiveImage] = useState(0)
const {setDemoOpen} = useAppContext()

   // Framer Motion variants for slide animation
  const imageVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: { x: -200, opacity: 0, transition: { duration: 0.5 } }
  }

  const TechSpecsimages = [downtimelaptopimg,oee_report_laptopimg,efficiency_report_laptopimg]

  // Animation variants for bottom icons
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const useCases = [
      {
        icon: historical_analysis_icon,
        title: "ROOT CAUSE ANALYSIS",
        description: "Pinpoint the causes of downtime, such as equipment failures or maintenance issues, for quick resolution."
      },
      {
        icon: planning_icon,
        title: "PRODUCTION PLANNING ",
        description: "Optimize production schedules based on historical downtime data, ensuring efficient resource allocation."
      },
      {
        icon: optimize_icon,
        title: "MAINTENANCE OPTIMIZATION",
        description: "Schedule preventive maintenance activities during planned downtime to minimize unplanned disruptions."
      },
      {
        icon: packaging_facilites_icon,
        title: "PACKAGING FACILITIES",
        description: "Monitor packaging lines, minimizing downtime and maximizing packaging efficiency."
      },
      {
        icon: quality_controls_icon,
        title: "QUALITY IMPROVEMENT",
        description: "Identify production bottlenecks and quality-related issues contributing to downtime, enabling process enhancements"
      },
      {
        icon: supplie_icon,
        title: "SUPPLIER COLLABORATION ",
        description: "Share downtime data with suppliers to improve the supply chain and reduce delays in raw material deliveries"
      },
      {
        icon: tracking_icon,
        title: "COMPLIANCE TRACKING ",
        description: "Monitor production downtime related to regulatory compliance, ensuring adherence to industry standards."
      }
    ];

  return (
    <>
    <Helmet>
  <title>MachinoX Pro: Industrial Parameter Display Solutions with Digital LED Message Boards</title>
  <meta 
    name="description" 
    content="Optimize operations with MachinoX pro's industrial parameter display solutions. Elevate operations with our reliable digital LED message boards." 
  />
  <script type="application/ld+json">
    {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Article",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id":  `${import.meta.env.VITE_BASE_URL}/industrial-parameter-display`
          },
          "headline": "MachinoX Pro: Industrial Parameter Display Solutions with Digital LED Message Boards",
          "description": "Optimize operations with MachinoX pro's industrial parameter display solutions. Elevate operations with our reliable digital LED message boards.",
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

  <div className="bg-gray-50">

        {/* Hero Section - Responsive */}
        <div className='flex flex-col lg:flex-row items-center gap-6 lg:gap-10 px-4 sm:px-8 lg:px-15 py-12 lg:py-20'>
         <div className='flex-1 mt-6 lg:mt-10'>
           <h1 className='font-bold tracking-tighter text-[#444444] text-3xl sm:text-4xl lg:text-5xl max-w-full lg:w-[600px] uppercase'>
             Industrial ParameterDisplay Solutionsby Robato Systems
           </h1>
           <p className='text-base sm:text-lg lg:text-xl mt-4 lg:mt-5 max-w-full lg:w-[600px]'>
             Production Downtime Monitoring is a cutting-edge solution designed to optimize manufacturing processes by minimizing downtime, ensuring maximum productivity, and boosting overall efficiency. This innovative system offers real-time insights into production line disruptions, allowing businesses to make informed decisions and maintain seamless operations.
           </p>
         </div>

         <div className='w-full lg:w-auto flex justify-center'>
           <motion.img 
             className='w-full max-w-[400px] lg:max-w-[500px] filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.6)] lg:drop-shadow-[0_25px_30px_rgba(0,0,0,0.8)]'
             initial={{opacity:0 , x:50}}
             whileInView={{opacity:1 , x:0}}
             transition={{duration:1}}
             viewport={{once: true}}
             src={timeCounterimg} 
             alt="" 
           />
         </div>
       </div>

       
{/** icons in the flex - Responsive Grid */}

    <div className="mb-10 px-4 sm:px-8">
        {/* --- Bottom Icons (Row 1) --- */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-12 lg:mt-30"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {[
          {
            src: Oeeimg,
            title: "REAL-TIME MONITORING",
            desc: "Instantly track production numbers, helping you stay updated on output metrics.",
          },
          {
            src: comprehensive_reporting_icon,
            title: "Comprehensive Reporting",
            desc: "Generate detailed reports and analytics to identify patterns and trends in downtime.",
          },
          {
            src: customizable_alert_icon,
            title: "ALERT SYSTEM",
            desc: "Receive instant notifications via email or mobile alerts when downtime events occur.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="max-w-sm mx-auto w-full text-center lg:text-left"
          >
            <img className="w-16 lg:w-20 hover:scale-120 transition-all duration-700 mx-auto lg:mx-0 lg:ml-10" src={item.src} alt={item.title} />
            <h2 className="hover:text-[#430099] font-bold text-lg lg:text-xl mt-4 lg:mt-5 lg:ml-10">
              {item.title}
            </h2>
            <p className="font-semibold text-sm lg:text-base mt-2 lg:ml-10">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/** Icons of the second row - Responsive Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-8 lg:mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {[
          {
            src: user_friendly_icon,
            title: "USER-FRIENDLY INTERFACE",
            desc: "Intuitive dashboard for easy navigation and quick access to essential information.",
          },
          {
            src: customization_icon,
            title: "CUSTOMIZATION",
            desc: "Tailor the system to your specific production environment with customizable settings.",
          },
          {
            src: historical_analysis_icon,
            title: "HISTORICAL DATA ANALYSIS",
            desc: "Analyze historical downtime data to prevent recurring issues and optimize processes.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="max-w-sm mx-auto w-full text-center lg:text-left"
          >
            <img className="w-14 hover:scale-120 transition-all duration-700 lg:w-15 mx-auto lg:mx-0 lg:ml-10" src={item.src} alt={item.title} />
            <h2 className="hover:text-[#430099] font-bold text-lg lg:text-xl mt-4 lg:mt-5 lg:ml-10">
              {item.title}
            </h2>
            <p className="font-semibold text-sm lg:text-base mt-2 lg:ml-10">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>

 {/**  BUTTONS - Responsive */}
    <div className="flex flex-col sm:flex-row items-center justify-center py-12 lg:py-20 gap-4 lg:gap-5 px-4">
      <button onClick={()=> setDemoOpen(true)} className="w-full sm:w-auto text-white px-6 py-3 bg-purple-950 hover:bg-gray-600 hover:text-black transition-colors">
        BOOK A FREE TRIAL
      </button>
      <button onClick={() => (window.location.href = "tel:+61 478 251 187")}  className="w-full sm:w-auto bg-transparent border text-purple-950 hover:bg-purple-950 hover:text-white px-6 py-3 transition-colors">
        CALL NOW
      </button>
    </div>

{/**  TECH SPECIFICATIONS - Responsive */}
<div className="py-16 lg:py-30 px-4 sm:px-8" style={{backgroundImage: `url(${bgimg})`}}>

       <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-0 py-12 lg:py-30'>
        <div className='w-full lg:flex-1'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl lg:pl-20 tracking-tighter text-center mt-6 lg:mt-10 text-[#444444] text-depth font-bold uppercase max-w-full lg:w-[800px]'>
            TECHNICAL SPECIFICATIONS
          </h1>
        </div>

        {/* Fixed Animated Image Container - Responsive */}
        <div className="w-full max-w-[400px] lg:w-[500px] h-[300px] lg:h-[400px] relative overflow-hidden mx-auto lg:mx-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImage}
              src={TechSpecsimages[activeImage]}
              alt=""
              className='w-full h-full object-contain absolute top-0 left-0'
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Tech Specs Grid - Responsive */}
      <motion.div
       initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1.5}}
            viewport={{once:true}}
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-5 mb-10 lg:pl-20'>
        <div onClick={() => setActiveImage(0)} className="cursor-pointer text-center lg:text-left">
          <img className='hover:scale-115 transition-all duration-500 mx-auto lg:mx-0' width={80} src={Compatibilityimg} alt="" />
          <h2 className='text-lg lg:text-xl hover:text-purple-950 font-bold mt-2 text-[#444444]'>COMPATIBILITY</h2>
          <p className="text-sm lg:text-base max-w-full lg:w-[400px] mt-2">
            Compatible with various manufacturing equipment and systems.
          </p>
        </div>

        <div onClick={() => setActiveImage(1)} className="cursor-pointer text-center lg:text-left">
          <img className='hover:scale-115 transition-all duration-500 mx-auto lg:mx-0' width={80} src={Connectivityimg} alt="" />
          <h2 className='font-bold hover:text-purple-950 text-lg lg:text-xl mt-2 text-[#444444]'>
            Effortlessly link sensors
          </h2>
          <p className="text-sm lg:text-base max-w-full lg:w-[400px] mt-2">
            Supports IoT devices, sensors, and PLCs for real-time data acquisition.
          </p>
        </div>

        <div onClick={() => setActiveImage(2)} className="cursor-pointer text-center lg:text-left">
          <img className='hover:scale-115 transition-all duration-500 mx-auto lg:mx-0' width={80} src={Scalabilityimg} alt="" />
          <h2 className='text-lg lg:text-xl font-bold hover:text-purple-950 mt-2 text-[#444444]'>SCALABILITY</h2>
          <p className="text-sm lg:text-base max-w-full lg:w-[400px] mt-2">
            Scales effortlessly to accommodate growing production needs.
          </p>
        </div>
      </motion.div>

      {/**tech specification icons for the second row - Responsive */}
      <motion.div
        initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1.5}}
            viewport={{once:true}}
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-5 mb-10 lg:pl-20'>
        <div onClick={() => setActiveImage(0)} className="cursor-pointer text-center lg:text-left">
          <img
            
          className='hover:scale-115 transition-all duration-500 mx-auto lg:mx-0' width={80} src={security_icon} alt="" />
          <h2 className='text-lg lg:text-xl hover:text-purple-950 font-bold mt-2 text-[#444444]'>SECURITY</h2>
          <p className="text-sm lg:text-base max-w-full lg:w-[400px] mt-2">
            Ensures data integrity and confidentiality with advanced encryption protocols
          </p>
        </div>

        <div onClick={() => setActiveImage(1)} className="cursor-pointer text-center lg:text-left">
          <img className='hover:scale-115 transition-all duration-500 mx-auto lg:mx-0' width={80} src={cloud_based_icon} alt="" />
          <h2 className='font-bold hover:text-purple-950 text-lg lg:text-xl mt-2 text-[#444444]'>CLOUD-BASED</h2>
          <p className="text-sm lg:text-base max-w-full lg:w-[400px] mt-2">
            Hosted on secure cloud servers for accessibility and data backup.
          </p>  
        </div>

        <div onClick={() => setActiveImage(2)} className="cursor-pointer text-center lg:text-left">
          <img className='hover:scale-115 transition-all duration-500 mx-auto lg:mx-0' width={80} src={api_support_icon} alt="" />
          <h2 className='text-lg lg:text-xl hover:text-purple-950 font-bold mt-2 text-[#444444]'>API SUPPORT</h2>
          <p className="text-sm lg:text-base max-w-full lg:w-[400px] mt-2">
            Offers API for seamless integration with third-party applications.
          </p>
        </div>
      </motion.div>
 </div>

{/** USE CASES OF PRODUCTION DOWNTIME MONITORING - Fully Responsive */}
     <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-start">
            {/* Diagonal Section - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block relative h-full min-h-[600px] lg:min-h-[700px] overflow-hidden">
              <div 
                className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900"
                style={{
                  clipPath: 'polygon(0 0, 80% 0, 0 20%)',
                  width: '125%',
                  height: '200%'
                }}
              ></div>
            </div>
    
            {/* Content Section - Fully Responsive */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-12 py-8 lg:py-0">
              {/* Main Heading - Responsive text */}
              <motion.h1 
                className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide text-center lg:text-left mb-8 lg:mb-10 px-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                USE CASES OF PRODUCTION DOWNTIME MONITORING 
              </motion.h1>
    
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-start gap-4 sm:gap-6">
                  {/* Icon - Responsive sizing */}
                  <motion.div
                    className="min-w-[50px] sm:min-w-[60px] h-[50px] sm:h-[60px] bg-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-purple-600 hover:scale-110 cursor-pointer flex-shrink-0"
                  >
                    <img 
                      src={useCase.icon} 
                      alt={useCase.title} 
                      className="w-8 sm:w-10 h-8 sm:h-10 object-contain" 
                    />
                  </motion.div>
    
                  {/* Text - Responsive sizing */}
                  <motion.div
                    className="flex-1 pt-1"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-white font-black text-base sm:text-lg lg:text-xl mb-2 tracking-wide">
                      {useCase.title}
                    </h2>
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                      {useCase.description}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

{/** SWIPER BLOGS SECTION */}
     <div>
       <SwiperBlogs/>
     </div>

  </div>
</>
  );
};

export default IndustrialParameterDisplay;
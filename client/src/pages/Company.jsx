import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from "../context/useContext";
import ShopFloor from '../components/ShopFloor'
import { Helmet } from '@dr.pogodin/react-helmet'   // ✅ Updated import

import { 
  alertmobiletiltimg, 
  cncdashbordtiltimg, 
  cnctabletimg, 
  compantytablettiltimg, 
  companybgimg, 
  companylaptoptiltimg, 
  companymanimg, 
  
} from '../assets/assets';
import { motion } from 'framer-motion'

const Company = () => {
  const navigate = useNavigate();
  const { setDemoOpen } = useAppContext();

  return (
    <>
    <Helmet>
  <title>About IIoT Robato Systems | Smart Manufacturing Solutions | Production Monitoring Systems</title>
  <meta 
    name="description" 
    content="Discover how IIoT Robato Systems is revolutionizing smart manufacturing with production monitoring, OEE tracking, Andon tower lights, and downtime tracking solutions. Learn more about us!" 
  />
  <script type="application/ld+json">
    {JSON.stringify( {
          "@context": "https://schema.org/",
          "@type": "Article",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${import.meta.env.VITE_BASE_URL}/about-us`
          },
          "headline": "bout Robato Systems: Innovating Tomorrow, Today",
          "description": "Explore the cutting-edge journey with MachinoX pro. Join us in shaping the future with state-of-the-art robotic solutions and innovation.",
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
        })}
  </script>
</Helmet>

      {/* Hero Section */}
      <div className="bg-center bg-cover w-full py-20 px-6 md:px-20 lg:px-30" style={{ backgroundImage: `url(${companybgimg})` }}>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold max-w-[1100px]"
        >
          UNVEILING THE <br /> ROBATO SYSTEMS STORY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 md:mt-10 text-base sm:text-lg md:text-xl text-white max-w-[800px]"
        >
          Welcome to Robato Systems - Your Premier Destination for Cutting-Edge Machine Monitoring Solutions!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 md:gap-5 mt-6 md:mt-8"
        >
          <button onClick={() => navigate('/contact-us')} className="text-white hover:bg-gray-600 hover:text-black bg-purple-900 px-8 md:px-16 lg:px-20 py-3">
            Contact us
          </button>
          <button onClick={() => (window.location.href = "tel:+61 478 251 187")}  className="bg-white px-8 md:px-16 lg:px-20 py-3 hover:bg-transparent border hover:text-white text-purple-900">
            Call Now
          </button>
        </motion.div>
      </div>

      {/* Who Are We Section */}
      <div className="px-6 md:px-20 lg:px-30 py-10 md:py-20">
        <p className="text-base sm:text-lg md:text-xl mb-10">
          At Robato Systems, we are dedicated to revolutionizing the way industries operate by providing state-of-the-art machine monitoring facilities. With a relentless pursuit of innovation and a commitment to excellence, we offer a comprehensive suite of services designed to optimize your production processes, enhance efficiency, and ensure seamless operations.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full sm:w-[400px] md:w-[500px]"
            src={cnctabletimg}
            alt=""
          />

          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#444444] font-bold mt-5 lg:mt-0">
              WHO ARE WE
            </h1>
            <p className="mt-5 text-base sm:text-lg md:text-xl max-w-[700px]">
              Robato Systems is a leading provider of advanced machine monitoring solutions, specializing in live machine monitoring and faulty machine detection. Founded on the principles of technological advancement and customer satisfaction, our team comprises industry experts, engineers, and visionaries who are passionate about empowering businesses with real-time insights and actionable data.
            </p>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button className="text-white hover:bg-gray-600 hover:text-black bg-purple-900 px-6 md:px-10 py-3">
                Contact us
              </button>
              <button onClick={() => (window.location.href = "tel:+61 478 251 187")}  className="bg-purple-900 px-6 md:px-10 py-3 hover:text-black border text-white hover:bg-gray-600">
                Call Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <motion.div
        className="bg-[#F8F8F8] px-6 md:px-20 lg:px-30 py-10 md:py-20 mt-10 md:mt-15"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[#444444]">
          WHY CHOOSE US
        </h1>

        <div className="grid gap-10 mt-10 md:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              img: cncdashbordtiltimg,
              title: "INNOVATIVE TECHNOLOGY",
              text: "We harness the power of innovative technology to offer real-time machine monitoring solutions. Our team constantly explores the latest advancements, ensuring you stay ahead in the competitive industrial landscape.",
              link: "/production-monitoring",
            },
            {
              img: companylaptoptiltimg,
              title: "CUSTOMIZED SOLUTIONS",
              text: "We understand that every business is unique. That's why we tailor our systems to suit your specific requirements, integrating seamlessly with your setup for a hassle-free experience.",
              link: "/condition-monitoring",
            },
            {
              img: alertmobiletiltimg,
              title: "RELIABLE FAULT DETECTION",
              text: "Our advanced detectors identify issues before escalation. Detecting anomalies in real time prevents costly breakdowns and optimizes maintenance schedules.",
              link: "/predictive-maintenance",
            },
            {
              img: compantytablettiltimg,
              title: "DEDICATED SUPPORT",
              text: "We believe in long-lasting relationships. Our dedicated team is available around the clock to assist with any queries or concerns.",
              link: "/process-optimization",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="hover:scale-105 transition-all duration-700 cursor-pointer"
              onClick={() => navigate(item.link)}
            >
              <img src={item.img} alt="" className="w-full" />
              <h3 className="font-bold hover:underline text-lg md:text-xl mt-3">
                {item.title}
              </h3>
              <p className="hover:underline text-sm md:text-base mt-2">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Robato */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#444444] py-10 md:py-20 mt-10 md:mt-15">
          WHY CHOOSE ROBATO SYSTEMS?
        </h1>

        <div className="bg-white px-6 md:px-10 py-10 mx-auto shadow-2xl">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <img className="w-full sm:w-[400px] md:w-[500px]" src={companymanimg} alt="" />
            <div className="flex flex-col">
              {[
                ["Innovation", "We stay ahead by investing in the latest technologies and methodologies, ensuring our clients have access to the most advanced solutions."],
                ["Customization", "Every business is unique; we offer customizable solutions tailored to your goals."],
                ["Reliability", "Dependable monitoring systems that deliver accurate data and insights consistently."],
                ["Expert Support", "Round-the-clock support for technical assistance, training, or guidance."],
                ["Continuous Improvement", "We evolve with industry demands, ensuring your investment is future-ready."],
              ].map(([title, desc], i) => (
                <p key={i} className="mt-5 text-sm sm:text-base md:text-lg max-w-[500px]">
                  <span className="text-lg font-bold text-[#444444]">{title}:</span> {desc}
                </p>
              ))}

              <motion.div
                className="flex flex-wrap gap-4 mt-8"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <button onClick={()=> setDemoOpen(true)} className="bg-purple-900 text-white px-6 py-2">
                  GET A QUOTE
                </button>
                <button onClick={() => (window.location.href = "tel:+61 478 251 187")}  className="bg-purple-900 text-white px-6 py-2">
                  CALL NOW
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <ShopFloor/>
    </>
  )
}

export default Company

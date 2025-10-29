import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useAppContext } from "../context/useContext";
import { useNavigate } from "react-router-dom";
import { customizable_alert_icon, Dashborardimg, DigitalCounterimg, dot_icon, downtimeimg, home_icon, Oeeimg, Scalabilityimg, view_icon } from "../assets/assets";

const BenefitProduction = () => {

    const {setDemoOpen} = useAppContext()
    const navigate = useNavigate()
  return (
    <>
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row mt-12 mx-6 lg:mx-20 gap-10 justify-between items-start">
        
        {/* Image with animation */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            className="w-full max-w-[600px] h-auto rounded-2xl shadow-2xl object-contain"
            src={DigitalCounterimg}
            alt="Digital Production Counters"
          />
        </motion.div>

        {/* Text Section */}
        <div className="flex-1 space-y-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#444444] w-full lg:w-[600px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            BENEFITS OF DIGITAL PRODUCTION COUNTERS
          </motion.h1>

          {/* Feature List */}
          {[
            "Enhanced Productivity",
            "Real-Time Monitoring",
            "Improved Efficiency",
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <Check className="text-indigo-900 w-8 h-8" strokeWidth={2.5} />
                <h3 className="font-bold text-xl">{feature}</h3>
              </div>
              <p className="text-xl w-full lg:w-[600px]">
                By providing immediate feedback on production performance, our counters help identify bottlenecks and areas for improvement.
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Icon Grid */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 mx-6 lg:mx-20 text-center">
        {[
          { img: Oeeimg, title: "REAL-TIME OEE MONITORING" },
          { img: Dashborardimg, title: "INTUITIVE DASHBOARD" },
          { img: customizable_alert_icon, title: "CUSTOMIZABLE ALERTS" },
          { img: view_icon, title: "Historical Analysis" },
          { img: home_icon, title: "User Role Management" },
          { img: dot_icon, title: "Integration Capabilities" },
          { img: downtimeimg, title: "Downtime Analysis" },
          { img: Scalabilityimg, title: "Scalability" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-2 perspective"
            initial={{ rotateY:180,opacity: 0, y: 50 }}
            whileInView={{ rotateY:0,opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img className="w-20 h-20 object-contain" src={item.img} alt={item.title} />
            <h2 className="text-xl font-semibold">{item.title}</h2>
          </motion.div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col  sm:flex-row mt-20 mb-20 items-center justify-center gap-6">
        <button onClick={()=> setDemoOpen(true) } className="px-6 py-4 bg-purple-950 text-white hover:bg-gray-500 hover:text-black rounded-lg transition-colors duration-300">
          BOOK A FREE TRIAL
        </button>
        <button onClick={() => (window.location.href = "tel:+61 478 251 187")}  className="px-6 py-4 bg-transparent border border-purple-950 rounded-lg hover:bg-purple-950 hover:text-white transition-colors duration-300">
          CALL NOW 
        </button>
      </div>
    </>
  );
};

export default BenefitProduction;

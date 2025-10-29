// ProductionMonitoring.jsx
import React, { useEffect, useState } from "react";

import { machinebuilderQuestion } from '../../assets/assets.js';
import { ChevronDown } from 'lucide-react';


import {
  alarmlaptopimg,
  alertimg,
  automationlaptopimg,
  cycletimelaptopimg,
  mobileimg,
  plugplay,
  tsugamiimg,
  laptop2,
  shoopfloorimg,
  brotherlaptopimg,
  cutcyclelaptopimg,
  lightningfast_icon,
  easily_connect_icon,
  hit_the_ground_icon,
  immediate_value_icon,
  smarter_icon,
  speaker_icon,
  alert_icon,
  safety_icon,
  factory_bg_blur,
  tool_failure_icon,
  tool_display_icon,
  scrap_icon,
  solution_icon,
  build_app_icon,
  workflow_icon,
  managment_icon,
  revenue_icon,
  cost_icon,
  eaas_icon,
  analytical_icon,
  equip_icon,
  insight_icon,
  assistance_icon,
  predictive_icon,
  feedback_icon,
  supplie_icon,
} from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/useContext";
import { motion, AnimatePresence } from "framer-motion";
import FrequentlyAsked from "../../components/FrequentlyAsked";
import SwiperBlogs from "../../components/SwiperBlogs";
import { Helmet } from '@dr.pogodin/react-helmet'
const MachineBuilders = () => {
  const navigate = useNavigate();
  const { setDemoOpen } = useAppContext();
  const [activeImage, setActiveImage] = useState(0);
    const [hoverIndex, setHoverIndex] = useState(null);
  

  // Determine if viewport is mobile (<= 768px) to tune animation durations
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Framer Motion variants for slide animation with mobile-optimized durations
  const animDuration = isMobile ? 0.45 : 0.8;
  const exitDuration = isMobile ? 0.35 : 0.5;
  const imageVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: animDuration } },
    exit: { x: -200, opacity: 0, transition: { duration: exitDuration } },
  };

  const images = [plugplay, laptop2, brotherlaptopimg];
  const SophisticatedImages = [tsugamiimg, cycletimelaptopimg, alertimg];
  const PredictiveSectionImages = [alarmlaptopimg, automationlaptopimg, mobileimg];

  const MachinoxProDifference = [
    {
      icon: lightningfast_icon,
      title: "QUICK TO DEPLOY",
      points: ["Plug-and-play simplicity, simple to use, and easy to scale." ],
    },
    {
      icon: easily_connect_icon,
      title: "DATA IS INSTANTLY USABLE",
      points: [
        "Eliminates the need for time-consuming data tag mapping.",
      
      ],
    },
    {
      icon: hit_the_ground_icon,
      title: "DRIVE IMMEDIATE VALUE",
      points: ["Out-of-the-box apps with no initial development required."],
    },
    {
      icon: immediate_value_icon,
      title: "CONNECTS TO EVERYTHING",
      points: [
        "Easily integrates machine data across your digital factory.",
        
      ],
    },
    {
      icon: smarter_icon,
      title: "DEEP MANUFACTURING VERTICAL EXPERTISE",
      points: ["Provides necessary context to enable data actionability"],
    },
  ];

  return (
    <>
    <Helmet>
  <title>IIoT for Machine Builders & Distributors | Production Monitoring</title>
  <meta 
    name="description" 
    content="Empower machine builders & distributors with IIoT-driven production monitoring, OEE tracking, downtime reduction, and Andon display solutions for smarter manufacturing." 
  />
  <script type="application/ld+json">
    {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Article",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${import.meta.env.VITE_BASE_URL}/machine-builders`
          },
          "headline": "MachinoX Pro: Empowering Machine Builders and Distributors",
          "description": "Discover seamless production monitoring with MachinoX pro. Optimize efficiency with advanced counter display services for enhanced productivity.",
          "image": {
            "@type": "ImageObject",
            "url": `${import.meta.env.VITE_BASE_URL}/images/mm20_laptop__0009_Machine-Overview-hack_dropshadow.png`,
            "width": "1260",
            "height": "815"
          },
          "author": {
            "@type": "Person",
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
          "name": "How is MachinoX Pro different than other solutions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There’s a number of reasons why MachinoX Pro has separated ourselves from the pack of other “next generation” machine monitoring solutions. We call them “The MachinoX Pro Super Powers”:  Automated data capture: the fact that we make it so easy to collect and transform data from so many types of machines, new and old. Users can start driving use cases with MM in a matter of hours, not months or years via KPI dashboards, configurable reports, text/email notifications, and integrations with current factory systems. Capture operational data – such as cycle count, cycle times, part count, and more – straight from the machine. There’s no operator input required to monitor production, but the flexibility to add human context to machine data when wanted is always there. It’s easy to use and scale! MachinoX Pro won’t require expensive integrators or extensive training to roll out across one or multiple sites (although we are happy to help you when you need us!). Unprecedented Innovation: you’re not just buying the MachinoX Pro of today but you’re investing in the next generation solution of tomorrow. Our product/engineering teams are all based in the US and are working around the clock to improve our product and enhance our capabilities."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to deploy MachinoX Pro?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MachinoX Pro can sprint or walk, depending on your needs. Many of our customers can have our solution up and running in one afternoon!"
          }
        },
        {
          "@type": "Question",
          "name": "Why does MachinoX Pro’ pricing model work better for you?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MachinoX Pro pricing model is a true SaaS subscription model, which means it’s easy to get started, there are no “maintenance” fees, and all software updates are included. Our pricing is volume based so the more machines you connect, the less it costs per machine.  Included in all subscriptions is our customer support service, including unlimited remote technical support, customer on-boarding, product training, and a designated customer support point of contact.  (Side bar): While on-premise solutions may often appear to have higher costs upfront but lower ongoing costs, there are many hidden costs such as the time to upgrade systems, the maintenance of web and database servers, dedicated IT resources, and product maintenance/training costs that become unsustainable for many companies over time.  What’s the bottom line here? You probably know this but you get what you pay for. With a subscription model, we have to win your business every year to keep it."
          }
        },
        {
          "@type": "Question",
          "name": "Is MachinoX Pro cloud-based or on-premise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MachinoX Pro pricing model is a true SaaS subscription model, which means it’s easy to get started, there are no “maintenance” fees, and all software updates are included. Our pricing is volume based so the more machines you connect, the less it costs per machine.  Included in all subscriptions is our customer support service, including unlimited remote technical support, customer on-boarding, product training, and a designated customer support point of contact.  (Side bar): While on-premise solutions may often appear to have higher costs upfront but lower ongoing costs, there are many hidden costs such as the time to upgrade systems, the maintenance of web and database servers, dedicated IT resources, and product maintenance/training costs that become unsustainable for many companies over time.  What’s the bottom line here? You probably know this but you get what you pay for. With a subscription model, we have to win your business every year to keep it.  MachinoX Pro is an ISO 27001 certified cloud-based system, and security is at the forefront of every decision we make. Our product is built on the premise that data is of paramount importance and value, so we view the protection of that data as core to our ability to serve manufacturers.  We get this question a lot so here’s the closest anecdote we could think of as to why we trust the cloud:  If you were to choose the safest way to travel would you opt to drive or to fly? Most would choose driving, even though, statistically speaking, flying is far safer than driving.  When it’s on-premise vs. cloud, many assume on-premise must be safer, more under your control. The reality is that the cloud is like flying. On-premise systems are hacked thousands of times a day due to manual errors. The cloud, like flying, is one of the safest things you can do."
          }
        },
        {
          "@type": "Question",
          "name": "Do we need additional hardware to use MachinoX Pro?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MachinoX Pro is an ISO 27001 certified cloud-based system, and security is at the forefront of every decision we make. Our product is built on the premise that data is of paramount importance and value, so we view the protection of that data as core to our ability to serve manufacturers.  We get this question a lot so here’s the closest anecdote we could think of as to why we trust the cloud:  If you were to choose the safest way to travel would you opt to drive or to fly? Most would choose driving, even though, statistically speaking, flying is far safer than driving.  When it’s on-premise vs. cloud, many assume on-premise must be safer, more under your control. The reality is that the cloud is like flying. On-premise systems are hacked thousands of times a day due to manual errors. The cloud, like flying, is one of the safest things you can do.  The short answer is no. However, some machines may require additional hardware while others may not.  For most modern machines, hardware may include MachinoX Pro Edge gateways, each of which can connect to 50 or so machines if they are networked to an electrical switch. Many customers opt to install our connectors as a virtual machine on a local PC, where no gateway hardware is required.  Depending on use cases, you may want to addd additional sensors and optional tablet interfaces. These can either be purchased directly through MachinoX Pro or procured independently.  Connect older equipment with digital and analog IO that can be configured and managed remotely through web interface to integrate even the most challenging equipment."
          }
        },
        {
          "@type": "Question",
          "name": "Who owns the data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You own all the data. We store data in the cloud using best-in-class encryption methods, so your information is always safe."
          }
        }
      ]
    })}
  </script>
</Helmet>
      {/* HERO: keep desktop sizing intact (applied at md:), mobile optimized for <=768px */}
      <section className="flex flex-col md:flex-row items-center md:items-start md:justify-between md:py-[80px] py-6 px-4 md:px-20 gap-6">
        <div className="w-full md:w-[600px]">
          <motion.h1
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
          className="text-2xl md:text-4xl md:pl-20 text-[#444444] font-bold uppercase leading-tight">
            Transforming Industries with Robato Systems
          </motion.h1>

          <motion.ul
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1,delay:0.3}}
            viewport={{once:true}}
          className="mt-4 md:pl-30 pl-5 list-disc space-y-2 text-sm md:text-base">
            <li>Enhance machine sales through data-driven applications</li>
            <li>Revolutionise traditional manufacturing processes.</li>
            <li>Generate new revenue streams.</li>
            <li>Establish innovative business models in the manufacturing equipment sales industry.</li>
          </motion.ul>
        </div>

        <div className="w-full md:w-[500px] flex justify-center ">
          <motion.img
            src={brotherlaptopimg}
            alt="laptop"
            className="w-full md:w-[800px]  object-contain"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          />
        </div>
      </section>

      {/* FEATURE 3-COL: keep desktop layout, stack on mobile */}
      <motion.section
        initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
      className="px-4 md:px-0 md:flex mt-10 md:justify-center md:gap-15 gap-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-center gap-6 md:gap-10 w-full md:w-auto">
          {[
            {
              icon: managment_icon,
              title: "LINK UP ANY MACHINE ",
              points: ["Seamlessly establish connections", "Effortlessly gather and analyse data","Access data from your entire flee","Remote access from global customer sites"],
            },
            {
              icon: solution_icon,
              title: "Enable applications",
              points: ["Establish connections seamlessly", "Gather and analyse data effortlessly","Access data from your entire fleet","Enable remote access from global customer sites"],
            },
            {
              icon: revenue_icon,
              title: "Boost revenue",
              points: ["Introduce data-driven revenue models", "Offer manufacturing subscription plans","Tailor plans to financial capacities","Create new revenue opportunities"],
            },
          ].map((card, idx) => (
            <div key={idx} className="text-center md:text-left md:w-[300px]">
              <img src={card.icon} width={100} alt="" className="mx-auto md:mx-0" />
              <h2 className="text-lg md:text-xl font-bold mt-3 text-[#444444]">{card.title}</h2>
              <ul className="list-disc mt-2 text-sm md:text-base pl-5 md:pl-5">
                {card.points.map((p, i) => (
                  <li key={i} className="w-full md:w-[300px]">{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA buttons */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5 py-10 px-4 md:px-0">
        <button
          onClick={() => (window.location.href = "tel:+61 478 251 187")}
          className="w-full md:w-auto px-6 py-3 bg-purple-950 text-white hover:bg-gray-600 hover:text-black rounded text-center"
        >
          CALL NOW
        </button>
        <button
          onClick={() => setDemoOpen(true)}
          className="w-full md:w-auto px-6 py-3 border border-purple-950 text-purple-950 hover:bg-purple-950 hover:text-white rounded"
        >
          BOOK A FREE TRIAL
        </button>
      </section>

{/**Limited visibility into machine data */}
      {/* PROBLEM SECTION: background image with overlay; keep desktop typography but scale on mobile */}
      <section
        className="flex flex-col md:flex-row items-start md:justify-around bg-center bg-cover md:py-20 py-10"
        style={{
          backgroundImage:
            `url(${factory_bg_blur})`
        }}
      >
        <div className="w-full md:w-[500px] px-4 md:px-0">
          <div className="bg-black/50 md:bg-transparent p-4 md:p-0 rounded md:rounded-none">
            <h1 className="text-3xl md:text-6xl tracking-tighter md:w-[500px] text-white font-extrabold uppercase py-6 md:py-20 leading-tight">
              Limited visibility into machine data
            </h1>
          </div>
        </div>

        <div className="w-full md:w-[500px] px-4 md:px-0 mt-6 md:mt-0">
          
          <ul className="list-disc text-white pl-5 md:pl-10 mt-4 space-y-2 text-sm md:text-base leading-relaxed">
            <li>Challenge at hand</li>
            <li>Conventional machine sales inefficiencies</li>
            <li>Time-consuming processes</li>
            <li>Manual labor-intensive tasks</li>
            <li>Need for a standout solution in a competitive market</li>
          </ul>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="flex flex-col md:flex-row items-start md:justify-around bg-[#430099] text-white py-10 md:py-0 px-4 md:px-0">
        <div className="w-full md:w-[500px] px-0 md:px-10 py-8 md:py-12">
          <h2 className="text-2xl md:text-3xl font-bold">THE SOLUTION</h2>
          <ul className="list-disc mt-5 pl-5 md:pl-10 space-y-2 text-sm md:text-base">
            <li>Monitor machine assets remotely</li>
            <li>Real-time tracking in the field and customer locations</li>
            <li>Enhance equipment uptime</li>
            <li>Decrease service expenditures</li>
          </ul>
        </div>

        <div className="w-full md:w-[500px] px-4 md:px-0">
          <h1 className="text-3xl md:text-6xl tracking-tighter md:w-[500px] font-extrabold uppercase py-6 md:py-20 leading-tight">
             IMMEDIATE ACCESS TO DATA
          </h1>
        </div>
      </section>

 {/* Live monitoring: keep desktop widths but make mobile stack nicely */}
      <section className="flex flex-col md:flex-row items-start md:items-center md:py-30 py-8 px-4 md:px-0 gap-6">
        <div className="w-full md:w-[800px]">
          <h1 className="text-2xl md:text-5xl md:pl-20 tracking-tighter text-[#444444] font-bold uppercase leading-tight">
            LIVE MONITORING 
          </h1>
          <p className="font-bold text-[#444444] md:pl-20 mt-4 text-lg md:text-2xl">Industrial IoT Platform for Machines</p>
          <ul className="list-disc text-[#444444] md:w-[700px] pl-0 md:pl-25 text-base md:text-xl mt-4 space-y-2">
            <li>Remote machine administration</li>
            <li>Utilise customer machine data for added value</li>
            <li>Unlock opportunities through data access</li>
            <li>Leverage machine data as a competitive edge</li>
            
          </ul>
        </div>

        <div className="w-full md:w-[500px] h-[400px] relative overflow-hidden flex justify-center md:justify-end">
          <motion.img
            src={plugplay}
            alt="laptop animation"
            className="w-full md:w-[500px] h-full object-contain absolute top-0 left-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animDuration }}
          />
        </div>
      </section>

      {/* ICON FEATURE ROW (interactive) */}
      <motion.section
        initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
      
      className="px-4 md:px-10 py-8 flex flex-col md:flex-row items-start gap-6 md:gap-10 justify-center">
        {[{
          title: "DISTANT MONITORIGN",
          icon: assistance_icon,
          bullets: [
            "Collaborate with clients",
            "Predict equipment breakdowns",
            "Recommend pre-emptive solutions",
            "Prevent issues before they arise"
          ],
        },{
          title: "RESOURCE SUPERVISION ",
          icon: managment_icon,
          bullets: [
            "Monitor machine status and health",
            "Utilise Wi-Fi and cellular connectivity",
            "Interface with sensors or machine PLC",
          ],
        },{
          title: "MINIMIZE SERVICE EXPENSES",
          icon: cost_icon,
          bullets: [
            "Utilize real-time data",
            "Diagnose machine problems instantly",
            "No need for customer VPN access",
            "Ensure real-time issue resolution"
          ],
        }].map((card, i) => (
          <div key={i} onClick={() => setActiveImage(i)} className="cursor-pointer w-full md:w-[380px] text-center md:text-left">
            <img className="mx-auto md:mx-0 hover:scale-105 transition-transform duration-500" width={100} src={card.icon} alt="" />
            <h2 className="text-xl font-bold mt-5 text-[#444444]">{card.title}</h2>
            <ul className="list-disc mx-auto md:mx-0 mt-3 text-sm md:text-base pl-5 md:pl-5">
              {card.bullets.map((b, bi) => (
                <li key={bi} className="w-full md:w-[400px]">{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.section>

{/* ROBUST ANALYSIS*/}
      <section className="flex flex-col md:flex-row items-start md:items-center gap-6 px-4 md:pl-25 py-8">
        <div className="w-full md:w-[500px] h-[400px] relative overflow-hidden">
          <motion.img
            src={alarmlaptopimg}
            alt="plugplay"
            className="w-full h-full object-contain absolute top-0 left-0"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          />
        </div>

        <div className="mt-2 md:mt-10 w-full md:w-[800px]">
          <h1 className="text-2xl md:text-5xl md:pl-20 tracking-tighter text-[#444444] font-bold uppercase leading-tight">ROBUST ANALYSIS</h1>
          
          <ul className="list-disc w-full md:w-[700px] mt-4 text-[#444444] pl-5 md:pl-30 text-base md:text-xl space-y-2">
            <li>Enhance decision-making with real-time data</li>
            <li>Expedite diagnosis and resolution of machine downtime</li>
            <li>Identify accelerated bearing wear in advance of scheduled maintenance</li>
            <li>Prevent catastrophic machine failures for customer satisfaction</li>
           
          </ul>
        </div>
      </section>

      {/* SECOND ICON ROW */}
      <motion.section 
        initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
      className="flex flex-col md:flex-row items-start gap-6 justify-center px-4 md:px-0 py-6">
        {[{
          title: "ALERT ANALYTICS",
          icon: analytical_icon,
          bullets: ["Identify alarms causing significant downtime", "Establish monitoring systems for specific alarm triggers","Notify maintenance when these alarms occur"],
        },{
          title: "Machine performance observations",
          icon: insight_icon,
          bullets: ["Collaborate with customers to comprehend their unique machining requirements", "Assist in optimizing machine usage and performance based on customer needs", ],
        },{
          title: "Machine design",
          icon: equip_icon,
          bullets: ["Collect data from diverse production cycles", "Analyze the collected data", "Transmit the data to R&D departments for utilization"],
        }].map((card, i) => (
          <div key={i} onClick={() => setActiveImage(i)} className="cursor-pointer w-full md:w-[400px] text-center md:text-left">
            <img className="mx-auto md:mx-0 hover:scale-105 transition-transform duration-500" width={100} src={card.icon} alt="" />
            <h2 className="text-xl font-bold mt-5 text-[#444444]">{card.title}</h2>
            <ul className="list-disc mt-3 text-sm md:text-base pl-5 md:pl-5">
              {card.bullets.map((b, bi) => (
                <li key={bi} className="w-full md:w-[400px]">{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.section>


{/**REACT MORE SWIFTLY */}

    <section className="flex flex-col md:flex-row items-start md:items-center md:py-30 py-8 px-4 md:px-0 gap-6">
        <div className="w-full md:w-[800px]">
          <h1 className="text-2xl  md:text-5xl md:pl-20 tracking-tighter text-[#444444] font-bold uppercase leading-tight">
            React more swiftly
          </h1>
          <p className="font-bold text-[#444444] md:pl-20 mt-4 text-lg md:text-2xl">Advanced Service Capabilities</p>
          <ul className="list-disc text-[#444444] md:w-[700px] pl-0 md:pl-25 text-base md:text-xl mt-4 space-y-2">
            <li>Remote Machine Monitoring: By implementing remote machine monitoring, you can significantly cut down on the need for on-site service visits, achieving a reduction of 10-20%. This means less disruption to your operations and lower service costs</li>
            <li>Optimised Preventative Maintenance: Through data-driven insights, you can fine-tune your preventative maintenance plans. This optimization ensures that maintenance activities are performed exactly when needed, maximizing the lifespan of your equipment.</li>
            <li>Warranty Claim Validation: Utilize remote monitoring to validate warranty claims more efficiently. Accurate data can help streamline the warranty process, ensuring that claims are legitimate and quickly processed.</li>
            <li>Predictive Maintenance Alerts: Stay ahead of potential issues with predictive maintenance alerts. These alerts provide early warnings about equipment conditions, allowing you to proactively address them before they escalate into costly problems.</li>
            <li>Post-Warranty Service Opportunities: Leverage the data gathered to identify new service opportunities even after the warranty period ends. This proactive approach can lead to continued customer satisfaction and revenue generation</li>
          </ul>
        </div>

        <div className="w-full md:w-[500px] h-[400px] relative overflow-hidden flex justify-center md:justify-end">
          <motion.img
            src={brotherlaptopimg}
            alt="laptop animation"
            className="w-full md:w-[500px] h-full object-contain absolute top-0 left-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animDuration }}
          />
        </div>
      </section>

      {/* ICON FEATURE ROW (interactive) */}
      <motion.section
        initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
      className="px-4 md:px-10 py-8 flex flex-col md:flex-row items-start gap-6 md:gap-10 justify-center">
        {[{
          title: "Anticipatory maintenance",
          icon: predictive_icon,
          bullets: [
            "Utilize past equipment data",
            "Create a predictive maintenance plan",
            "Based on historical information",
            
          ],
        },{
          title: "Client access ",
          icon: insight_icon,
          bullets: [
            "mmediate data access",
            "Enables remote support by service staff",
            "Decreases warranty expenses",
          ],
        },{
          title: "Supplier access",
          icon: feedback_icon,
          bullets: [
            "Centralized data management",
            "Share equipment asset data",
            "Distributors and customers access data from one location",
            
          ],
        }].map((card, i) => (
          <div key={i} onClick={() => setActiveImage(i)} className="cursor-pointer w-full md:w-[380px] text-center md:text-left">
            <img className="mx-auto md:mx-0 hover:scale-105 transition-transform duration-500" width={100} src={card.icon} alt="" />
            <h2 className="text-xl font-bold mt-5 text-[#444444]">{card.title}</h2>
            <ul className="list-disc mx-auto md:mx-0 mt-3 text-sm md:text-base pl-5 md:pl-5">
              {card.bullets.map((b, bi) => (
                <li key={bi} className="w-full md:w-[400px]">{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.section>




 {/* THE MACHINOX PRO DIFFERENCE- preserved desktop style, mobile stacked */}
      <section className="min-h-screen bg-gray-600 relative overflow-hidden flex items-start md:items-center py-10 md:py-0">
        <div
          className="absolute left-0 top-0 bottom-0 bg-gradient-to-br from-purple-300 via-purple-800 to-purple-700"
          style={{
            width: "40%",
            clipPath: "polygon(0 0, 100% 0, 45% 100%, 0 100%)",
            transform: "translateX(-5%)",
          }}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
          <div className="mb-8 md:mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              THE MACHINOX PRO
              <br />
              DIFFERENCE.
            </h1>
          </div>

          <div className="space-y-8 md:space-y-12 pl-0 md:pl-20">
            {MachinoxProDifference.map((feature, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:gap-8 gap-4">
                <img className="flex-shrink-0 w-12 h-12 md:w-auto md:h-auto" src={feature.icon} alt="" />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide">{feature.title}</h3>
                  <ul className="space-y-1">
                    {feature.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-white text-base md:text-xl flex items-start">
                        <span className="mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / CASE STUDY */}
      <section className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 flex items-center justify-center p-8">
        <div className="max-w-6xl w-full px-4 md:px-0">
          <div className="flex justify-end mb-4">
            <div className="flex gap-4">
              <div className="w-12 h-20 bg-purple-400/30 rounded" />
              <div className="w-12 h-20 bg-purple-400/30 rounded" />
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-6xl lg:text-8xl font-black text-white leading-tight">"200% INCREASE IN UTILIZATION</h1>
          </div>

          <div className="text-center mb-8">
            <p className="text-lg md:text-2xl text-white">
              <span className="font-bold">Jordon Schaefer, </span>, <span className="font-light italic">Manager, Advanced Manufacturing Engineering</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="flex-1 px-2 md:px-0">
              <p className="text-white text-base md:text-xl leading-relaxed mb-6 font-light">
                In one year, SilencerCo was able to realize remarkable improvements in both the efficiency and profitability of their production leveraging MachinoX Pro.
              </p>

              <button className="border-2 border-white text-white font-bold text-base md:text-lg px-6 py-3 rounded hover:bg-white hover:text-purple-900 transition-all duration-300 uppercase tracking-wider">
                Download the Case Study
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Blogs */}
      <div className="py-10 px-4 md:px-0">
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      {/* Heading */}
      <h1 className='font-bold text-[#444444] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase'>
        Frequently Asked Questions
      </h1>

      {/* Accordion */}
      <div className="mt-6 sm:mt-8 md:mt-10 flex-1 overflow-y-auto h-[400px] sm:h-[500px] md:h-[600px] pr-1 sm:pr-2">
        {machinebuilderQuestion.map((item, index) => (
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
      <div className="px-4 md:px-0">
        <SwiperBlogs />
      </div>

      {/* FINAL CTA: keep desktop sizes, mobile stacked and centered */}
      <section
        className="relative w-full py-12 md:py-20 bg-center bg-cover"
        style={{ backgroundImage: `url(${shoopfloorimg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4 md:px-20 text-center md:text-left">
          <motion.h1
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
          className="text-3xl md:text-8xl font-bold text-white leading-tight">READY TO CONNECT</motion.h1>
          <motion.h1
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            viewport={{once:true}}
          className="text-3xl md:text-8xl font-bold text-white mt-0">YOUR SHOP FLOOR</motion.h1>

          <div className="mt-6">
            <button onClick={() => (window.location.href = "tel:+61 478 251 187")} className="bg-white text-indigo-950 px-6 py-3 md:px-6 md:py-4 hover:bg-purple-950 hover:text-white rounded">
              CALL NOW
            </button>
          </div>

          <p className="text-white mt-4">
            Want to see MachinoX Pro in action first?{" "}
            <span className="underline cursor-pointer" onClick={() => setDemoOpen(true)}>
              BOOK A FREE TRIAL
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default MachineBuilders;

import React from 'react';

import HeroSection from '../components/HeroSection';
import Insights from '../components/Insights';
import Accodian from '../components/Accodian';
import FrequentlyAsked from '../components/FrequentlyAsked';
import SwiperBlogs from '../components/SwiperBlogs';
import PurupleReadySection from "../components/PurupleReadySection"
import { Helmet } from '@dr.pogodin/react-helmet'
const Home = () => {
  return (
    <>

  <Helmet>
  <title>Machine Downtime Monitoring Software | Production Downtime Analysis | IIoT Robato Systems</title>
  <meta 
    name="description" 
    content="Reduce machine downtime with real-time monitoring and production analysis. Optimize efficiency using IIoT-powered downtime management tools." 
  />
  <script type="application/ld+json">
    {JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Article",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": import.meta.env.VITE_BASE_URL
              },
              "headline": "MachinoX Pro - Empowering Industries with Cutting-Edge Solutions",
              "description": "Unlock industry potential with MachinoX pro's advanced technologies. Elevate performance and efficiency in automation with us.",
              "image": {
                "@type": "ImageObject",
                "url":  `${import.meta.env.VITE_BASE_URL}/logo.png`,
                "width": "794",
                "height": "650"
              },
              "author": {
                "@type": "Organization",
                "name": "Robato Systems Pvt. Ltd."
              },
              "publisher": {
                "@type": "Organization",
                "name": "Robato Systems Pvt. Ltd",
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
              "@context": "https://schema.org",
              "@type": "Corporation",
              "name": "MachinoX Pro",
              "url": `${import.meta.env.VITE_BASE_URL}`,
              "logo": `${import.meta.env.VITE_BASE_URL}/logo.png`,
              "alternateName": "Robato Systems Private Limited",
              "sameAs": [
                "https://www.facebook.com/RobatoSystems",
                "https://www.linkedin.com/company/robatosystems/",
                "https://twitter.com/RobatoSystems",
                "https://www.youtube.com/channel/UCnUDpO7fixnlW4e37umIWZQ"
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "7888711383",
                  "contactType": "sales",
                  "email": "sales@robatosystems.com",
                  "areaServed": "IN",
                  "availableLanguage": "en"
                }
              ]
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
                  "name": "What is machine monitoring, and why is it important?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Machine monitoring involves real-time tracking and analysis of machine performance data. It's crucial for identifying issues, optimising operations, and reducing downtime, leading to cost savings and improved efficiency."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does machine monitoring benefit my business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Machine monitoring helps you: Prevent unexpected breakdowns. Increase productivity. Lower maintenance costs. Extend machine lifespan. Improve overall operational efficiency."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What types of machines can benefit from your monitoring services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our services are applicable to a wide range of machines, including industrial equipment, manufacturing machinery, CNC machines, and more. We tailor our solutions to suit your specific needs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does your machine monitoring system work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We install sensors and software that collect data from your machines in real-time. This data is then analyzed to identify trends, anomalies, and performance bottlenecks. We provide actionable insights and recommendations based on this analysis."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is machine monitoring compatible with legacy machines and equipment?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, in many cases, we can retrofit older machines with monitoring solutions. Our team will assess the compatibility and work with you to implement the best solution for your existing equipment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is my data secure when using your machine monitoring services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We take data security seriously. Our systems use encryption and follow industry best practices to ensure the confidentiality, integrity, and availability of your data."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can your services be integrated with our existing maintenance processes and software?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We can integrate our  monitoring solutions with your existing maintenance software and processes to streamline operations and improve overall maintenance efficiency"
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can your services help reduce machine maintenance costs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "By monitoring machine health and performance, we can detect issues early, allowing for scheduled maintenance and repairs, preventing costly breakdowns, and optimising maintenance schedules."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What types of performance improvements can I expect from your services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our services can help you achieve:  Increased machine uptime. Improved production output. Reduced energy consumption. Enhanced product quality. Lower overall operational costs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What support and training options do you offer for using your machine monitoring services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide comprehensive training for your team to use our monitoring tools effectively. Additionally, our customer support team is available to assist you with any questions or issues that may arise."
                  }
                }
              ]
            })}
  </script>
  

</Helmet>

    <div className="bg-gray-50 relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <HeroSection />
      </section>

      {/* Insights Section */}
      <section className="py-32 bg-white px-10 md:px-20">
        <Insights />
      </section>

      {/* Unlock Features Section */}
      <section className="py-32 bg-gray-50 px-10 md:px-20">
        <Accodian />
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-32 bg-white px-10 md:px-20">
        <FrequentlyAsked />
      </section>

      {/* Swiper Blogs Section */}
      <section>
        <SwiperBlogs />
      </section>

      <section>
        <PurupleReadySection/>
      </section>

      

    
    </div>
    </>
  );
};

export default Home;

import { useState, useEffect, useContext } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { logo } from "../assets/assets";
import axios from "axios";
import { Helmet } from '@dr.pogodin/react-helmet'
import {useAppContext} from '../context/useContext'; // ✅ adjust path if needed

export default function ContactUs() {
  const { backendUrl } = useAppContext(); // ✅ using backendUrl from context

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form submitted:", formData);

      const response = await axios.post(`${backendUrl}/api/contact`, formData);

      if (response.status === 200) {
        alert("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sales@robatosystems.com",
      value2: "info@robatosystems.com",
      subtext: "We reply within 24 hours",
      link: "mailto:sales@robatosystems.com",
      link2: "mailto:info@robatosystems.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+61 478 251 187",
      subtext: "Mon-Fri 9am-6pm IST",
      link: "tel:+919876543210",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "11 Avenue, Greater Noida W Rd",
      value2: "Sector 16C, GH-03, Gaur City 2",
      value3: "Noida, Ghaziabad, Uttar Pradesh",
      subtext: "Visit us by appointment",
    },
  ];

  return (
    <>
     <Helmet>
  <title>Contact IIoT Robato Systems | Industrial Automation Experts</title>
  <meta
    name="description"
    content="Get in touch with IIoT Robato Systems for smart factory solutions, production monitoring, OEE tracking, Andon tower lights, and downtime tracking systems. Connect with our experts today!"
  />
  <script type="application/ld+json">
    {JSON.stringify( {
          "@context": "https://schema.org/",
          "@type": "Article",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${import.meta.env.VITE_BASE_URL}/contact-us`
          },
          "headline": "Contact Us | MachinoX Pro",
          "description": "Connect effortlessly with MachinoX pro on our contact page. Experience swift communication for inquiries, support, and collaboration. Let's build something great together!",
          "image": {
            "@type": "ImageObject",
            "url": "",
            "width": "",
            "height": ""
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


      <div className="min-h-screen bg-[#a4a4a4]">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900">MachinoX Pro</h1>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mt-2">Contact Us</h2>
            </div>
            <div className="mt-12 flex justify-center">
              <img src={logo} alt="Company Logo" className="h-20 rounded-full object-contain" />
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div
                      className={`w-14 h-14 rounded-lg bg-slate-900 flex items-center justify-center mb-5 transform transition-transform duration-300 ${
                        hoveredCard === index ? "scale-110" : ""
                      }`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                    {item.link ? (
                      <>
                        <a
                          href={item.link}
                          className="text-slate-900 font-medium mb-1 block hover:text-slate-700 transition-colors cursor-pointer underline decoration-transparent hover:decoration-slate-900"
                        >
                          {item.value}
                        </a>
                        {item.link2 && (
                          <a
                            href={item.link2}
                            className="text-slate-900 font-medium mb-1 block hover:text-slate-700 transition-colors cursor-pointer underline decoration-transparent hover:decoration-slate-900"
                          >
                            {item.value2}
                          </a>
                        )}
                      </>
                    ) : (
                      <>
                        <p className="text-slate-900 font-medium mb-1">{item.value}</p>
                        {item.value2 && <p className="text-slate-900 font-medium mb-1">{item.value2}</p>}
                        {item.value3 && <p className="text-slate-900 font-medium mb-1">{item.value3}</p>}
                      </>
                    )}
                    <p className="text-slate-500 text-sm mt-2">{item.subtext}</p>
                  </div>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="bg-[#444444] rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="w-7 h-7 text-white" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">Send us a Message</h2>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2 font-medium text-sm">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2 font-medium text-sm">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium text-sm">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium text-sm">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium text-sm">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 transition-all duration-200 resize-none"
                  ></textarea>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <button
                    type="submit"
                    className="group px-8 py-3.5 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                  <p className="text-white text-sm mt-3">We'll get back to you within 24 hours</p>
                </div>
              </form>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 text-slate-600 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Average response time: 2-4 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


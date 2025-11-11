'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // ✅ Updated endpoint
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const result = await res.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          jobTitle: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (err) {
      console.error(err)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-300 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below and our team will respond within 24 hours
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 border border-gray-100">
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-10 p-6 bg-green-50 border-l-4 border-green-500 rounded-xl"
              >
                <div className="flex items-start">
                  <svg className="w-7 h-7 text-green-600 mr-4 shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <p className="text-green-900 font-bold text-xl mb-1">Message Sent Successfully!</p>
                    <p className="text-green-800 text-lg">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                  </div>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="John" className="w-full px-6 py-5 text-xl border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all outline-none hover:border-gray-400"/>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Doe" className="w-full px-6 py-5 text-xl border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all outline-none hover:border-gray-400"/>
              </div>

              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john.doe@company.com" className="w-full px-6 py-5 text-xl border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all outline-none hover:border-gray-400"/>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+61 400 000 000" className="w-full px-6 py-5 text-xl border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all outline-none hover:border-gray-400"/>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input type="text" name="company" value={formData.company} onChange={handleChange} required placeholder="Your Company Name" className="w-full px-6 py-5 text-xl border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all outline-none hover:border-gray-400"/>
                <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required placeholder="Operations Manager" className="w-full px-6 py-5 text-xl border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all outline-none hover:border-gray-400"/>
              </div>

              <textarea name="message" value={formData.message} onChange={handleChange} required rows="8" placeholder="Tell us about your requirements and how MachinoX Pro can help you..." className="w-full px-6 py-5 text-xl border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all outline-none resize-none hover:border-gray-400"></textarea>

              <button type="submit" disabled={isSubmitting} className="w-full bg-linear-to-r from-purple-900 to-indigo-900 text-white font-bold text-2xl py-6 px-8 rounded-2xl hover:from-purple-800 hover:to-indigo-800 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-2xl hover:shadow-3xl">
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-4 h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Your Message...
                  </span>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

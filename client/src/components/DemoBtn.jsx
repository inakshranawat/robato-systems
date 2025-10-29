import React, { useState } from 'react';
import { useAppContext } from '../context/useContext';
import axios from 'axios';

const DemoBtn = () => {
  const { demoOpen, setDemoOpen ,backendUrl} = useAppContext();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: 'India',
    jobTitle: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${backendUrl}/api/trial`, formData);

      if (response.status === 200) {
        alert('Free trial submitted successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          country: 'India',
          jobTitle: '',
          company: '',
          email: '',
          phone: '',
          message: ''
        });
        setDemoOpen(false); // close modal
      }
    } catch (error) {
      console.error('Error submitting trial form:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      {demoOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/50 flex justify-center items-center transition-all duration-500">
          <div className="bg-white w-[95%] md:w-[90%] lg:w-[85%] rounded-xl shadow-2xl relative overflow-y-auto max-h-[90vh]">
            {/* Header */}
            <div className="bg-[#430099] px-8 py-4 relative">
              <button
                onClick={() => setDemoOpen(false)}
                className="absolute top-3 right-5 text-white hover:text-gray-200 text-3xl font-light leading-none"
              >
                ×
              </button>
              <h2 className="text-2xl font-semibold text-white">BOOK A DEMO - MachinoX Pro</h2>
            </div>

            {/* Form */}
            <form className="px-8 py-4 grid gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-full border border-gray-300 px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="w-full border border-gray-300 px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1">Country *</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                  >
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1">Job Title</label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Specify your job title"
                    className="w-full border border-gray-300 px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    className="w-full border border-gray-300 px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g user@gmail.com"
                    required
                    className="w-full border border-gray-300 px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="91 788711383"
                    required
                    className="w-full border border-gray-300 px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please type your message"
                  rows="3"
                  required
                  className="w-full border border-gray-300 px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                />
              </div>

              <div className="flex justify-center mt-2">
                <button
                  type="submit"
                  className="bg-[#430099] text-white px-10 py-2 rounded-full hover:bg-purple-800 transition font-semibold text-base uppercase tracking-wide"
                >
                  Submit
                </button>
              </div>
            </form>

            {/* Footer */}
            <div className="bg-[#430099] px-8 py-3 flex justify-end">
              <span className="text-white text-base font-light">Robato Systems Pvt. Ltd.</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DemoBtn;

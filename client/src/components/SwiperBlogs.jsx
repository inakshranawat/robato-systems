import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import axios from 'axios'
import { useAppContext } from '../context/useContext'

const SwiperBlogs = () => {
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const [centerIndex, setCenterIndex] = useState(0)
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const {backendUrl} = useAppContext()

  // Fetch blogs from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`${backendUrl}/api/blogs`)
        setBlogs(response.data)
        setError(null)
      } catch (err) {
        console.error('Error fetching blogs:', err)
        setError('Failed to load blogs')
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  // Auto scroll interval
  useEffect(() => {
    if (blogs.length === 0) return

    const interval = setInterval(() => {
      setCenterIndex(prev =>
        prev === blogs.length - 1 ? 0 : prev + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [blogs.length])

  // Scroll to center card
  useEffect(() => {
    const container = containerRef.current
    if (!container || blogs.length === 0) return

    const card = container.children[centerIndex]
    if (card) {
      const containerCenter = container.offsetWidth / 2
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      container.scrollTo({
        left: cardCenter - containerCenter,
        behavior: 'smooth'
      })
    }
  }, [centerIndex, blogs.length])

  // Loading state
  if (loading) {
    return (
      <div className='bg-[#f5f5f5] w-full py-20'>
        <div className='mx-auto text-[#444444] mb-10'>
          <h1 className='text-center text-6xl font-bold'>MACHINOX PRO BLOG</h1>
          <p className='text-center text-2xl font-bold mt-5'>READ THE LATEST</p>
        </div>
        <div className='flex justify-center items-center h-64'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-purple-800'></div>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className='bg-[#f5f5f5] w-full py-20'>
        <div className='mx-auto text-[#444444] mb-10'>
          <h1 className='text-center text-6xl font-bold'>MACHINOX PRO BLOG</h1>
          <p className='text-center text-2xl font-bold mt-5'>READ THE LATEST</p>
        </div>
        <div className='flex justify-center items-center h-64'>
          <p className='text-red-600 text-lg'>{error}</p>
        </div>
      </div>
    )
  }

  // Empty state
  if (blogs.length === 0) {
    return (
      <div className='bg-[#f5f5f5] w-full py-20'>
        <div className='mx-auto text-[#444444] mb-10'>
          <h1 className='text-center text-6xl font-bold'>MACHINOX PRO BLOG</h1>
          <p className='text-center text-2xl font-bold mt-5'>READ THE LATEST</p>
        </div>
        <div className='flex justify-center items-center h-64'>
          <p className='text-gray-600 text-lg'>No blogs available at the moment.</p>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-[#f5f5f5] w-full py-20'>
      <div className='mx-auto text-[#444444] mb-10'>
        <h1 className='text-center text-6xl font-bold'>MACHINOX PRO BLOG</h1>
        <p className='text-center text-2xl font-bold mt-5'>READ THE LATEST</p>
      </div>

      <div
        ref={containerRef}
        className='flex overflow-x-auto space-x-6 px-6 scrollbar-hide snap-x snap-mandatory'
      >
        {blogs.map((blog, index) => (
          <motion.div
            key={blog._id}
            onClick={() => navigate(`/blog/${blog.slug || blog._id}`)}
            className='flex-shrink-0 mt-10 items-center w-72 md:w-80 lg:w-96 cursor-pointer rounded-2xl overflow-hidden bg-white'
            animate={{
              scale: centerIndex === index ? 1.05 : 0.95,
              opacity: centerIndex === index ? 1 : 0.5,
              boxShadow:
                centerIndex === index
                  ? '0px 10px 30px rgba(0,0,0,0.3)'
                  : 'none'
            }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={blog.image || blog.imageUrl || '/placeholder-blog.jpg'}
              alt={blog.title}
              className='w-full h-56 object-cover rounded-t-2xl'
              onError={(e) => {
                e.target.src = '/placeholder-blog.jpg'
              }}
            />
            <div className='p-5'>
              <span className='inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-3'>
                {blog.categoryName}
              </span>
              <h2 className='text-lg font-semibold text-purple-800 mb-2'>
                {blog.title}
              </h2>
              <p className='text-gray-700 text-sm line-clamp-3'>
                {blog.contentText
                  ? blog.contentText.substring(0, 150) + '...'
                  : (blog.description || blog.content?.substring(0, 150) + '...')}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className='text-center mt-20'>
        <button 
          onClick={() => navigate('/blogs')} 
          className='px-10 font-bold hover:bg-purple-800 py-2 bg-purple-950 text-center text-white transition-colors duration-300'
        >
          SEE ALL POSTS
        </button>
      </div>
    </div>
  )
}

export default SwiperBlogs

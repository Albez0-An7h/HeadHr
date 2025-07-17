import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiMail, FiPhone, FiSend, FiChevronDown, FiUpload, FiLinkedin } from 'react-icons/fi'
import Home from './Home'
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'
import ContactUs from './ContactUs'

// ...existing code...

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false)
  const [dropdownCloseTimer, setDropdownCloseTimer] = useState<ReturnType<typeof setTimeout> | null>(null)
  const location = useLocation()

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About Us', path: '/about' },
    { id: 'services', label: 'Our Services', path: '/services' },
    { id: 'contact', label: 'Contact Us', path: '/contact', hasDropdown: true }
  ]

  const contactDropdownItems = [
    { id: 'contact-company', label: 'As a Company', path: '/contact/company' },
    { id: 'contact-seeker', label: 'As a Job Seeker', path: '/contact/seeker' }
  ]

  const isActive = (path: string) => location.pathname === path

  const handleDropdownMouseEnter = () => {
    // Clear any existing timer
    if (dropdownCloseTimer) {
      clearTimeout(dropdownCloseTimer)
      setDropdownCloseTimer(null)
    }
    setIsContactDropdownOpen(true)
  }

  const handleDropdownMouseLeave = () => {
    // Set a timer to close the dropdown after a delay
    const timer = setTimeout(() => {
      setIsContactDropdownOpen(false)
    }, 300) // 300ms delay before closing
    setDropdownCloseTimer(timer)
  }

  const handleDropdownContentMouseEnter = () => {
    // Clear the timer if mouse enters dropdown content
    if (dropdownCloseTimer) {
      clearTimeout(dropdownCloseTimer)
      setDropdownCloseTimer(null)
    }
  }

  const handleDropdownContentMouseLeave = () => {
    // Set a timer to close the dropdown when leaving dropdown content
    const timer = setTimeout(() => {
      setIsContactDropdownOpen(false)
    }, 300) // 300ms delay before closing
    setDropdownCloseTimer(timer)
  }

  // Cleanup timer on component unmount
  useEffect(() => {
    return () => {
      if (dropdownCloseTimer) {
        clearTimeout(dropdownCloseTimer)
      }
    }
  }, [dropdownCloseTimer])

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF1E6' }}>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md" style={{ backgroundColor: 'rgba(253, 250, 246, 0.9)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img 
                src="/Logo.png" 
                alt="HeadHR Logo" 
                className="h-8 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <div key={item.id} className="relative">
                  {item.hasDropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      <button
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                          location.pathname.startsWith('/contact')
                            ? 'text-white'
                            : 'hover:opacity-80'
                        }`}
                        style={{
                          backgroundColor: location.pathname.startsWith('/contact') ? '#99BC85' : 'transparent',
                          color: location.pathname.startsWith('/contact') ? 'white' : '#99BC85'
                        }}
                      >
                        {item.label}
                        <FiChevronDown size={16} />
                      </button>
                      
                      {isContactDropdownOpen && (
                        <div 
                          className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-10"
                          onMouseEnter={handleDropdownContentMouseEnter}
                          onMouseLeave={handleDropdownContentMouseLeave}
                        >
                          {contactDropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.id}
                              to={dropdownItem.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                              style={{
                                color: isActive(dropdownItem.path) ? '#99BC85' : '#374151'
                              }}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.path)
                          ? 'text-white'
                          : 'hover:opacity-80'
                      }`}
                      style={{
                        backgroundColor: isActive(item.path) ? '#99BC85' : 'transparent',
                        color: isActive(item.path) ? 'white' : '#99BC85'
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md"
                style={{ color: '#99BC85' }}
              >
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4"
              style={{ backgroundColor: '#FDFAF6' }}
            >
              {navItems.map((item) => (
                <div key={item.id}>
                  {item.hasDropdown ? (
                    <div>
                      <div className="px-3 py-2 text-base font-medium" style={{ color: '#99BC85' }}>
                        {item.label}
                      </div>
                      {contactDropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.id}
                          to={dropdownItem.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block w-full text-left px-6 py-2 rounded-md text-base font-medium transition-colors"
                          style={{
                            backgroundColor: isActive(dropdownItem.path) ? '#99BC85' : 'transparent',
                            color: isActive(dropdownItem.path) ? 'white' : '#99BC85'
                          }}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors"
                      style={{
                        backgroundColor: isActive(item.path) ? '#99BC85' : 'transparent',
                        color: isActive(item.path) ? 'white' : '#99BC85'
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/contact/company" element={<ContactCompany />} />
          <Route path="/contact/seeker" element={<ContactSeeker />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="py-8 mt-16" style={{ backgroundColor: '#99BC85' }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/Logo.png" 
                  alt="HeadHR Logo" 
                  className="h-8 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-white text-sm leading-relaxed">
                Your trusted partner in finding the right talent. We connect passionate professionals
                with growing companies to build successful teams together.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/" className="block text-white hover:text-gray-200 transition-colors text-sm">
                  Home
                </Link>
                <Link to="/about" className="block text-white hover:text-gray-200 transition-colors text-sm">
                  About Us
                </Link>
                <Link to="/services" className="block text-white hover:text-gray-200 transition-colors text-sm">
                  Our Services
                </Link>
                <Link to="/contact" className="block text-white hover:text-gray-200 transition-colors text-sm">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FiMail size={16} className="text-white" />
                  <span className="text-white text-sm">Info@headhr.co.in</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiPhone size={16} className="text-white" />
                  <span className="text-white text-sm">+91 7808026334</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiLinkedin size={16} className="text-white" />
                  <a 
                    href="https://www.linkedin.com/company/headhr-consultancy-services/posts/?feedView=all" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-200 transition-colors text-sm"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-6">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <p className="text-white text-sm">
                © 2025 HeadHR Consultancy Services. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Contact Company Component
const ContactCompany = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields are filled
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      alert('Please fill in all fields')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('http://localhost:3001/api/contact/company', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Email sending error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: '#E4EFE7' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&w=600&q=80" 
              alt="Contact us as a company" 
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl object-contain h-auto"
            />
          </div>
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#99BC85' }}>Contact Us - Company</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get in touch with us for your HR needs and company requirements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 rounded-lg shadow-lg"
            style={{ backgroundColor: '#FDFAF6' }}
          >
            <h3 className="text-3xl font-bold mb-6 text-center" style={{ color: '#99BC85' }}>Get in Touch</h3>
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-lg bg-green-100 border border-green-400 text-green-700">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 rounded-lg bg-red-100 border border-red-400 text-red-700">
                Sorry, there was an error sending your message. Please try again or contact us directly.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent focus:outline-none transition-all"
                    placeholder="Your Company Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent focus:outline-none transition-all"
                    placeholder="company@example.com"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="subject">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent focus:outline-none transition-all"
                  placeholder="HR Service Required"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent focus:outline-none transition-all resize-none"
                  placeholder="Tell us about your HR needs..."
                ></textarea>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-md text-white font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  style={{ backgroundColor: '#99BC85' }}
                >
                  <FiSend size={18} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: '#FDFAF6' }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#99BC85' }}>Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center p-4 rounded-lg" style={{ backgroundColor: '#E4EFE7' }}>
                  <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#99BC85' }}>
                    <FiMail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">Info@headhr.co.in</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 rounded-lg" style={{ backgroundColor: '#E4EFE7' }}>
                  <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#99BC85' }}>
                    <FiPhone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91 7808026334</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 rounded-lg" style={{ backgroundColor: '#E4EFE7' }}>
                  <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#99BC85' }}>
                    <FiLinkedin size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/company/headhr-consultancy-services/posts/?feedView=all" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors break-all"
                    >
                      Visit our LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// Contact Seeker Component
const ContactSeeker = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload only PDF, DOC, or DOCX files')
        e.target.value = ''
        return
      }
      
      // Check file size (max 10MB for resume files)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB')
        e.target.value = ''
        return
      }
      
      setResumeFile(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields are filled
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      alert('Please fill in all fields')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('subject', formData.subject)
      formDataToSend.append('message', formData.message)
      
      if (resumeFile) {
        formDataToSend.append('resume', resumeFile)
      }

      const response = await fetch('http://localhost:3001/api/contact/seeker', {
        method: 'POST',
        body: formDataToSend,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to send email')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setResumeFile(null)
    } catch (error) {
      console.error('Email sending error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: '#E4EFE7' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&w=400&q=80" 
              alt="Contact us as a job seeker" 
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-contain h-auto"
            />
          </div>
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#99BC85' }}>Contact Us - Job Seeker</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Looking for new opportunities? Get in touch with us and let's find your dream job together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 rounded-lg shadow-lg"
            style={{ backgroundColor: '#FDFAF6' }}
          >
            <h3 className="text-3xl font-bold mb-6 text-center" style={{ color: '#99BC85' }}>Get in Touch</h3>
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-lg bg-green-100 border border-green-400 text-green-700">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
                {resumeFile && (
                  <div className="mt-2 text-sm">
                    Your resume has been successfully attached and sent with your message.
                  </div>
                )}
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 rounded-lg bg-red-100 border border-red-400 text-red-700">
                Sorry, there was an error sending your message. Please try again or contact us directly.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="seeker-name">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="seeker-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent focus:outline-none transition-all"
                    placeholder="Your Full Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="seeker-email">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="seeker-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent focus:outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="seeker-subject">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  id="seeker-subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent focus:outline-none transition-all"
                  placeholder="Job Interest / Career Inquiry"
                />
              </div>
              
              {/* Resume Upload Section */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="resume">
                  Upload Resume (Optional)
                </label>
                <div className="relative">
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="resume"
                    className="block w-full px-4 py-3 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:ring-2 focus:ring-green-500 focus:border-transparent cursor-pointer transition-all"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <FiUpload size={18} />
                      <span className="text-gray-700">
                        {resumeFile ? resumeFile.name : 'Click to upload resume (PDF, DOC, DOCX - Max 5MB)'}
                      </span>
                    </div>
                  </label>
                </div>
                {resumeFile && (
                  <div className="mt-2 text-sm text-gray-600">
                    File size: {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                  </div>
                )}
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="seeker-message">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="seeker-message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent focus:outline-none transition-all resize-none"
                  placeholder="Tell us about your career goals and what type of opportunities you're looking for..."
                ></textarea>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-md text-white font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  style={{ backgroundColor: '#99BC85' }}
                >
                  <FiSend size={18} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: '#FDFAF6' }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#99BC85' }}>Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center p-4 rounded-lg" style={{ backgroundColor: '#E4EFE7' }}>
                  <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#99BC85' }}>
                    <FiMail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">Info@headhr.co.in</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 rounded-lg" style={{ backgroundColor: '#E4EFE7' }}>
                  <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#99BC85' }}>
                    <FiPhone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91 7808026334</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 rounded-lg" style={{ backgroundColor: '#E4EFE7' }}>
                  <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#99BC85' }}>
                    <FiLinkedin size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/company/headhr-consultancy-services/posts/?feedView=all" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors break-all"
                    >
                      Visit our LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: '#FDFAF6' }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#99BC85' }}>Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Personalized career guidance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Access to top companies</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Professional resume review</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Interview preparation support</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default App
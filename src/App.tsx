import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiMail, FiPhone, FiSend } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import Home from './Home'
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'

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
  const location = useLocation()

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About Us', path: '/about' },
    { id: 'services', label: 'Our Services', path: '/services' },
    { id: 'contact', label: 'Contact Us', path: '/contact' }
  ]

  const isActive = (path: string) => location.pathname === path

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
                <Link
                  key={item.id}
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
                <Link
                  key={item.id}
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
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

// Contact Component
const Contact = () => {
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
      // Initialize EmailJS (replace with your actual IDs)
      await emailjs.send(
        'service_wlktqkl', // Replace with your EmailJS service ID
        'template_e66np37', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'HeadHR Team', // Your name/company name
        },
        'dZuP9HrrqWJVlgJxK' // Replace with your EmailJS public key
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
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
              alt="Contact us" 
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl object-contain h-auto"
            />
          </div>
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#99BC85' }}>Contact Us</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We'd love to hear from you! Get in touch with us for any inquiries.
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
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent focus:outline-none transition-all"
                    placeholder="Your Name"
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
                    placeholder="you@example.com"
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
                  placeholder="Subject"
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
                  placeholder="Your Message"
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
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default App
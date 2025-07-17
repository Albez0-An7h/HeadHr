import { motion } from 'framer-motion'
import { FiBriefcase, FiUser, FiArrowRight, FiLinkedin } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const ContactUs = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#FAF1E6' }}>
            {/* Hero Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            <span style={{ color: '#99BC85' }}>Contact</span>
                            <span className="text-gray-800"> Us</span>
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            We're here to help you find the perfect match. Whether you're a company looking for talent 
                            or a job seeker exploring opportunities, we're ready to assist you.
                        </p>
                    </motion.div>

                    {/* Contact Options */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Company Contact */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                        >
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ backgroundColor: '#E4EFE7' }}>
                                    <FiBriefcase className="text-3xl" style={{ color: '#99BC85' }} />
                                </div>
                                <h2 className="text-3xl font-bold mb-4" style={{ color: '#99BC85' }}>
                                    For Companies
                                </h2>
                                <p className="text-gray-700 mb-8 leading-relaxed">
                                    Looking to hire top talent? Let us help you find the perfect candidates 
                                    for your team. Our recruitment experts are ready to understand your needs 
                                    and deliver exceptional results.
                                </p>
                                <button
                                    onClick={() => navigate('/contact/company')}
                                    className="w-full px-8 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                                    style={{ backgroundColor: '#99BC85' }}
                                >
                                    Contact Us as Company <FiArrowRight />
                                </button>
                            </div>
                        </motion.div>

                        {/* Job Seeker Contact */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                        >
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ backgroundColor: '#E4EFE7' }}>
                                    <FiUser className="text-3xl" style={{ color: '#99BC85' }} />
                                </div>
                                <h2 className="text-3xl font-bold mb-4" style={{ color: '#99BC85' }}>
                                    For Job Seekers
                                </h2>
                                <p className="text-gray-700 mb-8 leading-relaxed">
                                    Ready to take the next step in your career? We're here to connect you 
                                    with exciting opportunities that match your skills and aspirations. 
                                    Let's find your dream job together.
                                </p>
                                <button
                                    onClick={() => navigate('/contact/seeker')}
                                    className="w-full px-8 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                                    style={{ backgroundColor: '#99BC85' }}
                                >
                                    Contact Us as Job Seeker <FiArrowRight />
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* LinkedIn Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-center mt-16"
                    >
                        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                            <div className="flex items-center justify-center mb-4">
                                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#99BC85' }}>
                                    <FiLinkedin size={32} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold" style={{ color: '#99BC85' }}>
                                    Connect with Us
                                </h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Stay updated with our latest job postings, company news, and industry insights.
                            </p>
                            <a 
                                href="https://www.linkedin.com/company/headhr-consultancy-services/posts/?feedView=all" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-all transform hover:scale-105 shadow-lg gap-2"
                                style={{ backgroundColor: '#99BC85' }}
                            >
                                <FiLinkedin size={20} />
                                Visit our LinkedIn
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs

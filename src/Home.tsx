import { motion } from 'framer-motion'
import { FiArrowRight, FiSearch, FiUsers, FiHeart, FiStar, FiCheckCircle } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen">
            {/* Hero Section with Background */}
            <section className="min-h-screen flex items-center relative overflow-hidden" style={{ backgroundColor: '#FAF1E6' }}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-10 w-32 h-32 rounded-full" style={{ backgroundColor: '#99BC85' }}></div>
                    <div className="absolute top-40 right-20 w-24 h-24 rounded-full" style={{ backgroundColor: '#E4EFE7' }}></div>
                    <div className="absolute bottom-32 left-1/3 w-16 h-16 rounded-full" style={{ backgroundColor: '#99BC85' }}></div>
                </div>

                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#99BC85' }}>
                            One Stop
                            <br />
                            <span className="text-gray-800">Recruitment Solution</span>
                        </h1>
                        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                            Your trusted partner in finding the right talent. We connect passionate professionals
                            with growing companies to build successful teams together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button 
                                onClick={() => navigate('/contact')}
                                className="px-8 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                                style={{ backgroundColor: '#99BC85' }}>
                                Contact Us <FiArrowRight />
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Professional team collaboration"
                                className="w-full h-96 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Floating Info Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="absolute -bottom-6 -left-6 p-4 rounded-lg shadow-xl backdrop-blur-sm"
                            style={{ backgroundColor: 'rgba(228, 239, 231, 0.95)' }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-full" style={{ backgroundColor: '#99BC85' }}>
                                    <FiUsers size={20} className="text-white" />
                                </div>
                                <div>
                                    <div className="text-lg font-bold" style={{ color: '#99BC85' }}>Fresh Start</div>
                                    <div className="text-sm text-gray-600">Your Success Partner</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            className="absolute -top-6 -right-6 p-4 rounded-lg shadow-xl backdrop-blur-sm"
                            style={{ backgroundColor: 'rgba(253, 250, 246, 0.95)' }}
                        >
                            <div className="flex items-center gap-3">
                                <div>
                                    <div className="text-lg font-bold" style={{ color: '#99BC85' }}>Quality Focus</div>
                                    <div className="text-sm text-gray-600">Every Hire Matters</div>
                                </div>
                                <FiCheckCircle size={24} style={{ color: '#99BC85' }} />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20" style={{ backgroundColor: '#E4EFE7' }}>
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-6" style={{ color: '#99BC85' }}>
                            Why Choose HeadHR?
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            We're passionate about connecting the right people with the right opportunities.
                            Our personalized approach ensures quality matches for both candidates and employers.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: FiSearch,
                                title: "Thorough Screening",
                                description: "We carefully evaluate each candidate to ensure they meet your specific requirements.",
                                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&w=300&q=80"
                            },
                            {
                                icon: FiUsers,
                                title: "Personal Touch",
                                description: "We believe in building relationships, not just filling positions.",
                                image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&w=300&q=80"
                            },
                            {
                                icon: FiHeart,
                                title: "Dedicated Support",
                                description: "Our team is committed to supporting you throughout the entire recruitment process.",
                                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=300&q=80"
                            },
                            {
                                icon: FiStar,
                                title: "Quality First",
                                description: "We focus on finding the best fit rather than rushing to fill positions.",
                                image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&w=300&q=80"
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="p-6 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl"
                                    style={{ backgroundColor: '#FDFAF6' }}>
                                    <div className="mb-4 overflow-hidden rounded-lg">
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <feature.icon
                                        size={36}
                                        className="mx-auto mb-4"
                                        style={{ color: '#99BC85' }}
                                    />
                                    <h3 className="text-xl font-semibold mb-3" style={{ color: '#99BC85' }}>
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Services Section */}
            <section className="py-20" style={{ backgroundColor: '#FDFAF6' }}>
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-6" style={{ color: '#99BC85' }}>
                            Our Services
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Comprehensive recruitment solutions tailored to your business needs.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Permanent Staffing",
                                description: "Find long-term employees who will grow with your company and contribute to your success.",
                                image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&w=400&q=80"
                            },
                            {
                                title: "Contract Hiring",
                                description: "Flexible staffing solutions for project-based work and temporary positions.",
                                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&w=400&q=80"
                            },
                            {
                                title: "HR Consulting",
                                description: "Expert guidance on HR best practices, policies, and organizational development.",
                                image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&w=400&q=80"
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
                                style={{ backgroundColor: '#E4EFE7' }}
                            >
                                <div className="mb-4 overflow-hidden rounded-lg">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-3" style={{ color: '#99BC85' }}>
                                    {service.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Commitment Section */}
            <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#99BC85' }}>
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl font-bold mb-6 text-white">
                            Our Commitment to You
                        </h2>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            As a growing recruitment consultancy, we're dedicated to providing personalized service
                            and building lasting relationships. Every client is important to us, and we're committed
                            to understanding your unique needs and delivering results that exceed expectations.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                            {[
                                { title: "Personalized Service", desc: "Every client receives our full attention" },
                                { title: "Quality Focus", desc: "We prioritize the right fit over quick fills" },
                                { title: "Growing Together", desc: "Your success helps us grow and improve" }
                            ].map((commitment, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="text-center"
                                >
                                    <h3 className="text-xl font-semibold mb-3 text-white">
                                        {commitment.title}
                                    </h3>
                                    <p className="text-white/80">
                                        {commitment.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative" style={{ backgroundColor: '#FAF1E6' }}>
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="mb-8">
                            <img
                                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&w=400&q=80"
                                alt="Join us"
                                className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg"
                            />
                        </div>
                        <h2 className="text-4xl font-bold mb-6" style={{ color: '#99BC85' }}>
                            Ready to Start Your Recruitment Journey?
                        </h2>
                        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                            Let's work together to find the perfect talent for your team or the ideal opportunity for your career.
                        </p>
                        <button
                            onClick={() => navigate('/contact')}
                            className="px-8 py-4 text-lg font-semibold rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
                            style={{
                                backgroundColor: '#99BC85',
                                color: 'white'
                            }}
                        >
                            Get In Touch Today
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Home

import { motion } from 'framer-motion'
import { FiHeart, FiShield, FiTrendingUp } from 'react-icons/fi'

const AboutUs = () => (
  <div className="min-h-screen py-20" style={{ backgroundColor: '#E4EFE7' }}>
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&w=600&q=80" 
            alt="Our team" 
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl object-contain h-auto"
          />
        </div>
        <h2 className="text-4xl font-bold mb-6" style={{ color: '#99BC85' }}>About Us</h2>
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <h3 className="text-2xl font-semibold text-center" style={{ color: '#99BC85' }}>
            Empowering Your Success: Welcome to Head HR Consultancy
          </h3>
          
          {/* Mission Statement with Image */}
          <div className="grid md:grid-cols-2 gap-8 items-center my-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&w=500&q=80" 
                alt="Professional consultation" 
                className="w-full rounded-xl shadow-lg object-contain h-auto"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that at the heart of every thriving organization is a strategically designed and efficiently managed human resources framework. As a leading HR consultancy, we specialize in providing tailored solutions that empower businesses to optimize their people strategies and unlock their true potential.
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Our team of seasoned HR consultants brings a wealth of experience and knowledge to the table. We understand that each organization is unique, and our approach reflects this. Whether it's talent acquisition, performance management, organizational development, or employee engagement, we take a holistic view to address your specific challenges and goals.
          </p>
          
          {/* Values Section with Images */}
          <div className="grid md:grid-cols-2 gap-8 items-center my-12">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We pride ourselves on fostering long-term partnerships with our clients. We are not just consultants; we are collaborators invested in your success. We work hand-in-hand with your team to understand your culture, values, and objectives, ensuring that our recommendations seamlessly integrate into your business fabric.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&w=500&q=80" 
                alt="Team collaboration" 
                className="w-full rounded-xl shadow-lg object-contain h-auto"
              />
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Join hands with Head HR and experience the transformational impact of strategic HR management. Together, we'll navigate the dynamic landscape of human resources, turning challenges into stepping stones and aspirations into achievements.
          </p>
          <p className="text-xl font-semibold text-center mt-8" style={{ color: '#99BC85' }}>
            Empower your workforce, elevate your business, with us
          </p>
        </div>
      </motion.div>

      {/* Company Values */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-16 p-8 rounded-xl shadow-lg"
        style={{ backgroundColor: '#FDFAF6' }}
      >
        <h3 className="text-3xl font-bold text-center mb-8" style={{ color: '#99BC85' }}>Our Core Values</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: FiHeart, title: "Integrity", desc: "We operate with transparency and honesty in all our dealings" },
            { icon: FiShield, title: "Trust", desc: "Building lasting relationships through reliable and consistent service" },
            { icon: FiTrendingUp, title: "Excellence", desc: "Continuously improving to deliver exceptional results" }
          ].map((value, index) => (
            <div key={index} className="text-center p-4">
              <value.icon size={40} className="mx-auto mb-3" style={{ color: '#99BC85' }} />
              <h4 className="text-lg font-semibold mb-2" style={{ color: '#99BC85' }}>{value.title}</h4>
              <p className="text-gray-600 text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
)

export default AboutUs

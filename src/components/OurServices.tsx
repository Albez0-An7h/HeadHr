import { motion } from 'framer-motion'
import { FiUsers, FiTrendingUp, FiSearch, FiTarget, FiShield, FiCheckCircle } from 'react-icons/fi'

const OurServices = () => (
  <div className="min-h-screen py-20" style={{ backgroundColor: '#FDFAF6' }}>
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&w=800&q=80" 
            alt="Our services" 
            className="w-full max-w-4xl mx-auto rounded-xl shadow-lg object-cover h-64"
          />
        </div>
        <h2 className="text-4xl font-bold mb-6" style={{ color: '#99BC85' }}>Our Services</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Comprehensive HR solutions tailored to your business needs.
        </p>
      </motion.div>

      {/* Service Icons Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-4 gap-6 mb-16"
      >
        {[
          { icon: FiSearch, title: "Talent Search", color: "#99BC85" },
          { icon: FiUsers, title: "Team Building", color: "#99BC85" },
          { icon: FiTarget, title: "Strategic HR", color: "#99BC85" },
          { icon: FiShield, title: "Compliance", color: "#99BC85" }
        ].map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="text-center p-4 rounded-lg hover:shadow-lg transition-shadow"
            style={{ backgroundColor: '#E4EFE7' }}
          >
            <service.icon size={48} className="mx-auto mb-3" style={{ color: service.color }} />
            <h4 className="font-semibold" style={{ color: service.color }}>{service.title}</h4>
          </motion.div>
        ))}
      </motion.div>

      {/* Recruitment Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 p-8 rounded-lg shadow-lg"
        style={{ backgroundColor: '#E4EFE7' }}
      >
        <h3 className="text-3xl font-bold mb-6 text-center" style={{ color: '#99BC85' }}>Recruitment Services</h3>
        
        <div className="max-w-6xl mx-auto space-y-6 text-gray-700 leading-relaxed">
          <p className="text-lg">
            In a competitive business landscape, the journey to success is paved with the right people. We are dedicated to guiding organizations like yours on this transformative journey by providing unparalleled recruitment services that resonate with your unique needs and aspirations.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor: '#FDFAF6' }}>
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&w=100&q=80" 
                  alt="Strategy" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <h4 className="text-xl font-semibold" style={{ color: '#99BC85' }}>Strategic Talent Acquisition</h4>
              </div>
              <p>We understand that talent acquisition is not just about filling positions; it's about strategically aligning the right individuals with your organization's vision and culture.</p>
            </div>
            
            <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor: '#FDFAF6' }}>
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&w=100&q=80" 
                  alt="Industry" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <h4 className="text-xl font-semibold" style={{ color: '#99BC85' }}>Diverse Industry Expertise</h4>
              </div>
              <p>Our diverse team of recruitment specialists boasts experience across IT, healthcare, finance, engineering, and more sectors.</p>
            </div>
            
            <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor: '#FDFAF6' }}>
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&w=100&q=80" 
                  alt="Solutions" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <h4 className="text-xl font-semibold" style={{ color: '#99BC85' }}>Customized Solutions</h4>
              </div>
              <p>Whether you require executive search, high-volume hiring, or specialized talent acquisition, we tailor our services to your precise needs.</p>
            </div>
            
            <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor: '#FDFAF6' }}>
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&w=100&q=80" 
                  alt="Support" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <h4 className="text-xl font-semibold" style={{ color: '#99BC85' }}>End-to-End Support</h4>
              </div>
              <p>From initial screening to onboarding assistance, we provide comprehensive support throughout the entire recruitment process.</p>
            </div>
            
            <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor: '#FDFAF6' }}>
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&w=100&q=80" 
                  alt="Innovation" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <h4 className="text-xl font-semibold" style={{ color: '#99BC85' }}>Embracing Innovation</h4>
              </div>
              <p>We leverage cutting-edge recruitment technologies, from AI-powered sourcing to data-driven insights for competitive advantage.</p>
            </div>
            
            <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor: '#FDFAF6' }}>
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&w=100&q=80" 
                  alt="Partnership" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <h4 className="text-xl font-semibold" style={{ color: '#99BC85' }}>Partnering for Long-Term Success</h4>
              </div>
              <p>We're your strategic partners, working tirelessly to help you build teams that drive innovation, collaboration, and growth.</p>
            </div>
          </div>
          
          <div className="text-center mt-8 p-6 rounded-lg" style={{ backgroundColor: '#FDFAF6' }}>
            <FiCheckCircle size={48} className="mx-auto mb-4" style={{ color: '#99BC85' }} />
            <p className="text-lg font-medium" style={{ color: '#99BC85' }}>
              Our recruitment services are more than a solution; they are a transformational journey towards excellence.
            </p>
          </div>
        </div>
      </motion.div>

      {/* RPO Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-8 rounded-lg shadow-lg"
        style={{ backgroundColor: '#FDFAF6' }}
      >
        <h3 className="text-3xl font-bold mb-6 text-center" style={{ color: '#99BC85' }}>RPO Services</h3>
        
        <div className="max-w-6xl mx-auto space-y-6 text-gray-700 leading-relaxed">
          <p className="text-lg">
            Our comprehensive Recruitment Process Outsourcing (RPO) services offer a strategic and transformative approach to talent acquisition that's tailored to your unique needs.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor: '#E4EFE7' }}>
              <div className="flex items-center mb-4">
                <FiTarget size={32} className="mr-4" style={{ color: '#99BC85' }} />
                <h4 className="text-xl font-semibold" style={{ color: '#99BC85' }}>A Holistic Approach to Recruitment</h4>
              </div>
              <p>We focus on optimizing your entire talent acquisition process, from initial sourcing to onboarding, ensuring seamless efficiency.</p>
            </div>
            
            <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor: '#E4EFE7' }}>
              <div className="flex items-center mb-4">
                <FiSearch size={32} className="mr-4" style={{ color: '#99BC85' }} />
                <h4 className="text-xl font-semibold" style={{ color: '#99BC85' }}>Strategic Talent Mapping</h4>
              </div>
              <p>Comprehensive analysis of your needs, developing customized strategies that align with current and future requirements.</p>
            </div>
            
            <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor: '#E4EFE7' }}>
              <div className="flex items-center mb-4">
                <FiTrendingUp size={32} className="mr-4" style={{ color: '#99BC85' }} />
                <h4 className="text-xl font-semibold" style={{ color: '#99BC85' }}>Cutting-Edge Technology</h4>
              </div>
              <p>AI-driven candidate sourcing and predictive analytics deliver data-driven insights and competitive advantage.</p>
            </div>
            
            <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor: '#E4EFE7' }}>
              <div className="flex items-center mb-4">
                <FiUsers size={32} className="mr-4" style={{ color: '#99BC85' }} />
                <h4 className="text-xl font-semibold" style={{ color: '#99BC85' }}>Scalability and Flexibility</h4>
              </div>
              <p>Our services adapt to your changing requirements, handling rapid growth or seasonal fluctuations seamlessly.</p>
            </div>
            
            <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor: '#E4EFE7' }}>
              <div className="flex items-center mb-4">
                <FiShield size={32} className="mr-4" style={{ color: '#99BC85' }} />
                <h4 className="text-xl font-semibold" style={{ color: '#99BC85' }}>Enhancing Employer Branding</h4>
              </div>
              <p>We work to enhance your employer branding, positioning you as an employer of choice in the market.</p>
            </div>
            
            <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor: '#E4EFE7' }}>
              <div className="flex items-center mb-4">
                <FiCheckCircle size={32} className="mr-4" style={{ color: '#99BC85' }} />
                <h4 className="text-xl font-semibold" style={{ color: '#99BC85' }}>Strategic Partnerships</h4>
              </div>
              <p>As an extension of your HR team, we align our strategies with your business objectives for mutual success.</p>
            </div>
          </div>
          
          <div className="text-center mt-8 p-6 rounded-lg" style={{ backgroundColor: '#E4EFE7' }}>
            <img 
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&w=100&q=80" 
              alt="Success" 
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover shadow-md"
            />
            <p className="text-lg font-medium" style={{ color: '#99BC85' }}>
              Head HR is more than an outsourcing solution; it's a transformative force in talent acquisition and management.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
)

export default OurServices

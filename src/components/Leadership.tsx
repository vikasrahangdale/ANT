import { motion } from "framer-motion";
import { Briefcase, Award, Users, Target, Star, Sparkles, ArrowRight, X } from "lucide-react";
import { useState } from "react";

// Import your leadership images
// import apoorvImage from ".apoorv.jpg";
// import rajendraImage from "../assets/leaders/rajendra.jpg";
// import shrutiImage from "../assets/leaders/shruti.jpg";
// import divyaImage from "../assets/leaders/divya.jpg";

const Leadership = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const leaders = [
    {
      id: 1,
      name: "Apoorv Asati",
      position: "Managing Director",
      experience: "14 Years",
      description: "Mr. Apoorv Asati is the Managing Director and visionary leader of Attractive Group. With 14 years of experience in the Automotive Sector, he has led the Group through significant expansions by putting footprints globally as a leading export house from India. Now expanding the group into Automatic Rubber Tube Manufacturing & Rubber Compounding Factory based in Freezone Bhopal with the highest capacity of per day production in India.",
      fullDescription: `Mr. Apoorv Asati is the Managing Director and visionary leader of Attractive Group. With 14 years of experience in the Automotive Sector, he has led the Group through significant expansions by putting footprints globally as a leading export house from India.

Under his leadership, the company has:
• Expanded operations to 80+ countries worldwide
• Established state-of-the-art manufacturing facilities
• Pioneered the Group's entry into EV manufacturing
• Implemented sustainable business practices
• Built a network of 50M+ satisfied customers

His current focus is on expanding the group into Automatic Rubber Tube Manufacturing & Rubber Compounding Factory based in Freezone Bhopal with the highest capacity of per day production in India. He is also driving innovation in electric vehicle technology and sustainable manufacturing practices.

Mr. Asati holds a degree in Mechanical Engineering and has completed advanced management programs from leading international institutions.`,
      color: "from-red-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-red-500 to-orange-500",
      iconColor: "text-white",
      expertise: ["Global Expansion", "Manufacturing", "Export Leadership", "EV Innovation"],
      achievements: [
        "Led expansion to 80+ countries",
        "Established world-class manufacturing facilities",
        "Pioneered EV technology adoption",
        "Achieved 50M+ customer milestone"
      ]
    },
    {
      id: 2,
      name: "Rajendra Prasad Asati",
      position: "Founder & Chairman",
      experience: "32 Years",
      description: "Rajendra Prasad Asati is the Founder and Chairman of Attractive Group. A Mechanical Engineer by profession with over 32 years of experience in the automotive sector, he stands out as a prominent expert in his field. His strategic vision and deep understanding of the industry have been pivotal in guiding Attractive Group to surpass its competitors and maintain a strong position in the market.",
      fullDescription: `Rajendra Prasad Asati is the Founder and Chairman of Attractive Group. A Mechanical Engineer by profession with over 32 years of experience in the automotive sector, he stands out as a prominent expert in his field.

Key Contributions:
• Founded Attractive Group in 1980 as a valuation consultancy firm
• Led strategic diversification into manufacturing in 1997
• Established the Group's core values and business philosophy
• Mentored the next generation of leadership
• Built lasting partnerships with global automotive brands

His strategic vision and deep understanding of the industry have been pivotal in guiding Attractive Group to surpass its competitors and maintain a strong position in the market. Under his guidance, the company has grown from a single dealership to a multi-division conglomerate.

Mr. Asati is known for his innovative approach to business and commitment to quality. He has been instrumental in establishing the Group's reputation as a trusted partner in the automotive industry.`,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-500",
      iconColor: "text-white",
      expertise: ["Strategic Vision", "Industry Expertise", "Business Development", "Mentorship"],
      achievements: [
        "Founded Attractive Group in 1980",
        "Pioneered manufacturing diversification",
        "Built industry-leading reputation",
        "Established global partnerships"
      ]
    },
    {
      id: 3,
      name: "Shruti Asati",
      position: "Co-Founder & CFO",
      experience: "14 Years",
      description: "Shruti Asati is the Co-Founder of Attractive Group, where she plays a crucial role in overseeing the company's financial operations. As a Cost Accountant by profession with 14 years of experience, she brings a high level of precision and expertise to her work. Her meticulous approach ensures financial accuracy and contributes to the overall efficiency and success of Attractive Group.",
      fullDescription: `Shruti Asati is the Co-Founder and Chief Financial Officer of Attractive Group, where she plays a crucial role in overseeing the company's financial operations. As a Cost Accountant by profession with 14 years of experience, she brings a high level of precision and expertise to her work.

Financial Leadership:
• Implemented robust financial systems and controls
• Managed financial planning and analysis
• Oversaw international financial operations across 80+ countries
• Implemented cost optimization strategies
• Ensured regulatory compliance across markets

Her meticulous approach ensures financial accuracy and contributes to the overall efficiency and success of Attractive Group. She has been instrumental in the company's sustainable growth and financial stability.

Key Achievements:
• Streamlined financial operations across all divisions
• Implemented ERP systems for better financial management
• Maintained profitability through strategic financial planning
• Established strong relationships with banking partners
• Ensured compliance with international financial standards`,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-500",
      iconColor: "text-white",
      expertise: ["Financial Strategy", "Cost Management", "Operational Efficiency", "Compliance"],
      achievements: [
        "Optimized financial operations",
        "Implemented ERP systems",
        "Maintained profitability",
        "Ensured global compliance"
      ]
    },
    {
      id: 4,
      name: "Divya Asati",
      position: "Co-Founder & CSR Head",
      experience: "25 Years",
      description: "Divya Asati is the Co-Founder of Attractive Group, bringing with her 25 years of extensive experience in the automotive sector. In her role, she focuses on managing the Group's Corporate Social Responsibility (CSR) activities. Her deep industry knowledge and commitment to social impact ensure that the Group's CSR initiatives are both strategic and effective.",
      fullDescription: `Divya Asati is the Co-Founder and Head of Corporate Social Responsibility (CSR) at Attractive Group, bringing with her 25 years of extensive experience in the automotive sector. In her role, she focuses on managing the Group's Corporate Social Responsibility (CSR) activities.

CSR Initiatives & Impact:
• Community Development Programs
• Environmental Sustainability Projects
• Education and Skill Development Initiatives
• Healthcare and Wellness Programs
• Women Empowerment Projects

Her deep industry knowledge and commitment to social impact ensure that the Group's CSR initiatives are both strategic and effective. She believes in creating sustainable value for all stakeholders while maintaining business excellence.

Key CSR Projects:
• Established skill development centers in rural areas
• Implemented environmental conservation programs
• Supported education for underprivileged children
• Promoted women empowerment through training programs
• Contributed to healthcare infrastructure development

Under her leadership, Attractive Group has been recognized for its commitment to social responsibility and sustainable business practices.`,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-500",
      iconColor: "text-white",
      expertise: ["CSR Strategy", "Social Impact", "Community Development", "Sustainability"],
      achievements: [
        "Led impactful CSR programs",
        "Established community centers",
        "Promoted environmental sustainability",
        "Empowered women through training"
      ]
    },
  ];

  const stats = [
    { value: "85+", label: "Combined Years of Experience", icon: Briefcase, color: "bg-red-600" },
    { value: "4", label: "Industry Experts", icon: Users, color: "bg-blue-600" },
    { value: "80+", label: "Countries Impact", icon: Target, color: "bg-green-600" },
    { value: "50M+", label: "Customers Served", icon: Star, color: "bg-purple-600" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleReadMore = (leader) => {
    setSelectedLeader(leader);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLeader(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section
        id="leadership"
        className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-gray-200 shadow-lg mb-8"
            >
              <Sparkles className="w-4 h-4 text-red-600" />
              <span className="text-sm font-semibold text-gray-700 tracking-wider">
                MEET OUR LEADERS
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Board of <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Directors</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Visionary leadership driving innovation and excellence across global markets
            </p>
          </motion.div>

       

          {/* Leader Cards with Images */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 h-full overflow-hidden">
                  
                  {/* Leader Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src=""
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    
                    {/* Experience Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full shadow-lg">
                      {leader.experience} Experience
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Name and Position */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                      <p className="text-red-600 font-semibold">{leader.position}</p>
                    </div>

                    {/* Short Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {leader.description}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {leader.expertise.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <motion.button
                      onClick={() => handleReadMore(leader)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-2 bg-red-50 text-red-600 font-semibold rounded-lg hover:bg-red-100 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal/Popup for Full Leader Details */}
      {isModalOpen && selectedLeader && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedLeader.image}
                alt={selectedLeader.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 shadow-lg"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedLeader.name}</h2>
                <p className="text-red-300 font-semibold">{selectedLeader.position}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
              {/* Experience Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-bold rounded-full mb-6">
                <Briefcase className="w-4 h-4" />
                <span>{selectedLeader.experience} Experience</span>
              </div>

              {/* Full Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Profile Overview</h3>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedLeader.fullDescription}
                </div>
              </div>

              {/* Expertise Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedLeader.expertise.map((skill, idx) => (
                    <span key={idx} className="px-4 py-2 bg-red-50 text-red-600 font-medium rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements Section */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h3>
                <ul className="space-y-3">
                  {selectedLeader.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 p-6">
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300"
                >
                  Close Profile
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Leadership;
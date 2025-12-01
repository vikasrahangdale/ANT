import { useState, useEffect } from "react";
import { Briefcase, Award, Users, Target, Star, Sparkles, ArrowRight, X } from "lucide-react";

const Leadership = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const leaders = [
    {
      id: 1,
      name: "Apoorv Asati",
      position: "Managing Director",
      experience: "14 Years",
      image: "https://images.unsplash.com/photo-1731500573044-3551bfa73c4f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isModalOpen]);

  return (
    <>
      <section
        id="leadership"
        className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-gray-200 shadow-lg mb-8">
              <Sparkles className="w-4 h-4 text-red-600" />
              <span className="text-sm font-semibold text-gray-700 tracking-wider">
                MEET OUR LEADERS
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Board of <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Directors</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Visionary leadership driving innovation and excellence across global markets
            </p>
          </div>

       
          {/* Leader Cards with Circle Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {leaders.map((leader) => (
              <div
                key={leader.id}
                className="group"
              >
                <div className="relative bg-white rounded-2xl border border-gray-200  transition-all duration-500 h-full overflow-hidden p-6">
                  
                  {/* Circle Image Profile */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="relative mb-4">
                      {/* Outer Circle with Gradient Border */}
                      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 p-1">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          {/* Image Circle */}
                          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl">
                            <img 
                              src={leader.image}
                              alt={leader.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Experience Badge */}
                      <div className="absolute -bottom-2 right-4">
                        <div className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full shadow-lg border-2 border-white">
                          {leader.experience}
                        </div>
                      </div>
                    </div>

                    {/* Name and Position */}
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                      <p className="text-red-600 font-semibold">{leader.position}</p>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 text-center">
                    {leader.description}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {leader.expertise.slice(0, 2).map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        {skill}
                      </span>
                    ))}
                    {leader.expertise.length > 2 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        +{leader.expertise.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Read More Button */}
                  <button
                    onClick={() => handleReadMore(leader)}
                    className="w-full py-2 bg-red-50 text-red-600  cursor-pointer font-semibold rounded-lg hover:bg-red-100 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Modal with Left DP and Right Content */}
      {isModalOpen && selectedLeader && (
        <div className="fixed inset-0 z-50 flex flex-col md:flex-row bg-white overflow-hidden">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-50 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>

          {/* Left Section - DP and Basic Info */}
          <div className="w-full md:w-1/3 lg:w-1/4 bg-gradient-to-b from-gray-50 to-white border-r border-gray-200 flex flex-col items-center justify-center p-6 md:p-8">
            {/* Circle Image Container */}
            <div className="relative mb-8">
              {/* Outer Circle with Gradient */}
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 p-2">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  {/* Inner Image Circle */}
                  <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <img 
                      src={selectedLeader.image}
                      alt={selectedLeader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-2 right-8">
                <div className="px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-full shadow-xl border-4 border-white">
                  {selectedLeader.experience}
                </div>
              </div>
            </div>

            {/* Name and Position */}
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{selectedLeader.name}</h2>
              <p className="text-red-600 font-semibold text-lg">{selectedLeader.position}</p>
            </div>

            {/* Gradient Divider */}
            <div className={`w-24 h-1 rounded-full bg-gradient-to-r ${selectedLeader.color} mb-6`}></div>

            {/* Quick Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Experience</p>
                  <p className="font-semibold text-gray-900">{selectedLeader.experience}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                  <Award className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Expertise Areas</p>
                  <p className="font-semibold text-gray-900">{selectedLeader.expertise.length} Areas</p>
                </div>
              </div>
            </div>

            {/* Expertise Tags */}
            <div className="w-full">
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {selectedLeader.expertise.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 bg-red-50 text-red-600 font-medium rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Full Content */}
          <div className="w-full md:w-2/3 lg:w-3/4 overflow-y-auto p-6 md:p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              {/* Header with Gradient */}
              <div className={`rounded-xl p-6 mb-8 bg-gradient-to-r ${selectedLeader.color}`}>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Leadership Profile</h1>
                <p className="text-white/90">Comprehensive overview of professional journey and accomplishments</p>
              </div>

              {/* Full Description */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                  Profile Overview
                </h2>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                  {selectedLeader.fullDescription}
                </div>
              </div>

              {/* Key Achievements */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                  Key Achievements
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {selectedLeader.achievements.map((achievement, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                          <span className="text-red-600 font-bold">{idx + 1}</span>
                        </div>
                        <p className="text-gray-700">{achievement}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Details */}
              <div className="bg-gray-50 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Leadership Impact</h2>
                <p className="text-gray-600 mb-6">
                  Under {selectedLeader.name.split(' ')[0]}'s leadership, Attractive Group has achieved remarkable growth and established itself as a global leader in the automotive sector. The strategic vision and commitment to excellence continue to drive innovation and sustainable development across all business verticals.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-red-600 mb-1">80+</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-red-600 mb-1">50M+</div>
                    <div className="text-sm text-gray-600">Customers</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-red-600 mb-1">32+</div>
                    <div className="text-sm text-gray-600">Years Legacy</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-red-600 mb-1">4</div>
                    <div className="text-sm text-gray-600">Business Verticals</div>
                  </div>
                </div>
              </div>

              {/* Close Button at Bottom */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <button
                  onClick={closeModal}
                  className="w-full md:w-auto px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Close Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Leadership;
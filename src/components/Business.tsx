import { motion } from "framer-motion";
import { Factory, ShoppingBag, Globe, Car, ArrowRight, Users, Target, Award, Sparkles } from "lucide-react";
import manufacturingImage from "../assets/manufacturing.jpg";

const Business = () => {
  const divisions = [
    {
      icon: Car,
      title: "Attractive Automobiles",
      services: [
        "Spare Parts of Bajaj, TVS, Hero, Honda",
        "Own Brand AAP Export & Domestic",
        "TVS Shrichakra Distributors",
        "Customised Three Wheelers",
      ],
      color: "from-red-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-red-500 to-orange-500",
      iconColor: "text-white",
      stats: "25+ Years",
      description: "Leading automotive spare parts division with extensive distribution network"
    },
    {
      icon: ShoppingBag,
      title: "Attractive Motors",
      services: [
        "Wholesale Trading",
        "TVS Authorised Dealer",
        "Retail Counter Sales",
        "EV mart under brand 'AAP ELECTRIC'",
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-500",
      iconColor: "text-white",
      stats: "15+ Years",
      description: "Comprehensive retail and EV solutions under trusted brand name"
    },
    {
      icon: Globe,
      title: "Attractive Overseas",
      services: [
        "Export Business for Bajaj",
        "Multi-brand spare parts export",
        "Export to African Countries & Bangladesh",
        "Direct manufacturer partnerships",
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-500",
      iconColor: "text-white",
      stats: "80+ Countries",
      description: "Global export division serving international markets"
    },
    {
      icon: Factory,
      title: "Attractive Private Limited",
      services: [
        "Butyl Tube Manufacturing",
        "Two-wheeler Manufacturing",
        "EV Three Wheeler Production",
        "100% EOU Dealer",
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-500",
      iconColor: "text-white",
      stats: "State-of-the-art",
      description: "Advanced manufacturing facilities with cutting-edge technology"
    },
  ];

  const stats = [
    { icon: Users, value: "50M+", label: "Customers Served", color: "bg-red-600" },
    { icon: Globe, value: "80+", label: "Countries", color: "bg-blue-600" },
    { icon: Target, value: "4", label: "Business Divisions", color: "bg-green-600" },
    { icon: Award, value: "43+", label: "Years Experience", color: "bg-purple-600" },
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

  return (
    <section
      id="business"
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
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
              OUR BUSINESS DIVISIONS
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diversified excellence across automotive manufacturing, retail, and global exports
          </p>
        </motion.div>

  

        {/* Manufacturing Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <img
              src={manufacturingImage}
              alt="Manufacturing Facility"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                  World-Class Manufacturing
                </h3>
                <p className="text-lg md:text-xl text-white/90 mb-6">
                  State-of-the-art facilities with cutting-edge technology and sustainable practices
                </p>
              
              </div>
            </div>
          </div>
        </motion.div>

        {/* Improved Division Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {divisions.map((division, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${division.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className="absolute inset-[1px] rounded-2xl bg-white" />
                </div>

                <div className="relative z-10">
                  {/* Icon and Stats */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl ${division.bgColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <division.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="px-3 py-1 bg-gray-100 rounded-full">
                      <span className="text-xs font-bold text-gray-700">{division.stats}</span>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                      {division.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {division.description}
                    </p>
                  </div>

                  {/* Services List */}
                  <div className="space-y-3">
                    {division.services.map((service, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700 leading-relaxed font-medium">
                          {service}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Explore Button */}
                
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

    
      </div>
    </section>
  );
};

export default Business;
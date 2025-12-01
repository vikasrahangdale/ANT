import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy, Star, Medal, Users, Target, Calendar, ArrowRight, Sparkles } from "lucide-react";

const Achievements = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const awards = [
    {
      title: "Excellence in Business 2012-2015",
      from: "Mr. Venu Srinivasan (CMD TVS Motor Company LTD)",
      category: "Two Wheelers",
      icon: Trophy,
      color: "from-red-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-red-500 to-orange-500",
      iconColor: "text-white",
      year: "2012-2015",
      glow: "hover:shadow-red-500/20"
    },
    {
      title: "Parts Performance 2012-2013",
      from: "Mr. K.N Radhakrishnan (President & CEO TVS Motor Company LTD)",
      category: "Parts Excellence",
      icon: Award,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-500",
      iconColor: "text-white",
      year: "2012-2013",
      glow: "hover:shadow-blue-500/20"
    },
    {
      title: "Parts Performance 2013-2014",
      from: "Sudarshan Venu Srinivasan (JMD TVS Motor Company LTD)",
      category: "Parts Excellence",
      icon: Medal,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-500",
      iconColor: "text-white",
      year: "2013-2014",
      glow: "hover:shadow-green-500/20"
    },
    {
      title: "Parts Performance 2014-2015",
      from: "Mr. K. N Radhakrishnan (President & CEO TVS Motor Company LTD)",
      category: "Parts Excellence",
      icon: Star,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-500",
      iconColor: "text-white",
      year: "2014-2015",
      glow: "hover:shadow-purple-500/20"
    },
    {
      title: "National No.1 CSL Performance 2014-2015",
      from: "Mr. K. N Radhakrishnan (President & CEO TVS Motor Company LTD)",
      category: "National Champion",
      icon: Trophy,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-500 to-orange-500",
      iconColor: "text-white",
      year: "2014-2015",
      glow: "hover:shadow-amber-500/20"
    },
  ];



  // Transform scroll progress to circle position
  const circleY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      ref={containerRef}
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
              AWARDS & RECOGNITION
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Celebrating excellence with 5 prestigious awards from TVS Motor Company at the MACAU 2015 Dealer Conference
          </p>
        </motion.div>

       

        {/* Timeline Section */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 via-orange-500 to-red-500 rounded-full hidden lg:block"></div>
          
          {/* Moving Circle */}
          <motion.div
            style={{ y: circleY }}
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-red-600 to-orange-600 rounded-full border-4 border-white shadow-xl z-10 hidden lg:flex items-center justify-center"
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </motion.div>

          {/* Timeline Cards */}
          <div className="space-y-1 lg:space-y-0">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Card Container */}
                <div className={`w-full ml-10 mr-10 lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-10' : 'lg:pl-10'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative bg-white rounded-2xl mb-[-60px] p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {/* Year Badge */}
                    <div className="absolute -top-2 left-6">
                      <div className="flex items-center gap-2 px-4 py-1 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-full shadow-lg">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        <span className="text-sm">{award.year}</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="pt-4">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl ${award.bgColor} flex items-center justify-center mb-4`}>
                        <award.icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>

                      {/* Category */}
                      <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mb-3">
                        {award.category}
                      </div>

                      {/* Presenter */}
                      <p className="text-gray-600 text-sm mb-4">{award.from}</p>

                      {/* TVS Logo Placeholder */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600 font-bold text-xs">TVS</span>
                        </div>
                        <span className="text-xs text-gray-500">TVS Motor Company</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Dot (Mobile) */}
                <div className="lg:hidden flex items-center justify-center my-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-red-600 to-orange-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Timeline Dot (Desktop) */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 bg-gradient-to-br from-red-600 to-orange-600 rounded-full border-4 border-white shadow-lg relative z-10">
                    <div className="absolute inset-0 animate-ping bg-red-600 rounded-full opacity-20"></div>
                  </div>
                </div>

                {/* Empty Space for alternating layout */}
                <div className="lg:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3  mt-2 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200">
            <Trophy className="w-5 h-5 text-red-600" />
            <span className="text-gray-700 font-medium">
              Awarded at MACAU 2015 Dealer Conference
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
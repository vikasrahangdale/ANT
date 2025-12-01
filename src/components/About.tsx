// components/About.tsx
import { motion } from "framer-motion";
import { Building2, Globe2, TrendingUp, Users, Target, Award, Clock, MapPin, ArrowRight, Star, Shield, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Clock, value: "43+", label: "Years of Excellence", suffix: "Years" },
    { icon: Globe2, value: "80+", label: "Countries Served", suffix: "Countries" },
    { icon: Users, value: "50M+", label: "Happy Customers", suffix: "Customers" },
    { icon: Building2, value: "4", label: "Business Divisions", suffix: "Divisions" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO certified manufacturing processes with rigorous quality checks at every stage",
      color: "bg-blue-500"
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "Continuous R&D and technology adoption for superior automotive solutions",
      color: "bg-orange-500"
    },
    {
      icon: Star,
      title: "Customer First",
      description: "50+ million satisfied customers worldwide with 98% satisfaction rate",
      color: "bg-yellow-500"
    },
    {
      icon: Target,
      title: "Global Standards",
      description: "Compliance with international quality and environmental standards",
      color: "bg-green-500"
    }
  ];
const journeyParagraphs = [
  {
    highlight: "Mr. Apoorv Asati & Mr. R. P. Asati",
    content:
      "The owner of the group is Mr. Apoorv Asati S/o Mr. R. P. Asati. The esteemed journey of the Attractive Group started in 1980, when the Group’s founder, Mr. R. P. Asati, father of Apoorv Asati, established a Valuation Consultancy Firm in Bhopal, thereafter TVS Dealership of Vehicles, characterizing the very beginning of the Group’s unfaltering success and prosperity."
  },
  {
    highlight: "43 Glorious Years",
    content:
      "The Group has completed 43 glorious years and today that single TVS showroom of 1997 has expanded into several various businesses. Industry pioneers in many cases, the Group has also established itself as one of the top business groups in Bhopal and Madhya Pradesh."
  },
  {
    highlight: "Business Diversification",
    content:
      "Opportunity is the window to the future and we are looking out of it. The Group has successfully diversified into areas that few players have ventured into; Plant Setup Consultancy is one such example. The Group has also ventured into a Tyre and Tubes manufacturing plant located at Mandideep near Bhopal in Central India."
  }
];


  return (
    <section
      id=""
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
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-gray-200 shadow-lg mb-8"
          >
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-gray-700 tracking-wider">
              ABOUT OUR LEGACY
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            About <span className="text-red-600">Attractive Group</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Building automotive excellence since 1997 with innovation, quality, and global reach
          </p>
        </motion.div>

        {/* Main Content - Leadership Cards First */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Leadership Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Industry Leadership Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black">Industry Leadership</h4>
                    <p className="text-red-400 text-sm font-semibold">Since 1980</p>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed font-medium mb-6">
                  Pioneers in automotive spare parts manufacturing and export, serving 80+ countries worldwide with an unwavering commitment to quality and innovation.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-white/80">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-sm font-medium">Global Standards</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-sm font-medium">Quality First</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-sm font-medium">Innovation</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-sm font-medium">Sustainability</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Global Presence Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 text-white overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-16 -translate-x-16 opacity-10"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Globe2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black">Global Presence</h4>
                    <p className="text-white/80 text-sm font-semibold">80+ Countries</p>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed font-medium mb-6">
                  From a single TVS dealership to a multi-business empire spanning manufacturing, export, and retail operations across multiple continents.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">Worldwide</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <span className="font-semibold">5 Awards</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        
            <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-1"
        >
          <div className="space-y-4 mb-1">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900">
              Our <span className="text-red-600">Journey</span>
            </h3>
            <div className="w-20 h-1 bg-red-600 rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            {journeyParagraphs.map((paragraph, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative  rounded-2xl p-1  transition-all duration-500 hover:border-red-200"
              >
                <div className="flex items-start gap-4">
                  <p className="text-gray-700 leading-relaxed font-medium text-lg">
                    {paragraph.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Why Choose <span className="text-red-600">Attractive Group</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence sets us apart in the automotive industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-black text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      
      </div>
    </section>
  );
};

export default About;
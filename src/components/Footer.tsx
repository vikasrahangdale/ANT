import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              ATTRACTIVE GROUP
            </h3>
            <p className="text-white/80 leading-relaxed font-light text-lg">
              Leading the automotive industry since 1997 with innovation, quality, and global excellence in every vehicle.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <p className="text-sm font-bold text-white">No Dream, Too Big</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {["Overview", " Compnay Vision", "Business Divisions", "Leadership", "Achievements"].map((item, index) => (
                <li key={item}>
                  <motion.a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white/80 hover:text-white transition-all duration-300 flex items-center gap-3 group font-medium"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-6 transition-all duration-300" />
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 group">
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-white/20"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </motion.div>
                <span className="text-white/80 leading-relaxed font-medium pt-2">
                  Bhopal, Madhya Pradesh, India
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-white/20"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Phone className="w-5 h-5 text-blue-400" />
                </motion.div>
                <span className="text-white/80 font-medium">+91-82695 59677</span>
              </li>
              <li className="flex items-center gap-4 group">
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-white/20"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail className="w-5 h-5 text-purple-400" />
                </motion.div>
                <span className="text-white/80 font-medium">info@attractivegroup.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Media & CTA */}
        <motion.div variants={itemVariants} className="space-y-6">
  <div>
    <h4 className="text-xl font-bold mb-6 text-white">Follow Us</h4>

    <div className="flex gap-3">
      {[
        { Icon: Facebook, color: "text-blue-400", link: "https://www.facebook.com/profile.php?id=61566779990010" },
        { Icon: Twitter, color: "text-cyan-400", link: "" },
        { Icon: Linkedin, color: "text-blue-500", link: "https://linkedin.com" },
        { Icon: Instagram, color: "text-purple-400", link: "https://www.instagram.com/attractivegroupofficial/" }
      ].map(({ Icon, color, link }, i) => (
        <motion.a
          key={i}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 group"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon className={`w-5 h-5 ${color} group-hover:scale-110 transition-transform duration-300`} />
        </motion.a>
      ))}
    </div>
  </div>

  {/* Back to Top Button */}
  <motion.button
    onClick={scrollToTop}
    className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
    Back to Top
  </motion.button>
</motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-white/80 font-medium">
              <span>© 2025 Attractive Group. All rights reserved.</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 fill-red-500 text-red-500" /> Since 1997
              </span>
            </div>
            <div className="flex gap-8 text-sm">
              <motion.a 
                href="#" 
                className="text-white/80 hover:text-white transition-colors relative group font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-white/80 hover:text-white transition-colors relative group font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
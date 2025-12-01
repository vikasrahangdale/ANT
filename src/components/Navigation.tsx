// components/Navigation.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Overview", href: "#overview" },
    { name: "Company Vision", href: "#mission" },
    { name: "Business", href: "#business" },
    { name: "Leadership", href: "#leadership" },
    { name: "Achievements", href: "#achievements" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white backdrop-blur-lg"
          : "bg-black text-black"
      }`}
    >
      <div className="container mx-auto ">
        <div className="flex items-center justify-between h-20">
         <motion.img
  src="/hero-logo.png"
  alt="Company Logo"
  className={`h-20 md:h-45 cursor-pointer transition-all duration-300 ${
    isScrolled ? "brightness-100" : "brightness-200"
  }`}
  whileHover={{ scale: 1.05 }}
/>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`relative font-medium transition-colors ${
                  isScrolled 
                    ? "text-gray-700 hover:text-red-600" 
                    : "text-white  text-md font-semibold hover:text-red-400"
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium"
            >
              <Phone className="w-4 h-4" />
              9522255442
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-lg ${
                isScrolled 
                  ? "hover:bg-gray-100 text-gray-700" 
                  : "hover:bg-white/10 text-white"
              } transition-colors duration-300`}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            className="lg:hidden pb-6 bg-white rounded-2xl mt-2 shadow-xl border border-gray-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-3 px-6 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <button
              className="w-full mt-4 mx-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-300"
            >
              Contact Us
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
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
          ? "bg-white backdrop-blur-lg shadow-sm"
          : "bg-black"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Made larger for mobile */}
          <motion.img
            src="/hero-logo.png"
            alt="Company Logo"
            className={`h-16 sm:h-20 md:h-24 lg:h-40 cursor-pointer transition-all duration-300 ${
              isScrolled ? "brightness-100" : "brightness-200"
            }`}
            whileHover={{ scale: 1.05 }}
          />

          {/* Desktop Navigation - NO CHANGES */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`relative font-medium transition-colors ${
                  isScrolled 
                    ? "text-gray-700 hover:text-red-600" 
                    : "text-white text-md font-semibold hover:text-red-400"
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
           
          </div>

          {/* Mobile menu button ONLY - No call button */}
          <div className="lg:hidden flex items-center">
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
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation - Optimized for mobile */}
        {isOpen && (
          <motion.div 
            className="lg:hidden bg-white rounded-xl shadow-xl border border-gray-200 mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="py-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-4 px-6 text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all font-medium text-base border-b border-gray-100 last:border-b-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Mobile contact section - Only in dropdown */}
            <div className="p-5 border-t border-gray-100 bg-gray-50 rounded-b-xl">
              <a
                href="tel:9522255442"
                className="flex items-center justify-center gap-3 w-full py-4 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-300 text-base"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-5 h-5" />
                Call: 9522255442
              </a>
              <p className="text-center text-gray-500 text-sm mt-3">
                Available 24/7
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
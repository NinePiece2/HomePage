"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import { Link } from "react-scroll";

interface NavLink {
  name: string;
  to: string;
  id: string;
}

interface MobileNavProps {
  isNavOpen: boolean;
  setIsNavOpen: (isOpen: boolean) => void;
  activeSection: string;
  navLinks: NavLink[];
}

const MobileNav: React.FC<MobileNavProps> = ({
  isNavOpen,
  setIsNavOpen,
  activeSection,
  navLinks,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const slideVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };

  return (
    <AnimatePresence>
      {isNavOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            onClick={() => setIsNavOpen(false)}
          />

          {/* Nav Drawer */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 z-[100] w-full max-w-sm bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] shadow-2xl md:hidden overflow-y-auto"
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex justify-between items-center p-6 border-b border-gray-800/50 bg-gradient-to-b from-[#1a1a1a] to-transparent">
              <Link
                to="hero"
                spy
                smooth
                duration={500}
                onClick={() => setIsNavOpen(false)}
                className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-400 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity"
              >
                Romit Sagu
              </Link>
              <motion.button
                onClick={() => setIsNavOpen(false)}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Navigation Links */}
            <nav className="px-6 py-8">
              <motion.ul
                className="flex flex-col space-y-2"
                initial="hidden"
                animate="visible"
              >
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.id}
                    custom={index}
                    variants={linkVariants}
                  >
                    <Link
                      to={link.to}
                      spy
                      smooth
                      duration={500}
                      onClick={() => setIsNavOpen(false)}
                      className={`block px-4 py-3 text-lg font-semibold rounded-lg transition-all duration-200 cursor-pointer relative group ${
                        activeSection === link.id
                          ? "text-emerald-400"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      <span className="relative z-10">{link.name}</span>
                      {/* Active indicator line */}
                      {activeSection === link.id && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                          layoutId="activeIndicator"
                          transition={{ type: "spring", bounce: 0.2 }}
                        />
                      )}
                      {/* Hover background */}
                      <div className="absolute inset-0 bg-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10" />
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            {/* Divider */}
            <div className="mx-6 h-px bg-gradient-to-r from-gray-800/0 via-gray-800 to-gray-800/0" />

            {/* Resume Button */}
            <div className="p-6">
              <motion.a
                href="/Resume"
                custom={navLinks.length}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                className="w-full px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Resume
                <Download size={18} />
              </motion.a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;

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
}) => (
  <AnimatePresence>
    {isNavOpen && (
      <motion.div
        className="fixed inset-0 z-[100] bg-[#151515] p-6 md:hidden"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center mb-12">
          <Link
            to="hero"
            spy
            smooth
            duration={500}
            onClick={() => setIsNavOpen(false)}
            className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-400 bg-clip-text text-transparent cursor-pointer"
          >
            Romit Sagu
          </Link>
          <button
            onClick={() => setIsNavOpen(false)}
            className="p-2 text-gray-400"
          >
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col space-y-6 text-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.to}
                spy
                smooth
                duration={500}
                onClick={() => setIsNavOpen(false)}
                className={`text-2xl font-semibold text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer ${activeSection === link.id ? "text-emerald-500" : ""}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/Resume"
              className="px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-transform mt-4"
            >
              Resume <Download size={18} />
            </a>
          </li>
        </ul>
      </motion.div>
    )}
  </AnimatePresence>
);

export default MobileNav;

"use client";

import { Download } from "lucide-react";
import { Link } from "react-scroll";

interface NavLink {
  name: string;
  to: string;
  id: string;
}

interface NavbarProps {
  activeSection: string;
  navLinks: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, navLinks }) => (
  <nav className="fixed w-full z-50 bg-[#151515]/80 backdrop-blur-md top-0">
    <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-12">
      <Link to="hero" spy smooth duration={500} className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-400 bg-clip-text text-transparent cursor-pointer">Romit Sagu</Link>
      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            to={link.to}
            spy
            smooth
            duration={500}
            className={`cursor-pointer transition-colors ${
              activeSection === link.id
                ? "text-emerald-500 font-semibold"
                : "text-gray-400 hover:text-emerald-400"
            }`}
          >
            {link.name}
          </Link>
        ))}
        <a href="/Resume" className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
          Resume <Download size={16} />
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;